'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Team.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
    const headingRef = useRef(null);
    const subtitleRef = useRef(null);
    const actionsRef = useRef(null);
    const teamGridRef = useRef(null);
    const testimonialRef = useRef(null);

    useEffect(() => {
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

        // Animate subtitle
        if (subtitleRef.current) {
            gsap.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.08,
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

        // Animate action buttons
        if (actionsRef.current) {
            gsap.fromTo(
                actionsRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.12,
                    scrollTrigger: {
                        trigger: actionsRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

        // Animate team grid
        if (teamGridRef.current) {
            gsap.fromTo(
                teamGridRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.16,
                    scrollTrigger: {
                        trigger: teamGridRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

        // Animate testimonial
        if (testimonialRef.current) {
            gsap.fromTo(
                testimonialRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.22,
                    scrollTrigger: {
                        trigger: testimonialRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }
    }, []);

    return (
        <section className={styles.team} id="team">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading} ref={headingRef}>
                        Hi, I'm Ashhad.<br />
                        <span style={{color: 'var(--accent)'}}>I build AI software and business systems for companies worldwide.</span>
                    </h2>
                    <p className={styles.subtitle} ref={subtitleRef}>
                        I started BD Matrix to help clinics, real estate agencies, and restaurants modernize their operations with software that actually works. We're a small, focused team — and we only take on projects where we can deliver real results.
                    </p>

                    <div className={styles.actions} ref={actionsRef}>
                        <Link href="/contact" className={styles.btnGhost}>Book a 15-min demo</Link>
                        <Link href="/contact" className={styles.btnPrimary}>Talk to us</Link>
                    </div>
                </div>

                <div className={styles.teamGrid} ref={teamGridRef}>
                    {/* Single founder card */}
                    <div className={styles.memberCard}>
                        <div className={styles.memberImage}>
                            <Image
                                src="/images/team/member-1.png"
                                alt="Syed Ashhad - Founder, BD Matrix"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.memberInfoBox}>
                            <h3 className={styles.memberName}>Syed Ashhad</h3>
                            <p className={styles.memberRole}>Founder & Lead Engineer</p>
                        </div>
                    </div>
                </div>

                {/* Honest statement instead of fake testimonial */}
                <div className={styles.testimonial} ref={testimonialRef}>
                    <p className={styles.quote}>
                        We don't take every project. We work with restaurants and retail businesses that want to modernize their operations and have the team to execute alongside us. If we're not the right fit, we'll tell you and recommend someone who is.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.avatarWrap}>
                            <Image
                                src="/images/team/member-1.png"
                                alt="Syed Ashhad"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            <p className={styles.authorName}>Syed Ashhad</p>
                            <p className={styles.authorRole}>Founder, BD Matrix</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
