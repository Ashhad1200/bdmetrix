/**
 * Email Service Module
 * 
 * Handles sending email notifications using Resend API.
 * Used for sending lead notifications from the BD Matrix contact form.
 */

const { Resend } = require('resend');
const { generateLeadEmailHTML, generateLeadEmailPlainText } = require('./email-template');

/**
 * Initialize Resend client
 * Uses RESEND_API_KEY from environment variables
 */
function getResendClient() {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.warn('[Email Service] RESEND_API_KEY not configured. Email notifications disabled.');
        return null;
    }

    return new Resend(apiKey);
}

/**
 * Send lead notification email
 * 
 * @param {Object} leadData - Lead information from contact form
 * @param {string} leadData.name - Lead's name
 * @param {string} leadData.email - Lead's email
 * @param {string} leadData.phone - Lead's phone number
 * @param {string} leadData.service_type - Service type requested
 * @param {string} leadData.budget - Budget range (optional)
 * @param {string} leadData.timeline - Project timeline (optional)
 * @param {string} leadData.message - Lead's message
 * @param {string} leadData.ip_address - Client IP address
 * @param {string} leadData.timestamp - Submission timestamp
 * @param {string} leadData.id - Submission ID
 * 
 * @returns {Promise<Object>} Email send result
 */
async function sendLeadNotification(leadData) {
    const resend = getResendClient();

    // If Resend is not configured, log warning and return
    if (!resend) {
        console.warn('[Email Service] Skipping email notification - Resend not configured');
        return {
            success: false,
            error: 'Email service not configured',
            skipped: true
        };
    }

    try {
        // Get email configuration from environment
        const emailFrom = process.env.EMAIL_FROM || 'onboarding@resend.dev';
        const emailTo = process.env.EMAIL_TO || 'support@bdmatrix.org';

        console.log('[Email Service] Preparing to send email:', {
            from: emailFrom,
            to: emailTo,
            leadName: leadData.name,
            submissionId: leadData.id
        });

        // Generate email content
        const htmlContent = generateLeadEmailHTML(leadData);
        const textContent = generateLeadEmailPlainText(leadData);

        // Send email via Resend
        console.log('[Email Service] Calling Resend API...');
        const result = await resend.emails.send({
            from: emailFrom,
            to: emailTo,
            subject: `New Lead: ${leadData.name} - ${leadData.service_type}`,
            html: htmlContent,
            text: textContent,
            // Add reply-to header for easy response
            reply_to: leadData.email,
            // Add tags for tracking
            tags: [
                { name: 'type', value: 'lead_notification' },
                { name: 'service', value: leadData.service_type }
            ]
        });

        // Log the FULL response from Resend
        console.log('[Email Service] Resend API full response:', JSON.stringify(result, null, 2));

        // Check if result has 'data' property (Resend v3+)
        const emailId = result?.data?.id || result?.id;

        console.log('[Email Service] Lead notification sent successfully:', {
            id: emailId,
            to: emailTo,
            leadName: leadData.name,
            submissionId: leadData.id,
            fullResult: result
        });

        return {
            success: true,
            emailId: emailId,
            to: emailTo
        };

    } catch (error) {
        console.error('[Email Service] Failed to send lead notification:', {
            error: error.message,
            stack: error.stack,
            leadId: leadData.id,
            leadEmail: leadData.email,
            errorName: error.name,
            fullError: JSON.stringify(error, Object.getOwnPropertyNames(error))
        });

        return {
            success: false,
            error: error.message
        };
    }
}

module.exports = {
    sendLeadNotification
};
