/**
 * Loading Spinner Component
 * Reusable loading indicator for forms and async operations
 */
import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = '#0066FF', text = 'Loading...' }) => {
    const sizes = {
        small: '20px',
        medium: '40px',
        large: '60px'
    };

    const spinnerSize = sizes[size] || sizes.medium;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
        }}>
            <div
                style={{
                    width: spinnerSize,
                    height: spinnerSize,
                    border: `4px solid rgba(0, 102, 255, 0.1)`,
                    borderTop: `4px solid ${color}`,
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }}
            />
            {text && (
                <p style={{
                    margin: 0,
                    color: '#6c757d',
                    fontSize: '0.875rem'
                }}>
                    {text}
                </p>
            )}
            <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default LoadingSpinner;
