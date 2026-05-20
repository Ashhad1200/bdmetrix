'use client';
import { useEffect, useRef } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './about.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const heroRef = useRef(null);
    const storyContentRef = useRef(null);
    const storyStatsRef = useRef(null);
    const valuesHeaderRef = useRef(null);
    const valuesGridRef = useRef(null);

    const values = [
        {
            title: 'Innovation',
            description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            )
        },
        {
            title: 'Excellence',
            description: 'Quality is at the heart of everything we do, ensuring exceptional results for every project.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
            )
        },
        {
            title: 'Collaboration',
            description: 'We believe in building strong partnerships with our clients through transparent communication.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            title: 'Results-Driven',
            description: 'Our focus is on delivering measurable results that drive real business growth.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
            )
        }
    ];

    useEffect(() => {
        // Hero section animations
        if (heroRef.current) {
            const pillTag = heroRef.current.querySelector('.pill-tag');
            const title = heroRef.current.querySelector(`.${styles.title}`);
            const subtitle = heroRef.current.querySelector(`.${styles.subtitle}`);

            const tl = gsap.timeline();
            if (pillTag) tl.fromTo(pillTag, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0);
            if (title) tl.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.1);
            if (subtitle) tl.fromTo(subtitle, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2);
        }

        // Story content fade-right
        if (storyContentRef.current) {
            gsap.fromTo(
                storyContentRef.current,
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: storyContentRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

        // Story stats fade-left
        if (storyStatsRef.current) {
            gsap.fromTo(
                storyStatsRef.current,
                { opacity: 0, x: 40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: storyStatsRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

        // Values header animations
        if (valuesHeaderRef.current) {
            const pillTag = valuesHeaderRef.current.querySelector('.pill-tag');
            const title = valuesHeaderRef.current.querySelector(`.${styles.valuesTitle}`);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: valuesHeaderRef.current,
                    start: 'top 80%',
                },
            });
            if (pillTag) tl.fromTo(pillTag, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0);
            if (title) tl.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.1);
        }

        // Value cards with stagger
        if (valuesGridRef.current) {
            const valueCards = valuesGridRef.current.querySelectorAll(`.${styles.valueCard}`);
            gsap.fromTo(
                valueCards,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: valuesGridRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Add hover animations
            valueCards.forEach((card) => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -8,
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        boxShadow: 'none',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });
            });
        }
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero} ref={heroRef}>
                    <div className={styles.container}>
                        <div className="pill-tag">About BD Matrix</div>
                        <h1 className={styles.title}>
                            Engineering <span className={styles.accent}>Digital Excellence</span>
                        </h1>
                        <p className={styles.subtitle}>
                            We build high-integrity digital products for businesses that demand 
                            reliability, security, and scalable growth in the modern economy.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className={styles.story}>
                    <div className={styles.container}>
                        <div className={styles.storyGrid}>
                            <div className={styles.storyContent} ref={storyContentRef}>
                                <div className="pill-tag">Our Philosophy</div>
                                <h2 className={styles.storyTitle}>
                                    A Commitment to <span className={styles.accent}>Strategic Growth</span>
                                </h2>
                                <p className={styles.storyText}>
                                    BD Matrix was founded by a team of software engineers and digital architects 
                                    who recognized a gap in the market for high-trust, bank-grade digital solutions. 
                                    Operating with a global mindset, we serve clients across Canada, UK, and Pakistan.
                                </p>
                                <p className={styles.storyText}>
                                    We don't just write code; we architect solutions. Our journey is defined by 
                                    technical rigor and a quality-first approach that ensures every product we 
                                    deliver is built to last and engineered for impact.
                                </p>
                            </div>
                            <div className={styles.storyStats} ref={storyStatsRef}>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>100%</span>
                                    <span className={styles.statLabel}>Secure Architecture</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>99.9%</span>
                                    <span className={styles.statLabel}>Infrastructure Uptime</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>Quality</span>
                                    <span className={styles.statLabel}>Standard Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className={styles.values}>
                    <div className={styles.container}>
                        <div className={styles.valuesHeader} ref={valuesHeaderRef}>
                            <div className="pill-tag">Our Values</div>
                            <h2 className={styles.valuesTitle}>
                                What Drives <span className={styles.accent}>Our Success</span>
                            </h2>
                        </div>
                        <div className={styles.valuesGrid} ref={valuesGridRef}>
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className={styles.valueCard}
                                >
                                    <div className={styles.valueIcon}>{value.icon}</div>
                                    <h3 className={styles.valueTitle}>{value.title}</h3>
                                    <p className={styles.valueDesc}>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
