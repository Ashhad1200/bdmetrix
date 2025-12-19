// BD Matrix SEO Metadata - Optimized for Search Engines

export const seoConfig = {
    siteName: "BD Matrix",
    defaultTitle: "BD Matrix - Custom Software Development Agency",
    titleTemplate: "%s | BD Matrix",
    defaultDescription: "BD Matrix is a premium custom software development agency specializing in CRM, ERP, POS systems, SaaS platforms, mobile apps, and landing sites. We build scalable solutions that drive business growth.",
    siteUrl: "https://bdmatrix.com",
    defaultImage: "/assets/img/seo/og-image.jpg",
    twitterHandle: "@bdmatrix",
    fbAppId: "",
};

export const pageSEO = {
    home: {
        title: "Build Tomorrow's Software, Today | BD Matrix",
        description: "Custom software development agency powering startups to enterprises. Specializing in CRM (15% sales growth), ERP (38% cost reduction), POS (20% faster checkout), SaaS platforms, and mobile apps.",
        keywords: "custom software development, CRM development, ERP systems, POS software, SaaS platform, mobile app development, web development agency",
        canonical: "https://bdmatrix.com"
    },
    services: {
        title: "Software Development Services - CRM, ERP, POS, SaaS",
        description: "Expert software development services: CRM systems for sales growth, ERP for operational efficiency, POS for retail & restaurants, SaaS platforms, mobile apps, and high-converting landing pages.",
        keywords: "CRM software development, ERP system development, POS system, SaaS development, mobile app development, custom software services",
        canonical: "https://bdmatrix.com/services"
    },
    portfolio: {
        title: "Success Stories & Case Studies | BD Matrix",
        description: "Real results from our custom software projects: 15% sales growth with CRM, 38% inventory reduction with ERP, 3x conversion rate with landing pages. See our proven track record.",
        keywords: "software development case studies, CRM success stories, ERP implementation, POS system portfolio, client results",
        canonical: "https://bdmatrix.com/portfolio"
    },
    about: {
        title: "About BD Matrix - 10+ Years of Software Excellence",
        description: "BD Matrix has delivered 500+ projects to 250+ clients worldwide. Our expert team specializes in building scalable software solutions with 99% client satisfaction.",
        keywords: "about BD Matrix, software development company, tech agency, software development team",
        canonical: "https://bdmatrix.com/about"
    },
    contact: {
        title: "Contact Us - Start Your Project Today",
        description: "Ready to transform your business with custom software? Contact BD Matrix for a free consultation. We respond within 24 hours and start projects within 2 weeks.",
        keywords: "contact BD Matrix, software development quote, free consultation, hire developers",
        canonical: "https://bdmatrix.com/contact"
    }
};

export const structuredData = {
    organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BD Matrix",
        "url": "https://bdmatrix.com",
        "logo": "https://bdmatrix.com/assets/img/logo/bdmatrix-logo.png",
        "description": "Premium custom software development agency specializing in CRM, ERP, POS, SaaS, and mobile applications.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "PK"
        },
        "sameAs": [
            "https://linkedin.com/company/bdmatrix",
            "https://twitter.com/bdmatrix",
            "https://facebook.com/bdmatrix"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "250"
        }
    },
    services: [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "CRM Software Development",
            "provider": {
                "@type": "Organization",
                "name": "BD Matrix"
            },
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "CRM Development Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Custom CRM Development"
                        }
                    }
                ]
            }
        }
    ]
};

export default seoConfig;
