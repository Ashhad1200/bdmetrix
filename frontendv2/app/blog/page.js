'use client';
import { useEffect, useRef } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import styles from './blog.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
    const heroRef = useRef(null);
    const blogGridRef = useRef(null);

    const posts = [
        { id: 'how-to-start-blog', title: 'How to Start a Blog: Beginner\'s Best Practice Guide', date: 'January 10, 2026', category: 'Digital Marketing', excerpt: 'Learn the essential steps to start a successful blog from scratch.' },
        { id: 'web-design-trends', title: 'Top Web Design Trends to Watch in 2026', date: 'January 8, 2026', category: 'Web Design', excerpt: 'Discover the latest web design trends shaping the digital landscape.' },
        { id: 'ecommerce-optimization', title: '10 Ways to Optimize Your E-commerce Conversion Rate', date: 'January 5, 2026', category: 'E-commerce', excerpt: 'Boost your online sales with these proven strategies.' },
        { id: 'brand-identity-guide', title: 'Complete Guide to Building Brand Identity', date: 'January 2, 2026', category: 'Branding', excerpt: 'How to create a powerful brand that resonates with your audience.' },
        { id: 'mobile-first-design', title: 'Mobile-First Design: Why It Matters', date: 'December 28, 2025', category: 'UI/UX', excerpt: 'Understanding the importance of mobile-first approach in modern web design.' },
        { id: 'seo-strategies', title: 'SEO Strategies That Actually Work in 2026', date: 'December 25, 2025', category: 'Digital Marketing', excerpt: 'Proven SEO techniques to improve your website ranking.' }
    ];

    useEffect(() => {
        // Animate hero section
        if (heroRef.current) {
            const pillTag = heroRef.current.querySelector('.pill-tag');
            const title = heroRef.current.querySelector(`.${styles.title}`);
            const subtitle = heroRef.current.querySelector(`.${styles.subtitle}`);

            const tl = gsap.timeline();
            if (pillTag) tl.fromTo(pillTag, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0);
            if (title) tl.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.1);
            if (subtitle) tl.fromTo(subtitle, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2);
        }

        // Animate blog cards with stagger
        if (blogGridRef.current) {
            const blogCards = blogGridRef.current.querySelectorAll(`.${styles.blogCard}`);
            gsap.fromTo(
                blogCards,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.12,
                    scrollTrigger: {
                        trigger: blogGridRef.current,
                        start: 'top 80%',
                    },
                }
            );

            // Add hover animations
            blogCards.forEach((card) => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -12,
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                });
            });
        }
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero} ref={heroRef}>
                    <div className={styles.container}>
                        <div className="pill-tag">Our Blog</div>
                        <h1 className={styles.title}>
                            Latest <span className={styles.accent}>News & Insights</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Stay updated with our latest articles, insights, and industry trends.
                        </p>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className={styles.blog}>
                    <div className={styles.container}>
                        <div className={styles.blogGrid} ref={blogGridRef}>
                            {posts.map((post, index) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.id}`}
                                    className={styles.blogCard}
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
