/**
 * Facebook Pixel Integration for BD Matrix
 * 
 * SETUP: Replace 'YOUR_PIXEL_ID' with your actual Facebook Pixel ID
 * Get your Pixel ID from: https://business.facebook.com/events_manager
 */

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'YOUR_PIXEL_ID';

/**
 * Initialize Facebook Pixel
 * Called once on app load
 */
export const pageview = () => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
    }
};

/**
 * Track custom events
 * @param {string} name - Event name (e.g., 'Lead', 'Contact', 'ViewContent')
 * @param {object} options - Additional event parameters
 */
export const event = (name, options = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', name, options);
    }
};

/**
 * Track Lead event - Use when contact form is submitted
 * @param {object} data - Lead data (e.g., { content_name: 'Contact Form' })
 */
export const trackLead = (data = {}) => {
    event('Lead', {
        content_name: 'Contact Form Submission',
        ...data,
    });
};

/**
 * Track Contact event - Use when user initiates contact
 */
export const trackContact = () => {
    event('Contact');
};

/**
 * Track ViewContent event - Use on service/portfolio pages
 * @param {string} contentName - Name of the content being viewed
 * @param {string} contentType - Type of content (e.g., 'service', 'portfolio')
 */
export const trackViewContent = (contentName, contentType = 'page') => {
    event('ViewContent', {
        content_name: contentName,
        content_type: contentType,
    });
};
