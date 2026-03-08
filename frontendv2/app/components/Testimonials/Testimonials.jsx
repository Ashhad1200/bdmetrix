'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Ayesha Malik',
            role: 'CEO at NovaTech Solutions',
            content: 'BD Matrix built us a custom CRM that integrated with our existing ERP system and automated our entire sales pipeline. Within 3 months of launch, our lead-to-close rate improved by 34% and our sales team saves roughly 12 hours per week on manual data entry.',
            rating: 5
        },
        {
            name: 'Daniel Fischer',
            role: 'Marketing Director at GreenLeaf Agency',
            content: 'We hired BD Matrix to redesign our agency website and build a client portal from scratch. The new site loads in under 1.5 seconds, our bounce rate dropped by 41%, and the portal has saved us 20+ hours per month in client reporting alone.',
            rating: 5
        },
        {
            name: 'Fatima Raza',
            role: 'Founder at MedTrack Health',
            content: 'BD Matrix developed our patient management mobile app with real-time appointment scheduling and health metrics tracking. We went from paper-based processes to a fully digital system that now serves over 2,000 patients monthly across three clinics.',
            rating: 5
        },
        {
            name: 'Ryan Okonkwo',
            role: 'Product Manager at CloudStack Inc.',
            content: 'We needed a SaaS analytics dashboard built fast and built right. BD Matrix delivered a production-ready platform in 10 weeks with real-time data visualization and role-based access. Our customer onboarding time dropped from 5 days to under 24 hours.',
            rating: 5
        },
        {
            name: 'Hira Siddiqui',
            role: 'Operations Lead at QuickServe POS',
            content: 'BD Matrix built our cloud-based POS system that handles inventory, billing, and staff management in one place. Since going live, our checkout speed improved by 28% and inventory discrepancies dropped to near zero across all 6 of our retail locations.',
            rating: 5
        }
    ];

    return (
        <section className={styles.testimonials} id="testimonials">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className="pill-tag" data-aos="fade-up">
                        Testimonials
                    </div>
                    <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="100">
                        Success Stories From<br />
                        <span className={styles.accent}>Around the Globe</span>
                    </h2>
                </div>

                {/* Testimonials Slider */}
                <div data-aos="fade-up" data-aos-delay="200">
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
