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
            title: 'CRM Software Development',
            description: 'Build powerful CRM systems that centralize customer data, automate workflows, and drive revenue growth.',
            outcomes: ['13-15% average sales growth', '30% faster lead management'],
            link: '/service/crm-software'
        },
        {
            number: '02',
            title: 'ERP System Development',
            description: 'Streamline your entire business with integrated ERP solutions. From inventory to finance, unified operations.',
            outcomes: ['18-28% increase in production efficiency', '25-38% reduction in inventory costs'],
            link: '/service/erp-system'
        },
        {
            number: '03',
            title: 'POS System Development',
            description: 'Transform your checkout experience with modern POS systems for restaurants and retail.',
            outcomes: ['20% faster checkout process', '30% reduction in inventory issues'],
            link: '/service/pos-system'
        },
        {
            number: '04',
            title: 'Web Platforms & Landing Pages',
            description: 'High-performance websites and landing pages designed to convert qualified traffic into opportunities.',
            outcomes: ['Up to 3x conversion uplift', '90+ Lighthouse performance score'],
            link: '/service/web-development'
        },
        {
            number: '05',
            title: 'SaaS Platform Development',
            description: 'Build subscription-based software that scales globally. From MVP to enterprise, multi-tenant architecture.',
            outcomes: ['99.9% uptime guarantee', '10x faster time-to-market'],
            link: '/service/saas-platform'
        },
        {
            number: '06',
            title: 'Mobile Application Development',
            description: 'Native and cross-platform mobile apps that delight users. Feature-rich applications optimized for engagement.',
            outcomes: ['4.5+ average app store rating', 'Consistent 60fps performance'],
            link: '/service/mobile-app'
        },
        {
            number: '07',
            title: 'UI/UX Design & Strategy',
            description: 'Stunning user interfaces and intuitive experiences that drive engagement and conversion.',
            outcomes: ['95%+ user satisfaction ratings', '40% increase in engagement metrics'],
            link: '/service/ui-ux-design'
        },
        {
            number: '08',
            title: 'Workflow Automation (n8n)',
            description: 'Automate repetitive operations across your tools using n8n-based workflows, AI steps, and secure integrations.',
            outcomes: ['40%+ reduction in manual tasks', 'Faster, error-resistant operations'],
            link: '/service/workflow-automation'
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
                            Digital Solutions Engineered{' '}
                            <span className={styles.accent}>For Growth</span>
                        </h2>
                    </div>
                    <p className={styles.headerRight} ref={descRef}>
                        From CRM and SaaS platforms to workflow automation, we engineer solutions that solve real business problems and drive measurable outcomes.
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
