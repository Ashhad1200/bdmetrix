/**
 * Scroll to Top Button Component
 * Shows a button to scroll back to top when user scrolls down
 */
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    style={{
                        position: 'fixed',
                        bottom: '2rem',
                        right: '2rem',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#0066FF',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        boxShadow: '0 4px 12px rgba(0, 102, 255, 0.3)',
                        transition: 'all 0.3s ease',
                        zIndex: 1000,
                        opacity: 0.9
                    }}
                    onMouseOver={(e) => {
                        e.target.style.opacity = '1';
                        e.target.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.opacity = '0.9';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
