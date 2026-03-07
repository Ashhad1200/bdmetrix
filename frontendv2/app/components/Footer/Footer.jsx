'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        try {
            const response = await fetch('http://localhost:5001/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                setSubscribed(true);
                setEmail('');
            }
        } catch (error) {
            console.log('Newsletter subscription - API not connected');
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Top Section */}
                <div className={styles.topSection}>
                    <div className={styles.brandSection}>
                        <Link href="/" className={styles.logo}>
                            BD Matrix
                        </Link>
                        <p className={styles.brandDesc}>
                            BD Matrix is a full-service digital agency and software house based in
                            Canada and UK, now in Karachi, Pakistan — delivering custom Web Apps, SaaS, ERP, CRM, POS,
                            Mobile Apps, and Digital Marketing solutions for businesses worldwide.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://www.facebook.com/bdmatrix/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            {/* <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                            </a> */}
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

                    <div className={styles.linksSection}>
                        <div className={styles.linkColumn}>
                            <h4 className={styles.linkTitle}>Quick Links</h4>
                            <Link href="/" className={styles.footerLink}>Home</Link>
                            <Link href="/about" className={styles.footerLink}>About Us</Link>
                            <Link href="/service" className={styles.footerLink}>Services</Link>
                            <Link href="/project" className={styles.footerLink}>Projects</Link>
                            <Link href="/contact" className={styles.footerLink}>Contact</Link>
                        </div>

                        {/* <div className={styles.linkColumn}>
                            <h4 className={styles.linkTitle}>Services</h4>
                            <Link href="/service/custom-software" className={styles.footerLink}>Custom Software</Link>
                            <Link href="/service/web-development" className={styles.footerLink}>Web Development</Link>
                            <Link href="/service/saas-platforms" className={styles.footerLink}>SaaS Platforms</Link>
                            <Link href="/service/pos-crm" className={styles.footerLink}>POS & CRM</Link>
                            <Link href="/service/digital-marketing" className={styles.footerLink}>Digital Marketing</Link>
                        </div> */}

                        <div className={styles.linkColumn}>
                            <h4 className={styles.linkTitle}>Contact Info</h4>
                            {/* <p className={styles.contactItem}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                Karachi, Sindh, Pakistan
                            </p> */}
                            <p className={styles.contactItem}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                support@bdmatrix.org
                            </p>
                            <p className={styles.contactItem}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                +1 581 705 1620
                            </p>
                            <p className={styles.contactItem}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                +92 321 1426216
                            </p>
                        </div>
                    </div>

                    <div className={styles.newsletterSection}>
                        <h4 className={styles.linkTitle}>Subscribe Newsletter</h4>
                        <p className={styles.newsletterDesc}>
                            Stay updated with our latest news, insights, and digital solutions.
                        </p>
                        {subscribed ? (
                            <div className={styles.successMessage}>
                                ✓ Thank you for subscribing!
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={styles.newsletterInput}
                                    required
                                />
                                <button type="submit" className={styles.newsletterBtn}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} BD Matrix. All rights reserved.
                    </p>
                    {/* <div className={styles.bottomLinks}>
                        <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
                        <Link href="/terms" className={styles.bottomLink}>Terms of Service</Link>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
