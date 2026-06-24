/**
 * Email Template Generator
 *
 * Generates professional HTML and plain text email templates
 * for lead notifications from the BD Matrix contact form.
 */

/**
 * Parses service_type to detect product inquiry format ("ProductName — InquiryType")
 */
function parseServiceType(serviceType) {
    if (serviceType && serviceType.includes(' — ')) {
        const [productName, inquiryType] = serviceType.split(' — ');
        return { isProduct: true, productName: productName.trim(), inquiryType: inquiryType.trim() };
    }
    return { isProduct: false, productName: null, inquiryType: null };
}

/**
 * Generates HTML email template for lead notifications
 * @param {Object} leadData - Lead information from contact form
 * @returns {string} HTML email content
 */
export function generateLeadEmailHTML(leadData) {
    const {
        name,
        email,
        phone,
        service_type,
        budget,
        timeline,
        message,
        ip_address,
        timestamp,
        id
    } = leadData;

    const { isProduct, productName, inquiryType } = parseServiceType(service_type);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead from BD Matrix Website</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #05DAC3 0%, #0EA5E9 100%); padding: 30px; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                ${isProduct ? '🚀 Product Inquiry from BD Matrix Website' : '🎯 New Lead from BD Matrix Website'}
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              ${isProduct ? `
              <!-- Product Inquiry Banner -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%); border: 1px solid #BFDBFE; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #1D4ED8;">Product Inquiry</p>
                    <p style="margin: 0 0 4px 0; font-size: 18px; font-weight: 700; color: #0F172A;">${productName}</p>
                    <p style="margin: 0; font-size: 14px; color: #475569;">Inquiry Type: <strong>${inquiryType}</strong></p>
                  </td>
                </tr>
              </table>
              ` : ''}
              <p style="margin: 0 0 20px 0; font-size: 16px; color: #333333;">
                A new ${isProduct ? 'product demo request' : 'contact form submission'} has been received from your website.
              </p>

              <!-- Lead Information -->
              <table width="100%" cellpadding="12" cellspacing="0" style="border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 20px;">
                <tr style="background-color: #f9f9f9;">
                  <td colspan="2" style="padding: 15px; border-bottom: 2px solid #05DAC3;">
                    <h2 style="margin: 0; font-size: 18px; color: #333333;">Contact Details</h2>
                  </td>
                </tr>
                <tr>
                  <td style="width: 30%; padding: 12px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #555555;">
                    Name:
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #333333;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #555555;">
                    Email:
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                    <a href="mailto:${email}" style="color: #0EA5E9; text-decoration: none;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #555555;">
                    Phone:
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                    <a href="tel:${phone}" style="color: #0EA5E9; text-decoration: none;">
                      ${phone}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #555555;">
                    ${isProduct ? 'Product:' : 'Service Type:'}
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #333333;">
                    ${isProduct
                        ? `<span style="background-color: #1D4ED8; color: #ffffff; padding: 4px 12px; border-radius: 4px; font-size: 14px;">${productName}</span>
                           <span style="margin-left: 8px; background-color: #E0E7FF; color: #3730A3; padding: 4px 12px; border-radius: 4px; font-size: 14px;">${inquiryType}</span>`
                        : `<span style="background-color: #05DAC3; color: #ffffff; padding: 4px 12px; border-radius: 4px; font-size: 14px;">${formatServiceType(service_type)}</span>`
                    }
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #555555;">
                    Budget:
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #333333;">
                    ${budget || 'Not specified'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; font-weight: 600; color: #555555;">
                    Timeline:
                  </td>
                  <td style="padding: 12px; border-bottom: 1px solid #e0e0e0; color: #333333;">
                    ${timeline || 'Not specified'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: 600; color: #555555; vertical-align: top;">
                    Message:
                  </td>
                  <td style="padding: 12px; color: #333333;">
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap; word-wrap: break-word;">
${message}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Metadata -->
              <table width="100%" cellpadding="10" cellspacing="0" style="background-color: #f9f9f9; border-radius: 6px; margin-top: 20px;">
                <tr>
                  <td style="font-size: 13px; color: #666666;">
                    <strong>Submission ID:</strong> ${id}<br>
                    <strong>Timestamp:</strong> ${new Date(timestamp).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    })}<br>
                    <strong>IP Address:</strong> ${ip_address}
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Re: Your inquiry to BD Matrix" 
                   style="display: inline-block; background: linear-gradient(135deg, #05DAC3 0%, #0EA5E9 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  Reply to Lead
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; font-size: 14px; color: #666666;">
                <strong>BD Matrix</strong> - Enterprise Software Solutions<br>
                <a href="http://bdmatrix.org" style="color: #0EA5E9; text-decoration: none;">bdmatrix.org</a> | 
                <a href="https://www.instagram.com/bdmatrix1" style="color: #0EA5E9; text-decoration: none;">Instagram</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generates plain text email template for lead notifications
 * @param {Object} leadData - Lead information from contact form
 * @returns {string} Plain text email content
 */
export function generateLeadEmailPlainText(leadData) {
    const {
        name,
        email,
        phone,
        service_type,
        budget,
        timeline,
        message,
        ip_address,
        timestamp,
        id
    } = leadData;

    const { isProduct, productName, inquiryType } = parseServiceType(service_type);

    return `
${isProduct ? 'PRODUCT INQUIRY FROM BD MATRIX WEBSITE' : 'NEW LEAD FROM BD MATRIX WEBSITE'}
================================
${isProduct ? `\nPRODUCT: ${productName}\nINQUIRY TYPE: ${inquiryType}\n` : ''}
A new ${isProduct ? 'product demo request' : 'contact form submission'} has been received from your website.

CONTACT DETAILS
---------------
Name:         ${name}
Email:        ${email}
Phone:        ${phone}
${isProduct
    ? `Product:      ${productName}\nInquiry Type: ${inquiryType}`
    : `Service Type: ${formatServiceType(service_type)}`
}
Budget:       ${budget || 'Not specified'}
Timeline:     ${timeline || 'Not specified'}

MESSAGE
-------
${message}

SUBMISSION METADATA
-------------------
Submission ID: ${id}
Timestamp:     ${new Date(timestamp).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    })}
IP Address:    ${ip_address}

---
BD Matrix - Enterprise Software Solutions
Website: http://bdmatrix.org
Instagram: https://www.instagram.com/bdmatrix1
  `.trim();
}

/**
 * Formats service type for display
 * @param {string} serviceType - Service type code
 * @returns {string} Formatted service type
 */
function formatServiceType(serviceType) {
    const serviceTypes = {
        'crm': 'CRM Software Development',
        'erp': 'ERP System Development',
        'pos': 'POS System Development',
        'landing-site': 'Landing Site / Web Development',
        'saas': 'SaaS Platform Development',
        'mobile-app': 'Mobile App Development',
        'other': 'Other / Consulting'
    };

    return serviceTypes[serviceType] || serviceType;
}
