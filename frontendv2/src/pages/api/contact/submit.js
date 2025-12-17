/**
 * POST /api/contact/submit
 * 
 * Submit contact form data and store in database
 * 
 * Request body:
 * {
 *   name: string (required, max 100 chars)
 *   email: string (required, valid email, max 100 chars)
 *   service_type: string (required, max 100 chars)
 *   phone: string (required, max 20 chars)
 *   message: string (required, max 2000 chars)
 * }
 * 
 * Response (200):
 * { success: true, message: 'Thank you! Your message has been sent successfully', id: number }
 * 
 * Response (400):
 * { success: false, message: 'Validation error', errors: { field: 'error message' } }
 * 
 * Response (500):
 * { success: false, message: 'Server error' }
 */

const { validateContactForm } = require('../../../lib/validation');
const { sanitizeContactForm } = require('../../../lib/sanitization');
const { insertSubmission } = require('../../../lib/db');

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed. Please use POST.'
        });
    }

    try {
        const startTime = Date.now();

        // Extract form data from request body
        const formData = req.body;

        // Validate form data
        const validation = validateContactForm(formData);
        if (!validation.isValid) {
            return res.status(400).json({
                success: false,
                message: 'Validation error. Please check your input.',
                errors: validation.errors,
            });
        }

        // Sanitize input to prevent XSS attacks
        const sanitizedData = sanitizeContactForm(formData);

        // Get client IP address for spam prevention
        const ipAddress =
            req.headers['x-forwarded-for']?.split(',')[0] ||
            req.headers['x-real-ip'] ||
            req.connection?.remoteAddress ||
            req.socket?.remoteAddress ||
            null;

        // Insert into database
        const submission = insertSubmission({
            ...sanitizedData,
            ip_address: ipAddress,
        });

        const duration = Date.now() - startTime;

        // Log successful submission
        console.log(`[API] Contact form submitted successfully (ID: ${submission.id}, Duration: ${duration}ms)`);

        // Return success response
        return res.status(200).json({
            success: true,
            message: 'Thank you! Your message has been sent successfully',
            id: submission.id,
        });

    } catch (error) {
        // Log error for debugging
        console.error('[API] Contact form submission error:', error);

        // Return generic error to client (don't expose internals)
        return res.status(500).json({
            success: false,
            message: 'Unable to send message. Please try again later.',
        });
    }
}
