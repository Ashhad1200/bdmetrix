'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Ms. Alex Mika',
            role: 'CEO & Founder',
            content: 'BD Matrix completely transformed our online presence! Their exceptional software development expertise went beyond expectations, creating a visually stunning and user-friendly platform.',
            rating: 5
        },
        {
            name: 'Mr. John Davis',
            role: 'Marketing Director',
            content: 'Working with BD Matrix was an absolute pleasure. They understood our vision and delivered a CRM system that exceeded all our expectations. Highly recommended!',
            rating: 5
        },
        {
            name: 'Sarah Johnson',
            role: 'Startup Founder',
            content: 'The team at BD Matrix is incredibly talented and professional. They helped us launch our SaaS platform with a stunning interface and robust backend.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'Product Manager',
            content: 'Exceptional service from start to finish. BD Matrix delivered our e-commerce platform on time and it has significantly boosted our online sales.',
            rating: 5
        },
        {
            name: 'Emily Roberts',
            role: 'Creative Director',
            content: 'BD Matrix\'s attention to detail and innovative approach made all the difference. Our brand now stands out in a crowded marketplace.',
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
