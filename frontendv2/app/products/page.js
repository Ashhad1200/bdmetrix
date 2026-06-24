'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { products, industries } from '../data/products';
import styles from './products.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IconMap = {
    receipt: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="12" y2="16"/></svg>
    ),
    map: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
    ),
    box: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    ),
    zap: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
    star: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
    chart: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
    ),
    'credit-card': (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
    ),
    shield: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    user: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
    users: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    settings: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    ),
    file: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
    lock: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
    check: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
    ),
    calendar: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    ),
    globe: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
    bell: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    ),
};

export default function ProductsPage() {
    const [activeIndustry, setActiveIndustry] = useState('All');
    const heroRef = useRef(null);
    const gridRef = useRef(null);

    const filtered = activeIndustry === 'All'
        ? products
        : products.filter((p) => p.industry === activeIndustry);

    useEffect(() => {
        if (heroRef.current) {
            const tl = gsap.timeline();
            const pillTag = heroRef.current.querySelector('.pill-tag');
            const title = heroRef.current.querySelector(`.${styles.heroTitle}`);
            const subtitle = heroRef.current.querySelector(`.${styles.heroSubtitle}`);
            const stats = heroRef.current.querySelector(`.${styles.heroStats}`);

            if (pillTag) tl.fromTo(pillTag, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0);
            if (title) tl.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.1);
            if (subtitle) tl.fromTo(subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.2);
            if (stats) tl.fromTo(stats, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.3);
        }
    }, []);

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (!gridRef.current) return;
        const cards = gridRef.current.querySelectorAll(`.${styles.card}`);

        if (isFirstRender.current) {
            isFirstRender.current = false;
            gsap.fromTo(
                cards,
                { opacity: 0, y: 40, scale: 0.97 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.65,
                    ease: 'power3.out',
                    stagger: 0.07,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 85%',
                    },
                }
            );
        } else {
            gsap.fromTo(
                cards,
                { opacity: 0, y: 20, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.45,
                    ease: 'power3.out',
                    stagger: 0.05,
                }
            );
        }
    }, [activeIndustry]);

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero} ref={heroRef}>
                    <div className={styles.container}>
                        <div className="pill-tag">Our Products</div>
                        <h1 className={styles.heroTitle}>
                            Software Built for <span className={styles.accent}>Every Industry</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Eight purpose-built products spanning retail, healthcare, education, real estate,
                            HR, fitness, manufacturing, and hospitality. Each one engineered to solve the
                            specific problems of its domain.
                        </p>
                        <div className={styles.heroStats}>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>8</span>
                                <span className={styles.statLabel}>Products</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.stat}>
                                <span className={styles.statValue}>8</span>
                                <span className={styles.statLabel}>Industries</span>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.stat}>
                                <span className={styles.statValue}>50+</span>
                                <span className={styles.statLabel}>Deployments</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Grid */}
                <section className={styles.productsSection}>
                    <div className={styles.container}>
                        {/* Filter Tabs */}
                        <div className={styles.filters} role="tablist" aria-label="Filter by industry">
                            {industries.map((ind) => (
                                <button
                                    key={ind}
                                    role="tab"
                                    aria-selected={activeIndustry === ind}
                                    className={`${styles.filterBtn} ${activeIndustry === ind ? styles.filterActive : ''}`}
                                    onClick={() => setActiveIndustry(ind)}
                                >
                                    {ind}
                                </button>
                            ))}
                        </div>

                        {/* Cards Grid */}
                        <div className={styles.grid} ref={gridRef}>
                            {filtered.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/products/${product.id}`}
                                    className={styles.card}
                                >
                                    {/* Card Image */}
                                    <div
                                        className={styles.cardImage}
                                        style={{ backgroundImage: `url(${product.heroImage})` }}
                                        aria-hidden="true"
                                    >
                                        <span
                                            className={styles.industryBadge}
                                            style={{ background: product.color }}
                                        >
                                            {product.industryTag}
                                        </span>
                                    </div>

                                    {/* Card Body */}
                                    <div className={styles.cardBody}>
                                        <h3 className={styles.cardName}>{product.name}</h3>
                                        <p className={styles.cardTagline}>{product.tagline}</p>

                                        <ul className={styles.cardProps}>
                                            {product.valueProps.map((vp, i) => (
                                                <li key={i} className={styles.cardProp}>
                                                    <span className={styles.cardPropDot} style={{ background: product.color }} />
                                                    {vp}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className={styles.cardCta}>
                                            Learn More
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {filtered.length === 0 && (
                            <div className={styles.empty}>
                                <p>No products found for this industry.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <div className={styles.ctaBox}>
                            <div className="pill-tag">Get Started</div>
                            <h2 className={styles.ctaTitle}>
                                Not sure which product fits your needs?
                            </h2>
                            <p className={styles.ctaDesc}>
                                Talk to our team. We&apos;ll help you identify the right solution and walk you
                                through a live demo tailored to your business.
                            </p>
                            <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                                Talk to Our Team
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
