'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './Pricing.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
    const headerRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef(null);

    const includes = [
        'Custom POS interface for your menu & inventory',
        'Multi-outlet support with central dashboard',
        'Real-time sales and inventory reports',
        'Staff and shift management',
        'Receipt printing, kitchen display integration',
        '30-day deployment — pilot then rollout',
        'Setup and hands-on training included',
        '6 months of included support',
    ];

    useEffect(() => {
        if (headingRef.current) {
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
                }
            );
        }

        if (cardsRef.current) {
            const cards = cardsRef.current.querySelectorAll(`.${styles.card}`);
            gsap.fromTo(
                cards,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.15,
                    scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
                }
            );
        }
    }, []);

    return (
        <section className={styles.pricing} id="pricing">
            <div className={styles.container}>
                <div className={styles.header} ref={headerRef}>
                    <div className="pill-tag">Pricing</div>
                    <h2 className={styles.heading} ref={headingRef}>
                        Transparent pricing.<br />
                        <span className={styles.accent}>No surprises.</span>
                    </h2>
                    <p className={styles.subheading}>
                        Our POS system is priced per outlet. Book a demo for a precise quote based on your actual setup.
                    </p>
                </div>

                <div className={styles.cards} ref={cardsRef}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardLabel}>Single Outlet</span>
                            <div className={styles.cardPrice}>
                                <span className={styles.priceNote}>Starting at</span>
                                <span className={styles.price}>PKR 150,000</span>
                                <span className={styles.priceSub}>one-time setup</span>
                            </div>
                        </div>
                        <ul className={styles.featureList}>
                            {includes.map((item, i) => (
                                <li key={i} className={styles.featureItem}>
                                    <span className={styles.checkmark}>✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className={styles.cardCta}>
                            Book a demo →
                        </Link>
                    </div>

                    <div className={`${styles.card} ${styles.cardFeatured}`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardLabel}>Multi-Outlet Chain</span>
                            <div className={styles.cardPrice}>
                                <span className={styles.priceNote}>Starting at</span>
                                <span className={styles.price}>PKR 100,000</span>
                                <span className={styles.priceSub}>per additional outlet</span>
                            </div>
                        </div>
                        <ul className={styles.featureList}>
                            {includes.map((item, i) => (
                                <li key={i} className={styles.featureItem}>
                                    <span className={styles.checkmark}>✓</span>
                                    {item}
                                </li>
                            ))}
                            <li className={styles.featureItem}>
                                <span className={styles.checkmark}>✓</span>
                                Centralized chain-wide reporting
                            </li>
                            <li className={styles.featureItem}>
                                <span className={styles.checkmark}>✓</span>
                                Priority support response
                            </li>
                        </ul>
                        <Link href="/contact" className={styles.cardCtaPrimary}>
                            Get a precise quote →
                        </Link>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardLabel}>Custom Integration</span>
                            <div className={styles.cardPrice}>
                                <span className={styles.priceNote}>Quoted separately</span>
                                <span className={styles.price}>Custom</span>
                                <span className={styles.priceSub}>based on requirements</span>
                            </div>
                        </div>
                        <p className={styles.customDesc}>
                            Need integration with your existing accounting software, supplier ordering, loyalty programs, or AI-powered features? We quote these based on scope after the discovery call.
                        </p>
                        <a
                            href="https://wa.me/923211426216?text=Hi%20BD%20Matrix%2C%20I%27d%20like%20to%20discuss%20a%20custom%20POS%20integration."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.cardCta}
                        >
                            WhatsApp us →
                        </a>
                    </div>
                </div>

                <p className={styles.disclaimer}>
                    All prices are indicative. Final pricing is confirmed after the discovery call based on your outlet count, menu complexity, and integration requirements. No hidden fees.
                </p>
            </div>
        </section>
    );
}
