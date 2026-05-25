'use client';
import { useEffect, useRef } from 'react';
import styles from './About.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const headingRef = useRef(null);
    const teamGridRef = useRef(null);

    const reasons = [
        { title: 'We specialize, not generalize', desc: 'We focus on POS systems for restaurants and retail. That focus means we\'ve solved the hard problems already — offline sync, multi-outlet dashboards, staff shifts, inventory reconciliation.' },
        { title: 'Live in 30 days', desc: 'From first call to a live system is 4 weeks. Not months of back-and-forth. We have a repeatable process that gets you operational fast without cutting corners.' },
        { title: 'Built in Pakistan, for Pakistan', desc: 'We\'re a Karachi-based team that understands local operations: power outages, mixed hardware, Urdu-speaking staff, and the way restaurants here actually run.' },
        { title: 'We tell you if we\'re not the right fit', desc: 'If your project needs something outside our core expertise, we\'ll say so and point you in the right direction. No wasted time on either side.' },
    ];

    useEffect(() => {
        // Animate heading
        if (headingRef.current) {
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 40 },
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

        // Animate team cards with stagger
        if (teamGridRef.current) {
            const teamCards = teamGridRef.current.querySelectorAll(`.${styles.teamCard}`);
            gsap.fromTo(
                teamCards,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: teamGridRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Add hover animations
            teamCards.forEach((card) => {
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
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <div className={styles.teamHeading} ref={headingRef}>
                    <p className={styles.teamKicker}>Why restaurants and retail businesses choose us.</p>
                    <h2 className={styles.teamTitle}>Why BD Matrix</h2>
                </div>

                {/* Reasons Grid */}
                <div className={styles.teamGrid} ref={teamGridRef}>
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={styles.teamCard}
                        >
                            <h4 className={styles.teamName}>{reason.title}</h4>
                            <p className={styles.teamBio}>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
