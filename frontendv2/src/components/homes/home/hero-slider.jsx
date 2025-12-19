import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Metrics data
const metrics = [
  { value: "500+", label: "Projects Completed" },
  { value: "250+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" }
];

const HeroSlider = () => {
  return (
    <section className="tp-hero-area tp-hero-space pb-95 bdm-bg-gradient-hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Animated Background Shapes */}
      <div style={{ position: 'absolute', top: '10%', right: '10%', width: '400px', height: '400px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%', filter: 'blur(100px)' }} className="bdm-float"></div>
      <div style={{ position: 'absolute', bottom: '20%', left: '5%', width: '300px', height: '300px', background: 'rgba(5, 218, 195, 0.1)', borderRadius: '50%', filter: 'blur(80px)', animationDelay: '2s' }} className="bdm-float"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center" style={{ minHeight: '80vh', paddingTop: '80px', paddingBottom: '80px' }}>

          {/* Main Hero Content */}
          <div className="col-lg-7">
            <div className="tp-hero-content">
              {/* Subtitle Badge */}
              <div style={{ marginBottom: '24px' }}>
                <span className="bdm-badge bdm-badge-outline" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '8px 16px',
                  fontSize: '14px',
                  display: 'inline-block'
                }}>
                  CRM • ERP • POS • Landing Sites • SaaS • Mobile Apps
                </span>
              </div>

              {/* Main Heading */}
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '24px',
                color: 'white',
                fontFamily: 'var(--bdm-font-heading)'
              }}>
                Build Tomorrow's
                <br />
                <span className="bdm-gradient-text" style={{
                  background: 'linear-gradient(135deg, #05DAC3 0%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Software, Today
                </span>
              </h1>

              {/* Subheading */}
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.6',
                marginBottom: '32px',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '600px'
              }}>
                Custom software development agency powering startups to enterprises with scalable SaaS platforms, mobile apps, and digital infrastructure.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                <Link href="/contact" className="bdm-btn bdm-btn-primary">
                  Start Your Project
                  <i className="fa-regular fa-arrow-right-long" style={{ marginLeft: '8px' }}></i>
                </Link>
                <Link href="/portfolio" className="bdm-btn bdm-btn-outline">
                  View Our Work
                </Link>
              </div>

              {/* Metrics Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '24px',
                marginTop: '40px'
              }}>
                {metrics.map((metric, index) => (
                  <div key={index} className="bdm-metric" style={{ textAlign: 'left' }}>
                    <div className="bdm-metric-value" style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #ffffff 0%, #05DAC3 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: '1.2'
                    }}>
                      {metric.value}
                    </div>
                    <div className="bdm-metric-label" style={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginTop: '4px'
                    }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Floating Elements / Visual */}
          <div className="col-lg-5 d-none d-lg-block">
            <div style={{ position: 'relative', height: '500px' }}>
              {/* Floating Card 1 */}
              <div className="bdm-glass bdm-float" style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                padding: '24px',
                borderRadius: 'var(--bdm-radius-lg)',
                maxWidth: '280px',
                animationDelay: '0s'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📈</div>
                <h4 style={{ color: 'white', fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px' }}>
                  15% Sales Growth
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', margin: 0 }}>
                  Average increase for our CRM clients
                </p>
              </div>

              {/* Floating Card 2 */}
              <div className="bdm-glass bdm-float" style={{
                position: 'absolute',
                top: '55%',
                right: '25%',
                padding: '24px',
                borderRadius: 'var(--bdm-radius-lg)',
                maxWidth: '280px',
                animationDelay: '1s'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⚡</div>
                <h4 style={{ color: 'white', fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px' }}>
                  30% Cost Reduction
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', margin: 0 }}>
                  With our ERP automation solutions
                </p>
              </div>

              {/* Floating Card 3 */}
              <div className="bdm-glass bdm-float" style={{
                position: 'absolute',
                top: '35%',
                left: '5%',
                padding: '20px',
                borderRadius: 'var(--bdm-radius-lg)',
                maxWidth: '240px',
                animationDelay: '2s'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🚀</div>
                <h4 style={{ color: 'white', fontSize: '1.125rem', fontWeight: '600', marginBottom: '8px' }}>
                  10x Faster Launch
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', margin: 0 }}>
                  Time-to-market for SaaS platforms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="bdm-scroll-indicator" style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          animation: 'bounce 2s infinite'
        }}>
          <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', marginBottom: '8px' }}>
            Scroll to Explore
          </div>
          <i className="fa-solid fa-chevron-down" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.25rem' }}></i>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }

        @media (max-width: 768px) {
          .bdm-scroll-indicator {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
