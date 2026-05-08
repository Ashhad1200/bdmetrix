'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Portfolio.module.css';

export default function Portfolio() {
    const projects = [
        {
            id: 'medical-mobile-app',
            title: 'Medical Mobile Design & Development',
            description: 'A healthcare provider needed a patient-facing mobile app to manage appointments and medical records. We designed and built a clean, HIPAA-conscious interface with appointment booking, prescription tracking, and push notifications. The app launched in 8 weeks and achieved a 4.7-star rating in its first month.',
            tags: ['Mobile App', 'UI/UX Design'],
            image: '/images/projects/medical-app.png'
        },
        {
            id: 'stacks-website',
            title: 'Stacks Website Design & Coding',
            description: 'Stacks needed a high-performance marketing website to support their product launch and drive sign-ups. We built a fully responsive Next.js site with custom animations, SEO optimization, and a 94 Lighthouse performance score. The site went live in 3 weeks and conversion rates exceeded their initial target by 40%.',
            tags: ['Web Design', 'Development'],
            image: '/images/projects/website-design.png'
        },
        {
            id: 'financial-wallet',
            title: 'Financial & Wallet Website Design',
            description: 'A fintech startup required a trust-building web presence for their digital wallet product targeting young professionals. We designed a modern, conversion-focused landing page with interactive UI elements and a seamless onboarding flow. The design helped them close their first round of seed funding within 60 days of launch.',
            tags: ['Fintech', 'UI/UX Design'],
            image: '/images/projects/fintech-wallet.png'
        },
        {
            id: 'sales-management-app',
            title: 'Sales Management Mobile App Design',
            description: 'An enterprise sales team was struggling with lost leads and no visibility into their pipeline. We built a custom mobile CRM and sales management app with real-time dashboards, lead tracking, and automated follow-up reminders. The client reported a 35% increase in lead conversion within the first quarter.',
            tags: ['Mobile App', 'Enterprise'],
            image: '/images/projects/sales-app.png'
        }
    ];

    return (
        <section className={styles.portfolio} id="portfolio">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <div className="pill-tag" data-aos="fade-up">
                            Our Work
                        </div>
                        <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="100">
                            Our Latest Projects &<br />
                            <span className={styles.accent}>Case Studies</span>
                        </h2>
                        <p className={styles.headerDesc} data-aos="fade-up" data-aos-delay="150">
                            Explore how we've helped businesses transform their digital experiences and achieve measurable results.
                        </p>
                    </div>
                    <Link href="/project" className={styles.viewAll} data-aos="fade-up" data-aos-delay="150">
                        View All Projects
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/project/${project.id}`}
                            className={styles.projectCard}
                            data-aos="fade-up"
                            data-aos-delay={100 + index * 100}
                        >
                            <div className={styles.projectImage}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.projectOverlay}>
                                    <span className={styles.plusIcon}>+</span>
                                </div>
                            </div>
                            <div className={styles.projectInfo}>
                                <div className={styles.projectTags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={styles.projectTag}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                {project.description && (
                                    <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6, marginTop: '10px' }}>{project.description}</p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
