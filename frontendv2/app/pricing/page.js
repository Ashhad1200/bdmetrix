import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { products } from '../data/products';
import styles from './pricing.module.css';

export const metadata = {
    title: 'Pricing | BD Matrix',
    description:
        'Transparent pricing for all 8 BD Matrix products. Find the right plan for your business — from POS and ERP to HR and venue management.',
};

function PricingCard({ product }) {
    const { pricing } = product;

    if (pricing.type === 'freemium' || pricing.type === 'tiered') {
        return (
            <div className={styles.productSection}>
                <div className={styles.productHeader} style={{ borderColor: product.color }}>
                    <span className={styles.productBadge} style={{ background: product.color }}>
                        {product.industryTag}
                    </span>
                    <h2 className={styles.productName}>{product.name}</h2>
                    <p className={styles.productTagline}>{product.tagline}</p>
                </div>

                <div className={styles.tiersRow}>
                    {pricing.tiers.map((tier, i) => (
                        <div
                            key={tier.name}
                            className={`${styles.tierCard} ${i === 1 ? styles.tierHighlight : ''}`}
                            style={i === 1 ? { borderColor: product.color } : {}}
                        >
                            {i === 1 && (
                                <div className={styles.tierBadge} style={{ background: product.color }}>
                                    Most Popular
                                </div>
                            )}
                            <div className={styles.tierName}>{tier.name}</div>
                            <div className={styles.tierPrice} style={i === 1 ? { color: product.color } : {}}>
                                {tier.price}
                            </div>
                            <p className={styles.tierDesc}>{tier.description}</p>
                            <ul className={styles.tierFeatures}>
                                {tier.features.map((f) => (
                                    <li key={f} className={styles.tierFeature}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={i === 1 ? product.color : '#64748B'} strokeWidth="2.5" aria-hidden="true">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={`/products/${product.id}#demo-form`}
                                className={styles.tierCta}
                                style={i === 1 ? { background: product.color } : {}}
                            >
                                {tier.price === 'Coming Soon' ? 'Join Waitlist' : 'Get Started'}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.productSection}>
            <div className={styles.productHeader} style={{ borderColor: product.color }}>
                <span className={styles.productBadge} style={{ background: product.color }}>
                    {product.industryTag}
                </span>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productTagline}>{product.tagline}</p>
            </div>

            <div className={styles.contactCard}>
                <div className={styles.contactIcon} style={{ background: `${product.color}14`, color: product.color }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
                <p className={styles.contactMsg}>{pricing.message}</p>
                <Link
                    href={`/products/${product.id}#demo-form`}
                    className={styles.contactCta}
                    style={{ background: product.color }}
                >
                    Get a Quote
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default function PricingPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className="pill-tag">Pricing</div>
                        <h1 className={styles.heroTitle}>
                            Straightforward pricing for every business
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Every BD Matrix product is priced to match your business scale. Most plans are
                            custom-quoted — contact us and we&apos;ll tailor a package to your needs.
                        </p>
                    </div>
                </section>

                {/* Products */}
                <section className={styles.productsSection}>
                    <div className={styles.container}>
                        {products.map((product) => (
                            <PricingCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.faqSection}>
                    <div className={styles.container}>
                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3 className={styles.faqQ}>How is pricing determined?</h3>
                                <p className={styles.faqA}>
                                    Pricing is based on your number of users, locations, and required modules.
                                    We quote per your actual setup — no paying for what you don&apos;t use.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3 className={styles.faqQ}>Are there setup or onboarding fees?</h3>
                                <p className={styles.faqA}>
                                    Implementation and onboarding are included in the first engagement.
                                    We stay on-site until your team is confident.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3 className={styles.faqQ}>Do you offer annual discounts?</h3>
                                <p className={styles.faqA}>
                                    Yes — annual commitments receive discounted rates. Ask your sales contact
                                    for the annual pricing breakdown when requesting a quote.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3 className={styles.faqQ}>Can I start with one module and expand?</h3>
                                <p className={styles.faqA}>
                                    Absolutely. All BD Matrix products are modular. Start with core functionality
                                    and unlock additional modules as your business grows.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <div className={styles.ctaBox}>
                            <div className="pill-tag">Talk to Us</div>
                            <h2 className={styles.ctaTitle}>Ready to get a quote?</h2>
                            <p className={styles.ctaDesc}>
                                Tell us about your business and we&apos;ll put together a pricing proposal within 24 hours.
                            </p>
                            <Link href="/contact" className={styles.ctaBtn}>
                                Contact Our Team
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
