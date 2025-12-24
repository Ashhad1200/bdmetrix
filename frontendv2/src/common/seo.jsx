import Head from "next/head";
import { seoConfig } from "@/src/data/seo-config";

const SEO = ({
  pageTitle,
  description,
  keywords,
  ogImage,
  ogType = "website",
  noindex = false
}) => {
  const title = pageTitle
    ? `${pageTitle} | BD Matrix`
    : seoConfig.defaultTitle;

  const metaDescription = description || seoConfig.defaultDescription;
  const metaKeywords = keywords || seoConfig.keywords.join(", ");
  const ogImageUrl = ogImage || seoConfig.openGraph.images[0].url;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Robots */}
        <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
        <meta name="googlebot" content={noindex ? "noindex, follow" : "index, follow"} />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0066FF" />
        <meta name="msapplication-TileColor" content="#0066FF" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={seoConfig.siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={seoConfig.siteName} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoConfig.siteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={ogImageUrl} />
        <meta property="twitter:site" content={seoConfig.twitter.site} />
        <meta property="twitter:creator" content={seoConfig.twitter.handle} />

        {/* Additional Meta Tags */}
        <meta name="author" content="BD Matrix" />
        <meta name="copyright" content="BD Matrix" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Apple Mobile Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BD Matrix" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.organization),
          }}
        />
      </Head>
    </>
  );
};

export default SEO;
