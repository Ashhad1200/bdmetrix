'use client';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import styles from './blog.module.css';

export default function BlogPage() {
    const posts = [
        { id: 'how-to-start-blog', title: 'How to Start a Blog: Beginner\'s Best Practice Guide', date: 'January 10, 2026', category: 'Digital Marketing', excerpt: 'Learn the essential steps to start a successful blog from scratch.' },
        { id: 'web-design-trends', title: 'Top Web Design Trends to Watch in 2026', date: 'January 8, 2026', category: 'Web Design', excerpt: 'Discover the latest web design trends shaping the digital landscape.' },
        { id: 'ecommerce-optimization', title: '10 Ways to Optimize Your E-commerce Conversion Rate', date: 'January 5, 2026', category: 'E-commerce', excerpt: 'Boost your online sales with these proven strategies.' },
        { id: 'brand-identity-guide', title: 'Complete Guide to Building Brand Identity', date: 'January 2, 2026', category: 'Branding', excerpt: 'How to create a powerful brand that resonates with your audience.' },
        { id: 'mobile-first-design', title: 'Mobile-First Design: Why It Matters', date: 'December 28, 2025', category: 'UI/UX', excerpt: 'Understanding the importance of mobile-first approach in modern web design.' },
        { id: 'seo-strategies', title: 'SEO Strategies That Actually Work in 2026', date: 'December 25, 2025', category: 'Digital Marketing', excerpt: 'Proven SEO techniques to improve your website ranking.' }
    ];

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className="pill-tag" data-aos="fade-up">Our Blog</div>
                        <h1 className={styles.title} data-aos="fade-up" data-aos-delay="100">
                            Latest <span className={styles.accent}>News & Insights</span>
                        </h1>
                        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
                            Stay updated with our latest articles, insights, and industry trends.
                        </p>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className={styles.blog}>
                    <div className={styles.container}>
                        <div className={styles.blogGrid}>
                            {posts.map((post, index) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.id}`}
                                    className={styles.blogCard}
                                    data-aos="fade-up"
                                    data-aos-delay={100 + (index % 3) * 100}
                                >
                                    <div className={styles.blogImage}>
                                        <div className={styles.imagePlaceholder}>
                                            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                <circle cx="8.5" cy="8.5" r="1.5" />
                                                <polyline points="21 15 16 10 5 21" />
                                            </svg>
                                        </div>
                                        <div className={styles.category}>{post.category}</div>
                                    </div>
                                    <div className={styles.blogContent}>
                                        <span className={styles.date}>{post.date}</span>
                                        <h3 className={styles.blogTitle}>{post.title}</h3>
                                        <p className={styles.excerpt}>{post.excerpt}</p>
                                        <span className={styles.readMore}>
                                            Read More
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
