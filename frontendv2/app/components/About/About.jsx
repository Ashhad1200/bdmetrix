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
                <div className={styles.teamHeading} data-aos="fade-up">
                    <p className={styles.teamKicker}>Build on Reliability and Trust.</p>
                    <h2 className={styles.teamTitle}>Why Choose BD Matrix</h2>
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
                            <p className={styles.teamBio}>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
