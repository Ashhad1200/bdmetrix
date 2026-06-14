const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bdmatrix.org";

const services = [
  "crm-software",
  "erp-system",
  "pos-system",
  "web-development",
  "saas-platform",
  "mobile-app",
  "ui-ux-design",
  "workflow-automation",
];

const projects = [
  "medical-mobile-app",
  "stacks-website",
  "financial-wallet",
  "sales-management-app",
  "real-estate-platform",
  "fitness-tracking-app",
];

const blogPosts = [
  "how-to-start-blog",
  "web-design-trends",
  "ecommerce-optimization",
  "brand-identity-guide",
  "mobile-first-design",
  "seo-strategies",
];

function entry(path, { priority = 0.8, changeFrequency = "weekly", lastModified = new Date() } = {}) {
  return {
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap() {
  const staticPages = [
    entry("/", { priority: 1, changeFrequency: "weekly" }),
    entry("/about", { priority: 0.8 }),
    entry("/contact", { priority: 0.8 }),
    entry("/service", { priority: 0.9, changeFrequency: "monthly" }),
    entry("/project", { priority: 0.9, changeFrequency: "monthly" }),
    entry("/blog", { priority: 0.9, changeFrequency: "weekly" }),
  ];

  const servicePages = services.map((id) =>
    entry(`/service/${id}`, { priority: 0.8, changeFrequency: "monthly" })
  );

  const projectPages = projects.map((id) =>
    entry(`/project/${id}`, { priority: 0.7, changeFrequency: "monthly" })
  );

  const blogPages = blogPosts.map((id) =>
    entry(`/blog/${id}`, { priority: 0.7, changeFrequency: "monthly" })
  );

  return [...staticPages, ...servicePages, ...projectPages, ...blogPages];
}
