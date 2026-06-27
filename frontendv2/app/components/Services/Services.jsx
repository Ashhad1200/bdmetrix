'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './Services.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const headingRef = useRef(null);
    const descRef = useRef(null);
    const servicesListRef = useRef(null);

    const services = [
        {
            number: '01',
            title: 'AI Client Chatbot',
            description: 'A 24/7 AI chatbot purpose-built for clinics, real estate agencies, and restaurants. Books appointments, qualifies leads, and answers client questions automatically — on your website, WhatsApp, and Instagram.',
            outcomes: ['Live on your channels in days', 'Appointment booking & lead capture built in', 'Custom-branded with your voice and persona'],
            link: '/products/client-chatbot',
            primary: true
        },
        {
            number: '02',
            title: 'POS Systems for Restaurants & Retail',
            description: 'A complete point-of-sale, inventory, and reporting system for your restaurant or retail business. Built around how your team actually works. Deployed in 30 days.',
            outcomes: ['Multi-outlet support with central dashboard', 'Real-time inventory and sales reports', 'Setup, training & 6 months support included'],
            link: '/service/pos-system',
            primary: false
        },
        {
            number: '03',
            title: 'CRM Software Development',
            description: 'Custom CRM systems that centralize customer data, automate follow-ups, and give your sales team the tools they need to close more deals.',
            outcomes: ['Tailored to your sales process', 'Automated workflows and reminders'],
            link: '/service/crm-software',
            primary: false
        },
        {
            number: '04',
            title: 'Workflow Automation (n8n)',
            description: 'Automate repetitive operations across your tools using n8n-based workflows and AI steps. Less manual work, fewer errors, more time for what matters.',
            outcomes: ['Connect your existing tools', 'AI-powered automation steps'],
            link: '/service/workflow-automation',
            primary: false
        }
    ];

    useEffect(() => {
        // Animate heading
        if (headingRef.current) {
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

        // Animate description
        if (descRef.current) {
            gsap.fromTo(
                descRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: descRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

        // Animate service rows with stagger
        if (servicesListRef.current) {
            const serviceRows = servicesListRef.current.querySelectorAll(`.${styles.serviceRow}`);
            gsap.fromTo(
                serviceRows,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: servicesListRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Add hover animations to each service row
            serviceRows.forEach((row) => {
                row.addEventListener('mouseenter', () => {
                    gsap.to(row, {
                        x: 16,
                        backgroundColor: 'rgba(31, 111, 255, 0.04)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });

                row.addEventListener('mouseleave', () => {
                    gsap.to(row, {
                        x: 0,
                        backgroundColor: 'transparent',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });
            });
        }
    }, []);

    return (
        <section className={styles.services} id="services">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h2 className={styles.heading} ref={headingRef}>
                            What We Build{' '}
                            <span className={styles.accent}>Best</span>
                        </h2>
                    </div>
                    <p className={styles.headerRight} ref={descRef}>
                        We build AI chatbots, POS systems, CRM, and automation solutions for businesses that want to grow and streamline operations — worldwide.
                    </p>
                </div>

                {/* Services List */}
                <div className={styles.servicesList} ref={servicesListRef}>
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className={styles.serviceRow}
                        >
                            <span className={styles.serviceNumber}>{service.number}</span>
                            <div className={styles.serviceMain}>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDesc}>{service.description}</p>
                            </div>
                            <div className={styles.serviceOutcomes}>
                                {service.outcomes.map((o, i) => (
                                    <span key={i} className={styles.outcomeBadge}>✓ {o}</span>
                                ))}
                            </div>
                            <span className={styles.serviceArrow}>
                                <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                                    <path d="M18.14 1.527L4.473 20.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.689 3.589L18.14 1.527L20.201 14.978" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
