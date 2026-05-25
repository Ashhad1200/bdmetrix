'use client';
import { useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
    const headerRef = useRef(null);
    const headingRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        // Animate header pill tag
        if (headerRef.current) {
            const pillTag = headerRef.current.querySelector('.pill-tag');
            if (pillTag) {
                gsap.fromTo(
                    pillTag,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: headerRef.current,
                            start: 'top 80%',
                        },
                    }
                );
            }
        }

        // Animate heading
        if (headingRef.current) {
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

        // Animate slider
        if (sliderRef.current) {
            gsap.fromTo(
                sliderRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sliderRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }
    }, []);

    return (
        <section className={styles.testimonials} id="testimonials">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header} ref={headerRef}>
                    <div className="pill-tag">
                        Testimonials
                    </div>
                    <h2 className={styles.heading} ref={headingRef}>
                        What <span className={styles.accent}>Our Clients</span> Say
                    </h2>
                </div>

                {/* Honest placeholder — no fabricated testimonials */}
                <div ref={sliderRef} style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <div style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        padding: '2.5rem',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '16px'
                    }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            We're building our client portfolio and will share real testimonials with permission from our restaurant and retail partners. Every name and quote on this page will be verifiable.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 500 }}>
                            — In the meantime, book a 15-minute demo and speak with us directly.
                        </p>
                        <div style={{ marginTop: '1.5rem' }}>
                            <a href="/contact" style={{
                                display: 'inline-block',
                                padding: '0.75rem 2rem',
                                background: 'var(--accent)',
                                color: '#fff',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '0.9rem'
                            }}>
                                Book a 15-min demo →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
