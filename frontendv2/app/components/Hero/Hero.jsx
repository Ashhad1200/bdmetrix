'use client';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const videos = ['/vid/hero-1.mp4', '/vid/hero-2.mp4', '/vid/hero-3.mp4'];

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

const outcomes = [
    { label: 'Product Architecture', value: 96 },
    { label: 'On-time Delivery', value: 94 },
    { label: 'Client Satisfaction', value: 98 },
];

const recentWork = [
    { name: 'HealthCare Pro', type: 'Mobile App', status: 'Delivered' },
    { name: 'FinVault', type: 'SaaS Platform', status: 'Live' },
    { name: 'Stacks Inc.', type: 'Web Product', status: 'Live' },
];

export default function Hero() {
    const videoRef = useRef(null);
    const [vidIndex, setVidIndex] = useState(0);

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;
        el.src = videos[vidIndex];
        el.load();
        el.play().catch(() => {});
    }, [vidIndex]);

    const handleEnded = () => setVidIndex((i) => (i + 1) % videos.length);

    return (
        <section className={styles.hero}>
            {/* Video background */}
            <video
                ref={videoRef}
                className={styles.videoBg}
                autoPlay
                muted
                playsInline
                onEnded={handleEnded}
            />
            <div className={styles.videoOverlay} />

            <div className={styles.inner}>
                <div className={styles.copyCol}>
                    {/* <div className={styles.topLabel} data-aos="fade-up">
                        <span className={styles.labelDot}></span>
                        Strategic Software Partner For Ambitious Teams
                    </div> */}

                    <h1 className={styles.heading} data-aos="fade-up" data-aos-delay="80">
                        We build software that drives
                        <span className={styles.accent}> revenue, efficiency,<br />and real growth.</span>
                    </h1>

                    <p className={styles.subHeading} data-aos="fade-up" data-aos-delay="130">
                        Custom CRM, SaaS, mobile apps and web platforms — engineered to deliver measurable business outcomes.
                    </p>

                    <div className={styles.ctaRow} data-aos="fade-up" data-aos-delay="180">
                        <Link href="/contact" className={styles.ctaPill}>
                            <span>Start Your Project</span>
                            <span className={styles.arrowCircle}>
                                <DiagonalArrow color="#0F172A" size={18} />
                            </span>
                        </Link>
                        <Link href="/project" className={styles.ctaOutline}>
                            View Case Studies →
                        </Link>
                    </div>

                    <p className={styles.subNote} data-aos="fade-up" data-aos-delay="220">
                        Free 30-min consultation · No commitment required
                    </p>
                </div>

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
