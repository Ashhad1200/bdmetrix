// BD Matrix Service Data - Core Services with Outcome-Driven Descriptions
// Updated for CRM, ERP, POS, Landing Sites focus

const service_data = [
    {
        id: 1,
        slug: "crm-software-development",
        icon: "/assets/img/services/crm-icon.png",
        title: "CRM Software Development",
        subtitle: "Customer Relationship Management",
        description: "Build powerful CRM systems that centralize customer data, automate workflows, and drive revenue growth. Our custom solutions help you track leads, manage relationships, and boost sales efficiency.",
        outcomes: [
            "13-15% average sales growth",
            "30% faster lead tracking",
            "26% increase in new customer sales",
            "80% reduction in operational costs"
        ],
        features: [
            "Lead Management & Tracking",
            "Sales Pipeline Automation",
            "Customer Analytics & Insights",
            "Email Integration & Sequences",
            "Custom Reporting Dashboards",
            "Mobile CRM Access",
            "Third-party API Integrations",
            "Role-based Access Control"
        ],
        technologies: ["React", "Node.js", ".NET", "PostgreSQL", "Redis", "AWS"],
        industries: ["Sales Organizations", "Service Brands", "Startups", "Enterprises"],
        cta_text: "Build Your CRM",
        cta_link: "/contact",
        bg_color: "rgba(61, 108, 231, 0.1)"
    },
    {
        id: 2,
        slug: "erp-system-development",
        icon: "/assets/img/services/erp-icon.png",
        title: "ERP System Development",
        subtitle: "Enterprise Resource Planning",
        description: "Streamline your entire business with integrated ERP solutions. From inventory to finance, manufacturing to HR, we build scalable systems that unify your operations and drive efficiency.",
        outcomes: [
            "18-28% increase in production efficiency",
            "25-38% reduction in inventory costs",
            "40% faster order processing",
            "15-40% operational cost savings"
        ],
        features: [
            "Inventory Management",
            "Financial Planning & Accounting",
            "Manufacturing Operations",
            "Supply Chain Management",
            "Human Resources Module",
            "Real-time Analytics",
            "Multi-location Support",
            "Automated Reporting"
        ],
        technologies: ["Java", "Spring Boot", "SAP Integration", "Oracle", "MongoDB", "Azure"],
        industries: ["Manufacturing", "Healthcare", "Retail", "Distribution"],
        cta_text: "Modernize Your Operations",
        cta_link: "/contact",
        bg_color: "rgba(5, 218, 195, 0.1)"
    },
    {
        id: 3,
        slug: "pos-system-development",
        icon: "/assets/img/services/pos-icon.png",
        title: "POS System Development",
        subtitle: "Point of Sale Solutions",
        description: "Transform your checkout experience with modern POS systems. Built for restaurants and retail, our solutions handle payments, inventory, and customer loyalty—all in one platform.",
        outcomes: [
            "20% faster checkout process",
            "30% reduction in inventory issues",
            "18% decrease in food waste (F&B)",
            "5% reduction in overall costs"
        ],
        features: [
            "Multi-payment Gateway Support",
            "Real-time Inventory Tracking",
            "Table Management (Restaurants)",
            "Customer Loyalty Programs",
            "Offline Mode Operation",
            "Kitchen Display System (KDS)",
            "Sales Analytics & Reporting",
            "Multi-store Management"
        ],
        technologies: ["React Native", "Flutter", "Node.js", "MySQL", "Stripe API", "Square API"],
        industries: ["Restaurants", "Retail Stores", "Cafes", "Quick Service"],
        cta_text: "Launch Your POS",
        cta_link: "/contact",
        bg_color: "rgba(61, 108, 231, 0.1)"
    },
    {
        id: 4,
        slug: "landing-website-development",
        icon: "/assets/img/services/web-icon.png",
        title: "Landing Sites & Web Development",
        subtitle: "High-Converting Websites",
        description: "Premium landing pages and websites that convert visitors into customers. SEO-optimized, mobile-responsive, and built with modern frameworks for maximum performance.",
        outcomes: [
            "3x improvement in conversion rates",
            "90+ Lighthouse performance scores",
            "50% faster page load times",
            "100% mobile responsiveness"
        ],
        features: [
            "Custom UI/UX Design",
            "SEO Optimization",
            "A/B Testing Integration",
            "Lead Capture Forms",
            "Analytics Integration",
            "CMS Implementation",
            "Progressive Web Apps (PWA)",
            "E-commerce Integration"
        ],
        technologies: ["Next.js", "React", "Tailwind CSS", "WordPress", "Shopify", "Vercel"],
        industries: ["Startups", "SaaS Companies", "E-commerce", "Service Brands"],
        cta_text: "Get Your Website",
        cta_link: "/contact",
        bg_color: "rgba(5, 218, 195, 0.1)"
    },
    {
        id: 5,
        slug: "saas-platform-development",
        icon: "/assets/img/services/saas-icon.png",
        title: "SaaS Platform Development",
        subtitle: "Scalable Cloud Applications",
        description: "Build subscription-based software that scales globally. From MVP to enterprise, we develop multi-tenant SaaS platforms with robust infrastructure and seamless user experience.",
        outcomes: [
            "99.9% uptime guarantee",
            "10x faster time-to-market",
            "Auto-scaling infrastructure",
            "Multi-region deployment"
        ],
        features: [
            "Multi-tenant Architecture",
            "Subscription & Billing",
            "User Authentication & Authorization",
            "API Development",
            "Admin Dashboards",
            "Usage Analytics",
            "Email & Notification System",
            "Data Backup & Recovery"
        ],
        technologies: ["React", "Node.js", "Python", "AWS", "Kubernetes", "Stripe"],
        industries: ["Startups", "Enterprises", "Tech Companies", "Digital Agencies"],
        cta_text: "Build Your SaaS",
        cta_link: "/contact",
        bg_color: "rgba(61, 108, 231, 0.1)"
    },
    {
        id: 6,
        slug: "mobile-app-development",
        icon: "/assets/img/services/mobile-icon.png",
        title: "Mobile Application Development",
        subtitle: "iOS & Android Apps",
        description: "Native and cross-platform mobile apps that delight users. From concept to launch, we build feature-rich applications optimized for performance and engagement.",
        outcomes: [
            "4.5+ average app store rating",
            "60fps smooth performance",
            "30% higher user retention",
            "Cross-platform code sharing"
        ],
        features: [
            "Native iOS & Android Development",
            "Cross-platform (React Native/Flutter)",
            "Push Notifications",
            "Offline Functionality",
            "In-app Purchases",
            "Social Media Integration",
            "Geolocation Services",
            "App Store Optimization"
        ],
        technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "AWS"],
        industries: ["E-commerce", "Healthcare", "Startups", "Food & Beverage"],
        cta_text: "Start Your App",
        cta_link: "/contact",
        bg_color: "rgba(5, 218, 195, 0.1)"
    }
];

export default service_data;
