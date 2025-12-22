import React, { useEffect, useRef, useState } from 'react';

const tech_categories = [
    {
        name: 'Frontend',
        color: '#61DAFB',
        technologies: [
            { name: 'React', expertise: 'Expert', projects: '200+' },
            { name: 'Next.js', expertise: 'Expert', projects: '150+' },
            { name: 'Vue.js', expertise: 'Advanced', projects: '80+' },
            { name: 'TypeScript', expertise: 'Expert', projects: '300+' }
        ]
    },
    {
        name: 'Backend',
        color: '#68A063',
        technologies: [
            { name: 'Node.js', expertise: 'Expert', projects: '250+' },
            { name: 'Python', expertise: 'Expert', projects: '180+' },
            { name: '.NET', expertise: 'Advanced', projects: '120+' },
            { name: 'Java', expertise: 'Advanced', projects: '90+' }
        ]
    },
    {
        name: 'Mobile',
        color: '#02569B',
        technologies: [
            { name: 'React Native', expertise: 'Expert', projects: '100+' },
            { name: 'Flutter', expertise: 'Expert', projects: '80+' },
            { name: 'iOS', expertise: 'Advanced', projects: '50+' },
            { name: 'Android', expertise: 'Advanced', projects: '45+' }
        ]
    },
    {
        name: 'Cloud & DevOps',
        color: '#FF9900',
        technologies: [
            { name: 'AWS', expertise: 'Expert', projects: '200+' },
            { name: 'Azure', expertise: 'Advanced', projects: '100+' },
            { name: 'Docker', expertise: 'Expert', projects: '250+' },
            { name: 'Kubernetes', expertise: 'Advanced', projects: '120+' }
        ]
    },
    {
        name: 'Database',
        color: '#336791',
        technologies: [
            { name: 'PostgreSQL', expertise: 'Expert', projects: '180+' },
            { name: 'MongoDB', expertise: 'Expert', projects: '150+' },
            { name: 'MySQL', expertise: 'Expert', projects: '200+' },
            { name: 'Redis', expertise: 'Advanced', projects: '130+' }
        ]
    }
];

