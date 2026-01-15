'use client';
import styles from './About.module.css';

export default function About() {
    const stats = [
        { number: '100+', label: 'Projects Delivered' },
        { number: '50+', label: 'Happy Clients' },
        { number: '15+', label: 'Industry Awards' }
    ];

    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Side - Stats */}
                    <div className={styles.statsSection}>
                        <div className={styles.statsGrid}>
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={styles.statCard}
                                    data-aos="fade-up"
                                    data-aos-delay={100 + index * 100}
                                >
                                    <span className={styles.statNumber}>{stat.number}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.yearsBadge} data-aos="fade-up" data-aos-delay="400">
                            <span className={styles.yearsNumber}>5+</span>
                            <span className={styles.yearsLabel}>Years On<br />The Market</span>
                        </div>
                    </div>

                    {/* Right Side - Text */}
                    <div className={styles.textSection} data-aos="fade-left">
                        <div className="pill-tag">About BD Matrix</div>
                        <h2 className={styles.heading}>
                            Where Innovation Meets <span className={styles.accent}>Impact</span>
                        </h2>
                        <p className={styles.description}>
                            At BD Matrix, we specialize in crafting digital solutions that empower businesses
                            to thrive in the modern economy. From bespoke software platforms to engaging web
                            and mobile experiences, we build products with performance, scalability, and growth in mind.
                        </p>
                        <p className={styles.description}>
                            Our team combines deep technical expertise with a strategic mindset — guiding each
                            project from concept to launch and beyond. We believe in transparent collaboration,
                            exceptional quality, and results that exceed expectations.
                        </p>

                        <div className={styles.missionVision}>
                            <div className={styles.missionCard}>
                                <h4>Our Mission</h4>
                                <p>To enable businesses with robust digital infrastructure and actionable marketing strategies that unlock growth and competitive advantage.</p>
                            </div>
                            <div className={styles.visionCard}>
                                <h4>Our Vision</h4>
                                <p>To be a globally recognized software and digital solutions provider trusted for innovation, reliability, and client success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
