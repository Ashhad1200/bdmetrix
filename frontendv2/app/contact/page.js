'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './contact.module.css';
import { trackLead } from '../../src/lib/fbpixel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
    const router = useRouter();
    const heroRef = useRef(null);
    const contactInfoRef = useRef(null);
    const contactFormRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceType: '',
        phone: '',
        budget: '',
        timeline: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Map frontend state to API expected format
            const payload = {
                ...formData,
                service_type: formData.serviceType // snake_case for API
            };

            const response = await fetch('/api/contact/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Track Lead event
                trackLead({
                    content_name: formData.serviceType || 'Contact Form',
                    value: formData.budget || 'Not specified',
                });

                // Redirect to thank you page
                router.push('/thank-you');
            } else {
                console.error('Submission failed:', data.message);
                alert(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Contact error:', error);
            alert('Unable to send message. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Animate hero section
        if (heroRef.current) {
            const pillTag = heroRef.current.querySelector('.pill-tag');
            const title = heroRef.current.querySelector(`.${styles.title}`);
            const subtitle = heroRef.current.querySelector(`.${styles.subtitle}`);

            const tl = gsap.timeline();
            if (pillTag) tl.fromTo(pillTag, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0);
            if (title) tl.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.1);
            if (subtitle) tl.fromTo(subtitle, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2);
        }

        // Animate contact info - fade-right
        if (contactInfoRef.current) {
            gsap.fromTo(
                contactInfoRef.current,
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: contactInfoRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

        // Animate contact form - fade-left
        if (contactFormRef.current) {
            gsap.fromTo(
                contactFormRef.current,
                { opacity: 0, x: 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: contactFormRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }
    }, []);

    const serviceTypes = [
        'CRM Software Development',
        'ERP System Development',
        'POS System Development',
        'Web Platforms & Landing Pages',
        'SaaS Platform Development',
        'Mobile Application Development',
        'UI/UX Design & Strategy',
        'Workflow Automation (n8n)',
        'Digital Marketing & SEO',
        'Other'
    ];

    const budgetRanges = [
        'Rs 50,000 - Rs 100,000',
        'Rs 100,000 - Rs 250,000',
        'Rs 250,000 - Rs 500,000',
        'Rs 500,000 - Rs 1,000,000',
        'Rs 1,000,000+'
    ];

    const timelines = [
        'Less than 1 month',
        '1-3 months',
        '3-6 months',
        '6-12 months',
        'More than 12 months'
    ];

    const contactInfo = [
        {
            title: 'Email',
            content: 'support@bdmatrix.org',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            )
        },
        {
            title: 'Phone (Canada)',
            content: '+1 581 705 1620',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            )
        },
        {
            title: 'Phone (Pakistan)',
            content: '+92 321 1426216',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            )
        }
    ];

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero} ref={heroRef}>
                    <div className={styles.container}>
                        <div className="pill-tag">Contact Us</div>
                        <h1 className={styles.title}>
                            Ready to Grow Your <span className={styles.accent}>Digital Presence?</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Let's build something extraordinary together. Contact us today for a free consultation.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className={styles.contact}>
                    <div className={styles.container}>
                        <div className={styles.contactGrid}>
                            {/* Contact Info */}
                            <div className={styles.contactInfo} ref={contactInfoRef}>
                                <h2 className={styles.infoTitle}>Get in Touch</h2>
                                <p className={styles.infoDesc}>
                                    Ready to discuss your project? We're here to help you bring your vision to life
                                    with robust digital infrastructure and actionable strategies.
                                </p>

                                <div className={styles.infoItems}>
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className={styles.infoItem}>
                                            <div className={styles.infoIcon}>{item.icon}</div>
                                            <div>
                                                <h4 className={styles.infoItemTitle}>{item.title}</h4>
                                                <p className={styles.infoItemContent}>{item.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.socialLinks}>
                                    <a href="https://www.facebook.com/bdmatrix/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/bdmatrix" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                            <rect x="2" y="9" width="4" height="12" />
                                            <circle cx="4" cy="4" r="2" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/bd_matrix" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                    </a>
                                    <a href="https://wa.me/15817051620" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className={styles.contactForm} ref={contactFormRef}>
                                <h2 className={styles.formTitle}>Contact Us</h2>
                                <p className={styles.requiredNote}>Your email address will not be published. Required fields are marked *</p>

                                <form onSubmit={handleSubmit}>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name*"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className={styles.formInput}
                                                />
                                            </div>
                                            <div className={styles.formGroup}>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address*"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className={styles.formInput}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <select
                                                    name="serviceType"
                                                    value={formData.serviceType}
                                                    onChange={handleChange}
                                                    required
                                                    className={styles.formSelect}
                                                >
                                                    <option value="">Select Service Type*</option>
                                                    {serviceTypes.map((service, index) => (
                                                        <option key={index} value={service}>{service}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className={styles.formGroup}>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone Number*"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className={styles.formInput}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formGroup}>
                                                <select
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                    className={styles.formSelect}
                                                >
                                                    <option value="">Budget Range (Optional)</option>
                                                    {budgetRanges.map((budget, index) => (
                                                        <option key={index} value={budget}>{budget}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className={styles.formGroup}>
                                                <select
                                                    name="timeline"
                                                    value={formData.timeline}
                                                    onChange={handleChange}
                                                    className={styles.formSelect}
                                                >
                                                    <option value="">Project Timeline (Optional)</option>
                                                    {timelines.map((timeline, index) => (
                                                        <option key={index} value={timeline}>{timeline}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <textarea
                                                name="message"
                                                placeholder="Tell us about your project (Optional)"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className={`${styles.formInput} ${styles.formTextarea}`}
                                            ></textarea>
                                        </div>
                                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                                            {loading ? 'Sending...' : 'Send Message'}
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
