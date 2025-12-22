import React from 'react';
import Link from 'next/link';

// Metrics data
const metrics = [
  { value: "500+", label: "Projects Completed", icon: "🚀" },
  { value: "250+", label: "Happy Clients", icon: "😊" },
  { value: "10+", label: "Years Experience", icon: "⭐" },
  { value: "99%", label: "Client Satisfaction", icon: "💯" }
];

// Trusted brands (you can replace with actual logos)
const trustedBy = [
  "Fortune 500", "Startups", "Enterprises", "SMBs"
];

const HeroSlider = () => {
  return (
    <section className="tp-hero-area tp-hero-space pb-95" style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#0a0e27'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/assets/img/hero/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.75
      }}></div>

      {/* Dark Gradient Overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.75) 0%, rgba(20, 30, 70, 0.65) 100%)'
      }}></div>

      {/* Animated Background Shapes */}
      <div style={{ position: 'absolute', top: '10%', right: '10%', width: '400px', height: '400px', background: 'rgba(61, 108, 231, 0.08)', borderRadius: '50%', filter: 'blur(100px)' }} className="bdm-float"></div>
      <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '300px', height: '300px', background: 'rgba(5, 218, 195, 0.08)', borderRadius: '50%', filter: 'blur(80px)', animationDelay: '2s' }} className="bdm-float"></div>

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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '50px',
                  boxShadow: '0 4px 15px rgba(5, 218, 195, 0.3)'
                }}>
                  <span style={{ fontSize: '16px' }}>⚡</span>
                  CRM • ERP • POS • Landing Sites • SaaS • Mobile Apps
                </span>
              </div>

              {/* Main Heading with better emphasis */}
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '24px',
                color: 'white',
                fontFamily: 'var(--bdm-font-heading)',
                textShadow: '0 2px 20px rgba(0,0,0,0.2)'
              }}>
                Build Tomorrow's
                <br />
                <span className="bdm-gradient-text" style={{
                  background: 'linear-gradient(135deg, #05DAC3 0%, #3D6CE7 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                  animation: 'gradient 3s ease infinite'
                }}>
                  Software, Today
                </span>
              </h1>

              {/* Subheading with icon */}
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.7',
                marginBottom: '32px',
                color: 'rgba(255, 255, 255, 0.95)',
                maxWidth: '600px',
                fontWeight: '400',
                letterSpacing: '0.3px'
              }}>
                <span style={{
                  fontSize: '1.5rem',
                  marginRight: '8px',
                  verticalAlign: 'middle'
                }}>🚀</span>
                Custom software development agency powering startups to enterprises with scalable SaaS platforms, mobile apps, and digital infrastructure.
              </p>

              {/* Enhanced CTA Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <Link href="/contact" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #3D6CE7 0%, #05DAC3 100%)',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(61, 108, 231, 0.4)',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(61, 108, 231, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(61, 108, 231, 0.4)';
                  }}>
                  Start Your Project
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>

                <Link href="/portfolio" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}>
                  <i className="fa-regular fa-play-circle"></i>
                  View Our Work
                </Link>
              </div>

              {/* Trust Indicators */}
              <div style={{
                marginBottom: '32px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,0.1)'
              }}>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: '600'
                }}>
                  Trusted By
                </p>
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                  {trustedBy.map((brand, i) => (
                    <span key={i} style={{
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '14px',
                      fontWeight: '500',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <span style={{ fontSize: '18px' }}>✓</span>
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Floating Metric Cards */}
          <div className="col-lg-5">
            <div style={{
              position: 'relative',
              height: '500px'
            }}>
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bdm-glass bdm-float"
                  style={{
                    position: 'absolute',
                    padding: '24px 28px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    minWidth: '200px',
                    animationDelay: `${index * 0.2}s`,
                    ...(index === 0 && { top: '10%', right: '0%', background: 'linear-gradient(135deg, rgba(61, 108, 231, 0.15) 0%, rgba(5, 218, 195, 0.15) 100%)' }),
                    ...(index === 1 && { top: '35%', right: '25%', background: 'linear-gradient(135deg, rgba(5, 218, 195, 0.15) 0%, rgba(61, 108, 231, 0.15) 100%)' }),
                    ...(index === 2 && { top: '60%', right: '5%', background: 'linear-gradient(135deg, rgba(61, 108, 231, 0.15) 0%, rgba(5, 218, 195, 0.15) 100%)' }),
                    ...(index === 3 && { bottom: '5%', right: '30%', background: 'linear-gradient(135deg, rgba(5, 218, 195, 0.15) 0%, rgba(61, 108, 231, 0.15) 100%)' })
                  }}
                >
                  <div style={{
                    fontSize: '32px',
                    marginBottom: '8px'
                  }}>
                    {metric.icon}
                  </div>
                  <div className="bdm-metric-value" style={{
                    fontSize: '2.25rem',
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #ffffff 0%, #05DAC3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: '1.2',
                    marginBottom: '8px'
                  }}>
                    {metric.value}
                  </div>
                  <div className="bdm-metric-label" style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '600',
                    letterSpacing: '0.3px'
                  }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          animation: 'bounce 2s infinite'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '12px',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: '600'
          }}>
            Scroll to explore
          </p>
          <div style={{
            width: '24px',
            height: '36px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <div style={{
              width: '4px',
              height: '8px',
              background: 'white',
              borderRadius: '2px',
              position: 'absolute',
              top: '6px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'scroll 1.5s infinite'
            }}></div>
          </div>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        @keyframes scroll {
          0% { top: 6px; opacity: 1; }
          100% { top: 18px; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
