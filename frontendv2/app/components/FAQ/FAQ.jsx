'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './FAQ.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const headerRef = useRef(null);
    const headingRef = useRef(null);
    const faqListRef = useRef(null);

    const faqs = [
        {
            question: 'What types of software do you build?',
            answer: 'We build custom web & mobile apps, ERP systems, SaaS platforms, POS systems, and CRM solutions tailored to your specific business challenges and requirements.'
        },
        {
            question: 'How long does a project typically take?',
            answer: 'Project timelines vary based on scope and complexity — from 4–12+ weeks for full custom solutions. We provide detailed timelines during our initial consultation based on your specific requirements.'
        },
        {
            question: 'Do you offer ongoing support?',
            answer: 'Yes — we provide comprehensive maintenance, updates, security patches, and growth optimization services post-launch to ensure your systems continue to perform optimally.'
        },
        {
            question: 'Can you redesign an existing product?',
            answer: 'Absolutely — we evaluate and modernize existing systems to improve performance, user experience, and scalability. We can also migrate legacy systems to modern technologies.'
        },
        {
            question: 'What is your development process?',
            answer: 'Our proven process includes Discovery & Strategy, Design & Prototyping, Development & Testing, Launch & Optimization, and ongoing Support & Growth. We involve you at every stage for transparent collaboration.'
        },
        {
            question: 'Do you work with international clients?',
            answer: 'Absolutely. BD Matrix is headquartered in Karachi, Pakistan, with active clients in Canada, the UK, and across the Middle East. We work across time zones and have a proven process for remote collaboration — from discovery calls to final delivery. Wherever you are, we make it work.'
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

        // Animate FAQ items with stagger
        if (faqListRef.current) {
            const faqItems = faqListRef.current.querySelectorAll(`.${styles.faqItem}`);
            gsap.fromTo(
                faqItems,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: faqListRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }
    }, []);

    return (
        <section className={styles.faq} id="faq">
            {/* Background Text */}
            <div className={styles.bgText}>FAQ's</div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header} ref={headerRef}>
                    <div className="pill-tag">
                        FAQ
                    </div>
                    <h2 className={styles.heading} ref={headingRef}>
                        Frequently Asked <span className={styles.accent}>Questions</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className={styles.faqList} ref={faqListRef}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span>{faq.question}</span>
                                <div className={styles.icon}>
                                    <span className={styles.iconLine}></span>
                                    <span className={`${styles.iconLine} ${styles.vertical}`}></span>
                                </div>
                            </button>
                            <div className={styles.faqAnswer}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
