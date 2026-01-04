import React from 'react';
import { useRouter } from 'next/router';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import HeaderOne from '@/src/layout/headers/header';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import Footer from '@/src/layout/footers/footer';
import Link from 'next/link';
import service_data from '@/src/data/service-data';

const ServiceDetailsPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Find the service by slug
    const service = service_data.find(s => s.slug === slug);

    // If page is loading or service not found
    if (router.isFallback || !service) {
        return (
            <Wrapper>
                <SEO pageTitle="Service Not Found" />
                <HeaderOne />
                <main>
                    <div className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
                        <h1>Service Not Found</h1>
                        <p>The service you're looking for doesn't exist.</p>
                        <Link href="/service" className="tp-btn">View All Services</Link>
                    </div>
                </main>
                <Footer />
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <SEO pageTitle={service.title} />
            <HeaderOne />
            <main>
                <Breadcrumb top_title={service.subtitle} page_title={service.title} />

                <section className="tp-service-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            {/* Sidebar */}
                            <div className="col-lg-4">
                                <div className="tp-service-widget">
                                    {/* Service Navigation */}
                                    <div className="tp-service-widget-item mb-40">
                                        <div className="tp-service-widget-tab">
                                            <ul>
                                                {service_data.map((item) => (
                                                    <li key={item.id}>
                                                        <Link
                                                            className={item.slug === slug ? 'active' : ''}
                                                            href={`/service-details/${item.slug}`}
                                                        >
                                                            {item.title}
                                                            <i className="fa-regular fa-arrow-right-long"></i>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Contact Widget */}
                                    <div className="tp-service-widget-item mb-40">
                                        <div className="tp-service-contact" style={{
                                            background: 'linear-gradient(135deg, var(--bdm-primary) 0%, #1a2d5a 100%)',
                                            borderRadius: '12px',
                                            padding: '30px'
                                        }}>
                                            <h4 style={{ color: 'white', marginBottom: '15px' }}>Ready to Get Started?</h4>
                                            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '20px' }}>
                                                Let's discuss how we can help transform your business.
                                            </p>
                                            <Link href="/contact" className="tp-btn" style={{ width: '100%', textAlign: 'center' }}>
                                                Get Free Consultation
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="col-lg-8">
                                <div className="tp-service-details-wrapper">
                                    {/* Service Header */}
                                    <div style={{
                                        background: service.bg_color || 'rgba(61, 108, 231, 0.1)',
                                        borderRadius: '16px',
                                        padding: '40px',
                                        marginBottom: '40px'
                                    }}>
                                        <h1 className="tp-service-details-title" style={{ marginBottom: '15px' }}>
                                            {service.title}
                                        </h1>
                                        <span style={{
                                            color: 'var(--bdm-primary)',
                                            fontWeight: '600',
                                            fontSize: '1rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            {service.subtitle}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '40px' }}>
                                        {service.description}
                                    </p>

                                    {/* Key Outcomes */}
                                    {service.outcomes && (
                                        <div style={{ marginBottom: '40px' }}>
                                            <h3 className="tp-service-details-title" style={{ marginBottom: '20px' }}>
                                                Key Business Outcomes
                                            </h3>
                                            <div className="row g-3">
                                                {service.outcomes.map((outcome, idx) => (
                                                    <div key={idx} className="col-md-6">
                                                        <div style={{
                                                            background: idx % 2 === 0 ? 'rgba(61, 108, 231, 0.1)' : 'rgba(5, 218, 195, 0.1)',
                                                            padding: '20px',
                                                            borderRadius: '12px',
                                                            borderLeft: `4px solid ${idx % 2 === 0 ? 'var(--bdm-primary)' : 'var(--bdm-secondary)'}`
                                                        }}>
                                                            <span style={{
                                                                color: idx % 2 === 0 ? 'var(--bdm-primary)' : 'var(--bdm-secondary)',
                                                                fontWeight: '700',
                                                                fontSize: '1rem'
                                                            }}>
                                                                ✓ {outcome}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Features */}
                                    {service.features && (
                                        <div style={{ marginBottom: '40px' }}>
                                            <h3 className="tp-service-details-title" style={{ marginBottom: '20px' }}>
                                                Features & Capabilities
                                            </h3>
                                            <div className="row g-3">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="col-md-6">
                                                        <div style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '12px',
                                                            padding: '12px 0'
                                                        }}>
                                                            <span style={{
                                                                width: '24px',
                                                                height: '24px',
                                                                background: 'var(--bdm-secondary)',
                                                                borderRadius: '50%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                color: 'white',
                                                                fontSize: '12px',
                                                                flexShrink: 0
                                                            }}>✓</span>
                                                            <span style={{ color: 'var(--tp-text-body)' }}>{feature}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Technologies & Industries */}
                                    <div className="row g-4" style={{ marginBottom: '40px' }}>
                                        {service.technologies && (
                                            <div className="col-md-6">
                                                <h4 style={{ marginBottom: '15px', color: 'var(--tp-heading-primary)' }}>
                                                    Technologies Used
                                                </h4>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                                    {service.technologies.map((tech, idx) => (
                                                        <span key={idx} style={{
                                                            background: 'rgba(61, 108, 231, 0.1)',
                                                            color: 'var(--bdm-primary)',
                                                            padding: '6px 14px',
                                                            borderRadius: '20px',
                                                            fontSize: '0.875rem',
                                                            fontWeight: '500'
                                                        }}>
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {service.industries && (
                                            <div className="col-md-6">
                                                <h4 style={{ marginBottom: '15px', color: 'var(--tp-heading-primary)' }}>
                                                    Industries
                                                </h4>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                                    {service.industries.map((industry, idx) => (
                                                        <span key={idx} style={{
                                                            background: 'rgba(5, 218, 195, 0.1)',
                                                            color: 'var(--bdm-secondary)',
                                                            padding: '6px 14px',
                                                            borderRadius: '20px',
                                                            fontSize: '0.875rem',
                                                            fontWeight: '500'
                                                        }}>
                                                            {industry}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA */}
                                    <div style={{
                                        background: 'linear-gradient(135deg, var(--bdm-primary) 0%, #1a2d5a 100%)',
                                        borderRadius: '16px',
                                        padding: '40px',
                                        textAlign: 'center'
                                    }}>
                                        <h3 style={{ color: 'white', marginBottom: '15px' }}>
                                            Ready to Build Your {service.title.split(' ')[0]}?
                                        </h3>
                                        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '25px' }}>
                                            Get a free consultation and project estimate from our experts.
                                        </p>
                                        <Link href="/contact" className="tp-btn" style={{
                                            background: 'white',
                                            color: 'var(--bdm-primary)',
                                            padding: '15px 40px'
                                        }}>
                                            {service.cta_text || 'Get Started'} <i className="fa-regular fa-arrow-right-long"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </Wrapper>
    );
};

export default ServiceDetailsPage;
