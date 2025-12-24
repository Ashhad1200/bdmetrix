/**
 * Breadcrumb Schema Component
 * Generates JSON-LD breadcrumb structured data for SEO
 * @param {Array} items - Array of breadcrumb items with name and url
 */
import React from 'react';
import Head from 'next/head';

const BreadcrumbSchema = ({ items }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
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

export default BreadcrumbSchema;
