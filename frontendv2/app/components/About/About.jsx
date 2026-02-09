'use client';
import styles from './About.module.css';

export default function About() {
    const pillars = [
        { 
            title: 'Strategic Analysis', 
            desc: 'We deep-dive into your business logic to ensure every line of code serves a purpose.' 
        },
        { 
            title: 'Secure Architecture', 
            desc: 'Bank-grade security protocols integrated from day one to protect your digital assets.' 
        },
        { 
            title: 'Global Compliance', 
            desc: 'Solutions built to meet international standards for reliability and data protection.' 
        }
    ];

    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Left Side - Pillars */}
                    <div className={styles.statsSection}>
                        <div className={styles.statsGrid}>
                            {pillars.map((pillar, index) => (
                                <div
                                    key={index}
                                    className={styles.statCard}
                                    data-aos="fade-up"
                                    data-aos-delay={100 + index * 100}
                                >
                                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.yearsBadge} data-aos="fade-up" data-aos-delay="400">
                            <div className={styles.badgeInner}>
                                <span className={styles.badgeNumber}>Quality</span>
                                <span className={styles.badgeText}>First Approach</span>
                            </div>
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
