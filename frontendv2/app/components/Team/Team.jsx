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

    const team = [
        {
            name: 'Syed Ashhad',
            role: 'CEO & Lead Engineer',
            image: '/images/team/member-1.png'
        },
        {
            name: 'Abdul Rafay',
            role: 'Co-Founder',
            image: '/images/team/member-2.png'
        },
        {
            name: 'Abdullah Farooqui',
            role: 'Media & Sales Lead',
            image: '/images/team/member-3.png'
        },
        {
            name: 'Aimen Tariq',
            role: 'Product Design Lead',
            image: '/images/team/member-4.png'
        },
        {
            name: 'Muhammad Danish',
            role: 'Technical Director',
            image: '/images/team/founder.png'
        }
    ];

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
                        Meet our beautiful team
                    </h2>
                    <p className={styles.subtitle} ref={subtitleRef}>
                        Our philosophy is simple: hire great people and give them the resources and support to do their best work.
                    </p>

                    <div className={styles.actions} ref={actionsRef}>
                        <Link href="/contact" className={styles.btnGhost}>Book a demo</Link>
                        <Link href="/contact" className={styles.btnPrimary}>Get in touch</Link>
                    </div>
                </div>

                <div className={styles.teamGrid} ref={teamGridRef}>
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className={styles.memberCard}
                        >
                            <div className={styles.memberImage}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.memberInfoBox}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberRole}>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.testimonial} ref={testimonialRef}>
                    <p className={styles.quote}>
                        We have been blown away by the support from BD Matrix. We suggested an improvement to our account manager and they implemented it in just a few days.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.avatarWrap}>
                            <Image
                                src="/images/team/member-2.png"
                                alt="Client avatar"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            <p className={styles.authorName}>Amelie Laurent</p>
                            <p className={styles.authorRole}>CTO, Beyond Systems</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
