'use client';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
    const stats = [
        { number: '5+', label: 'Years of Experience' },
        { number: '50+', label: 'Projects Completed' },
    ];

    const team = [
        { name: 'Syed Ashhad', role: 'CEO, Founder & Lead Developer', bio: 'Syed Ashhad founded BD Matrix to deliver software that solves real business problems, not cookie-cutter templates. He leads both strategy and development, combining hands-on technical expertise with a deep understanding of what businesses actually need to grow.', image: '/images/team/member-1.png' },
        { name: 'Abdul Rafay', role: 'Co-Founder', bio: 'Abdul Rafay co-founded BD Matrix and plays a key role in shaping the company\'s vision, partnerships, and operational strategy. His business acumen and client-first approach have been instrumental in scaling BD Matrix across multiple markets.', image: '/images/team/member-2.png' },
        { name: 'Abdullah Farooqui', role: 'Media & Sales Lead', bio: 'Abdullah drives BD Matrix\'s brand presence, lead generation, and client outreach across all digital channels. From social media strategy to closing deals, he ensures the right clients find BD Matrix and have a seamless experience from first contact to kickoff.', image: '/images/team/member-3.png' },
    ];

    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.sectionHeader} data-aos="fade-up">
                    <div className="pill-tag">About BD Matrix</div>
                    <h2 className={styles.heading}>
                        Meet the Team Behind <span className={styles.accent}>BD Matrix</span>
                    </h2>
                </div>

                {/* Two-Column: Founder + Stats */}
                <div className={styles.content}>
                    {/* Left Column — Founder */}
                    <div className={styles.founderSection} data-aos="fade-right">
                        <div className={styles.founderImageWrapper}>
                            <Image
                                src="/images/team/member-1.png"
                                alt="Syed Ashhad - Founder of BD Matrix"
                                width={400}
                                height={480}
                                className={styles.founderImage}
                            />
                        </div>
                        <div className={styles.founderStory}>
                            <h3 className={styles.founderName}>Syed Ashhad — Founder</h3>
                            <p className={styles.founderText}>
                                BD Matrix was born from a simple frustration: businesses everywhere were being sold
                                cookie-cutter digital solutions that didn't fit their real-world needs. Syed Ashhad
                                started this company to bridge the gap — combining deep technical expertise with a
                                genuine understanding of how businesses operate, to deliver software that actually
                                drives growth and efficiency.
                            </p>
                        </div>
                    </div>

                    {/* Right Column — Stats */}
                    <div className={styles.statsSection} data-aos="fade-left">
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
                        <p className={styles.statsDescription}>
                            Our team combines deep technical expertise with a strategic mindset — guiding each
                            project from concept to launch and beyond. We believe in transparent collaboration,
                            exceptional quality, and results that exceed expectations.
                        </p>
                    </div>
                </div>

                {/* Team Tagline */}
                <div className={styles.teamPhotoWrapper} data-aos="fade-up" style={{ background: 'var(--navy-fortress, #0f172a)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 40px', minHeight: '200px' }}>
                    <p style={{ color: '#fff', fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, textAlign: 'center', lineHeight: 1.4, margin: 0 }}>
                        A small, focused team. <span style={{ color: 'var(--profit-green, #10b981)' }}>Big on delivery.</span>
                    </p>
                </div>

                {/* Team Members Grid */}
                <div className={styles.teamGrid}>
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className={styles.teamCard}
                            data-aos="fade-up"
                            data-aos-delay={100 + index * 80}
                        >
                            <div className={styles.teamImageWrapper}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className={styles.teamImage}
                                />
                            </div>
                            <h4 className={styles.teamName}>{member.name}</h4>
                            <p className={styles.teamRole}>{member.role}</p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--slate-body)', lineHeight: 1.6, marginTop: '8px', opacity: 0.85 }}>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
