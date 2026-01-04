import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSlider = () => {
  return (
    <section className="tp-hero-area" style={{
      position: 'relative',
      background: '#0a1a35',
      overflow: 'hidden',
      height: '100vh',
      // paddingTop: '-80px',
      // paddingBottom: '80px',
      // minHeight: '40vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Background Image Layer with Low Opacity */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/hero.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.15,
        zIndex: 0
      }}></div>

      {/* Gradient Overlay on top of image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // background: 'linear-gradient(135deg, rgba(10, 26, 53, 0.85) 0%, rgba(26, 45, 90, 0.75) 25%, rgba(15, 30, 66, 0.8) 50%, rgba(26, 45, 90, 0.75) 75%, rgba(10, 26, 53, 0.85) 100%)',
        zIndex: 1
      }}></div>
      {/* Animated Mesh Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        right: '-50%',
        bottom: '-50%',
        animation: 'meshMove 20s ease-in-out infinite',
        pointerEvents: 'none',
        zIndex: 2
      }}></div>

      {/* Enhanced grid pattern overlay with BD Matrix colors */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundImage: `
        //   radial-gradient(circle, rgba(5, 218, 195, 0.05) 1px, transparent 1px),
        //   radial-gradient(circle, rgba(61, 108, 231, 0.03) 1px, transparent 1px)
        // `,
        backgroundSize: '40px 40px, 80px 80px',
        backgroundPosition: '0 0, 20px 20px',
        pointerEvents: 'none',
        opacity: 0.6,
        zIndex: 3
      }}></div>

      {/* Spotlight effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '500px',
        height: '500px',
        // background: 'radial-gradient(circle, rgba(5, 218, 195, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 2
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '600px',
        height: '600px',
        // background: 'radial-gradient(circle, rgba(61, 108, 231, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 2
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="row align-items-center" style={{ minHeight: '70vh' }}>

          {/* Main Hero Content */}
          <div className="col-12">
            <div className="tp-hero-content" style={{
              // maxWidth: '1100px',
              margin: '0 auto',
              textAlign: 'left'
            }}>

              {/* Top Section: Badge */}
              <div style={{
                marginBottom: '22px'
              }}>
                {/* Badge */}
                <div>
                  <span style={{
                    background: 'rgba(61, 108, 231, 0.12)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(61, 108, 231, 0.3)',
                    color: '#ffffff',
                    padding: '14px 28px',
                    fontSize: '13px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1.2px',
                    borderRadius: '10px',
                    display: 'inline-block',
                    boxShadow: '0 4px 16px rgba(61, 108, 231, 0.2)'
                  }}>
                    🚀 Enterprise Solutions
                  </span>
                </div>
              </div>

              {/* Main Heading with Highlighted Text Boxes */}
              <div style={{
                position: 'relative',
                marginBottom: '32px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  marginBottom: '0',
                  fontFamily: 'var(--tp-ff-heading)',
                  color: 'white'
                }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #C4FF00 0%, #8FFF00 100%)',
                    color: '#0a1a35',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    marginRight: '12px',
                    display: 'inline-block',
                    marginBottom: '12px',
                    boxShadow: '0 4px 20px rgba(196, 255, 0, 0.3)',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    Business Intelligence
                  </span>
                  {' '}
                  <br />
                  built around{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #05DAC3 0%, #3D6CE7 100%)',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    display: 'inline-block',
                    marginBottom: '12px',
                    boxShadow: '0 4px 20px rgba(5, 218, 195, 0.4)',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    data teams
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '40px',
                lineHeight: '1.7',
                maxWidth: '700px'
              }}>
                BD Matrix is the central hub for your organization's analysis, unifying data teams and business teams around data to drive business outcomes.
              </p>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '80px'
              }}>
                <Link
                  href="/contact"
                  style={{
                    background: 'white',
                    color: '#0a1128',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 16px rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 255, 255, 0.2)';
                  }}
                >
                  Try for free
                </Link>

                <Link
                  href="/contact"
                  style={{
                    background: 'transparent',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  Request demo
                </Link>
              </div>

              {/* Secondary Section */}
              <div style={{
                textAlign: 'center',
                paddingTop: '60px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                marginTop: '40px'
              }}>
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '20px',
                  lineHeight: '1.3'
                }}>
                  Clear the path from data<br />to insights, together
                </h2>
                <p style={{
                  fontSize: '1.125rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  Perform complex, ad hoc analysis and empower simple self-service reporting, all on the same platform.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        @keyframes meshMove {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        @media (min-width: 992px) {
          .hero-chart-desktop {
            display: block !important;
          }
        }

        @media (max-width: 991px) {
          .hero-chart-desktop {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding-top: 80px !important;
            padding-bottom: 60px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
