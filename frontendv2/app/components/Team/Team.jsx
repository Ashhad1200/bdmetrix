'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Team.module.css';

export default function Team() {
    const team = [
        {
            name: 'Syed Ashhad',
            role: 'CEO & Lead Engineer',
            image: '/images/team/member-1.png'
        },
        {
            name: 'Abdul Rafay',
            role: 'Co-Founder',
            image: '/images/team/member-2.png'
        },
        {
            name: 'Abdullah Farooqui',
            role: 'Media & Sales Lead',
            image: '/images/team/member-3.png'
        },
        {
            name: 'Aimen Tariq',
            role: 'Product Design Lead',
            image: '/images/team/member-4.png'
        },
        {
            name: 'Muhammad Danish',
            role: 'Technical Director',
            image: '/images/team/founder.png'
        }
    ];

    return (
        <section className={styles.team} id="team">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading} data-aos="fade-up">
                        Meet our beautiful team
                    </h2>
                    <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="80">
                        Our philosophy is simple: hire great people and give them the resources and support to do their best work.
                    </p>

                    <div className={styles.actions} data-aos="fade-up" data-aos-delay="120">
                        <Link href="/contact" className={styles.btnGhost}>Book a demo</Link>
                        <Link href="/contact" className={styles.btnPrimary}>Get in touch</Link>
                    </div>
                </div>

                <div className={styles.teamGrid} data-aos="fade-up" data-aos-delay="160">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className={styles.memberCard}
                        >
                            <div className={styles.memberImage}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.memberInfoBox}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberRole}>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.testimonial} data-aos="fade-up" data-aos-delay="220">
                    <p className={styles.quote}>
                        We have been blown away by the support from BD Matrix. We suggested an improvement to our account manager and they implemented it in just a few days.
                    </p>
                    <div className={styles.author}>
                        <div className={styles.avatarWrap}>
                            <Image
                                src="/images/team/member-2.png"
                                alt="Client avatar"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            <p className={styles.authorName}>Amelie Laurent</p>
                            <p className={styles.authorRole}>CTO, Beyond Systems</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
