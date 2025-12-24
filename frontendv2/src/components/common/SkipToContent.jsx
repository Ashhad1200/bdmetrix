/**
 * Skip to Content Link Component
 * Accessibility feature for keyboard navigation
 * Allows users to skip navigation and jump directly to main content
 */
import React from 'react';

const SkipToContent = () => {
    return (
        <a
            href="#main-content"
            style={{
                position: 'absolute',
                left: '-9999px',
                zIndex: 999,
                padding: '1rem',
                backgroundColor: '#0066FF',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold'
            }}
            onFocus={(e) => {
                e.target.style.left = '1rem';
                e.target.style.top = '1rem';
            }}
            onBlur={(e) => {
                e.target.style.left = '-9999px';
            }}
        >
            Skip to main content
        </a>
    );
};

export default SkipToContent;
