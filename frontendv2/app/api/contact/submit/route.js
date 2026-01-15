import { NextResponse } from 'next/server';
import { validateContactForm } from '../../../../src/lib/validation';
import { sanitizeContactForm } from '../../../../src/lib/sanitization';
import { sendLeadNotification } from '../../../../src/lib/email-service';

/**
 * POST /api/contact/submit
 * 
 * Submit contact form data
 */
export async function POST(request) {
    try {
        const startTime = Date.now();

        // Extract form data from request body
        const formData = await request.json();

        // Validate form data
        const validation = validateContactForm(formData);
        if (!validation.isValid) {
            return NextResponse.json({
                success: false,
                message: 'Validation error. Please check your input.',
                errors: validation.errors,
            }, { status: 400 });
        }

        // Sanitize input to prevent XSS attacks
        const sanitizedData = sanitizeContactForm(formData);

        // Get client IP address for spam prevention
        const forwardedFor = request.headers.get('x-forwarded-for');
        const ipAddress = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

        // Generate unique ID for this submission
        const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        // Prepare submission data
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

        // Log to console (backup method)
        console.log('=== NEW CONTACT FORM SUBMISSION ===');
        console.log(JSON.stringify(submissionData, null, 2));
        console.log('===================================');

        // Send email notification (non-blocking)
        // If email fails, we still return success to user
        let emailStatus = { sent: false };
        try {
            const emailResult = await sendLeadNotification(submissionData);

            if (emailResult.success) {
                emailStatus = {
                    sent: true,
                    emailId: emailResult.emailId,
                    to: emailResult.to
                };
                console.log('[API] Email notification sent successfully:', emailResult.emailId);
            } else if (emailResult.skipped) {
                console.log('[API] Email notification skipped - service not configured');
            } else {
                console.warn('[API] Email notification failed:', emailResult.error);
            }
        } catch (emailError) {
            // Log email error but don't fail the request
            console.error('[API] Email notification error:', emailError.message);
        }

        const duration = Date.now() - startTime;

        // Log success
        console.log(`[API] Contact form processed successfully (ID: ${submissionId}, Duration: ${duration}ms, Email: ${emailStatus.sent ? 'sent' : 'not sent'})`);

        // Return success response
        return NextResponse.json({
            success: true,
            message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
            id: submissionId,
            emailSent: emailStatus.sent
        });

    } catch (error) {
        // Log error for debugging
        console.error('[API] Contact form submission error:', error);
        console.error('Error stack:', error.stack);

        // Return generic error to client (don't expose internals)
        return NextResponse.json({
            success: false,
            message: 'Unable to send message. Please try again later.',
        }, { status: 500 });
    }
}
