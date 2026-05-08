'use client';
import Link from 'next/link';
import styles from './Services.module.css';

export default function Services() {
    const services = [
        {
            number: '01',
            title: 'CRM Software Development',
            description: 'Build powerful CRM systems that centralize customer data, automate workflows, and drive revenue growth.',
            outcomes: ['13-15% average sales growth', '30% faster lead tracking'],
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
            title: 'Landing Sites & Web Development',
            description: 'Premium landing pages and websites that convert visitors into customers. SEO-optimized and high-performance.',
            outcomes: ['3x improvement in conversion rates', '90+ Lighthouse performance scores'],
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
            outcomes: ['4.5+ average app store rating', '60fps smooth performance'],
            link: '/service/mobile-app'
        }
    ];

    return (
        <section className={styles.services} id="services">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        {/* <div className="pill-tag" data-aos="fade-up">What We Do</div> */}
                        <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="100">
                            Digital Solutions Engineered{' '}
                            <span className={styles.accent}>For Growth</span>
                        </h2>
                    </div>
                    <p className={styles.headerRight} data-aos="fade-up" data-aos-delay="150">
                        From CRM to SaaS platforms, we engineer software that solves real business problems and drives measurable outcomes.
                    </p>
                </div>

                {/* Services List — Cubix style numbered rows */}
                <div className={styles.servicesList}>
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className={styles.serviceRow}
                            data-aos="fade-up"
                            data-aos-delay={50 + index * 50}
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
