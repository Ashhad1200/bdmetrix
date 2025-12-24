/**
 * Service Schema Component
 * Generates JSON-LD Service structured data for SEO
 * @param {Object} service - Service details
 */
import React from 'react';
import Head from 'next/head';

const ServiceSchema = ({ service }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.type,
        "provider": {
            "@type": "Organization",
            "name": "BD Matrix",
            "url": "http://bdmatrix.org"
        },
        "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
        },
        "description": service.description,
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
        }
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

export default ServiceSchema;
