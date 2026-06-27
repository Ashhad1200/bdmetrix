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
            question: 'How long does a POS deployment take?',
            answer: 'From first call to a live system is typically 4 weeks. Week 1 is discovery at your outlet. Weeks 2–3 are build and customization. Week 4 is pilot deployment and staff training. After the pilot is stable, we roll out to additional outlets.'
        },
        {
            question: 'Can it handle multiple outlets?',
            answer: 'Yes. Multi-outlet support with a central dashboard is a core feature. Each outlet has its own POS terminal while all data — sales, inventory, staff shifts — is visible from one management dashboard in real time.'
        },
        {
            question: 'Does it work offline if internet drops?',
            answer: 'Yes. The system operates offline and syncs automatically when the connection is restored. Your staff can keep taking orders and processing payments even during an outage — no disruptions to your service.'
        },
        {
            question: 'Can it integrate with my existing inventory or accounting system?',
            answer: 'In most cases, yes. During the discovery phase we map out your current tools and build the necessary integrations. Common integrations include accounting software, inventory management, and supplier ordering systems.'
        },
        {
            question: 'What hardware do I need? Can you supply it?',
            answer: 'We work with standard POS hardware — touchscreen terminals, receipt printers, kitchen display screens, and customer-facing displays. We can help you source the right hardware or work with what you already have.'
        },
        {
            question: 'What happens after the 6-month support period?',
            answer: 'After 6 months, you can opt into a support package that covers ongoing updates, priority response, and feature additions. We\'ll present options before your support period ends — no surprises.'
        },
        {
            question: 'Do you work with businesses outside your country?',
            answer: 'Yes. We work with restaurants, clinics, real estate agencies, and retail businesses globally. For deployment and training we work on-site or remotely depending on your location. Contact us to discuss your setup.'
        },
        {
            question: 'How much does it cost?',
            answer: 'Pricing depends on the number of outlets and the specific features needed. Book a 15-minute demo and we\'ll give you a clear quote based on your actual setup — no vague estimates.'
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
                        Questions About <span className={styles.accent}>Working With Us</span>
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
