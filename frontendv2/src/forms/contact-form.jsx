import React, { useState } from "react";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service_type: '',
    phone: '',
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
      newErrors.service_type = 'Service type is required';
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
        setSuccessMessage(data.message);

        // Reset form
        setFormData({
          name: '',
          email: '',
          service_type: '',
          phone: '',
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
        <div className="alert alert-success mb-3" role="alert" aria-live="polite">
          <strong>✓</strong> {successMessage}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="alert alert-danger mb-3" role="alert" aria-live="assertive">
          <strong>✗</strong> {errorMessage}
        </div>
      )}

      <form id="contact-form" onSubmit={handleSubmit} method="POST" noValidate>
        <div className="row tp-gx-10">
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
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                maxLength={100}
              />
              {errors.name && (
                <div className="invalid-feedback" id="name-error" role="alert">
                  {errors.name}
                </div>
              )}
            </div>
          </div>

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
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                maxLength={100}
              />
              {errors.email && (
                <div className="invalid-feedback" id="email-error" role="alert">
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="service_type"
                type="text"
                placeholder="Service Type*"
                value={formData.service_type}
                onChange={handleChange}
                disabled={isSubmitting}
                className={errors.service_type ? 'is-invalid' : ''}
                aria-label="Service Type"
                aria-required="true"
                aria-invalid={errors.service_type ? 'true' : 'false'}
                aria-describedby={errors.service_type ? 'service-type-error' : undefined}
                maxLength={100}
              />
              {errors.service_type && (
                <div className="invalid-feedback" id="service-type-error" role="alert">
                  {errors.service_type}
                </div>
              )}
            </div>
          </div>

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
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                maxLength={20}
              />
              {errors.phone && (
                <div className="invalid-feedback" id="phone-error" role="alert">
                  {errors.phone}
                </div>
              )}
            </div>
          </div>

          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Enter Your Message here*"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className={errors.message ? 'is-invalid' : ''}
                aria-label="Your Message"
                aria-required="true"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                rows={5}
                maxLength={2000}
              ></textarea>
              {errors.message && (
                <div className="invalid-feedback" id="message-error" role="alert">
                  {errors.message}
                </div>
              )}
            </div>
          </div>

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

