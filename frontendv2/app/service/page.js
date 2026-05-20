'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import styles from './service.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicePage() {
    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const ctaRef = useRef(null);

    const services = [
        {
            id: 'crm-software',
            number: '01',
            title: 'CRM Software Development',
            description: 'Build powerful CRM systems that centralize customer data, automate workflows, and drive revenue growth. Our custom solutions help you track leads, manage relationships, and boost sales efficiency.',
            outcomes: ['13-15% average sales growth', '30% faster lead management'],
            features: ['Lead & Pipeline Management', 'Customer Data Centralization', 'Workflow Automation', 'Sales Analytics & Reports', 'Integration with Marketing Tools'],
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80'
        },
        {
            id: 'erp-system',
            number: '02',
            title: 'ERP System Development',
            description: 'Streamline your entire business with integrated ERP solutions. From inventory to finance, manufacturing to HR, we build scalable systems that unify your operations and drive efficiency.',
            outcomes: ['18-28% increase in production efficiency', '25-38% reduction in inventory costs'],
            features: ['Inventory Management', 'Financial Accounting', 'HR & Payroll', 'Manufacturing Operations', 'Supply Chain Management'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80'
        },
        {
            id: 'pos-system',
            number: '03',
            title: 'POS System Development',
            description: 'Transform your checkout experience with modern POS systems. Built for restaurants and retail, our solutions handle payments, inventory, and customer loyalty—all in one platform.',
            outcomes: ['20% faster checkout process', '30% reduction in inventory issues'],
            features: ['Multi-location Support', 'Inventory Tracking', 'Payment Processing', 'Customer Loyalty Programs', 'Real-time Analytics'],
            image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1400&q=80'
        },
        {
            id: 'web-development',
            number: '04',
            title: 'Web Platforms & Landing Pages',
            description: 'High-performance websites and landing pages designed to convert qualified traffic into opportunities.',
            outcomes: ['Up to 3x conversion uplift', '90+ Lighthouse performance score'],
            features: ['Custom Design & Development', 'SEO Optimization', 'Mobile-First Approach', 'Performance Optimization', 'Content Management Systems'],
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80'
        },
        {
            id: 'saas-platform',
            number: '05',
            title: 'SaaS Platform Development',
            description: 'Build subscription-based software that scales globally. From MVP to enterprise, we develop multi-tenant SaaS platforms with robust infrastructure and seamless user experience.',
            outcomes: ['99.9% uptime guarantee', '10x faster time-to-market'],
            features: ['Multi-tenant Architecture', 'Subscription & Billing', 'User Management', 'API Development', 'Scalable Cloud Infrastructure'],
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80'
        },
        {
            id: 'mobile-app',
            number: '06',
            title: 'Mobile Application Development',
            description: 'Native and cross-platform mobile apps that delight users. From concept to launch, we build feature-rich applications optimized for performance and engagement.',
            outcomes: ['4.5+ average app store rating', 'Consistent 60fps performance'],
            features: ['iOS & Android Development', 'Cross-platform Solutions', 'UI/UX Design', 'Push Notifications', 'App Store Optimization'],
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80'
        },
        {
            id: 'ui-ux-design',
            number: '07',
            title: 'UI/UX Design & Strategy',
            description: 'Stunning user interfaces and intuitive experiences that drive engagement and conversion. We combine user research, strategic design, and best practices to create digital products users love.',
            outcomes: ['95%+ user satisfaction ratings', '40% increase in engagement metrics'],
            features: ['User Research & Personas', 'Wireframing & Prototyping', 'Visual Design Systems', 'Usability Testing', 'Responsive Design', 'Design to Development Handoff'],
            image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1400&q=80'
        },
        {
            id: 'workflow-automation',
            number: '08',
            title: 'Workflow Automation (n8n)',
            description: 'Eliminate repetitive work with secure, event-driven automation across CRM, ERP, email, and internal tools. We design n8n workflows that increase speed, consistency, and visibility.',
            outcomes: ['40%+ reduction in manual operations', 'Lower operational error rates'],
            features: ['n8n Workflow Architecture', 'API Integrations & Webhooks', 'Automated Alerts & Approvals', 'Data Sync & Enrichment', 'AI-assisted Process Steps'],
            image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1400&q=80'
        }
    ];

    const serviceHighlights = [
        { value: '08', label: 'Core Service Lines' },
        { value: '50+', label: 'Projects Delivered' },
        { value: '98%', label: 'Client Retention' }
    ];

    useEffect(() => {
        // Animate hero section
        if (heroRef.current) {
            const pillTag = heroRef.current.querySelector('.pill-tag');
            const title = heroRef.current.querySelector(`.${styles.title}`);
            const subtitle = heroRef.current.querySelector(`.${styles.subtitle}`);

            const tl = gsap.timeline();
            if (pillTag) tl.fromTo(pillTag, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0);
            if (title) tl.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.1);
            if (subtitle) tl.fromTo(subtitle, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2);
        }

        // Animate service cards with stagger
        if (servicesRef.current) {
            const serviceCards = servicesRef.current.querySelectorAll(`.${styles.serviceCard}`);
            const cardImages = servicesRef.current.querySelectorAll(`.${styles.serviceImage}`);

            serviceCards.forEach((card, idx) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 70, scale: 0.98 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.95,
                        ease: 'power3.out',
                        delay: idx * 0.04,
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 84%'
                        }
                    }
                );
            });

            cardImages.forEach((img) => {
                gsap.fromTo(
                    img,
                    { scale: 1.16, filter: 'saturate(0.85)' },
                    {
                        scale: 1,
                        filter: 'saturate(1)',
                        duration: 1.25,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: img,
                            start: 'top 86%'
                        }
                    }
                );
            });
        }

        // Animate CTA section
        if (ctaRef.current) {
            const ctaTitle = ctaRef.current.querySelector(`.${styles.ctaTitle}`);
            const ctaDesc = ctaRef.current.querySelector(`.${styles.ctaDesc}`);
            const ctaButton = ctaRef.current.querySelector(`.${styles.ctaButton}`);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: 'top 80%',
                },
            });
            if (ctaTitle) tl.fromTo(ctaTitle, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0);
            if (ctaDesc) tl.fromTo(ctaDesc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.1);
            if (ctaButton) tl.fromTo(ctaButton, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2);
        }
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero} ref={heroRef}>
                    <div className={styles.container}>
                        <div className={styles.heroGrid}>
                            <div>
                                <div className="pill-tag">Our Services</div>
                                <h1 className={styles.title}>
                                    Digital Solutions Engineered <span className={styles.accent}>For Growth</span>
                                </h1>
                                <p className={styles.subtitle}>
                                    We build and scale digital systems that improve revenue, operational efficiency, and customer experience.
                                </p>
                                <div className={styles.heroStats}>
                                    {serviceHighlights.map((item) => (
                                        <div key={item.label} className={styles.heroStat}>
                                            <span className={styles.heroStatValue}>{item.value}</span>
                                            <span className={styles.heroStatLabel}>{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.heroPanel}>
                                <h3>Execution Areas</h3>
                                <p>We combine strategy, product engineering, and automation delivery under one team.</p>
                                <ul>
                                    <li>Platform Architecture & Build</li>
                                    <li>Automation & Integration (n8n)</li>
                                    <li>Product Design & Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services List */}
                <section className={styles.services}>
                    <div className={styles.container} ref={servicesRef}>
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={styles.serviceCard}
                            >
                                <div className={styles.serviceGrid}>
                                    <div className={styles.serviceContent}>
                                        <div className={styles.serviceHead}>
                                            <div className={styles.serviceMeta}>
                                                <span className={styles.serviceNumber}>{service.number}</span>
                                                <h2 className={styles.serviceTitle}>{service.title}</h2>
                                            </div>
                                            <Link href={`/service/${service.id}`} className={styles.serviceLink}>
                                                Learn More
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <p className={styles.serviceDesc}>{service.description}</p>

                                        {/* Key Outcomes */}
                                        <div className={styles.outcomes}>
                                            <h4 className={styles.outcomesTitle}>Key Outcomes</h4>
                                            <div className={styles.outcomesList}>
                                                {service.outcomes.map((outcome, i) => (
                                                    <div key={i} className={styles.outcomeItem}>
                                                        <span className={styles.outcomeCheck}>✓</span>
                                                        {outcome}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className={styles.featuresList}>
                                            {service.features.map((feature, i) => (
                                                <div key={i} className={styles.featureItem}>
                                                    <span className={styles.checkmark}>✓</span>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={styles.serviceVisual}>
                                        <div className={styles.serviceImage} style={{ backgroundImage: `url(${service.image})` }} />
                                        <div className={styles.imageLabel}>BD Matrix Delivery</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection} ref={ctaRef}>
                    <div className={styles.container}>
                        <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
                        <p className={styles.ctaDesc}>
                            Let's discuss how we can help you achieve your digital goals.
                        </p>
                        <Link href="/contact" className={styles.ctaButton}>
                            Get Started
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
