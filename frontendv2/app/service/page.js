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
            outcomes: ['13-15% average sales growth', '30% faster lead tracking'],
            features: ['Lead & Pipeline Management', 'Customer Data Centralization', 'Workflow Automation', 'Sales Analytics & Reports', 'Integration with Marketing Tools']
        },
        {
            id: 'erp-system',
            number: '02',
            title: 'ERP System Development',
            description: 'Streamline your entire business with integrated ERP solutions. From inventory to finance, manufacturing to HR, we build scalable systems that unify your operations and drive efficiency.',
            outcomes: ['18-28% increase in production efficiency', '25-38% reduction in inventory costs'],
            features: ['Inventory Management', 'Financial Accounting', 'HR & Payroll', 'Manufacturing Operations', 'Supply Chain Management']
        },
        {
            id: 'pos-system',
            number: '03',
            title: 'POS System Development',
            description: 'Transform your checkout experience with modern POS systems. Built for restaurants and retail, our solutions handle payments, inventory, and customer loyalty—all in one platform.',
            outcomes: ['20% faster checkout process', '30% reduction in inventory issues'],
            features: ['Multi-location Support', 'Inventory Tracking', 'Payment Processing', 'Customer Loyalty Programs', 'Real-time Analytics']
        },
        {
            id: 'web-development',
            number: '04',
            title: 'Landing Sites & Web Development',
            description: 'Premium landing pages and websites that convert visitors into customers. SEO-optimized, mobile-responsive, and built with modern frameworks for maximum performance.',
            outcomes: ['3x improvement in conversion rates', '90+ Lighthouse performance scores'],
            features: ['Custom Design & Development', 'SEO Optimization', 'Mobile-First Approach', 'Performance Optimization', 'Content Management Systems']
        },
        {
            id: 'saas-platform',
            number: '05',
            title: 'SaaS Platform Development',
            description: 'Build subscription-based software that scales globally. From MVP to enterprise, we develop multi-tenant SaaS platforms with robust infrastructure and seamless user experience.',
            outcomes: ['99.9% uptime guarantee', '10x faster time-to-market'],
            features: ['Multi-tenant Architecture', 'Subscription & Billing', 'User Management', 'API Development', 'Scalable Cloud Infrastructure']
        },
        {
            id: 'mobile-app',
            number: '06',
            title: 'Mobile Application Development',
            description: 'Native and cross-platform mobile apps that delight users. From concept to launch, we build feature-rich applications optimized for performance and engagement.',
            outcomes: ['4.5+ average app store rating', '60fps smooth performance'],
            features: ['iOS & Android Development', 'Cross-platform Solutions', 'UI/UX Design', 'Push Notifications', 'App Store Optimization']
        },
        {
            id: 'ui-ux-design',
            number: '07',
            title: 'UI/UX Design & Strategy',
            description: 'Stunning user interfaces and intuitive experiences that drive engagement and conversion. We combine user research, strategic design, and best practices to create digital products users love.',
            outcomes: ['95%+ user satisfaction ratings', '40% increase in engagement metrics'],
            features: ['User Research & Personas', 'Wireframing & Prototyping', 'Visual Design Systems', 'Usability Testing', 'Responsive Design', 'Design to Development Handoff']
        },
        {
            id: 'workflow-automation',
            number: '08',
            title: 'Workflow Automation (n8n)',
            description: 'Eliminate repetitive work with secure, event-driven automation across CRM, ERP, email, and internal tools. We design n8n workflows that increase speed, consistency, and visibility.',
            outcomes: ['40%+ reduction in manual operations', 'Lower operational error rates'],
            features: ['n8n Workflow Architecture', 'API Integrations & Webhooks', 'Automated Alerts & Approvals', 'Data Sync & Enrichment', 'AI-assisted Process Steps']
        }
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
            gsap.fromTo(
                serviceCards,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: servicesRef.current,
                        start: 'top 80%',
                    },
                }
            );
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
                        <div className="pill-tag">Our Services</div>
                        <h1 className={styles.title}>
                            Digital Solutions Engineered <span className={styles.accent}>For Growth</span>
                        </h1>
                        <p className={styles.subtitle}>
                            We build powerful software solutions that help businesses scale, streamline operations, and drive measurable results.
                        </p>
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
                                <div className={styles.serviceNumber}>{service.number}</div>
                                <div className={styles.serviceContent}>
                                    <h2 className={styles.serviceTitle}>{service.title}</h2>
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
                                <Link href={`/service/${service.id}`} className={styles.serviceLink}>
                                    Learn More
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
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
