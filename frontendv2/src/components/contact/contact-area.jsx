import ContactForm from '@/src/forms/contact-form';
import EmailIconOne from '@/src/svg/email-icon-1';
import PhoneIcon from '@/src/svg/phone-icon';
import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="tp-contact-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-contact-wrapper">
                                <div className="tp-contact-title-wrapper">
                                    <h3 className="tp-contact-title">Get in <span className="title-color">Touch</span></h3>
                                    <p>Have an idea or want to digitize your business? <br />
                                        We’re here to help.</p>
                                </div>
                                <div className="tp-contact-content">
                                    <div className="tp-contact-content-mail d-flex align-items-center">
                                        <div className="tp-contact-content-mail-icon">
                                            <span>
                                                <EmailIconOne />
                                            </span>
                                        </div>
                                        <h3 className="tp-contact-item-title"><a href="mailto:info@bdmatrix.com">info@bdmatrix.com</a></h3>
                                    </div>
                                    <div className="tp-contact-content-phone d-flex align-items-center">
                                        <div className="tp-contact-content-phone-icon">
                                            <span>
                                                <i className="fa-solid fa-globe" style={{ fontSize: "20px", color: "var(--tp-theme-1)" }}></i>
                                            </span>
                                        </div>
                                        <h3 className="tp-contact-item-title">
                                            <a href="https://www.bdmatrix.org" target="_blank">www.bdmatrix.org</a>
                                        </h3>
                                    </div>
                                    <div className="tp-contact-location-wrapper d-flex">
                                        <div className="tp-contact-location">
                                            <h3 className="tp-contact-location-title">
                                                Operating Regions
                                                <i className="fa-regular fa-arrow-down"></i>
                                            </h3>
                                            <p>🇺🇸 USA | 🇬🇧 UK | 🇵🇰 Pakistan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-contact-form">
                                <h3 className="tp-contact-form-title">Contact Us</h3>
                                <p>Your email address will not be published. Required fields <br /> are marked *</p>
                                <ContactForm />
                                <p className="ajax-response"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;