const TechStackShowcase = () => {
    const canvasRef = useRef(null);
    const [activeTech, setActiveTech] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * 2; // Retina support
        canvas.height = rect.height * 2;
        ctx.scale(2, 2);

        let animationId;
        let time = 0;

        // Particle system
        const particles = Array.from({ length: 80 }, () => ({
            x: Math.random() * (rect.width),
            y: Math.random() * (rect.height),
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.5 + 0.3
        }));

        // Network nodes for visualization
        const nodes = [
            { x: rect.width * 0.5, y: rect.height * 0.5, r: 40, color: '#3D6CE7', label: 'Core' },
            { x: rect.width * 0.2, y: rect.height * 0.25, r: 25, color: '#61DAFB', label: 'Frontend' },
            { x: rect.width * 0.8, y: rect.height * 0.25, r: 25, color: '#68A063', label: 'Backend' },
            { x: rect.width * 0.2, y: rect.height * 0.75, r: 25, color: '#02569B', label: 'Mobile' },
            { x: rect.width * 0.8, y: rect.height * 0.75, r: 25, color: '#FF9900', label: 'Cloud' },
            { x: rect.width * 0.5, y: rect.height * 0.15, r: 20, color: '#336791', label: 'Database' }
        ];

        const animate = () => {
            time += 0.01;

            // Clear with fade effect
            ctx.fillStyle = 'rgba(10, 14, 39, 0.08)';
            ctx.fillRect(0, 0, rect.width, rect.height);

            // Update and draw particles
            particles.forEach(p => {
                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off walls
                if (p.x < 0 || p.x > rect.width) p.vx *= -1;
                if (p.y < 0 || p.y > rect.height) p.vy *= -1;

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(5, 218, 195, ${p.alpha})`;
                ctx.fill();

                // Draw connections to nearby particles
                particles.forEach(op => {
                    const dx = op.x - p.x;
                    const dy = op.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100 && dist > 0) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(op.x, op.y);
                        ctx.strokeStyle = `rgba(5, 218, 195, ${0.15 * (1 - dist / 100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            // Draw network nodes
            nodes.forEach((node, i) => {
                // Draw connections to center
                if (i > 0) {
                    const pulsePhase = (time + i * 0.5) % (Math.PI * 2);
                    const pulsePos = (Math.sin(pulsePhase) + 1) / 2;

                    const cx = nodes[0].x;
                    const cy = nodes[0].y;
                    const px = cx + (node.x - cx) * pulsePos;
                    const py = cy + (node.y - cy) * pulsePos;

                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(node.x, node.y);
                    const gradient = ctx.createLinearGradient(cx, cy, node.x, node.y);
                    gradient.addColorStop(0, 'rgba(61, 108, 231, 0.3)');
                    gradient.addColorStop(1, `${node.color}80`);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();

                    // Pulse dot
                    ctx.beginPath();
                    ctx.arc(px, py, 3, 0, Math.PI * 2);
                    ctx.fillStyle = node.color;
                    ctx.shadowColor = node.color;
                    ctx.shadowBlur = 10;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }

                // Draw node
                const pulse = Math.sin(time * 2 + i) * 0.1 + 1;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r * pulse, 0, Math.PI * 2);
                const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r);
                nodeGradient.addColorStop(0, `${node.color}40`);
                nodeGradient.addColorStop(1, `${node.color}10`);
                ctx.fillStyle = nodeGradient;
                ctx.fill();
                ctx.strokeStyle = node.color;
                ctx.lineWidth = 2;
                ctx.stroke();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section style={{
            position: 'relative',
            background: 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
            overflow: 'hidden',
            padding: '120px 0'
        }}>
            {/* Animated Canvas Background */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.7
                }}
            />

            {/* Grid Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                    linear-gradient(rgba(61, 108, 231, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(5, 218, 195, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                opacity: 0.5
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div className="row mb-60">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                background: 'rgba(5, 218, 195, 0.1)',
                                border: '1px solid rgba(5, 218, 195, 0.3)',
                                borderRadius: '50px',
                                padding: '8px 24px',
                                marginBottom: '24px'
                            }}>
                                <span style={{ fontSize: '1rem' }}>⚡</span>
                                <span style={{
                                    fontSize: '0.875rem',
                                    color: '#05DAC3',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px'
                                }}>
                                    Enterprise Technology Stack
                                </span>
                            </div>

                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                fontWeight: '800',
                                marginBottom: '24px',
                                color: 'white',
                                fontFamily: 'var(--tp-ff-heading)',
                                lineHeight: '1.2'
                            }}>
                                Powered by{' '}
                                <span style={{
                                    background: 'linear-gradient(135deg, #05DAC3 0%, #3D6CE7 50%, #ffffff 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    display: 'inline-block'
                                }}>
                                    Industry-Leading
                                </span>
                                <br />Technologies
                            </h2>

                            <p style={{
                                maxWidth: '800px',
                                margin: '0 auto',
                                fontSize: '1.25rem',
                                color: 'rgba(255, 255, 255, 0.85)',
                                lineHeight: '1.8',
                                fontWeight: '400'
                            }}>
                                Our technology ecosystem integrates cutting-edge tools and frameworks to deliver
                                <strong style={{ color: '#05DAC3' }}> scalable</strong>,
                                <strong style={{ color: '#3D6CE7' }}> secure</strong>, and
                                <strong style={{ color: '#05DAC3' }}> high-performance</strong> solutions
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technology Grid */}
                <div className="row g-4 mb-60">
                    {tech_categories.map((category, catIndex) => (
                        <div key={catIndex} className="col-lg-6">
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '20px',
                                padding: '36px 32px',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                height: '100%',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = `0 20px 60px ${category.color}30`;
                                    e.currentTarget.style.borderColor = `${category.color}40`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                }}>
                                {/* Category Header */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    marginBottom: '28px'
                                }}>
                                    <div style={{
                                        width: '8px',
                                        height: '48px',
                                        background: `linear-gradient(180deg, ${category.color} 0%, ${category.color}60 100%)`,
                                        borderRadius: '4px',
                                        boxShadow: `0 0 20px ${category.color}60`
                                    }} />
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.75rem',
                                            fontWeight: '700',
                                            color: 'white',
                                            marginBottom: '4px',
                                            fontFamily: 'var(--tp-ff-heading)'
                                        }}>
                                            {category.name}
                                        </h3>
                                        <div style={{
                                            fontSize: '0.875rem',
                                            color: category.color,
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            {category.technologies.length} Technologies
                                        </div>
                                    </div>
                                </div>

                                {/* Technology Items */}
                                <div style={{
                                    display: 'grid',
                                    gap: '12px'
                                }}>
                                    {category.technologies.map((tech, techIndex) => (
                                        <div
                                            key={techIndex}
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                borderRadius: '12px',
                                                padding: '16px 20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                                                e.currentTarget.style.borderColor = `${category.color}30`;
                                                e.currentTarget.style.transform = 'translateX(4px)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                                e.currentTarget.style.transform = 'translateX(0)';
                                            }}
                                        >
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '16px'
                                            }}>
                                                <div style={{
                                                    width: '10px',
                                                    height: '10px',
                                                    borderRadius: '50%',
                                                    background: category.color,
                                                    boxShadow: `0 0 12px ${category.color}`
                                                }} />
                                                <span style={{
                                                    fontSize: '1.0625rem',
                                                    fontWeight: '600',
                                                    color: 'white'
                                                }}>
                                                    {tech.name}
                                                </span>
                                            </div>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '16px'
                                            }}>
                                                <span style={{
                                                    fontSize: '0.8125rem',
                                                    color: 'rgba(255, 255, 255, 0.5)',
                                                    fontWeight: '500'
                                                }}>
                                                    {tech.projects}
                                                </span>
                                                <span style={{
                                                    padding: '4px 12px',
                                                    borderRadius: '6px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '700',
                                                    background: tech.expertise === 'Expert'
                                                        ? `${category.color}25`
                                                        : 'rgba(255, 255, 255, 0.1)',
                                                    color: tech.expertise === 'Expert' ? category.color : 'rgba(255, 255, 255, 0.7)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px'
                                                }}>
                                                    {tech.expertise}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Key Metrics */}
                <div className="row g-4">
                    {[
                        { value: '20+', label: 'Core Technologies', sublabel: 'Enterprise-grade stack', icon: '🔧', color: '#3D6CE7' },
                        { value: '500+', label: 'Projects Deployed', sublabel: 'Across 5 continents', icon: '🚀', color: '#05DAC3' },
                        { value: '99.9%', label: 'System Uptime', sublabel: 'Guaranteed SLA', icon: '✓', color: '#3D6CE7' },
                        { value: '24/7', label: 'DevOps Support', sublabel: 'Always available', icon: '⚙️', color: '#05DAC3' }
                    ].map((metric, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '16px',
                                padding: '36px 24px',
                                textAlign: 'center',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                height: '100%'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = `0 20px 60px ${metric.color}30`;
                                    e.currentTarget.style.borderColor = `${metric.color}40`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                }}>
                                {/* Icon */}
                                <div style={{
                                    width: '72px',
                                    height: '72px',
                                    margin: '0 auto 20px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${metric.color}20 0%, ${metric.color}10 100%)`,
                                    border: `2px solid ${metric.color}40`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem'
                                }}>
                                    {metric.icon}
                                </div>

                                {/* Value */}
                                <h3 style={{
                                    fontSize: '3rem',
                                    fontWeight: '800',
                                    color: 'transparent',
                                    backgroundImage: `linear-gradient(135deg, #ffffff 0%, ${metric.color} 100%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '12px',
                                    fontFamily: 'var(--tp-ff-heading)',
                                    lineHeight: '1',
                                    margin: '0 0 12px 0'
                                }}>
                                    {metric.value}
                                </h3>

                                {/* Label */}
                                <div style={{
                                    fontSize: '1.0625rem',
                                    fontWeight: '600',
                                    color: 'white',
                                    marginBottom: '6px',
                                    lineHeight: '1.3'
                                }}>
                                    {metric.label}
                                </div>

                                {/* Sublabel */}
                                <div style={{
                                    fontSize: '0.875rem',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontWeight: '500',
                                    lineHeight: '1.4'
                                }}>
                                    {metric.sublabel}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStackShowcase;
