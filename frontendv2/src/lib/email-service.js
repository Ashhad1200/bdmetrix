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
 */
function getResendClient() {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        if (process.env.NODE_ENV === 'development') {
            console.warn('[Email Service] RESEND_API_KEY not configured. Email notifications disabled.');
        }
        return null;
    }

    return new Resend(apiKey);
}

/**
 * Send lead notification email
 */
async function sendLeadNotification(leadData) {
    const resend = getResendClient();

    if (!resend) {
        if (process.env.NODE_ENV === 'development') {
            console.warn('[Email Service] Skipping email notification - Resend not configured');
        }
        return {
            success: false,
            error: 'Email service not configured',
            skipped: true
        };
    }

    try {
        const emailFrom = process.env.EMAIL_FROM || 'onboarding@resend.dev';
        const emailTo = process.env.EMAIL_TO || 'support@bdmatrix.org';

        if (process.env.NODE_ENV === 'development') {
            console.log('[Email Service] Preparing to send email:', {
                from: emailFrom,
                to: emailTo,
                leadName: leadData.name,
                submissionId: leadData.id
            });
        }

        const htmlContent = generateLeadEmailHTML(leadData);
        const textContent = generateLeadEmailPlainText(leadData);

        if (process.env.NODE_ENV === 'development') {
            console.log('[Email Service] Calling Resend API...');
        }

        const result = await resend.emails.send({
            from: emailFrom,
            to: emailTo,
            subject: `New Lead: ${leadData.name} - ${leadData.service_type}`,
            html: htmlContent,
            text: textContent,
            reply_to: leadData.email,
            tags: [
                { name: 'type', value: 'lead_notification' },
                {
                    name: 'service',
                    value: leadData.service_type
                        .replace(/\s+/g, '-')
                        .replace(/[^a-zA-Z0-9_-]/g, '')
                        .toLowerCase()
                }
            ]
        });

        if (process.env.NODE_ENV === 'development') {
            console.log('[Email Service] Resend API full response:', JSON.stringify(result, null, 2));
        }

        if (result?.error) {
            if (process.env.NODE_ENV === 'development') {
                console.error('[Email Service] Resend API returned error:', {
                    errorMessage: result.error.message,
                    errorCode: result.error.statusCode,
                    errorName: result.error.name,
                    leadId: leadData.id
                });
            }

            return {
                success: false,
                error: result.error.message || 'Email sending failed',
                errorDetails: result.error
            };
        }

        const emailId = result?.data?.id || result?.id;

        if (!emailId) {
            if (process.env.NODE_ENV === 'development') {
                console.error('[Email Service] No email ID returned from Resend:', result);
            }
            return {
                success: false,
                error: 'No email ID returned from Resend API'
            };
        }

        if (process.env.NODE_ENV === 'development') {
            console.log('[Email Service] Lead notification sent successfully:', {
                id: emailId,
                to: emailTo,
                leadName: leadData.name,
                submissionId: leadData.id
            });
        }

        return {
            success: true,
            emailId: emailId,
            to: emailTo
        };

    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error('[Email Service] Failed to send lead notification:', {
                error: error.message,
                stack: error.stack,
                leadId: leadData.id,
                leadEmail: leadData.email,
                errorName: error.name,
                fullError: JSON.stringify(error, Object.getOwnPropertyNames(error))
            });
        }

        return {
            success: false,
            error: error.message
        };
    }
}

module.exports = {
    sendLeadNotification
};