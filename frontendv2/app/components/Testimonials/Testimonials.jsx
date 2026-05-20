'use client';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
    const headerRef = useRef(null);
    const headingRef = useRef(null);
    const sliderRef = useRef(null);

    const testimonials = [
        {
            name: 'Ms. Alex Mika',
            role: 'CEO & Founder',
            company: 'NovaTech Solutions, Toronto',
            content: 'BD Matrix built us a custom CRM that integrated with our existing ERP system and automated our entire sales pipeline. Within 3 months of launch, our lead-to-close rate improved by 34% and our sales team saves roughly 12 hours per week on manual data entry.',
            rating: 5
        },
        {
            name: 'Mr. John Davis',
            role: 'Marketing Director',
            company: 'GreenLeaf Agency, Karachi',
            content: 'We hired BD Matrix to redesign our agency website and build a client portal from scratch. The new site loads in under 1.5 seconds, our bounce rate dropped by 41%, and the portal has saved us 20+ hours per month in client reporting alone.',
            rating: 5
        },
        {
            name: 'Sarah Johnson',
            role: 'Startup Founder',
            company: 'Launchpad Digital, London',
            content: 'BD Matrix developed our patient management mobile app with real-time appointment scheduling and health metrics tracking. We went from paper-based processes to a fully digital system that now serves over 2,000 patients monthly across three clinics.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Product Manager',
            company: 'RetailFlow Inc., Vancouver',
            content: 'We needed a SaaS analytics dashboard built fast and built right. BD Matrix delivered a production-ready platform in 10 weeks with real-time data visualization and role-based access. Our customer onboarding time dropped from 5 days to under 24 hours.',
            rating: 5
        },
        {
            name: 'Emily Roberts',
            role: 'Creative Director',
            company: 'Studio Ember, Lahore',
            content: 'BD Matrix built our cloud-based POS system that handles inventory, billing, and staff management in one place. Since going live, our checkout speed improved by 28% and inventory discrepancies dropped to near zero across all 6 of our retail locations.',
            rating: 5
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

        // Animate slider
        if (sliderRef.current) {
            gsap.fromTo(
                sliderRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sliderRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }
    }, []);

    return (
        <section className={styles.testimonials} id="testimonials">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header} ref={headerRef}>
                    <div className="pill-tag">
                        Testimonials
                    </div>
                    <h2 className={styles.heading} ref={headingRef}>
                        Success Stories From<br />
                        <span className={styles.accent}>Around the Globe</span>
                    </h2>
                </div>

                {/* Testimonials Slider */}
                <div ref={sliderRef}>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        className={styles.slider}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.testimonialCard}>
                                    <div className={styles.stars}>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--accent)">
                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className={styles.content}>{testimonial.content}</p>
                                    <div className={styles.author}>
                                        <div className={styles.avatar}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className={styles.name}>{testimonial.name}</h4>
                                            <p className={styles.role}>{testimonial.role}</p>
                                            {testimonial.company && (
                                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px', opacity: 0.7 }}>{testimonial.company}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
