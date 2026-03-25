'use client';
import Link from 'next/link';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.glow}></div>
      <div className="container">
        <div className={styles.content}>
          <span className="pill-tag">Ready to Start?</span>
          <h2 className={styles.title}>
            Let&apos;s Build Something <span className={styles.accent}>Extraordinary</span> Together
          </h2>
          <p className={styles.subtitle}>
            Transform your business with cutting-edge digital solutions. Our team of experts is ready to bring your vision to life.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryBtn}>
              Start Your Project ↗
            </Link>
            <Link href="/service" className={styles.outlineBtn}>
              Explore Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
