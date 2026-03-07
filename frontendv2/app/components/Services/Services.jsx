'use client';

import Image from 'next/image';
import styles from './Services.module.css';

export default function Services() {
    const services = [
        {
            number: '01',
            title: 'CRM Software Development',
            description: 'Build powerful CRM systems that centralize customer data, automate workflows, and drive revenue growth. Our custom solutions help you track leads, manage relationships, and boost sales efficiency.',
            outcomes: ['13-15% average sales growth', '30% faster lead tracking'],
            problemSolves: 'Scattered customer data, lost leads, and disconnected sales processes that cost you revenue.',
            whoFor: 'Sales-driven businesses, agencies, and B2B companies managing growing client pipelines.',
            image: '/images/services/crm-software.png',
            link: '/service/crm-software'
        },
        {
            number: '02',
            title: 'ERP System Development',
            description: 'Streamline your entire business with integrated ERP solutions. From inventory to finance, manufacturing to HR, we build scalable systems that unify your operations and drive efficiency.',
            outcomes: ['18-28% increase in production efficiency', '25-38% reduction in inventory costs'],
            problemSolves: 'Siloed departments, manual processes, and lack of real-time visibility across operations.',
            whoFor: 'Manufacturing, logistics, and mid-to-large enterprises needing unified operational control.',
            image: '/images/services/erp-system.png',
            link: '/service/erp-system'
        },
        {
            number: '03',
            title: 'POS System Development',
            description: 'Transform your checkout experience with modern POS systems. Built for restaurants and retail, our solutions handle payments, inventory, and customer loyalty—all in one platform.',
            outcomes: ['20% faster checkout process', '30% reduction in inventory issues'],
            problemSolves: 'Slow checkouts, inventory mismatches, and disconnected payment and loyalty systems.',
            whoFor: 'Restaurants, retail stores, and multi-location businesses that need a seamless in-store experience.',
            image: '/images/services/pos-system.png',
            link: '/service/pos-system'
        },
        {
            number: '04',
            title: 'Landing Sites & Web Development',
            description: 'Premium landing pages and websites that convert visitors into customers. SEO-optimized, mobile-responsive, and built with modern frameworks for maximum performance.',
            outcomes: ['3x improvement in conversion rates', '90+ Lighthouse performance scores'],
            problemSolves: 'Low conversion rates, poor search visibility, and outdated websites that don\'t reflect your brand.',
            whoFor: 'Startups, service businesses, and marketing teams launching campaigns or rebranding online.',
            image: '/images/services/web-development.png',
            link: '/service/web-development'
        },
        {
            number: '05',
            title: 'SaaS Platform Development',
            description: 'Build subscription-based software that scales globally. From MVP to enterprise, we develop multi-tenant SaaS platforms with robust infrastructure and seamless user experience.',
            outcomes: ['99.9% uptime guarantee', '10x faster time-to-market'],
            problemSolves: 'The need to validate a software idea quickly and scale it without rebuilding from scratch.',
            whoFor: 'Tech founders, product teams, and enterprises launching subscription-based software products.',
            image: '/images/services/saas-platform.png',
            link: '/service/saas-platform'
        },
        {
            number: '06',
            title: 'Mobile Application Development',
            description: 'Native and cross-platform mobile apps that delight users. From concept to launch, we build feature-rich applications optimized for performance and engagement.',
            outcomes: ['4.5+ average app store rating', '60fps smooth performance'],
            problemSolves: 'No mobile presence, poor user engagement, or an existing app that\'s slow and unreliable.',
            whoFor: 'Businesses expanding to mobile, startups building their first app, and companies modernizing legacy apps.',
            image: '/images/services/mobile-app.png',
            link: '/service/mobile-app'
        }
    ];

    return (
        <section className={styles.services} id="services">
            {/* Background Text */}
            <div className={styles.bgText}>Services</div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className="pill-tag" data-aos="fade-up">
                        What We Do
                    </div>
                    <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="100">
                        Digital Solutions Engineered<br />
                        <span className={styles.accent}>For Growth</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={styles.serviceCard}
                            data-aos="fade-up"
                            data-aos-delay={100 + index * 50}
                        >
                            <div className={styles.serviceImageWrapper}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={700}
                                    height={460}
                                    className={styles.serviceImage}
                                />
                            </div>
                            <span className={styles.serviceNumber}>{service.number}</span>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDesc}>{service.description}</p>

                            <div className={styles.outcomes}>
                                <h4 className={styles.outcomesTitle}>Key Outcomes</h4>
                                <ul className={styles.outcomesList}>
                                    {service.outcomes.map((outcome, i) => (
                                        <li key={i} className={styles.outcomeItem}>
                                            <span className={styles.checkmark}>✓</span>
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.serviceMeta}>
                                <p className={styles.metaItem}>
                                    <strong>What problem it solves:</strong> {service.problemSolves}
                                </p>
                                <p className={styles.metaItem}>
                                    <strong>Who it is for:</strong> {service.whoFor}
                                </p>
                            </div>

                            <div className={styles.serviceLink}>
                                Learn More
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Services Link */}
                <div className={styles.viewAllWrapper} data-aos="fade-up">
                    <div className={styles.viewAllBtn}>
                        View All Services
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
