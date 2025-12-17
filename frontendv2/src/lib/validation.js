/**
 * Input validation utilities for contact form
 * Uses validator library for robust validation
 * 
 * @module lib/validation
 */

const validator = require('validator');

/**
 * Validation error class
 */
class ValidationError extends Error {
    constructor(message, field = null) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

/**
 * Field length constraints (matches spec.md FR-009)
 */
const FIELD_CONSTRAINTS = {
    name: { min: 1, max: 100 },
    email: { min: 3, max: 100 },
    phone: { min: 1, max: 20 },
    message: { min: 1, max: 2000 },
    service_type: { min: 1, max: 100 },
};

/**
 * Validate contact form submission data
 * 
 * @param {Object} data - Form data to validate
 * @param {string} data.name - Contact name
 * @param {string} data.email - Contact email
 * @param {string} data.service_type - Service type
 * @param {string} data.phone - Phone number
 * @param {string} data.message - Message content
 * @returns {Object} Validation result with success flag and errors
 */
function validateContactForm(data) {
    const errors = {};

    // Validate name
    if (!data.name || typeof data.name !== 'string') {
        errors.name = 'Name is required';
    } else if (data.name.trim().length === 0) {
        errors.name = 'Name cannot be empty';
    } else if (data.name.length > FIELD_CONSTRAINTS.name.max) {
        errors.name = `Name must not exceed ${FIELD_CONSTRAINTS.name.max} characters`;
    }

    // Validate email
    if (!data.email || typeof data.email !== 'string') {
        errors.email = 'Email is required';
    } else if (!validator.isEmail(data.email)) {
        errors.email = 'Please enter a valid email address';
    } else if (data.email.length > FIELD_CONSTRAINTS.email.max) {
        errors.email = `Email must not exceed ${FIELD_CONSTRAINTS.email.max} characters`;
    }

    // Validate service_type
    if (!data.service_type || typeof data.service_type !== 'string') {
        errors.service_type = 'Service type is required';
    } else if (data.service_type.trim().length === 0) {
        errors.service_type = 'Service type cannot be empty';
    } else if (data.service_type.length > FIELD_CONSTRAINTS.service_type.max) {
        errors.service_type = `Service type must not exceed ${FIELD_CONSTRAINTS.service_type.max} characters`;
    }

    // Validate phone
    if (!data.phone || typeof data.phone !== 'string') {
        errors.phone = 'Phone number is required';
    } else if (data.phone.trim().length === 0) {
        errors.phone = 'Phone number cannot be empty';
    } else if (data.phone.length > FIELD_CONSTRAINTS.phone.max) {
        errors.phone = `Phone number must not exceed ${FIELD_CONSTRAINTS.phone.max} characters`;
    }

    // Validate message
    if (!data.message || typeof data.message !== 'string') {
        errors.message = 'Message is required';
    } else if (data.message.trim().length === 0) {
        errors.message = 'Message cannot be empty';
    } else if (data.message.length > FIELD_CONSTRAINTS.message.max) {
        errors.message = `Message must not exceed ${FIELD_CONSTRAINTS.message.max} characters`;
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
}

/**
 * Validate email address format
 * 
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
function isValidEmail(email) {
    if (!email || typeof email !== 'string') {
        return false;
    }
    return validator.isEmail(email);
}

/**
 * Validate field length
 * 
 * @param {string} value - Value to check
 * @param {string} fieldName - Name of field (for constraint lookup)
 * @returns {boolean} True if within length constraints
 */
function isValidLength(value, fieldName) {
    if (!value || typeof value !== 'string') {
        return false;
    }

    const constraints = FIELD_CONSTRAINTS[fieldName];
    if (!constraints) {
        return true; // No constraints defined, assume valid
    }

    return value.length >= constraints.min && value.length <= constraints.max;
}

/**
 * Sanitize and trim string input
 * 
 * @param {string} value - Value to sanitize
 * @returns {string} Trimmed string
 */
function sanitizeString(value) {
    if (!value || typeof value !== 'string') {
        return '';
    }
    return value.trim();
}

module.exports = {
    validateContactForm,
    isValidEmail,
    isValidLength,
    sanitizeString,
    ValidationError,
    FIELD_CONSTRAINTS,
};
