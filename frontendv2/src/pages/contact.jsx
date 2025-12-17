import React from 'react';
import Head from 'next/head';
import Wrapper from '../layout/wrapper';
import Contact from '../components/contact';

const ContactPage = () => {
    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Contact Us - BD Matrix | Professional IT Solutions & Web Development</title>
                <meta name="title" content="Contact Us - BD Matrix | Professional IT Solutions & Web Development" />
                <meta name="description" content="Get in touch with BD Matrix for expert IT consulting, web development, mobile app development, and technology solutions. Contact us today for a free consultation." />
                <meta name="keywords" content="contact BD Matrix, IT solutions, web development, mobile app development, technology consulting, IT services Bangladesh" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="author" content="BD Matrix" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://bdmatrix.com/contact" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bdmatrix.com/contact" />
                <meta property="og:title" content="Contact Us - BD Matrix | Professional IT Solutions" />
                <meta property="og:description" content="Get in touch with BD Matrix for expert IT consulting and web development services." />
                <meta property="og:site_name" content="BD Matrix" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://bdmatrix.com/contact" />
                <meta property="twitter:title" content="Contact Us - BD Matrix" />
                <meta property="twitter:description" content="Get in touch with BD Matrix for expert IT consulting and web development services." />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            "name": "Contact BD Matrix",
                            "description": "Contact page for BD Matrix - Professional IT solutions and web development services",
                            "url": "https://bdmatrix.com/contact",
                            "mainEntity": {
                                "@type": "Organization",
                                "name": "BD Matrix",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "contactType": "Customer Service",
                                    "availableLanguage": ["English"]
                                }
                            }
                        })
                    }}
                />
            </Head>
            <Wrapper>
                <Contact />
            </Wrapper>
        </>
    );
};

export default ContactPage;
