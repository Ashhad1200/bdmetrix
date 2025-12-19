import React from 'react';
import Image from 'next/image';

const tech_stack = [
    {
        category: "Frontend",
        technologies: [
            { name: "React", logo: "/assets/img/tech/react.png", expertise: "Expert" },
            { name: "Next.js", logo: "/assets/img/tech/nextjs.png", expertise: "Expert" },
            { name: "Vue.js", logo: "/assets/img/tech/vue.png", expertise: "Advanced" },
            { name: "TypeScript", logo: "/assets/img/tech/typescript.png", expertise: "Expert" }
        ]
    },
    {
        category: "Backend",
        technologies: [
            { name: "Node.js", logo: "/assets/img/tech/nodejs.png", expertise: "Expert" },
            { name: "Python", logo: "/assets/img/tech/python.png", expertise: "Expert" },
            { name: "Java", logo: "/assets/img/tech/java.png", expertise: "Advanced" },
            { name: ".NET", logo: "/assets/img/tech/dotnet.png", expertise: "Advanced" }
        ]
    },
    {
        category: "Mobile",
        technologies: [
            { name: "React Native", logo: "/assets/img/tech/react-native.png", expertise: "Expert" },
            { name: "Flutter", logo: "/assets/img/tech/flutter.png", expertise: "Expert" },
            { name: "Swift", logo: "/assets/img/tech/swift.png", expertise: "Advanced" },
            { name: "Kotlin", logo: "/assets/img/tech/kotlin.png", expertise: "Advanced" }
        ]
    },
    {
        category: "Cloud & DevOps",
        technologies: [
            { name: "AWS", logo: "/assets/img/tech/aws.png", expertise: "Expert" },
            { name: "Azure", logo: "/assets/img/tech/azure.png", expertise: "Advanced" },
            { name: "Docker", logo: "/assets/img/tech/docker.png", expertise: "Expert" },
            { name: "Kubernetes", logo: "/assets/img/tech/kubernetes.png", expertise: "Advanced" }
        ]
    },
    {
        category: "Database",
        technologies: [
            { name: "PostgreSQL", logo: "/assets/img/tech/postgresql.png", expertise: "Expert" },
            { name: "MongoDB", logo: "/assets/img/tech/mongodb.png", expertise: "Expert" },
            { name: "MySQL", logo: "/assets/img/tech/mysql.png", expertise: "Expert" },
            { name: "Redis", logo: "/assets/img/tech/redis.png", expertise: "Advanced" }
        ]
    }
];

const TechStackShowcase = () => {
    return (
        <section className="bdm-section bdm-bg-gradient-dark" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                opacity: '0.05',
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mb-60">
                            <span style={{
                                fontSize: '0.875rem',
                                color: 'var(--bdm-secondary)',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '12px',
                                display: 'block'
                            }}>
                                Technologies We Master
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                fontWeight: '800',
                                marginBottom: '20px',
                                color: 'white',
                                fontFamily: 'var(--bdm-font-heading)'
                            }}>
                                Built with <span style={{
                                    background: 'linear-gradient(135deg, #05DAC3 0%, #ffffff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}>Modern Stack</span>
                            </h2>
                            <p style={{
                                maxWidth: '700px',
                                margin: '0 auto',
                                fontSize: '1.125rem',
                                color: 'rgba(255, 255, 255, 0.8)',
                                lineHeight: '1.6'
                            }}>
                                We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tech Categories */}
                <div className="row g-4">
                    {tech_stack.map((category, catIndex) => (
                        <div key={catIndex} className="col-lg-12">
                            <div className="bdm-glass" style={{
                                padding: '32px',
                                borderRadius: 'var(--bdm-radius-lg)'
                            }}>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: '700',
                                    marginBottom: '24px',
                                    color: 'white',
                                    fontFamily: 'var(--bdm-font-heading)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    <span style={{
                                        width: '4px',
                                        height: '24px',
                                        background: 'var(--bdm-gradient-secondary)',
                                        borderRadius: '2px'
                                    }} />
                                    {category.category}
                                </h3>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '20px'
                                }}>
                                    {category.technologies.map((tech, techIndex) => (
                                        <div key={techIndex} className="bdm-card bdm-hover-scale" style={{
                                            padding: '24px',
                                            textAlign: 'center',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            cursor: 'pointer'
                                        }}>
                                            {/* Logo Placeholder */}
                                            <div style={{
                                                width: '64px',
                                                height: '64px',
                                                margin: '0 auto 16px',
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                borderRadius: 'var(--bdm-radius-md)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '2rem'
                                            }}>
                                                {catIndex === 0 && '⚛️'}
                                                {catIndex === 1 && '⚙️'}
                                                {catIndex === 2 && '📱'}
                                                {catIndex === 3 && '☁️'}
                                                {catIndex === 4 && '🗄️'}
                                            </div>

                                            {/* Tech Name */}
                                            <h4 style={{
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                marginBottom: '8px',
                                                color: 'white'
                                            }}>
                                                {tech.name}
                                            </h4>

                                            {/* Expertise Badge */}
                                            <span className="bdm-badge" style={{
                                                fontSize: '0.75rem',
                                                padding: '4px 12px',
                                                background: tech.expertise === 'Expert' ? 'var(--bdm-gradient-secondary)' : 'rgba(255, 255, 255, 0.2)',
                                                color: tech.expertise === 'Expert' ? 'var(--bdm-dark)' : 'white'
                                            }}>
                                                {tech.expertise}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Row */}
                <div className="row" style={{ marginTop: '60px' }}>
                    <div className="col-lg-12">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '32px',
                            textAlign: 'center'
                        }}>
                            <div>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '800',
                                    background: 'linear-gradient(135deg, #ffffff 0%, #05DAC3 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '8px'
                                }}>
                                    20+
                                </div>
                                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem' }}>
                                    Technologies Mastered
                                </div>
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '800',
                                    background: 'linear-gradient(135deg, #ffffff 0%, #05DAC3 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '8px'
                                }}>
                                    100%
                                </div>
                                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem' }}>
                                    Cloud Native
                                </div>
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '800',
                                    background: 'linear-gradient(135deg, #ffffff 0%, #05DAC3 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '8px'
                                }}>
                                    24/7
                                </div>
                                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem' }}>
                                    DevOps Support
                                </div>
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '800',
                                    background: 'linear-gradient(135deg, #ffffff 0%, #05DAC3 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '8px'
                                }}>
                                    99.9%
                                </div>
                                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1rem' }}>
                                    Uptime Guarantee
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStackShowcase;
