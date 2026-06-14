const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bdmatrix.org";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
