/**
 * POST /api/contact/submit
 * 
 * Submit contact form data
 * 
 * TEMPORARY VERSION FOR VERCEL:
 * - better-sqlite3 doesn't work on Vercel serverless
 * - Logs submissions to Vercel function logs
 * - Returns success to user
 * - TODO: Migrate to Vercel Postgres or Vercel KV
 * 
 * Request body:
 * {
 *   name: string (required, max 100 chars)
 *   email: string (required, valid email, max 100 chars)
 *   service_type: string (required, max 100 chars)
 *   phone: string (required, max 20 chars)
 *   budget: string (optional, predefined values)
 *   timeline: string (optional, predefined values)
 *   message: string (required, max 2000 chars)
 * }
 * 
 * Response (200):
 * { success: true, message: 'Thank you! Your message has been sent successfully', id: string }
 * 
 * Response (400):
 * { success: false, message: 'Validation error', errors: { field: 'error message' } }
 * 
 * Response (500):
 * { success: false, message: 'Server error' }
 */

const { validateContactForm } = require('../../../lib/validation');
const { sanitizeContactForm } = require('../../../lib/sanitization');

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
            'unknown';

        // Generate unique ID for this submission
        const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        // TEMPORARY: Log to Vercel function logs
        // You can view these in Vercel Dashboard → Deployments → [deployment] → Functions
        const submissionData = {
            id: submissionId,
            timestamp: new Date().toISOString(),
            name: sanitizedData.name,
            email: sanitizedData.email,
            phone: sanitizedData.phone,
            service_type: sanitizedData.service_type,
            budget: sanitizedData.budget || 'Not specified',
            timeline: sanitizedData.timeline || 'Not specified',
            message: sanitizedData.message,
            ip_address: ipAddress,
        };

        // Log to Vercel (this data is searchable in Vercel logs)
        console.log('=== NEW CONTACT FORM SUBMISSION ===');
        console.log(JSON.stringify(submissionData, null, 2));
        console.log('===================================');

        const duration = Date.now() - startTime;

        // Log success
        console.log(`[API] Contact form logged successfully (ID: ${submissionId}, Duration: ${duration}ms)`);

        // Return success response
        return res.status(200).json({
            success: true,
            message: 'Thank you! Your message has been sent successfully',
            id: submissionId,
            __temp_note: 'Using temporary console logging. Submissions visible in Vercel logs.',
        });

    } catch (error) {
        // Log error for debugging
        console.error('[API] Contact form submission error:', error);
        console.error('Error stack:', error.stack);

        // Return generic error to client (don't expose internals)
        return res.status(500).json({
            success: false,
            message: 'Unable to send message. Please try again later.',
        });
    }
}
