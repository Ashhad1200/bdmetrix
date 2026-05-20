'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
  }, [error]);

  return (
    <main style={{ 
      minHeight: '100vh', 
      background: '#0A0F1E', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      gap: '24px'
    }}>
      <div style={{ fontSize: '60px' }}>⚠️</div>
      <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#ffffff', margin: 0 }}>Something went wrong</h1>
      <p style={{ color: '#94A3B8', fontSize: '18px', maxWidth: '400px', margin: 0 }}>
        An unexpected error occurred. Please try again or contact support.
      </p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => reset()}
          style={{
            background: '#1F6FFF',
            color: '#ffffff',
            padding: '14px 28px',
            borderRadius: '8px',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Try Again
        </button>
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: 'transparent',
          color: '#ffffff',
          padding: '14px 28px',
          borderRadius: '8px',
          fontWeight: 600,
          border: '1px solid rgba(255,255,255,0.2)',
          textDecoration: 'none',
          fontSize: '16px'
        }}>
          ← Home
        </Link>
      </div>
    </main>
  );
}
