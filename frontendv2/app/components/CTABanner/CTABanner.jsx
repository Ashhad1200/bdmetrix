'use client';
import Link from 'next/link';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.glow}></div>
      <div className="container">
        <div className={styles.content}>
          <span className="pill-tag">See It In Action</span>
          <h2 className={styles.title}>
            Ready to modernize your <span className={styles.accent}>restaurant or retail</span> operations?
          </h2>
          <p className={styles.subtitle}>
            Book a 15-minute demo and we&apos;ll walk you through a real POS setup on a real screen. No pitch deck. No sales pressure. If we&apos;re not the right fit, we&apos;ll tell you.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.primaryBtn}>
              Book a 15-min demo ↗
            </Link>
            <a href="https://wa.me/923211426216?text=Hi%20BD%20Matrix%2C%20I%27d%20like%20to%20see%20a%20POS%20demo%20for%20my%20restaurant." target="_blank" rel="noopener noreferrer" className={styles.outlineBtn}>
              WhatsApp us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
