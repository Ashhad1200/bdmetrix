'use client';
import styles from './Team.module.css';

export default function Team() {
    const team = [
        {
            name: 'Mr. David Liam',
            role: 'CEO & Founder',
            image: '/images/team/team-1.jpg'
        },
        {
            name: 'Miss Alex Mika',
            role: 'CTO',
            image: '/images/team/team-2.jpg'
        },
        {
            name: 'Mr. John Smith',
            role: 'Lead Developer',
            image: '/images/team/team-3.jpg'
        },
        {
            name: 'Jessika Joya',
            role: 'Marketing Director',
            image: '/images/team/team-4.jpg'
        }
    ];

    return (
        <section className={styles.team} id="team">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className="pill-tag" data-aos="fade-up">
                        Our Specialist
                    </div>
                    <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="100">
                        Your Trusted Agency for<br />
                        <span className={styles.accent}>Digital Success</span>
                    </h2>
                </div>

                {/* Team Grid */}
                <div className={styles.teamGrid}>
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className={styles.memberCard}
                            data-aos="fade-up"
                            data-aos-delay={100 + index * 100}
                        >
                            <div className={styles.memberImage}>
                                <div className={styles.imagePlaceholder}>
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.memberInfo}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberRole}>{member.role}</p>
                            </div>
                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialLink}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                                <a href="#" className={styles.socialLink}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                    </svg>
                                </a>
                                <a href="#" className={styles.socialLink}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trusted Points */}
                <div className={styles.trustedPoints} data-aos="fade-up" data-aos-delay="400">
                    <div className={styles.pointsGrid}>
                        <div className={styles.point}>
                            <span className={styles.checkmark}>✓</span>
                            Passionate Problem-Solvers For Your Business
                        </div>
                        <div className={styles.point}>
                            <span className={styles.checkmark}>✓</span>
                            Business & Financial Creative Innovators
                        </div>
                        <div className={styles.point}>
                            <span className={styles.checkmark}>✓</span>
                            Provide National Trusted Client-Centered
                        </div>
                        <div className={styles.point}>
                            <span className={styles.checkmark}>✓</span>
                            Perfect & Modern Work Results-Driven
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
