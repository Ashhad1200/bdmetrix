'use client';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from './project.module.css';

export default function ProjectPage() {
    const projects = [
        {
            id: 'medical-mobile-app',
            title: 'Medical Mobile Design & Development',
            description: 'A comprehensive healthcare app with patient vitals tracking, appointment scheduling, and health metrics dashboard.',
            tags: ['Mobile App', 'UI/UX Design', 'Healthcare'],
            image: '/images/projects/medical-app.png'
        },
        {
            id: 'stacks-website',
            title: 'Stacks Website Design & Coding',
            description: 'Modern SaaS website with analytics dashboard, built with latest web technologies for maximum performance.',
            tags: ['Web Design', 'Development', 'SaaS'],
            image: '/images/projects/website-design.png'
        },
        {
            id: 'financial-wallet',
            title: 'Financial & Wallet Website Design',
            description: 'Cryptocurrency wallet app with portfolio tracking, transaction history, and real-time market data.',
            tags: ['Fintech', 'UI/UX Design', 'Crypto'],
            image: '/images/projects/fintech-wallet.png'
        },
        {
            id: 'sales-management-app',
            title: 'Sales Management Mobile App Design',
            description: 'Enterprise CRM dashboard with lead tracking, sales pipeline, and team performance analytics.',
            tags: ['Mobile App', 'Enterprise', 'CRM'],
            image: '/images/projects/sales-app.png'
        },
        {
            id: 'real-estate-platform',
            title: 'Real Estate Platform Design',
            description: 'Property listing platform with map integration, search filters, and luxury apartment showcase.',
            tags: ['Web Design', 'UI/UX', 'Real Estate'],
            image: '/images/projects/real-estate.png'
        },
        {
            id: 'fitness-tracking-app',
            title: 'Fitness Tracking Mobile App',
            description: 'Health and fitness app with workout tracking, calorie counter, heart rate monitor, and activity analytics.',
            tags: ['Mobile App', 'Health', 'Fitness'],
            image: '/images/projects/fitness-app.png'
        }
    ];

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className="pill-tag" data-aos="fade-up">Our Projects</div>
                        <h1 className={styles.title} data-aos="fade-up" data-aos-delay="100">
                            Our Latest <span className={styles.accent}>Case Studies</span>
                        </h1>
                        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
                            Explore how we've helped businesses transform their digital experiences and achieve measurable results.
                        </p>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className={styles.projects}>
                    <div className={styles.container}>
                        <div className={styles.projectsGrid}>
                            {projects.map((project, index) => (
                                <Link
                                    key={project.id}
                                    href={`/project/${project.id}`}
                                    className={styles.projectCard}
                                    data-aos="fade-up"
                                    data-aos-delay={100 + (index % 3) * 100}
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
                                        <p className={styles.projectDesc}>{project.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <h2 className={styles.ctaTitle} data-aos="fade-up">Have a Project in Mind?</h2>
                        <p className={styles.ctaDesc} data-aos="fade-up" data-aos-delay="100">
                            Let's discuss how we can bring your vision to life.
                        </p>
                        <Link href="/contact" className={styles.ctaButton} data-aos="fade-up" data-aos-delay="200">
                            Start Your Project
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
