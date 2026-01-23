'use client';

import Image from 'next/image';
import styles from './Portfolio.module.css';

export default function Portfolio() {
    const projects = [
        {
            id: 'medical-mobile-app',
            title: 'Medical Mobile Design & Development',
            tags: ['Mobile App', 'UI/UX Design'],
            image: '/images/projects/medical-app.png'
        },
        {
            id: 'stacks-website',
            title: 'Stacks Website Design & Coding',
            tags: ['Web Design', 'Development'],
            image: '/images/projects/website-design.png'
        },
        {
            id: 'financial-wallet',
            title: 'Financial & Wallet Website Design',
            tags: ['Fintech', 'UI/UX Design'],
            image: '/images/projects/fintech-wallet.png'
        },
        {
            id: 'sales-management-app',
            title: 'Sales Management Mobile App Design',
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
