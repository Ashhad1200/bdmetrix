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

        // Hexagonal grid parameters
        const hexSize = 25;
        const hexHeight = hexSize * 2;
        const hexWidth = Math.sqrt(3) * hexSize;
        const hexagons = [];

        // Generate hexagon grid
        const cols = Math.ceil(rect.width / hexWidth) + 1;
        const rows = Math.ceil(rect.height / (hexHeight * 0.75)) + 1;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * hexWidth + (row % 2) * (hexWidth / 2);
                const y = row * (hexHeight * 0.75);
                hexagons.push({
                    x,
                    y,
                    glowIntensity: Math.random(),
                    glowSpeed: 0.5 + Math.random() * 0.5,
                    glowPhase: Math.random() * Math.PI * 2
                });
            }
        }

        // Draw hexagon
        const drawHexagon = (x, y, size, glowAlpha) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const hx = x + size * Math.cos(angle);
                const hy = y + size * Math.sin(angle);
                if (i === 0) ctx.moveTo(hx, hy);
                else ctx.lineTo(hx, hy);
            }
            ctx.closePath();

            // Glow effect
            if (glowAlpha > 0.1) {
                ctx.strokeStyle = `rgba(5, 218, 195, ${glowAlpha})`;
                ctx.lineWidth = 2;
                ctx.shadowColor = '#05DAC3';
                ctx.shadowBlur = 10 * glowAlpha;
                ctx.stroke();
                ctx.shadowBlur = 0;
            } else {
                ctx.strokeStyle = `rgba(61, 108, 231, 0.15)`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        };

        const animate = () => {
            time += 0.01;

            // Clear with fade effect
            ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
            ctx.fillRect(0, 0, rect.width, rect.height);

            // Draw hexagons
            hexagons.forEach((hex) => {
                const glowPhase = Math.sin(time * hex.glowSpeed + hex.glowPhase);
                const glowAlpha = hex.glowIntensity * (glowPhase * 0.5 + 0.5);

                drawHexagon(hex.x, hex.y, hexSize, glowAlpha * 0.6);
            });

            // Draw connecting lines between nearby hexagons
            hexagons.forEach((hex1, i) => {
                hexagons.slice(i + 1, i + 7).forEach((hex2) => {
                    const dx = hex2.x - hex1.x;
                    const dy = hex2.y - hex1.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < hexWidth * 1.5) {
                        const alpha = (1 - dist / (hexWidth * 1.5)) * 0.1;
                        ctx.beginPath();
                        ctx.moveTo(hex1.x, hex1.y);
                        ctx.lineTo(hex2.x, hex2.y);
                        ctx.strokeStyle = `rgba(61, 108, 231, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            // Pulsing energy nodes
            const pulseCount = 8;
            for (let i = 0; i < pulseCount; i++) {
                const pulsePhase = (time + i * (Math.PI * 2 / pulseCount)) % (Math.PI * 2);
                const px = rect.width / 2 + Math.cos(pulsePhase) * rect.width * 0.3;
                const py = rect.height / 2 + Math.sin(pulsePhase) * rect.height * 0.3;
                const pulseSize = 3 + Math.sin(time * 2 + i) * 2;

                ctx.beginPath();
                ctx.arc(px, py, pulseSize, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(px, py, 0, px, py, pulseSize * 3);
                gradient.addColorStop(0, 'rgba(5, 218, 195, 0.6)');
                gradient.addColorStop(1, 'rgba(5, 218, 195, 0)');
                ctx.fillStyle = gradient;
                ctx.fill();

                // Core
                ctx.beginPath();
                ctx.arc(px, py, pulseSize * 0.5, 0, Math.PI * 2);
                ctx.fillStyle = '#05DAC3';
                ctx.shadowColor = '#05DAC3';
                ctx.shadowBlur = 15;
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            animationId = requestAnimationFrame(animate);
        };

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!prefersReducedMotion) {
            animate();
        } else {
            // Static hexagon grid for accessibility
            ctx.fillStyle = '#0a0e27';
            ctx.fillRect(0, 0, rect.width, rect.height);
            hexagons.forEach((hex) => {
                drawHexagon(hex.x, hex.y, hexSize, 0.3);
            });
        }

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section style={{
            position: 'relative',
            background: 'linear-gradient(180deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%)',
            overflow: 'hidden',
            padding: '120px 0'
        }}>
            {/* Animated Hexagonal Grid Canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.9
                }}
            />

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
