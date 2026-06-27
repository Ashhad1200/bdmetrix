import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductDemoForm from '../../components/ProductDemoForm/ProductDemoForm';
import ChatbotDemo from '../../components/ChatbotDemo/ChatbotDemo';
import ChatbotFlowDoc from '../../components/ChatbotFlowDoc/ChatbotFlowDoc';
import { products } from '../../data/products';
import styles from './product.module.css';

/* ── Icon Map ── */
function ProductIcon({ name }) {
    const icons = {
        receipt: <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>,
        map: <><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></>,
        box: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>,
        zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
        star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
        chart: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></>,
        'credit-card': <><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></>,
        shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
        user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
        users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
        settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
        file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
        lock: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
        check: <polyline points="20 6 9 17 4 12"/>,
        calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
        globe: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
        bell: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>,
    };
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {icons[name] ?? icons.zap}
        </svg>
    );
}

/* ── Pricing renderer ── */
function PricingSection({ pricing, productColor }) {
    if (pricing.type === 'contact' || pricing.type === 'saas') {
        return (
            <div className={styles.pricingContact}>
                <div className={styles.pricingContactInner}>
                    <h3 className={styles.pricingContactTitle}>Pricing & Plans</h3>
                    <p className={styles.pricingContactMsg}>{pricing.message}</p>
                    <a href="#demo-form" className={styles.pricingCta} style={{ background: productColor }}>
                        Get a Quote
                    </a>
                </div>
            </div>
        );
    }

    if (pricing.type === 'freemium' || pricing.type === 'tiered') {
        return (
            <div className={styles.pricingTiers}>
                {pricing.tiers.map((tier, i) => (
                    <div key={tier.name} className={`${styles.tierCard} ${i === 1 ? styles.tierHighlight : ''}`} style={i === 1 ? { borderColor: productColor } : {}}>
                        {i === 1 && <div className={styles.tierBadge} style={{ background: productColor }}>Most Popular</div>}
                        <h3 className={styles.tierName}>{tier.name}</h3>
                        <div className={styles.tierPrice} style={i === 1 ? { color: productColor } : {}}>{tier.price}</div>
                        <p className={styles.tierDesc}>{tier.description}</p>
                        <ul className={styles.tierFeatures}>
                            {tier.features.map((f) => (
                                <li key={f} className={styles.tierFeature}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={i === 1 ? productColor : '#1F6FFF'} strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <a href="#demo-form" className={styles.tierCta} style={i === 1 ? { background: productColor } : {}}>
                            {tier.price === 'Coming Soon' ? 'Join Waitlist' : 'Get Started'}
                        </a>
                    </div>
                ))}
            </div>
        );
    }

    return null;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bdmatrix.org';

/* ── Metadata ── */
export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);
    if (!product) return { title: 'Product Not Found | BD Matrix' };
    return {
        title: `${product.name} | BD Matrix`,
        description: product.description,
        openGraph: {
            type: 'website',
            url: `${siteUrl}/products/${product.id}`,
            siteName: 'BD Matrix',
            title: `${product.name} | BD Matrix`,
            description: product.description,
            images: [{ url: product.heroImage, width: 1400, height: 900, alt: product.name }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${product.name} | BD Matrix`,
            description: product.description,
            images: [product.heroImage],
        },
    };
}

/* ── Static Params ── */
export function generateStaticParams() {
    return products.map((p) => ({ id: p.id }));
}

/* ── Page ── */
export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) notFound();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: product.name,
        description: product.description,
        applicationCategory: product.category,
        operatingSystem: 'Web',
        url: `${siteUrl}/products/${product.id}`,
        author: {
            '@type': 'Organization',
            name: 'BD Matrix',
            url: siteUrl,
        },
        ...(product.pricing.type === 'freemium' && {
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
            },
        }),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className={styles.main}>

                {/* ── Hero ── */}
                <section className={styles.hero}>
                    <div
                        className={styles.heroBg}
                        style={{ backgroundImage: `url(${product.heroImage})` }}
                        aria-hidden="true"
                    />
                    <div className={styles.heroBgOverlay} aria-hidden="true" />
                    <div className={styles.container}>
                        <Link href="/products" className={styles.backLink}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                            All Products
                        </Link>

                        <div className={styles.heroContent}>
                            <span className={styles.industryBadge} style={{ background: product.color }}>
                                {product.industry}
                            </span>
                            <h1 className={styles.heroTitle}>{product.name}</h1>
                            <p className={styles.heroTagline}>{product.tagline}</p>
                            <p className={styles.heroDesc}>{product.description}</p>

                            <ul className={styles.valueProps}>
                                {product.valueProps.map((vp, i) => (
                                    <li key={i} className={styles.valueProp}>
                                        <span className={styles.valuePropCheck} style={{ color: product.color }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                                        </span>
                                        {vp}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.heroCtas}>
                                {product.id === 'client-chatbot' ? (
                                    <>
                                        <a href="#flow-documentation" className={styles.ctaSecondary}>
                                            View Flow Docs
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                                        </a>
                                        <a href="#demo-form" className={styles.ctaPrimary} style={{ background: product.color }}>
                                            Request Demo
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <a href="#features" className={styles.ctaSecondary}>
                                            View Features
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                                        </a>
                                        <a href="#demo-form" className={styles.ctaPrimary} style={{ background: product.color }}>
                                            Request Demo
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Chatbot-specific: Live Demo ── */}
                {product.id === 'client-chatbot' && <ChatbotDemo />}

                {/* ── Features ── */}
                <section className={styles.featuresSection} id="features">
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <div className="pill-tag">Features</div>
                            <h2 className={styles.sectionTitle}>
                                Everything you need, nothing you don&apos;t
                            </h2>
                            <p className={styles.sectionSubtitle}>
                                Every feature in {product.name} is built to solve a specific problem your team faces every day.
                            </p>
                        </div>

                        <div className={styles.featuresGrid}>
                            {product.features.map((feature) => (
                                <div key={feature.title} className={styles.featureCard}>
                                    <div className={styles.featureIcon} style={{ background: `${product.color}14`, color: product.color }}>
                                        <ProductIcon name={feature.icon} />
                                    </div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureProblem}>
                                        <span className={styles.problemLabel}>Problem: </span>
                                        {feature.problem}
                                    </p>
                                    <p className={styles.featureDesc}>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Who It's For ── */}
                <section className={styles.personasSection}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <div className="pill-tag">Who It&apos;s For</div>
                            <h2 className={styles.sectionTitle}>Built for teams like yours</h2>
                        </div>

                        <div className={styles.personasGrid}>
                            {product.personas.map((persona, i) => (
                                <div key={i} className={styles.personaCard}>
                                    <div className={styles.personaNumber} style={{ color: product.color }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className={styles.personaTitle}>{persona.title}</h3>
                                    <p className={styles.personaDesc}>{persona.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Pricing ── */}
                <section className={styles.pricingSection}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <div className="pill-tag">Pricing</div>
                            <h2 className={styles.sectionTitle}>Transparent pricing for every stage</h2>
                        </div>
                        <PricingSection pricing={product.pricing} productColor={product.color} />
                    </div>
                </section>

                {/* ── Testimonials ── */}
                <section className={styles.testimonialsSection}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <div className="pill-tag">Customer Stories</div>
                            <h2 className={styles.sectionTitle}>Trusted by teams around the world</h2>
                            <p className={styles.sectionSubtitle}>
                                See what businesses like yours say about working with BD Matrix.
                            </p>
                        </div>

                        <div className={styles.testimonialsGrid}>
                            <div className={styles.testimonialCard}>
                                <div className={styles.testimonialQuote}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill={product.color} aria-hidden="true" style={{ opacity: 0.25 }}><path d="M10 11L6 6H2v6l4 1-4 5h4l4-7zm12 0l-4-5h-4v6l4 1-4 5h4l4-7z"/></svg>
                                </div>
                                <p className={styles.testimonialText}>
                                    &ldquo;The implementation was smooth and the team support was excellent. Our operations improved measurably within the first month of go-live.&rdquo;
                                </p>
                                <div className={styles.testimonialAuthor}>
                                    <div className={styles.testimonialAvatar} style={{ background: `${product.color}22`, color: product.color }}>O</div>
                                    <div>
                                        <div className={styles.testimonialName}>Operations Manager</div>
                                        <div className={styles.testimonialCompany}>Regional Business Group</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.testimonialCard}>
                                <div className={styles.testimonialQuote}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill={product.color} aria-hidden="true" style={{ opacity: 0.25 }}><path d="M10 11L6 6H2v6l4 1-4 5h4l4-7zm12 0l-4-5h-4v6l4 1-4 5h4l4-7z"/></svg>
                                </div>
                                <p className={styles.testimonialText}>
                                    &ldquo;We reduced manual errors significantly. The reporting features save our finance team hours every week — the visibility alone justified the investment.&rdquo;
                                </p>
                                <div className={styles.testimonialAuthor}>
                                    <div className={styles.testimonialAvatar} style={{ background: `${product.color}22`, color: product.color }}>F</div>
                                    <div>
                                        <div className={styles.testimonialName}>Finance Director</div>
                                        <div className={styles.testimonialCompany}>Mid-Market Enterprise</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.testimonialCard}>
                                <div className={styles.testimonialQuote}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill={product.color} aria-hidden="true" style={{ opacity: 0.25 }}><path d="M10 11L6 6H2v6l4 1-4 5h4l4-7zm12 0l-4-5h-4v6l4 1-4 5h4l4-7z"/></svg>
                                </div>
                                <p className={styles.testimonialText}>
                                    &ldquo;Handles our scale better than anything else we evaluated. Setup was faster than expected and the BD Matrix team was responsive throughout.&rdquo;
                                </p>
                                <div className={styles.testimonialAuthor}>
                                    <div className={styles.testimonialAvatar} style={{ background: `${product.color}22`, color: product.color }}>T</div>
                                    <div>
                                        <div className={styles.testimonialName}>Technology Lead</div>
                                        <div className={styles.testimonialCompany}>Growing SMB</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Chatbot-specific: Flow Documentation ── */}
                {product.id === 'client-chatbot' && <ChatbotFlowDoc />}

                {/* ── Demo Form ── */}
                <section className={styles.formSection} id="demo-form">
                    <div className={styles.container}>
                        <div className={styles.formGrid}>
                            <div className={styles.formInfo}>
                                <div className="pill-tag">Request a Demo</div>
                                <h2 className={styles.formInfoTitle}>
                                    See {product.name} in action
                                </h2>
                                <p className={styles.formInfoDesc}>
                                    Our team will walk you through a live demo tailored to your use case,
                                    answer your questions, and provide pricing specific to your needs.
                                </p>
                                <ul className={styles.formInfoList}>
                                    <li>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                                        Response within 24 hours
                                    </li>
                                    <li>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                                        Live demo with your team
                                    </li>
                                    <li>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                                        Custom pricing for your scale
                                    </li>
                                    <li>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={product.color} strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                                        No commitment required
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.formWrapper}>
                                <ProductDemoForm productName={product.name} />
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
