import React, { useState } from 'react';
import Link from 'next/link';
import case_study_data from '@/src/data/case-study-data';

const PortfolioShowcase = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    // Get unique categories
    const categories = ['all', ...new Set(case_study_data.map(study => study.category))];

    // Filter case studies
    const filteredStudies = activeFilter === 'all'
        ? case_study_data.filter(study => study.featured)
        : case_study_data.filter(study => study.category === activeFilter && study.featured);

    return (
        <section className="bdm-section" style={{ background: 'white' }}>
            <div className="container">
                {/* Section Header */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mb-60">
                            <span style={{
                                fontSize: '0.875rem',
                                color: 'var(--bdm-primary)',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '12px',
                                display: 'block'
                            }}>
                                Success Stories
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '800',
                                marginBottom: '20px',
                                color: 'var(--tp-heading-primary)',
                                fontFamily: 'var(--bdm-font-heading)'
                            }}>
                                Real Results, <span className="bdm-gradient-text">Real Impact</span>
                            </h2>
                            <p style={{
                                maxWidth: '700px',
                                margin: '0 auto',
                                fontSize: '1.125rem',
                                color: 'var(--tp-text-body)',
                                lineHeight: '1.6'
                            }}>
                                See how we've helped businesses like yours achieve measurable growth with custom software solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="row mb-50">
                    <div className="col-lg-12">
                        <div style={{
                            display: 'flex',
                            gap: '12px',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={activeFilter === category ? 'bdm-badge bdm-badge-primary' : 'bdm-badge bdm-badge-outline'}
                                    style={{
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        border: 'none'
                                    }}
                                >
                                    {category === 'all' ? 'All Projects' : category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Case Study Cards */}
                <div className="row g-4">
                    {filteredStudies.map((study) => (
                        <div key={study.id} className="col-lg-6">
                            <div className="bdm-card bdm-hover-lift" style={{
                                height: '100%',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                {/* Image Placeholder */}
                                <div className="bdm-img-zoom" style={{
                                    height: '280px',
                                    background: 'linear-gradient(135deg, rgba(61, 108, 231, 0.1) 0%, rgba(5, 218, 195, 0.1) 100%)',
                                    marginBottom: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '4rem',
                                    position: 'relative'
                                }}>
                                    {/* Icon based on category */}
                                    <div style={{ fontSize: '5rem', opacity: 0.3 }}>
                                        {study.category.includes('CRM') && '📊'}
                                        {study.category.includes('ERP') && '⚙️'}
                                        {study.category.includes('POS') && '💳'}
                                        {study.category.includes('Landing') && '🌐'}
                                    </div>
                                    {/* Category Badge */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px'
                                    }}>
                                        <span className="bdm-badge bdm-badge-primary">
                                            {study.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div>
                                    {/* Client & Industry */}
                                    <div style={{
                                        display: 'flex',
                                        gap: '12px',
                                        marginBottom: '12px',
                                        fontSize: '0.875rem',
                                        color: 'var(--bdm-primary)'
                                    }}>
                                        <span>{study.client}</span>
                                        <span>•</span>
                                        <span>{study.industry}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        marginBottom: '12px',
                                        color: 'var(--tp-heading-primary)',
                                        lineHeight: '1.3'
                                    }}>
                                        {study.title}
                                    </h3>

                                    {/* Tagline */}
                                    <p style={{
                                        color: 'var(--tp-text-body)',
                                        marginBottom: '24px',
                                        fontSize: '1rem',
                                        fontStyle: 'italic'
                                    }}>
                                        {study.tagline}
                                    </p>

                                    {/* Metrics Grid */}
                                    {study.results && study.results.primary_metrics && (
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                            gap: '16px',
                                            marginBottom: '24px',
                                            padding: '20px',
                                            background: 'rgba(61, 108, 231, 0.05)',
                                            borderRadius: 'var(--bdm-radius-md)'
                                        }}>
                                            {study.results.primary_metrics.slice(0, 4).map((metric, idx) => (
                                                <div key={idx}>
                                                    <div style={{
                                                        fontSize: '1.75rem',
                                                        fontWeight: '700',
                                                        color: 'var(--bdm-primary)',
                                                        marginBottom: '4px'
                                                    }}>
                                                        {metric.value}
                                                    </div>
                                                    <div style={{
                                                        fontSize: '0.875rem',
                                                        color: 'var(--tp-text-body)',
                                                        lineHeight: '1.4'
                                                    }}>
                                                        {metric.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* CTA Button */}
                                    <Link href={`/portfolio/${study.slug}`} className="bdm-btn bdm-btn-primary" style={{
                                        display: 'inline-block',
                                        fontSize: '0.875rem',
                                        padding: '12px 24px'
                                    }}>
                                        View Case Study
                                        <i className="fa-regular fa-arrow-right-long" style={{ marginLeft: '8px' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Portfolio Button */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center" style={{ marginTop: '60px' }}>
                            <Link className="bdm-btn bdm-btn-outline" href="/portfolio">
                                View All Projects
                                <i className="fa-regular fa-arrow-right-long" style={{ marginLeft: '8px' }}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioShowcase;
