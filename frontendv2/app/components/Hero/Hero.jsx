'use client';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Elements */}
            <div className={`${styles.bgGlow} ${styles.glowPurple}`}></div>
            <div className={`${styles.bgGlow} ${styles.glowBlue}`}></div>
            <div className={styles.decorativeCircle1}></div>
            <div className={styles.decorativeCircle2}></div>

            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Pill Tag */}
                    <div className={styles.pillTag} data-aos="fade-up">
                        <span className={styles.pillDot}></span>
                        Digital Growth Partner
                    </div>

                    {/* Main Heading */}
                    <h1 className={styles.heading} data-aos="fade-up" data-aos-delay="100">
                        We Build Scalable Custom Software & Apps for{' '}
                        <span className={styles.accent}>Growing Businesses.</span>
                    </h1>

                    {/* Subtext */}
                    <p className={styles.subtext} data-aos="fade-up" data-aos-delay="200">
                        Helping global brands and startups streamline operations and increase revenue with custom digital solutions.
                    </p>

                    {/* Single CTA Button */}
                    <div className={styles.cta} data-aos="fade-up" data-aos-delay="300">
                        <Link href="/contact" className={styles.ctaButton}>
                            <span>Book a Free Consultation</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--slate-body)', marginTop: '12px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--profit-green)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        Free 30-min consultation. No commitment.
                    </p>

                    {/* Stats Bar */}
                    <div className={styles.trustBadges} data-aos="fade-up" data-aos-delay="350">
                        <span className={styles.trustText}>50+ Projects Delivered</span>
                        <span className={styles.trustText}>5+ Years Experience</span>
                        <span className={styles.trustText}>3 Countries Served</span>
                        <span className={styles.trustText}>98% Client Retention</span>
                    </div>
                </div>

                {/* Floating Cards */}
                <div className={styles.floatingCards}>
                    <div className={styles.floatingCard} data-aos="fade-left" data-aos-delay="400">
                        <div className={styles.cardIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <div className={styles.cardContent}>
                            <h4>Secure Infrastructure</h4>
                            <p>Scalable & Compliant</p>
                        </div>
                    </div>

                    <div className={styles.floatingCard} data-aos="fade-left" data-aos-delay="500">
                        <div className={styles.cardStats}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Uptime Focus</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
}
