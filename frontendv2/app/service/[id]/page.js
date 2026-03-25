'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const services = [
  {
    id: 'crm-software',
    number: '01',
    title: 'CRM Software Development',
    description: 'Build powerful CRM systems that centralize customer data, automate workflows, and drive revenue growth. Our custom solutions help you track leads, manage relationships, and boost sales efficiency.',
    outcomes: ['13-15% average sales growth', '30% faster lead tracking'],
    features: ['Lead & Pipeline Management', 'Customer Data Centralization', 'Workflow Automation', 'Sales Analytics & Reports', 'Integration with Marketing Tools'],
    details: 'Our CRM solutions are built from the ground up to match your unique sales process. Unlike off-the-shelf tools, custom CRMs integrate directly with your existing systems, automate repetitive tasks, and provide insights tailored to your KPIs.'
  },
  {
    id: 'erp-system',
    number: '02',
    title: 'ERP System Development',
    description: 'Streamline your entire business with integrated ERP solutions. From inventory to finance, manufacturing to HR, we build scalable systems that unify your operations and drive efficiency.',
    outcomes: ['18-28% increase in production efficiency', '25-38% reduction in inventory costs'],
    features: ['Inventory Management', 'Financial Accounting', 'HR & Payroll', 'Manufacturing Operations', 'Supply Chain Management'],
    details: 'Enterprise Resource Planning systems built by BD Matrix are designed for scalability and real-time visibility across all business functions. We work closely with your team to map processes and deliver a unified platform.'
  },
  {
    id: 'pos-system',
    number: '03',
    title: 'POS System Development',
    description: 'Transform your checkout experience with modern POS systems. Built for restaurants and retail, our solutions handle payments, inventory, and customer loyalty—all in one platform.',
    outcomes: ['20% faster checkout process', '30% reduction in inventory issues'],
    features: ['Multi-location Support', 'Inventory Tracking', 'Payment Processing', 'Customer Loyalty Programs', 'Real-time Analytics'],
    details: 'Our Point of Sale systems are engineered for speed and reliability. Whether you run a single boutique or a multi-location chain, we build solutions that keep transactions flowing and insights clear.'
  },
  {
    id: 'web-development',
    number: '04',
    title: 'Landing Sites & Web Development',
    description: 'Premium landing pages and websites that convert visitors into customers. SEO-optimized, mobile-responsive, and built with modern frameworks for maximum performance.',
    outcomes: ['3x improvement in conversion rates', '90+ Lighthouse performance scores'],
    features: ['Custom Design & Development', 'SEO Optimization', 'Mobile-First Approach', 'Performance Optimization', 'Content Management Systems'],
    details: 'From single-page marketing sites to complex web applications, BD Matrix delivers digital experiences that perform. We combine conversion-focused design with technical excellence to ensure every visitor is engaged.'
  },
  {
    id: 'saas-platform',
    number: '05',
    title: 'SaaS Platform Development',
    description: 'Build subscription-based software that scales globally. From MVP to enterprise, we develop multi-tenant SaaS platforms with robust infrastructure and seamless user experience.',
    outcomes: ['99.9% uptime guarantee', '10x faster time-to-market'],
    features: ['Multi-tenant Architecture', 'Subscription & Billing', 'User Management', 'API Development', 'Scalable Cloud Infrastructure'],
    details: 'Launching a SaaS product requires deep technical expertise and business acumen. BD Matrix builds platforms designed to scale from day one, with billing integration, user onboarding flows, and monitoring built in.'
  },
  {
    id: 'mobile-app',
    number: '06',
    title: 'Mobile Application Development',
    description: 'Native and cross-platform mobile apps that delight users. From concept to launch, we build feature-rich applications optimized for performance and engagement.',
    outcomes: ['4.5+ average app store rating', '60fps smooth performance'],
    features: ['iOS & Android Development', 'Cross-platform Solutions', 'UI/UX Design', 'Push Notifications', 'App Store Optimization'],
    details: 'Mobile apps built by BD Matrix are designed for the end user first. We combine beautiful UI with performance-optimized code to deliver apps that users love and return to.'
  }
];

const darkCard = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '16px',
  padding: '32px',
};

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <main style={{ minHeight: '100vh', background: '#0A0F1E', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: '60px', fontWeight: 900, color: '#10B981' }}>404</div>
        <h1 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 700, margin: 0 }}>Service Not Found</h1>
        <Link href="/service" style={{ color: '#10B981', textDecoration: 'none', fontWeight: 600 }}>← Back to Services</Link>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main style={{ background: '#0A0F1E', paddingTop: '100px' }}>
        {/* Hero */}
        <section style={{ padding: '80px 0 60px', background: '#0D1526', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
            <Link href="/service" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.9rem', marginBottom: '32px', textDecoration: 'none', transition: 'color 0.3s' }}>
              ← Back to Services
            </Link>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '9999px', color: '#10B981', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              Service {service.number}
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px' }}>
              {service.title}
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#94A3B8', lineHeight: 1.7, maxWidth: '700px' }}>
              {service.description}
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)', display: 'flex', flexDirection: 'column', gap: '48px' }}>

            {/* Details */}
            <div style={darkCard}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>Overview</h2>
              <p style={{ color: '#94A3B8', lineHeight: 1.8, fontSize: '1.05rem' }}>{service.details}</p>
            </div>

            {/* Key Outcomes */}
            <div style={darkCard}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>Key Outcomes</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {service.outcomes.map((outcome, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ffffff', fontSize: '1.05rem' }}>
                    <span style={{ width: '28px', height: '28px', background: 'rgba(16,185,129,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
                    {outcome}
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div style={darkCard}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>What&apos;s Included</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
                {service.features.map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94A3B8', fontSize: '0.95rem' }}>
                    <span style={{ color: '#10B981', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>→</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ ...darkCard, textAlign: 'center', background: 'rgba(16,185,129,0.05)', borderColor: 'rgba(16,185,129,0.2)' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>Ready to Get Started?</h2>
              <p style={{ color: '#94A3B8', marginBottom: '28px', fontSize: '1.05rem' }}>Let&apos;s discuss how we can build this solution for your business.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#10B981', color: '#ffffff', padding: '16px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', transition: 'background 0.3s' }}>
                Start Your Project ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
