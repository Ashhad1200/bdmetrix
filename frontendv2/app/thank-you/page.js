'use client';
import { useEffect, useRef } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import styles from './thankyou.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ThankYouPage() {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                }
            );
        }
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.thankYou}>
                    <div className={styles.container}>
                        <div className={styles.content} ref={contentRef}>
                            <div className={styles.iconWrapper}>
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <h1 className={styles.title}>Thank You!</h1>
                            <p className={styles.message}>
                                Your message has been sent successfully. We'll get back to you within 24-48 hours.
                            </p>
                            <p className={styles.subMessage}>
                                In the meantime, feel free to explore our services or check out our latest projects.
                            </p>
                            <div className={styles.actions}>
                                <Link href="/" className={styles.primaryBtn}>
                                    Back to Home
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                </Link>
                                <Link href="/service" className={styles.secondaryBtn}>
                                    View Services
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
