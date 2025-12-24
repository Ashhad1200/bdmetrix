/**
 * Error Boundary Component
 * Catches React errors and displays a fallback UI
 * Prevents the entire app from crashing due to component errors
 */
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console in development
        if (process.env.NODE_ENV === 'development') {
            console.error('Error Boundary caught an error:', error, errorInfo);
        }

        // In production, you could send this to an error tracking service
        // Example: logErrorToService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    backgroundColor: '#f8f9fa'
                }}>
                    <div style={{
                        maxWidth: '600px',
                        textAlign: 'center',
                        backgroundColor: 'white',
                        padding: '3rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <h1 style={{ color: '#dc3545', marginBottom: '1rem' }}>
                            Oops! Something went wrong
                        </h1>
                        <p style={{ color: '#6c757d', marginBottom: '2rem' }}>
                            We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            style={{
                                backgroundColor: '#0066FF',
                                color: 'white',
                                border: 'none',
                                padding: '0.75rem 2rem',
                                borderRadius: '4px',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#0052cc'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#0066FF'}
                        >
                            Refresh Page
                        </button>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details style={{ marginTop: '2rem', textAlign: 'left' }}>
                                <summary style={{ cursor: 'pointer', color: '#6c757d' }}>
                                    Error Details (Development Only)
                                </summary>
                                <pre style={{
                                    marginTop: '1rem',
                                    padding: '1rem',
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '4px',
                                    overflow: 'auto',
                                    fontSize: '0.875rem'
                                }}>
                                    {this.state.error.toString()}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
