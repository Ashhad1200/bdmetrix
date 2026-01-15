'use client';
import styles from './Process.module.css';

export default function Process() {
    const steps = [
        {
            number: '01',
            title: 'Discovery & Strategy',
            description: 'Understanding your goals, users, and business needs to create a strategic roadmap.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Design & Prototyping',
            description: 'UX/UI that engages and converts, with interactive prototypes for validation.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Development & Testing',
            description: 'Clean code, security best practices, and rigorous performance testing.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            number: '04',
            title: 'Launch & Optimization',
            description: 'Seamless deployment with continuous improvement and analytics monitoring.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            )
        },
        {
            number: '05',
            title: 'Support & Growth',
            description: 'Long-term updates, analytics insights, and enhancements for continued success.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
            )
        }
    ];

    return (
        <section className={styles.process} id="process">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className="pill-tag" data-aos="fade-up">
                        How We Work
                    </div>
                    <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="100">
                        Our Proven <span className={styles.accent}>Delivery Process</span>
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className={styles.stepsGrid}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={styles.stepCard}
                            data-aos="fade-up"
                            data-aos-delay={100 + index * 100}
                        >
                            <div className={styles.stepIcon}>
                                {step.icon}
                            </div>
                            <span className={styles.stepNumber}>{step.number}</span>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
