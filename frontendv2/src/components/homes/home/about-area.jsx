import Image from "next/image";
import Link from "next/link";
import React from "react";

import img_1 from "@assets/img/about/about-1.png";
import img_2 from "@assets/img/about/about-1.png";

const about_content = {
    sub_title: "Who We Are",
    title: "Building Software That Powers Growth",
    description_1:
        "Since 2013, BD Matrix has been transforming business ideas into scalable software solutions. We're a team of passionate developers, designers, and strategists dedicated to creating custom software that drives real business results.",
    description_2:
        "From startups to enterprises, we've delivered 500+ projects across 20+ countries. Our expertise in CRM, ERP, POS systems, SaaS platforms, and mobile apps has helped businesses increase sales by 15%, reduce costs by 38%, and scale efficiently.",
};

const company_milestones = [
    {
        year: "2013",
        title: "Founded",
        description: "Started with a vision to build quality software"
    },
    {
        year: "2016",
        title: "50+ Projects",
        description: "Reached first major milestone of successful deliveries"
    },
    {
        year: "2019",
        title: "Global Expansion",
        description: "Expanded services to international markets"
    },
    {
        year: "2023",
        title: "500+ Projects",
        description: "Celebrating a decade of innovation and excellence"
    }
];

const company_values = [
    {
        icon: "🎯",
        title: "Client Success First",
        description: "Your goals are our goals. We measure success by your business growth."
    },
    {
        icon: "💎",
        title: "Quality Over Quantity",
        description: "Every line of code is crafted with precision and tested rigorously."
    },
    {
        icon: "🚀",
        title: "Innovation Driven",
        description: "We stay ahead of technology trends to build future-proof solutions."
    },
    {
        icon: "🤝",
        title: "Transparent Partnership",
        description: "Clear communication, honest timelines, and no hidden surprises."
    }
];

const AboutArea = () => {
    return (
        <>
            <section className="tp-about-area pt-120 pb-90">
                <div className="container">
                    {/* Main About Section */}
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-about-wrap">
                                <div className="tp-about-img mb-30">
                                    <Image src={img_1} alt="BD Matrix Team" />
                                </div>
                                <div className="tp-about-img mb-30">
                                    <Image src={img_2} alt="BD Matrix Office" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-content mb-30">
                                <div className="section-title-wrapper mb-25">
                                    <span className="tp-section-subtitle mb-15">
                                        {about_content.sub_title}
                                    </span>
                                    <h2 className="tp-section-title">{about_content.title}</h2>
                                </div>
                                <p className="mb-25">{about_content.description_1}</p>
                                <p className="mb-35">{about_content.description_2}</p>

                                {/* Stats */}
                                <div className="row mb-40">
                                    <div className="col-sm-6">
                                        <div className="bdm-metric" style={{ marginBottom: '20px' }}>
                                            <div className="bdm-metric-value" style={{ fontSize: '2.5rem', color: 'var(--bdm-primary)' }}>500+</div>
                                            <div className="bdm-metric-label">Projects Delivered</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bdm-metric" style={{ marginBottom: '20px' }}>
                                            <div className="bdm-metric-value" style={{ fontSize: '2.5rem', color: 'var(--bdm-primary)' }}>250+</div>
                                            <div className="bdm-metric-label">Happy Clients</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bdm-metric">
                                            <div className="bdm-metric-value" style={{ fontSize: '2.5rem', color: 'var(--bdm-primary)' }}>10+</div>
                                            <div className="bdm-metric-label">Years Experience</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="bdm-metric">
                                            <div className="bdm-metric-value" style={{ fontSize: '2.5rem', color: 'var(--bdm-primary)' }}>99%</div>
                                            <div className="bdm-metric-label">Client Satisfaction</div>
                                        </div>
                                    </div>
                                </div>

                                <Link className="bdm-btn bdm-btn-primary" href="/contact">
                                    Start Your Project
                                    <i className="fa-regular fa-arrow-right-long" style={{ marginLeft: '8px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Company Journey Timeline */}
                    <div className="row" style={{ marginTop: '80px' }}>
                        <div className="col-lg-12">
                            <div className="text-center mb-50">
                                <span className="tp-section-subtitle mb-15" style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--bdm-primary)',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Our Journey
                                </span>
                                <h2 className="tp-section-title">A Decade of Excellence</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 mb-60">
                        {company_milestones.map((milestone, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="bdm-card" style={{
                                    textAlign: 'center',
                                    height: '100%',
                                    borderTop: '4px solid var(--bdm-primary)'
                                }}>
                                    <div style={{
                                        fontSize: '2rem',
                                        fontWeight: '800',
                                        color: 'var(--bdm-primary)',
                                        marginBottom: '12px',
                                        fontFamily: 'var(--bdm-font-heading)'
                                    }}>
                                        {milestone.year}
                                    </div>
                                    <h4 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '700',
                                        marginBottom: '8px'
                                    }}>
                                        {milestone.title}
                                    </h4>
                                    <p style={{
                                        color: 'var(--tp-text-body)',
                                        fontSize: '0.95rem',
                                        margin: 0
                                    }}>
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Company Values */}
                    <div className="row" style={{ marginTop: '60px' }}>
                        <div className="col-lg-12">
                            <div className="text-center mb-50">
                                <span className="tp-section-subtitle mb-15" style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--bdm-primary)',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    Our Values
                                </span>
                                <h2 className="tp-section-title">What Drives Us</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {company_values.map((value, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="bdm-card bdm-hover-lift" style={{
                                    textAlign: 'center',
                                    height: '100%'
                                }}>
                                    <div style={{
                                        fontSize: '3rem',
                                        marginBottom: '16px'
                                    }}>
                                        {value.icon}
                                    </div>
                                    <h4 style={{
                                        fontSize: '1.125rem',
                                        fontWeight: '700',
                                        marginBottom: '12px'
                                    }}>
                                        {value.title}
                                    </h4>
                                    <p style={{
                                        color: 'var(--tp-text-body)',
                                        fontSize: '0.95rem',
                                        margin: 0,
                                        lineHeight: '1.6'
                                    }}>
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutArea;