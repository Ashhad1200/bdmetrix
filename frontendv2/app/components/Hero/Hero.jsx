'use client';
import Link from 'next/link';
import Image from 'next/image';
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

                    {/* Trust Badges */}
                    <div className={styles.trustBadges} data-aos="fade-up" data-aos-delay="350">
                        <span className={styles.trustText}>Trusted by 50+ businesses globally</span>
                        <div className={styles.clientLogos}>
                            <Image src="/images/clients/client-logo-1.png" alt="Client Logo 1" width={80} height={32} className={styles.clientLogo} />
                            <Image src="/images/clients/client-logo-2.png" alt="Client Logo 2" width={80} height={32} className={styles.clientLogo} />
                            <Image src="/images/clients/client-logo-3.png" alt="Client Logo 3" width={80} height={32} className={styles.clientLogo} />
                            <Image src="/images/clients/client-logo-4.png" alt="Client Logo 4" width={80} height={32} className={styles.clientLogo} />
                        </div>
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
