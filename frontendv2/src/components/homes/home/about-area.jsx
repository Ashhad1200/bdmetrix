import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                                        <div style={{ marginBottom: '20px' }}>
                                            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#3D6CE7' }}>500+</div>
                                            <div style={{ color: '#5F6C7B', fontSize: '0.95rem' }}>Projects Delivered</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div style={{ marginBottom: '20px' }}>
                                            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#3D6CE7' }}>250+</div>
                                            <div style={{ color: '#5F6C7B', fontSize: '0.95rem' }}>Happy Clients</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div>
                                            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#3D6CE7' }}>10+</div>
                                            <div style={{ color: '#5F6C7B', fontSize: '0.95rem' }}>Years Experience</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div>
                                            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#3D6CE7' }}>99%</div>
                                            <div style={{ color: '#5F6C7B', fontSize: '0.95rem' }}>Client Satisfaction</div>
                                        </div>
                                    </div>
                                </div>

                                <Link className="tp-btn" href="/contact">
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
                                <span className="tp-section-subtitle mb-15">
                                    Our Journey
                                </span>
                                <h2 className="tp-section-title">A Decade of Excellence</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4 mb-60">
                        {company_milestones.map((milestone, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div
                                    style={{
                                        background: '#ffffff',
                                        borderRadius: '12px',
                                        padding: '32px 24px',
                                        height: '100%',
                                        borderLeft: `4px solid ${index % 2 === 0 ? '#3D6CE7' : '#05DAC3'}`,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        textAlign: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                    }}
                                >
                                    <div style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '800',
                                        color: index % 2 === 0 ? '#3D6CE7' : '#05DAC3',
                                        marginBottom: '12px',
                                        fontFamily: 'var(--tp-ff-heading)'
                                    }}>
                                        {milestone.year}
                                    </div>
                                    <h4 style={{
                                        fontSize: '1.25rem',
                                        fontWeight: '700',
                                        marginBottom: '8px',
                                        color: '#0B1028'
                                    }}>
                                        {milestone.title}
                                    </h4>
                                    <p style={{
                                        color: '#5F6C7B',
                                        fontSize: '0.95rem',
                                        margin: 0,
                                        lineHeight: '1.6'
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
                                <span className="tp-section-subtitle mb-15">
                                    Our Values
                                </span>
                                <h2 className="tp-section-title">What Drives Us</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {company_values.map((value, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div
                                    style={{
                                        background: '#ffffff',
                                        borderRadius: '12px',
                                        padding: '32px 24px',
                                        height: '100%',
                                        borderLeft: `4px solid ${index % 2 === 0 ? '#05DAC3' : '#3D6CE7'}`,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        textAlign: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                    }}
                                >
                                    <div style={{
                                        fontSize: '3rem',
                                        marginBottom: '16px'
                                    }}>
                                        {value.icon}
                                    </div>
                                    <h4 style={{
                                        fontSize: '1.125rem',
                                        fontWeight: '700',
                                        marginBottom: '12px',
                                        color: '#0B1028'
                                    }}>
                                        {value.title}
                                    </h4>
                                    <p style={{
                                        color: '#5F6C7B',
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
