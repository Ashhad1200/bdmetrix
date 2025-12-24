/**
 * FAQ Schema Component
 * Generates JSON-LD FAQ structured data for SEO
 * @param {Array} faqs - Array of FAQ objects with question and answer
 */
import React from 'react';
import Head from 'next/head';

const FAQSchema = ({ faqs }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </Head>
    );
};

export default FAQSchema;
