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
                        BD Matrix
                        <br />
                        <span className={styles.accent}>Digital Solutions</span>
                    </h1>

                    {/* Subtext */}
                    <p className={styles.subtext} data-aos="fade-up" data-aos-delay="200">
                        We build scalable software, digital products, and marketing solutions
                        that help businesses grow online.
                    </p>

                    {/* CTA Buttons */}
                    <div className={styles.cta} data-aos="fade-up" data-aos-delay="300">
                        <Link href="/contact" className={styles.ctaButton}>
                            <span>Get Started</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/contact" className={styles.ctaButtonOutline}>
                            <span>Contact Us</span>
                        </Link>
                    </div>

                    {/* Short Intro */}
                    <p className={styles.intro} data-aos="fade-up" data-aos-delay="350">
                        BD Matrix is a full-service digital agency and software house based in Canada and UK, now in Karachi, Pakistan —
                        delivering custom Web Apps, SaaS, ERP, CRM, POS, Mobile Apps, and Digital Marketing solutions.
                    </p>
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
