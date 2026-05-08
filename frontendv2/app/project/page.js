import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Image from 'next/image';
import styles from './project.module.css';

export const metadata = {
  title: 'Our Projects | BD Matrix',
  description: 'Case studies and client projects: mobile apps, SaaS platforms, fintech, healthcare, and enterprise software.',
};

export default function ProjectPage() {
    const projects = [
        {
            id: 'medical-mobile-app',
            title: 'Medical Mobile Design & Development',
            description: 'A private healthcare network needed a unified app for patient intake, appointment scheduling, and vitals tracking across multiple clinics. We designed and built a cross-platform mobile app with HIPAA-aware data handling and real-time doctor-patient communication. The client onboarded 2,000+ patients in the first quarter, reducing front-desk wait times by 40%.',
            tags: ['Mobile App', 'UI/UX Design', 'Healthcare'],
            image: '/images/projects/medical-app.png'
        },
        {
            id: 'stacks-website',
            title: 'Stacks Website Design & Coding',
            description: 'A B2B SaaS startup needed a high-converting marketing site with an integrated analytics dashboard for their existing product. We built a blazing-fast Next.js site with custom animations, a live demo sandbox, and embedded analytics views. The new site achieved a 92 Lighthouse score and increased demo signups by 3.2x within 60 days of launch.',
            tags: ['Web Design', 'Development', 'SaaS'],
            image: '/images/projects/website-design.png'
        },
        {
            id: 'financial-wallet',
            title: 'Financial & Wallet Website Design',
            description: 'A fintech company required a secure crypto wallet interface with portfolio tracking, transaction history, and real-time market data feeds. We delivered a responsive web application with multi-currency support, two-factor authentication, and institutional-grade encryption. The platform processed over $1.2M in transactions within its first 3 months of operation.',
            tags: ['Fintech', 'UI/UX Design', 'Crypto'],
            image: '/images/projects/fintech-wallet.png'
        },
        {
            id: 'sales-management-app',
            title: 'Sales Management Mobile App Design',
            description: 'An enterprise client with a 40-person sales team needed a mobile CRM to replace spreadsheets and disconnected tools. We built a custom mobile app with lead scoring, pipeline visualization, automated follow-up reminders, and manager dashboards. The sales team reported a 27% increase in quarterly revenue and cut their reporting time by over 60%.',
            tags: ['Mobile App', 'Enterprise', 'CRM'],
            image: '/images/projects/sales-app.png'
        },
        {
            id: 'real-estate-platform',
            title: 'Real Estate Platform Design',
            description: 'A property development firm needed a digital platform to showcase luxury apartments and streamline buyer inquiries. We built a responsive listing site with interactive map search, advanced filters, virtual tour integration, and a lead capture system. The platform generated 150+ qualified leads in its first month, reducing the client\'s reliance on third-party listing sites by 70%.',
            tags: ['Web Design', 'UI/UX', 'Real Estate'],
            image: '/images/projects/real-estate.png'
        },
        {
            id: 'fitness-tracking-app',
            title: 'Fitness Tracking Mobile App',
            description: 'A fitness startup wanted a mobile app to help users track workouts, monitor calories, and view heart rate trends from wearable devices. We developed a native-feel app with gamified progress tracking, social challenges, and Apple Health/Google Fit integration. The app reached 5,000 active users within 8 weeks of launch with a 4.7-star average rating.',
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
