'use client';
import Link from 'next/link';

export default function NotFound() {
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
      <div style={{ fontSize: 'clamp(50px, 15vw, 80px)', fontWeight: 900, color: '#10B981', lineHeight: 1 }}>404</div>
      <h1 style={{ fontSize: 'clamp(20px, 5vw, 32px)', fontWeight: 700, color: '#ffffff', margin: 0 }}>Page Not Found</h1>
      <p style={{ color: '#94A3B8', fontSize: 'clamp(0.95rem, 2.5vw, 18px)', maxWidth: '400px', margin: 0 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: '#10B981',
        color: '#ffffff',
        padding: '14px 28px',
        borderRadius: '8px',
        fontWeight: 700,
        textDecoration: 'none',
        fontSize: '16px'
      }}>
        ← Back to Home
      </Link>
    </main>
  );
}
