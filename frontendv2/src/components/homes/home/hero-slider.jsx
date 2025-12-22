import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

// Metrics data
const metrics = [
  { value: "500+", label: "Projects Completed", icon: "🚀" },
  { value: "250+", label: "Happy Clients", icon: "😊" },
  { value: "10+", label: "Years Experience", icon: "⭐" },
  { value: "99%", label: "Client Satisfaction", icon: "💯" }
];

// Trusted brands
const trustedBy = [
  "Fortune 500", "Startups", "Enterprises", "SMBs"
];

const HeroSlider = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    // Retina support
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    let animationId;
    let time = 0;

    // Plasma wave animation
    const drawPlasmaWave = () => {
      time += 0.005;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      gradient.addColorStop(0, '#0a0e27');
      gradient.addColorStop(0.5, '#151a35');
      gradient.addColorStop(1, '#0a0e27');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Draw plasma waves
      for (let y = 0; y < rect.height; y += 4) {
        for (let x = 0; x < rect.width; x += 4) {
          // Complex wave calculation for organic feel
          const value = Math.sin(x * 0.01 + time) +
            Math.sin(y * 0.01 + time * 1.2) +
            Math.sin((x + y) * 0.008 + time * 0.8) +
            Math.sin(Math.sqrt(x * x + y * y) * 0.01 + time);

          // Map to color
          const normalized = (value + 4) / 8; // Normalize to 0-1

          // Create flowing color based on wave intensity
          const hue = 200 + normalized * 60; // Blue to cyan
          const saturation = 70 + normalized * 30;
          const lightness = 20 + normalized * 25;
          const alpha = 0.15 + normalized * 0.3;

          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
          ctx.fillRect(x, y, 4, 4);
        }
      }

      // Add subtle particle overlay
      for (let i = 0; i < 30; i++) {
        const px = Math.sin(time * 0.5 + i * 0.5) * rect.width * 0.3 + rect.width / 2;
        const py = Math.cos(time * 0.7 + i * 0.3) * rect.height * 0.3 + rect.height / 2;

        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(5, 218, 195, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.shadowColor = '#05DAC3';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(drawPlasmaWave);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      drawPlasmaWave();
    } else {
      // Static gradient for accessibility
      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      gradient.addColorStop(0, '#0a0e27');
      gradient.addColorStop(1, '#151a35');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
    }

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="tp-hero-area tp-hero-space pb-95" style={{
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Plasma Wave Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.8
        }}
      />

      {/* Dark Gradient Overlay for text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.6) 0%, rgba(20, 30, 70, 0.5) 100%)'
      }}></div>

      {/* Animated Dots Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        opacity: 0.3,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center" style={{ minHeight: '80vh', paddingTop: '80px', paddingBottom: '80px' }}>

          {/* Main Hero Content */}
          <div className="col-lg-7">
            <div className="tp-hero-content">
              {/* Subtitle Badge with Icon */}
              <div style={{ marginBottom: '24px' }}>
                <span className="bdm-badge" style={{
                  background: 'linear-gradient(135deg, rgba(61, 108, 231, 0.2) 0%, rgba(5, 218, 195, 0.2) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  borderRadius: '50px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ fontSize: '16px' }}>⚡</span>
                  Custom Software Development · CRM · ERP · POS · SaaS · Mobile Apps
                </span>
              </div>

              {/* Main Headline with Gradient Text */}
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: '800',
                marginBottom: '28px',
                lineHeight: '1.1',
                fontFamily: 'var(--tp-ff-heading)'
              }}>
                Transform Your Business with{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #05DAC3 0%, #3D6CE7 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                  animation: 'gradient 3s ease infinite',
                  backgroundSize: '200% 200%'
                }}>
                  Custom Software
                </span>
              </h1>

              {/* Description */}
              <p style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '40px',
                lineHeight: '1.7',
                maxWidth: '600px'
              }}>
                We build scalable CRM, ERP, POS systems, SaaS platforms, and mobile apps that drive growth.
                <strong style={{ color: '#05DAC3' }}> 500+ projects</strong> delivered across{' '}
                <strong style={{ color: '#3D6CE7' }}>20+ countries</strong>.
              </p>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '48px'
              }}>
                <Link
                  href="/contact"
                  style={{
                    background: 'linear-gradient(135deg, #3D6CE7 0%, #05DAC3 100%)',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '1.0625rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 24px rgba(61, 108, 231, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(61, 108, 231, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(61, 108, 231, 0.3)';
                  }}
                >
                  Start Your Project
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>

                <Link
                  href="/portfolio"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '1.0625rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  View Portfolio
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>

              {/* Trusted By Section */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Trusted By
                </div>
                <div style={{
                  display: 'flex',
                  gap: '32px',
                  flexWrap: 'wrap'
                }}>
                  {trustedBy.map((brand, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '8px 16px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: '600',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Metrics Cards */}
          <div className="col-lg-5">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              marginLeft: 'auto',
              maxWidth: '500px'
            }}>
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bdm-card bdm-hover-scale"
                  style={{
                    padding: '24px',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                    {metric.icon}
                  </div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    marginBottom: '4px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #05DAC3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {metric.value}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: '500'
                  }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        animation: 'scroll 2s ease infinite'
      }}>
        <div style={{
          width: '30px',
          height: '50px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '25px',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '8px'
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            background: '#05DAC3',
            borderRadius: '2px',
            animation: 'scrollDot 2s ease infinite'
          }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes scroll {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(20px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
