'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './Portfolio.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
    const headerRef = useRef(null);
    const headingRef = useRef(null);
    const descRef = useRef(null);
    const viewAllRef = useRef(null);
    const projectsGridRef = useRef(null);

    const projects = [
        {
            id: 'medical-mobile-app',
            title: 'Medical Mobile Design & Development',
            description: 'A healthcare provider needed a patient-facing mobile app for appointments and records. We delivered a secure, regulation-ready interface with booking workflows, prescription tracking, and notifications. The app launched in eight weeks and reached a 4.7-star rating in its first month.',
            tags: ['Mobile App', 'UI/UX Design'],
            image: '/images/projects/medical-app.png'
        },
        {
            id: 'stacks-website',
            title: 'Stacks Website Design & Coding',
            description: 'Stacks needed a high-performance marketing website to support product launch and acquisition goals. We delivered a fully responsive Next.js build with custom motion, strong technical SEO, and a 94 Lighthouse performance score. The site launched in three weeks and exceeded conversion targets by 40%.',
            tags: ['Web Design', 'Development'],
            image: '/images/projects/website-design.png'
        },
        {
            id: 'financial-wallet',
            title: 'Financial & Wallet Website Design',
            description: 'A fintech startup needed a credible digital presence for its wallet product. We designed a modern, conversion-focused website with interactive UI patterns and streamlined onboarding. The platform helped the client close its first seed round within 60 days of launch.',
            tags: ['Fintech', 'UI/UX Design'],
            image: '/images/projects/fintech-wallet.png'
        },
        {
            id: 'sales-management-app',
            title: 'Sales Management Mobile App Design',
            description: 'An enterprise sales team lacked pipeline visibility and follow-up consistency. We delivered a custom mobile CRM with real-time dashboards, lead tracking, and automated reminders. The client reported a 35% increase in lead conversion during the first quarter.',
            tags: ['Mobile App', 'Enterprise'],
            image: '/images/projects/sales-app.png'
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const introTl = gsap.timeline({
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 82%'
                }
            });

            const pillTag = headerRef.current?.querySelector('.pill-tag');
            if (pillTag) {
                introTl.fromTo(pillTag, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' });
            }

            introTl.fromTo(
                [headingRef.current, descRef.current, viewAllRef.current],
                { opacity: 0, y: 26 },
                { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out' },
                '-=0.15'
            );

            if (projectsGridRef.current) {
                const projectCards = projectsGridRef.current.querySelectorAll(`.${styles.projectCard}`);
                projectCards.forEach((card, idx) => {
                    const image = card.querySelector(`.${styles.projectImage}`);
                    const offsetX = idx % 2 === 0 ? -48 : 48;

                    gsap.fromTo(
                        card,
                        { opacity: 0, y: 36, x: offsetX },
                        {
                            opacity: 1,
                            y: 0,
                            x: 0,
                            duration: 0.9,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: card,
                                start: 'top 84%'
                            }
                        }
                    );

                    if (image) {
                        gsap.fromTo(
                            image,
                            { scale: 1.12 },
                            {
                                scale: 1,
                                duration: 1.1,
                                ease: 'power3.out',
                                scrollTrigger: {
                                    trigger: card,
                                    start: 'top 84%'
                                }
                            }
                        );
                    }
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.portfolio} id="portfolio">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header} ref={headerRef}>
                    <div>
                        <div className="pill-tag">
                            Our Work
                        </div>
                        <h2 className={styles.heading} ref={headingRef}>
                            Our Latest Projects &<br />
                            <span className={styles.accent}>Case Studies</span>
                        </h2>
                        <p className={styles.headerDesc} ref={descRef}>
                            Explore how we've helped businesses transform their digital experiences and achieve measurable results.
                        </p>
                    </div>
                    <Link href="/project" className={styles.viewAll} ref={viewAllRef}>
                        View All Projects
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className={styles.projectsGrid} ref={projectsGridRef}>
                    {projects.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/project/${project.id}`}
                            className={`${styles.projectCard} ${index % 2 === 1 ? styles.reverse : ''}`}
                        >
                            <div className={styles.projectImage}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.projectOverlay}>
                                    <span className={styles.plusIcon}>Case Study</span>
                                </div>
                            </div>
                            <div className={styles.projectInfo}>
                                <div className={styles.projectTags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={styles.projectTag}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <span className={styles.projectCta}>Open Case Study →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
