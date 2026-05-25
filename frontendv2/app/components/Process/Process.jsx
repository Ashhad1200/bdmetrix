'use client';
import { useEffect, useRef } from 'react';
import styles from './Process.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
    const headerRef = useRef(null);
    const headingRef = useRef(null);
    const stepsGridRef = useRef(null);

    const steps = [
        {
            number: '01',
            title: 'Discovery (Week 1)',
            description: 'We visit your outlet, observe your operations, and map exactly what your team needs. No guesswork — we learn your workflow first.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Build (Weeks 2–3)',
            description: 'We customize the system to your menu, inventory, and workflows. You see progress every few days — not at the end.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Pilot (Week 4)',
            description: 'We deploy in one outlet first. Train your team. Fix what doesn\'t work before rolling out further. No big-bang launches.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <circle cx="11" cy="11" r="2" />
                </svg>
            )
        },
        {
            number: '04',
            title: 'Rollout',
            description: 'Once the pilot is stable and your team is confident, we roll out to the rest of your outlets with the same hands-on approach.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            )
        },
        {
            number: '05',
            title: 'Support (6 Months)',
            description: '6 months of included support after go-live. We fix issues fast, train new staff, and make adjustments as your business grows.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
            )
        }
    ];

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

        // Animate step cards with stagger
        if (stepsGridRef.current) {
            const stepCards = stepsGridRef.current.querySelectorAll(`.${styles.stepCard}`);
            gsap.fromTo(
                stepCards,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: stepsGridRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Add hover animations
            stepCards.forEach((card) => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -12,
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });
            });
        }
    }, []);

    return (
        <section className={styles.process} id="process">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header} ref={headerRef}>
                    <div className="pill-tag">
                        How We Work
                    </div>
                    <h2 className={styles.heading} ref={headingRef}>
                        How a POS Deployment <span className={styles.accent}>Actually Works</span>
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className={styles.stepsGrid} ref={stepsGridRef}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={styles.stepCard}
                        >
                            <div className={styles.stepIcon}>
                                {step.icon}
                            </div>
                            <span className={styles.stepNumber}>{step.number}</span>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
