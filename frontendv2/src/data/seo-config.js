// SEO Configuration for BD Matrix
export const seoConfig = {
    // Default metadata
    defaultTitle: "BD Matrix - Custom Software Development & IT Solutions",
    titleTemplate: "%s | BD Matrix",
    defaultDescription: "BD Matrix delivers custom software solutions including CRM, ERP, POS Systems, SaaS Platforms, Mobile Apps, and AI Automation. Serving 20+ countries with cutting-edge technology solutions.",

    // Company information
    siteName: "BD Matrix",
    siteUrl: "http://bdmatrix.org",

    // Contact & Social
    email: "support@bdmatrix.org",
    phone: "+1 (581) 705-1620",
    instagram: "https://www.instagram.com/bdmatrix1",
    linkedin: "https://www.linkedin.com/in/bdmatrix/",

    // Open Graph defaults
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "http://bdmatrix.org",
        siteName: "BD Matrix",
        images: [
            {
                url: "http://bdmatrix.org/assets/img/logo/bdmatrix-logo.png",
                width: 1200,
                height: 630,
                alt: "BD Matrix - Custom Software Development",
            },
        ],
    },

    // Twitter Card defaults
    twitter: {
        handle: "@bdmatrix",
        site: "@bdmatrix",
        cardType: "summary_large_image",
    },

    // Keywords
    keywords: [
        "custom software development",
        "CRM development",
        "ERP systems",
        "POS systems",
        "SaaS development",
        "mobile app development",
        "AI automation",
        "web development",
        "software solutions",
        "BD Matrix",
    ],

    // Structured data for organization
    organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "BD Matrix",
        url: "http://bdmatrix.org",
        logo: "http://bdmatrix.org/assets/img/logo/bdmatrix-logo.png",
        description: "Custom Software Development & IT Solutions Provider",
        email: "support@bdmatrix.org",
        telephone: "+1-581-705-1620",
        address: {
            "@type": "PostalAddress",
            addressCountry: "Worldwide Service | 20+ Countries",
        },
        sameAs: [
            "https://www.instagram.com/bdmatrix1",
            "https://www.linkedin.com/in/bdmatrix/",
        ],
    },
};

// Page-specific SEO configurations
export const pageSEO = {
    home: {
        title: "BD Matrix - Custom Software Development & IT Solutions",
        description: "Transform your business with custom software solutions. We build CRM, ERP, POS, SaaS, Mobile Apps, and AI Automation for businesses worldwide.",
    },
    about: {
        title: "About Us - BD Matrix",
        description: "Since 2013, BD Matrix has been transforming business ideas into scalable software solutions. We're a team of passionate developers and strategists dedicated to creating custom software.",
    },
    services: {
        title: "Our Services - Custom Software Development",
        description: "Explore our comprehensive software development services: Web Development, Custom ERPs, POS Systems, Mobile Apps, SaaS Solutions, and AI Automation.",
    },
    contact: {
        title: "Contact Us - BD Matrix",
        description: "Get in touch with BD Matrix for custom software development. Operating in 20+ countries with dedicated support teams.",
    },
};
