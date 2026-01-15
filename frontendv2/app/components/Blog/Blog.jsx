'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Blog.module.css';

export default function Blog() {
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

    return (
        <section className={styles.blog} id="blog">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div>
                        <div className="pill-tag" data-aos="fade-up">
                            Our Blog
                        </div>
                        <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="100">
                            Recent Blogs & <span className={styles.accent}>News</span>
                        </h2>
                    </div>
                    <Link href="/blog" className={styles.viewAll} data-aos="fade-up" data-aos-delay="150">
                        View All Blogs
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className={styles.blogGrid}>
                    {posts.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className={styles.blogCard}
                            data-aos="fade-up"
                            data-aos-delay={100 + index * 100}
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
