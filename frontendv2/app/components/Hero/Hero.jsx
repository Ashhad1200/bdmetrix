'use client';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    { number: '3', label: 'Markets Served' },
    { number: '98%', label: 'Client Retention' },
];

const outcomes = [
    { label: 'Product Architecture', value: 96 },
    { label: 'On-time Delivery', value: 94 },
    { label: 'Client Satisfaction', value: 98 },
];

const recentWork = [
    { name: 'HealthCare Pro', type: 'Mobile App', status: 'Delivered' },
    { name: 'FinVault', type: 'SaaS Platform', status: 'Deployed' },
    { name: 'Stacks Inc.', type: 'Web Platform', status: 'Deployed' },
];

export default function Hero() {
    const videoRef = useRef(null);
    const [vidIndex, setVidIndex] = useState(0);
    const heroRef = useRef(null);
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const ctaRowRef = useRef(null);
    const subNoteRef = useRef(null);
    const visualColRef = useRef(null);
    const statsBandRef = useRef(null);

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;
        el.src = videos[vidIndex];
        el.load();
        el.play().catch(() => {});
    }, [vidIndex]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline();

            if (headingRef.current) {
                timeline.fromTo(
                    headingRef.current,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                    0
                );
            }

            if (subheadingRef.current) {
                timeline.fromTo(
                    subheadingRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
                    '-=0.45'
                );
            }

            if (ctaRowRef.current) {
                const ctaButtons = ctaRowRef.current.querySelectorAll('a');
                timeline.fromTo(
                    ctaButtons,
                    { opacity: 0, y: 18 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' },
                    '-=0.45'
                );
            }

            if (subNoteRef.current) {
                timeline.fromTo(
                    subNoteRef.current,
                    { opacity: 0, y: 8 },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
                    '-=0.2'
                );
            }

            if (visualColRef.current) {
                timeline.fromTo(
                    visualColRef.current,
                    { opacity: 0, x: 35, scale: 0.96 },
                    { opacity: 1, x: 0, scale: 1, duration: 0.85, ease: 'power3.out' },
                    '-=0.6'
                );

                gsap.to(visualColRef.current, {
                    y: -10,
                    duration: 2.8,
                    ease: 'sine.inOut',
                    yoyo: true,
                    repeat: -1
                });
            }

            if (statsBandRef.current) {
                const statItems = statsBandRef.current.querySelectorAll(`.${styles.statItem}`);
                gsap.fromTo(
                    statItems,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: statsBandRef.current,
                            start: 'top 90%'
                        }
                    }
                );
            }

            const progressBars = gsap.utils.toArray(`.${styles.progressFill}`);
            progressBars.forEach((bar) => {
                const target = bar.dataset.value || '0';
                gsap.fromTo(
                    bar,
                    { width: '0%' },
                    {
                        width: `${target}%`,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: bar,
                            start: 'top 90%'
                        }
                    }
                );
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const handleEnded = () => setVidIndex((i) => (i + 1) % videos.length);

    return (
        <section className={styles.hero} ref={heroRef}>
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
                    <div className={styles.topLabel}>
                        <span className={styles.labelDot}></span>
                        Trusted Technology Partner for Growth-Focused Businesses
                    </div>

                    <h1 className={styles.heading} ref={headingRef}>
                        We design and build software that improves
                        <span className={styles.accent}> revenue, efficiency,<br />and operational performance.</span>
                    </h1>

                    <p className={styles.subHeading} ref={subheadingRef}>
                        CRM, SaaS, mobile, and web platforms engineered for measurable business outcomes.
                    </p>

                    <div className={styles.ctaRow} ref={ctaRowRef}>
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

                    <p className={styles.subNote} ref={subNoteRef}>
                        Complimentary 30-minute consultation · No obligation
                    </p>
                </div>
                <div className={styles.visualCol} ref={visualColRef}>
                    <div className={styles.visualCard}>
                        <div className={styles.visualHeader}>
                            <span className={styles.visualPill}>Growth Snapshot</span>
                            <span className={styles.visualMetric}>+41%</span>
                        </div>
                        <p className={styles.visualTitle}>Average revenue improvement across recent engagements</p>

                        <div className={styles.progressList}>
                            {outcomes.map((o, i) => (
                                <div className={styles.progressRow} key={i}>
                                    <div className={styles.progressMeta}>
                                        <span className={styles.progressLabel}>{o.label}</span>
                                        <span className={styles.progressValue}>{o.value}%</span>
                                    </div>
                                    <div className={styles.progressTrack}>
                                        <div className={styles.progressFill} data-value={o.value}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.cardDivider}></div>

                        <div className={styles.projectList}>
                            {recentWork.map((project, i) => (
                                <div className={styles.projectRow} key={i}>
                                    <span className={styles.projectDot}></span>
                                    <div className={styles.projectInfo}>
                                        <span className={styles.projectName}>{project.name}</span>
                                        <span className={styles.projectType}>· {project.type}</span>
                                    </div>
                                    <span className={styles.projectStatus}>{project.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Band */}
            <div className={styles.statsBand} ref={statsBandRef}>
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
