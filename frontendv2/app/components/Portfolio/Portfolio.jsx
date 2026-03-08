'use client';

import Image from 'next/image';
import styles from './Portfolio.module.css';

export default function Portfolio() {
    const projects = [
        {
            id: 'medical-mobile-app',
            title: 'Medical Mobile Design & Development',
            description: 'A private healthcare network needed a unified app for patient intake, appointment scheduling, and vitals tracking across multiple clinics. We designed and built a cross-platform mobile app with HIPAA-aware data handling and real-time doctor-patient communication. The client onboarded 2,000+ patients in the first quarter, reducing front-desk wait times by 40%.',
            tags: ['Mobile App', 'UI/UX Design'],
            image: '/images/projects/medical-app.png'
        },
        {
            id: 'stacks-website',
            title: 'Stacks Website Design & Coding',
            description: 'A B2B SaaS startup needed a high-converting marketing site with an integrated analytics dashboard for their existing product. We built a blazing-fast Next.js site with custom animations, a live demo sandbox, and embedded analytics views. The new site achieved a 92 Lighthouse score and increased demo signups by 3.2x within 60 days of launch.',
            tags: ['Web Design', 'Development'],
            image: '/images/projects/website-design.png'
        },
        {
            id: 'financial-wallet',
            title: 'Financial & Wallet Website Design',
            description: 'A fintech company required a secure crypto wallet interface with portfolio tracking, transaction history, and real-time market data feeds. We delivered a responsive web application with multi-currency support, two-factor authentication, and institutional-grade encryption. The platform processed over $1.2M in transactions within its first 3 months of operation.',
            tags: ['Fintech', 'UI/UX Design'],
            image: '/images/projects/fintech-wallet.png'
        },
        {
            id: 'sales-management-app',
            title: 'Sales Management Mobile App Design',
            description: 'An enterprise client with a 40-person sales team needed a mobile CRM to replace spreadsheets and disconnected tools. We built a custom mobile app with lead scoring, pipeline visualization, automated follow-up reminders, and manager dashboards. The sales team reported a 27% increase in quarterly revenue and cut their reporting time by over 60%.',
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
                    <div className={styles.viewAll} data-aos="fade-up" data-aos-delay="150">
                        View All Projects
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
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
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '10px', opacity: 0.8 }}>{project.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
