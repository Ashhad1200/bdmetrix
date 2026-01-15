'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

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
            answer: 'Yes! BD Matrix serves businesses worldwide. Based in Canada and UK, now in Karachi, Pakistan, we have successfully delivered projects for clients across multiple continents and time zones.'
        }
    ];

    return (
        <section className={styles.faq} id="faq">
            {/* Background Text */}
            <div className={styles.bgText}>FAQ's</div>

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className="pill-tag" data-aos="fade-up">
                        FAQ
                    </div>
                    <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="100">
                        Frequently Asked <span className={styles.accent}>Questions</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={100 + index * 50}
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
