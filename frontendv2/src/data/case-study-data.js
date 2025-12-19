// BD Matrix Case Studies - Real-world Examples Based on Industry Research
// CRM, ERP, POS focused case studies

const case_study_data = [
    {
        id: 1,
        slug: "customfit-crm",
        category: "CRM Development",
        client: "CustomFit Solutions",
        industry: "Interior Design & Engineering",
        location: "USA",
        project_duration: "3 months",
        team_size: "5 developers",
        title: "Interior Design Firm Achieves 15% Sales Growth with Custom CRM",
        tagline: "From spreadsheets to scalable CRM system",
        hero_image: "/assets/img/portfolio/crm-case-study.jpg",
        challenge: "CustomFit Solutions, a growing interior design and engineering company, struggled with managing leads across multiple spreadsheets. Sales team spent hours manually updating client information, leading to missed opportunities and inefficient follow-ups. They needed a centralized system to track leads, manage projects, and automate workflows.",
        solution: "We developed a custom .NET-based CRM system tailored to their interior design workflow. The platform featured automated lead tracking, project management integration, client communication tools, and intelligent analytics for data-driven decisions. We integrated it with their existing email system and implemented mobile access for field teams.",
        results: {
            primary_metrics: [
                {
                    value: "15%",
                    label: "Sales Growth",
                    description: "Achieved within one quarter of launch"
                },
                {
                    value: "30%",
                    label: "Faster Lead Tracking",
                    description: "Automated workflows reduced manual entry time"
                },
                {
                    value: "85%",
                    label: "User Adoption",
                    description: "Sales team actively using the system daily"
                },
                {
                    value: "40%",
                    label: "More Follow-ups",
                    description: "Automated reminders increased client touchpoints"
                }
            ],
            additional_outcomes: [
                "Centralized customer data repository",
                "Real-time sales pipeline visibility",
                "Automated marketing campaigns",
                "Mobile CRM access for remote teams",
                "Custom reporting dashboards"
            ]
        },
        technologies: [".NET Core", "React", "SQL Server", "Azure", "SendGrid API"],
        testimonial: {
            quote: "The custom CRM transformed how we manage our sales pipeline. We're closing deals faster and our team is more aligned than ever.",
            author: "Sarah Mitchell",
            role: "Sales Director, CustomFit Solutions",
            avatar: "/assets/img/testimonials/sarah-mitchell.jpg"
        },
        screenshots: [
            "/assets/img/portfolio/crm-dashboard.jpg",
            "/assets/img/portfolio/crm-pipeline.jpg",
            "/assets/img/portfolio/crm-analytics.jpg"
        ],
        featured: true
    },
    {
        id: 2,
        slug: "omega-industries-erp",
        category: "ERP System",
        client: "Omega Manufacturing",
        industry: "Manufacturing",
        location: "Pakistan",
        project_duration: "6 months",
        team_size: "8 developers",
        title: "Manufacturing Company Saves 38% on Inventory with Cloud ERP",
        tagline: "Modernizing operations for the digital age",
        hero_image: "/assets/img/portfolio/erp-case-study.jpg",
        challenge: "Omega Manufacturing operated with disconnected legacy systems for inventory, finance, and production. This led to inefficiencies, excessive inventory carrying costs, delayed reporting, and difficulty scaling operations. They needed an integrated ERP solution to unify all business functions.",
        solution: "We implemented a comprehensive cloud-based ERP system integrating inventory management, financial planning, manufacturing operations, and supply chain processes. The solution featured real-time data synchronization, automated workflows, mobile dashboards, and advanced analytics for production planning.",
        results: {
            primary_metrics: [
                {
                    value: "38%",
                    label: "Lower Inventory",
                    description: "Reduced inventory carrying costs significantly"
                },
                {
                    value: "28%",
                    label: "Production Efficiency",
                    description: "Streamlined manufacturing processes"
                },
                {
                    value: "30%",
                    label: "Improved Planning",
                    description: "Better production forecasting accuracy"
                },
                {
                    value: "40%",
                    label: "Faster Reporting",
                    description: "Real-time financial and operational reports"
                }
            ],
            additional_outcomes: [
                "Unified data across all departments",
                "Reduced manual data entry by 70%",
                "Enhanced supplier management",
                "Multi-location inventory tracking",
                "Compliance and regulatory tracking"
            ]
        },
        technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Apache Kafka", "React"],
        testimonial: {
            quote: "This ERP system unified our operations in ways we never imagined. We can now make data-driven decisions in real-time.",
            author: "Mohammed Rashid",
            role: "Operations Manager, Omega Manufacturing",
            avatar: "/assets/img/testimonials/mohammed-rashid.jpg"
        },
        screenshots: [
            "/assets/img/portfolio/erp-dashboard.jpg",
            "/assets/img/portfolio/erp-inventory.jpg",
            "/assets/img/portfolio/erp-reports.jpg"
        ],
        featured: true
    },
    {
        id: 3,
        slug: "restopay-pos",
        category: "POS System",
        client: "RestoPay Network",
        industry: "Restaurant Technology",
        location: "Multi-country (Africa)",
        project_duration: "4 months",
        team_size: "6 developers",
        title: "Restaurant POS Serves 45+ Locations with 10,000+ Orders",
        tagline: "Digital transformation for modern restaurants",
        hero_image: "/assets/img/portfolio/pos-case-study.jpg",
        challenge: "Restaurants across the African market struggled with outdated POS systems that couldn't handle modern demands like online ordering, table reservations, and digital payments. They needed a unified platform to streamline operations and enhance customer experience.",
        solution: "We developed RestoPay, a comprehensive cloud-based POS system featuring table management, digital ordering (dine-in and online), kitchen display integration, multi-payment gateway support, and customer loyalty programs. The system works offline and syncs when connected, ensuring uninterrupted service.",
        results: {
            primary_metrics: [
                {
                    value: "45+",
                    label: "Restaurants Integrated",
                    description: "Growing network across multiple countries"
                },
                {
                    value: "10,000+",
                    label: "Successful Orders",
                    description: "Processed through the platform"
                },
                {
                    value: "20%",
                    label: "Faster Checkout",
                    description: "Reduced average transaction time"
                },
                {
                    value: "30%",
                    label: "Staff Efficiency",
                    description: "Freed from manual order management"
                }
            ],
            additional_outcomes: [
                "Seamless table reservation system",
                "Real-time kitchen order tracking",
                "Cash and online payment integration",
                "Customer loyalty and rewards",
                "Multi-location analytics dashboard"
            ]
        },
        technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "Flutter"],
        testimonial: {
            quote: "RestoPay revolutionized our restaurant operations. Our staff can now focus on customer service instead of managing orders manually.",
            author: "Amara Okonkwo",
            role: "Restaurant Owner, Lagos",
            avatar: "/assets/img/testimonials/amara-okonkwo.jpg"
        },
        screenshots: [
            "/assets/img/portfolio/pos-frontend.jpg",
            "/assets/img/portfolio/pos-kitchen.jpg",
            "/assets/img/portfolio/pos-mobile.jpg"
        ],
        featured: true
    },
    {
        id: 4,
        slug: "techstartup-landing",
        category: "Landing Site",
        client: "TechVenture SaaS",
        industry: "SaaS Startup",
        location: "UK",
        project_duration: "6 weeks",
        team_size: "4 developers",
        title: "SaaS Startup Triples Conversion Rate with Optimized Landing Page",
        tagline: "Turning visitors into paying customers",
        hero_image: "/assets/img/portfolio/landing-case-study.jpg",
        challenge: "TechVenture, a B2B SaaS startup, had a generic website with poor conversion rates. Visitors weren't converting to trial signups, and the bounce rate was over 70%. They needed a high-converting landing page optimized for their target audience.",
        solution: "We designed and developed a modern, conversion-focused landing page using Next.js and React. The site featured compelling copy, clear value propositions, social proof, interactive demos, and optimized CTAs. We implemented A/B testing, SEO best practices, and integrated analytics for continuous improvement.",
        results: {
            primary_metrics: [
                {
                    value: "3x",
                    label: "Conversion Rate",
                    description: "Trial signups increased from 2% to 6%"
                },
                {
                    value: "95",
                    label: "Lighthouse Score",
                    description: "Perfect performance and SEO scores"
                },
                {
                    value: "1.2s",
                    label: "Load Time",
                    description: "50% faster than previous site"
                },
                {
                    value: "45%",
                    label: "Lower Bounce Rate",
                    description: "Visitors staying longer and engaging more"
                }
            ],
            additional_outcomes: [
                "Mobile-first responsive design",
                "Integrated live chat support",
                "A/B tested CTAs and headlines",
                "SEO optimization for target keywords",
                "Analytics-driven improvements"
            ]
        },
        technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "Google Analytics", "Hotjar"],
        testimonial: {
            quote: "Our new landing page is a conversion machine. We're getting more qualified leads than ever before, and our investors are impressed.",
            author: "James Carter",
            role: "CEO, TechVenture SaaS",
            avatar: "/assets/img/testimonials/james-carter.jpg"
        },
        screenshots: [
            "/assets/img/portfolio/landing-hero.jpg",
            "/assets/img/portfolio/landing-features.jpg",
            "/assets/img/portfolio/landing-pricing.jpg"
        ],
        featured: true
    },
    {
        id: 5,
        slug: "retailcloud-pos",
        category: "POS System",
        client: "RetailCloud",
        industry: "Retail Chain",
        location: "USA",
        project_duration: "5 months",
        team_size: "7 developers",
        title: "Retail Chain Reduces Inventory Issues by 30% with Modern POS",
        tagline: "Omnichannel retail made simple",
        hero_image: "/assets/img/portfolio/retail-pos-case-study.jpg",
        challenge: "A mid-sized clothing retail chain faced challenges with long checkout lines, inaccurate inventory tracking, and limited sales insights across their 12 store locations. Their legacy POS system couldn't handle modern retail demands like mobile checkout or real-time inventory updates.",
        solution: "We developed a cloud-based, omnichannel POS system with mobile checkout capabilities, real-time inventory management across all locations, detailed sales analytics, and RFID integration for faster stock tracking. The system included a centralized dashboard for multi-store management.",
        results: {
            primary_metrics: [
                {
                    value: "30%",
                    label: "Inventory Issues",
                    description: "Reduced stock discrepancies and overstock"
                },
                {
                    value: "25%",
                    label: "Faster Checkout",
                    description: "Mobile POS reduced queue times"
                },
                {
                    value: "100%",
                    label: "Real-time Sync",
                    description: "Inventory updated across all 12 locations"
                },
                {
                    value: "40%",
                    label: "Better Insights",
                    description: "Data-driven merchandising decisions"
                }
            ],
            additional_outcomes: [
                "Mobile checkout for floor staff",
                "RFID inventory tracking",
                "Customer purchase history",
                "Cross-store inventory visibility",
                "Automated reorder alerts"
            ]
        },
        technologies: ["React", "Node.js", "MySQL", "AWS", "Square API", "RFID Integration"],
        testimonial: {
            quote: "The new POS system transformed our retail operations. We can now track inventory in real-time and make smarter business decisions.",
            author: "Linda Chen",
            role: "Retail Operations Director",
            avatar: "/assets/img/testimonials/linda-chen.jpg"
        },
        screenshots: [
            "/assets/img/portfolio/retail-pos-checkout.jpg",
            "/assets/img/portfolio/retail-pos-inventory.jpg",
            "/assets/img/portfolio/retail-pos-analytics.jpg"
        ],
        featured: false
    }
];

export default case_study_data;
