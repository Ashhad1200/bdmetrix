import React, { useState } from "react";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service_type: '',
    phone: '',
    budget: '',
    timeline: '',
    message: '',
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Client-side validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must not exceed 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service_type.trim()) {
      newErrors.service_type = 'Please select a service type';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 2000) {
      newErrors.message = 'Message must not exceed 2000 characters';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setSuccessMessage('');
    setErrorMessage('');
    setErrors({});

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit to API
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success!
        setSuccessMessage('Thank you! We\'ll get back to you within 24 hours.');

        // Reset form
        setFormData({
          name: '',
          email: '',
          service_type: '',
          phone: '',
          budget: '',
          timeline: '',
          message: '',
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);

      } else {
        // Validation or server error
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrorMessage(data.message || 'Something went wrong. Please try again.');
        }
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Unable to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Success Message */}
      {successMessage && (
        <div className="alert alert-success mb-3" role="alert" aria-live="polite" style={{
          background: 'linear-gradient(135deg, rgba(5, 218, 195, 0.1) 0%, rgba(5, 218, 195, 0.2) 100%)',
          border: '1px solid var(--bdm-secondary)',
          borderRadius: 'var(--bdm-radius-md)',
          padding: '16px',
          color: 'var(--tp-heading-primary)'
        }}>
          <strong>✓</strong> {successMessage}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="alert alert-danger mb-3" role="alert" aria-live="assertive" style={{
          background: 'rgba(220, 53, 69, 0.1)',
          border: '1px solid #dc3545',
          borderRadius: 'var(--bdm-radius-md)',
          padding: '16px'
        }}>
          <strong>✗</strong> {errorMessage}
        </div>
      )}

      <form id="contact-form" onSubmit={handleSubmit} method="POST" noValidate>
        <div className="row tp-gx-10">
          {/* Name */}
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="name"
                type="text"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className={errors.name ? 'is-invalid' : ''}
                aria-label="Your Name"
                aria-required="true"
                maxLength={100}
              />
              {errors.name && (
                <div className="invalid-feedback" role="alert">
                  {errors.name}
                </div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="email"
                type="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={errors.email ? 'is-invalid' : ''}
                aria-label="Email Address"
                aria-required="true"
                maxLength={100}
              />
              {errors.email && (
                <div className="invalid-feedback" role="alert">
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          {/* Service Type - Dropdown */}
          <div className="col-md-6">
            <div className="tp-contact-input">
              <select
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
                disabled={isSubmitting}
                className={errors.service_type ? 'is-invalid' : ''}
                aria-label="Service Type"
                aria-required="true"
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  fontSize: '15px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                <option value="">Select Service Type*</option>
                <option value="crm">CRM Software Development</option>
                <option value="erp">ERP System Development</option>
                <option value="pos">POS System Development</option>
                <option value="landing-site">Landing Site / Web Development</option>
                <option value="saas">SaaS Platform Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="other">Other / Consulting</option>
              </select>
              {errors.service_type && (
                <div className="invalid-feedback" role="alert">
                  {errors.service_type}
                </div>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className={errors.phone ? 'is-invalid' : ''}
                aria-label="Phone Number"
                aria-required="true"
                maxLength={20}
              />
              {errors.phone && (
                <div className="invalid-feedback" role="alert">
                  {errors.phone}
                </div>
              )}
            </div>
          </div>

          {/* Budget Range */}
          <div className="col-md-6">
            <div className="tp-contact-input">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-label="Budget Range"
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  fontSize: '15px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                <option value="">Budget Range (Optional)</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </select>
            </div>
          </div>

          {/* Timeline */}
          <div className="col-md-6">
            <div className="tp-contact-input">
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-label="Project Timeline"
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  fontSize: '15px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                <option value="">Project Timeline (Optional)</option>
                <option value="urgent">Urgent (1-2 weeks)</option>
                <option value="1-month">Within 1 Month</option>
                <option value="2-3-months">2-3 Months</option>
                <option value="3-6-months">3-6 Months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Tell us about your project*"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className={errors.message ? 'is-invalid' : ''}
                aria-label="Your Message"
                aria-required="true"
                rows={5}
                maxLength={2000}
              ></textarea>
              {errors.message && (
                <div className="invalid-feedback" role="alert">
                  {errors.message}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="tp-contact-btn mt-10">
            <button
              type="submit"
              className="tp-btn"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
