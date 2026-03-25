'use client';
import Link from 'next/link';
import styles from './Hero.module.css';

const DiagonalArrow = ({ color = '#0A0F1E', size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.14 1.527L4.473 20.14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.689 3.589L18.14 1.527L20.201 14.978" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '5+', label: 'Years Experience' },
    { number: '3', label: 'Countries Served' },
    { number: '98%', label: 'Client Retention' },
];

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgGlow}></div>

            <div className={styles.inner}>
                <div className={styles.topLabel} data-aos="fade-up">
                    <span className={styles.labelDot}></span>
                    Your Trusted Software Development Partner
                </div>

                <h1 className={styles.heading} data-aos="fade-up" data-aos-delay="80">
                    We are your trusted development partner with just one goal in focus — to build products that generate a{' '}
                    <span className={styles.accent}>lasting, profitable impact.</span>
                </h1>

                <div className={styles.ctaRow} data-aos="fade-up" data-aos-delay="180">
                    <Link href="/contact" className={styles.ctaPill}>
                        <span>Let's Discuss Your Idea</span>
                        <span className={styles.arrowCircle}>
                            <DiagonalArrow color="#0F172A" size={18} />
                        </span>
                    </Link>
                    <Link href="/project" className={styles.ctaOutline}>
                        View Our Work →
                    </Link>
                </div>

                <p className={styles.subNote} data-aos="fade-up" data-aos-delay="220">
                    Free 30-min consultation · No commitment required
                </p>
            </div>

            {/* Stats Band */}
            <div className={styles.statsBand} data-aos="fade-up" data-aos-delay="300">
                <div className={styles.statsInner}>
                    {stats.map((s, i) => (
                        <div key={i} className={styles.statItem}>
                            <span className={styles.statNumber}>{s.number}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}><div className={styles.wheel}></div></div>
                <span>Scroll</span>
            </div>
        </section>
    );
}
