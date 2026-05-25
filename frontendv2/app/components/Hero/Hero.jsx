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

const deploymentPhases = [
    'Week 1: Discovery & setup',
    'Week 2–3: Build & customize',
    'Week 4: Pilot deployment',
    'Ongoing: Support & training',
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
                        POS Systems · Karachi, Pakistan
                    </div>

                    <h1 className={styles.heading} ref={headingRef}>
                        Modern POS systems for
                        <span className={styles.accent}> restaurants and retail<br />in Pakistan.</span>
                    </h1>

                    <p className={styles.subHeading} ref={subheadingRef}>
                        Built in Karachi. Live in 30 days. Serving restaurants and retail businesses across Pakistan.
                    </p>

                    <div className={styles.ctaRow} ref={ctaRowRef}>
                        <Link href="/contact" className={styles.ctaPill}>
                            <span>See the POS in action</span>
                            <span className={styles.arrowCircle}>
                                <DiagonalArrow color="#0F172A" size={18} />
                            </span>
                        </Link>
                        <Link href="/project" className={styles.ctaOutline}>
                            View a case study →
                        </Link>
                    </div>

                    <p className={styles.subNote} ref={subNoteRef}>
                        Currently serving restaurants and retail businesses across Pakistan
                    </p>
                </div>
                <div className={styles.visualCol} ref={visualColRef}>
                    <div className={styles.visualCard}>
                        <div className={styles.visualHeader}>
                            <span className={styles.visualPill}>POS Deployment</span>
                            <span className={styles.visualMetric}>30 Days</span>
                        </div>
                        <p className={styles.visualTitle}>From first call to live system in 4 weeks</p>

                        <div className={styles.progressList}>
                            {deploymentPhases.map((phase, i) => (
                                <div className={styles.progressRow} key={i}>
                                    <div className={styles.progressMeta}>
                                        <span className={styles.progressLabel}>&#10003; {phase}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.cardDivider}></div>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}><div className={styles.wheel}></div></div>
                <span>Scroll</span>
            </div>
        </section>
    );
}
