'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './Blog.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
    const headerRef = useRef(null);
    const headingRef = useRef(null);
    const viewAllRef = useRef(null);
    const blogGridRef = useRef(null);

    const posts = [
        {
            id: 'how-to-start-blog',
            title: 'How to Start a Blog: Beginner\'s Best Practice Guide',
            date: 'January 10, 2026',
            category: 'Digital Marketing',
            image: '/images/blog/blog-1.png'
        },
        {
            id: 'web-design-trends',
            title: 'Top Web Design Trends to Watch in 2026',
            date: 'January 8, 2026',
            category: 'Web Design',
            image: '/images/blog/blog-2.png'
        },
        {
            id: 'ecommerce-optimization',
            title: '10 Ways to Optimize Your E-commerce Conversion Rate',
            date: 'January 5, 2026',
            category: 'E-commerce',
            image: '/images/blog/blog-3.png'
        }
    ];

    useEffect(() => {
        // Animate header pill tag
        if (headerRef.current) {
            const pillTag = headerRef.current.querySelector('.pill-tag');
            if (pillTag) {
                gsap.fromTo(
                    pillTag,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: headerRef.current,
                            start: 'top 80%',
                        },
                    }
                );
            }
        }

        // Animate heading
        if (headingRef.current) {
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }

        // Animate view all button
        if (viewAllRef.current) {
            gsap.fromTo(
                viewAllRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: viewAllRef.current,
                        start: 'top 80%',
                    },
                }
            );
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
        <section className={styles.blog} id="blog">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header} ref={headerRef}>
                    <div>
                        <div className="pill-tag">
                            Our Blog
                        </div>
                        <h2 className={styles.heading} ref={headingRef}>
                            Recent Blogs & <span className={styles.accent}>News</span>
                        </h2>
                    </div>
                    <Link href="/blog" className={styles.viewAll} ref={viewAllRef}>
                        View All Blogs
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className={styles.blogGrid} ref={blogGridRef}>
                    {posts.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className={styles.blogCard}
                        >
                            <div className={styles.blogImage}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.category}>{post.category}</div>
                            </div>
                            <div className={styles.blogContent}>
                                <span className={styles.date}>{post.date}</span>
                                <h3 className={styles.blogTitle}>{post.title}</h3>
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
    );
}
