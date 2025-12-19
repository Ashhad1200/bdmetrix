/**
 * Input sanitization utilities for XSS prevention
 * Uses sanitize-html library to clean user input
 * 
 * @module lib/sanitization
 */

const sanitizeHtml = require('sanitize-html');

/**
 * Sanitize user input to prevent XSS attacks
 * Removes all HTML tags and potentially dangerous content
 * 
 * @param {string} input - Raw user input
 * @returns {string} Sanitized text-only output
 */
function sanitizeInput(input) {
    if (!input || typeof input !== 'string') {
        return '';
    }

    // Strip all HTML tags and return plain text only
    return sanitizeHtml(input, {
        allowedTags: [], // No HTML tags allowed
        allowedAttributes: {}, // No attributes allowed
        disallowedTagsMode: 'discard', // Remove disallowed tags completely
    });
}

/**
 * Sanitize contact form data
 * Applies sanitization to all text fields
 * 
 * @param {Object} data - Form data to sanitize
 * @param {string} data.name - Contact name
 * @param {string} data.email - Contact email
 * @param {string} data.service_type - Service type
 * @param {string} data.phone - Phone number
 * @param {string} data.budget - Budget range (optional)
 * @param {string} data.timeline - Project timeline (optional)
 * @param {string} data.message - Message content
 * @returns {Object} Sanitized form data
 */
function sanitizeContactForm(data) {
    return {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        service_type: sanitizeInput(data.service_type),
        phone: sanitizeInput(data.phone),
        budget: data.budget ? sanitizeInput(data.budget) : '',
        timeline: data.timeline ? sanitizeInput(data.timeline) : '',
        message: sanitizeInput(data.message),
    };
}

/**
 * Escape HTML entities for safe display
 * Additional layer of protection when rendering user content
 * 
 * @param {string} text - Text to escape
 * @returns {string} HTML-escaped text
 */
function escapeHtml(text) {
    if (!text || typeof text !== 'string') {
        return '';
    }

    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };

    return text.replace(/[&<>"']/g, (char) => map[char]);
}

module.exports = {
    sanitizeInput,
    sanitizeContactForm,
    escapeHtml,
};
