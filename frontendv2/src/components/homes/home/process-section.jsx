import React from 'react';

const process_steps = [
    {
        id: 1,
        number: "01",
        title: "Discovery & Requirements",
        description: "We dive deep into your business goals, challenges, and requirements to craft a perfect solution.",
        icon: "🔍",
        color: "var(--bdm-primary)"
    },
    {
        id: 2,
        number: "02",
        title: "Architecture & Planning",
        description: "Design scalable system architecture and create detailed technical specifications.",
        icon: "📐",
        color: "var(--bdm-secondary)"
    },
    {
        id: 3,
        number: "03",
        title: "UI/UX Design",
        description: "Create intuitive, beautiful interfaces that users love and that drive conversions.",
        icon: "🎨",
        color: "var(--bdm-primary)"
    },
    {
        id: 4,
        number: "04",
        title: "Development & Integration",
        description: "Build robust, secure code using best practices and integrate with your existing systems.",
        icon: "⚡",
        color: "var(--bdm-secondary)"
    },
    {
        id: 5,
        number: "05",
        title: "Quality Assurance & Testing",
        description: "Rigorous testing across devices and scenarios to ensure flawless performance.",
        icon: "✓",
        color: "var(--bdm-primary)"
    },
    {
        id: 6,
        number: "06",
        title: "Deployment & Launch",
        description: "Smooth deployment to production with zero downtime and comprehensive monitoring.",
        icon: "🚀",
        color: "var(--bdm-secondary)"
    },
    {
        id: 7,
        number: "07",
        title: "Support & Maintenance",
        description: "Ongoing support, updates, and optimization to keep your system running perfectly.",
        icon: "🛠️",
        color: "var(--bdm-primary)"
    }
];

const ProcessSection = () => {
    return (
        <section className="bdm-section" style={{ background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)' }}>
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
                                Our Development Process
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '800',
                                marginBottom: '20px',
                                color: 'var(--tp-heading-primary)',
                                fontFamily: 'var(--bdm-font-heading)'
                            }}>
                                From Idea to <span className="bdm-gradient-text">Launch</span>
                            </h2>
                            <p style={{
                                maxWidth: '700px',
                                margin: '0 auto',
                                fontSize: '1.125rem',
                                color: 'var(--tp-text-body)',
                                lineHeight: '1.6'
                            }}>
                                Our proven 7-step development process ensures quality, transparency, and on-time delivery.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Process Steps */}
                <div className="row g-4">
                    {process_steps.map((step, index) => (
                        <div key={step.id} className="col-lg-6">
                            <div className="bdm-card bdm-hover-lift" style={{
                                height: '100%',
                                display: 'flex',
                                gap: '24px',
                                position: 'relative'
                            }}>
                                {/* Step Number Circle */}
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: index % 2 === 0 ? 'var(--bdm-gradient-primary)' : 'var(--bdm-gradient-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    boxShadow: index % 2 === 0 ? 'var(--bdm-shadow-primary)' : 'var(--bdm-shadow-secondary)',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        fontSize: '2rem',
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '-10px',
                                        background: 'white',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: 'var(--bdm-shadow-md)'
                                    }}>
                                        {step.icon}
                                    </div>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '800',
                                        color: 'white',
                                        fontFamily: 'var(--bdm-font-heading)'
                                    }}>
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div style={{ flex: 1 }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        marginBottom: '12px',
                                        color: 'var(--tp-heading-primary)',
                                        fontFamily: 'var(--bdm-font-heading)'
                                    }}>
                                        {step.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--tp-text-body)',
                                        lineHeight: '1.6',
                                        margin: 0
                                    }}>
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Line (except last item) */}
                                {index < process_steps.length - 1 && index % 2 === 1 && (
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-32px',
                                        left: '40px',
                                        width: '2px',
                                        height: '32px',
                                        background: 'linear-gradient(to bottom, var(--bdm-primary), transparent)',
                                        display: index === process_steps.length - 2 ? 'none' : 'block'
                                    }} className="d-none d-lg-block" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center" style={{ marginTop: '60px' }}>
                            <p style={{
                                fontSize: '1.25rem',
                                fontWeight: '600',
                                marginBottom: '24px',
                                color: 'var(--tp-heading-primary)'
                            }}>
                                Ready to start your project?
                            </p>
                            <a href="/contact" className="bdm-btn bdm-btn-primary" style={{
                                fontSize: '1rem',
                                padding: '16px 40px'
                            }}>
                                Let's Build Together
                                <i className="fa-regular fa-arrow-right-long" style={{ marginLeft: '8px' }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
