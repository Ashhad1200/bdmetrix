'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './About.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const headingRef = useRef(null);
    const teamGridRef = useRef(null);

    const stats = [
        { number: '5+', label: 'Years of Experience' },
        { number: '50+', label: 'Projects Completed' },
    ];

    const team = [
        { name: 'Syed Ashhad', role: 'CEO, Founder & Lead Developer', bio: 'Syed Ashhad founded BD Matrix to deliver software that solves real business problems, not cookie-cutter templates. He leads both strategy and development, combining hands-on technical expertise with a deep understanding of what businesses actually need to grow.', image: '/images/team/member-1.png' },
        { name: 'Abdul Rafay', role: 'Co-Founder', bio: 'Abdul Rafay co-founded BD Matrix and plays a key role in shaping the company\'s vision, partnerships, and operational strategy. His business acumen and client-first approach have been instrumental in scaling BD Matrix across multiple markets.', image: '/images/team/member-2.png' },
        { name: 'Abdullah Farooqui', role: 'Media & Sales Lead', bio: 'Abdullah drives BD Matrix\'s brand presence, lead generation, and client outreach across all digital channels. From social media strategy to closing deals, he ensures the right clients find BD Matrix and have a seamless experience from first contact to kickoff.', image: '/images/team/member-3.png' },
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
                    <p className={styles.teamKicker}>Build on Reliability and Trust.</p>
                    <h2 className={styles.teamTitle}>Why Choose BD Matrix</h2>
                </div>

                {/* Team Members Grid */}
                <div className={styles.teamGrid} ref={teamGridRef}>
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className={styles.teamCard}
                        >
                            <div className={styles.teamImageWrapper}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className={styles.teamImage}
                                />
                            </div>
                            <h4 className={styles.teamName}>{member.name}</h4>
                            <p className={styles.teamRole}>{member.role}</p>
                            <p className={styles.teamBio}>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
