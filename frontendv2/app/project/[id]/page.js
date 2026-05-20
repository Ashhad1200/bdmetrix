import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const projects = [
  {
    id: 'medical-mobile-app',
    title: 'Medical Mobile Design & Development',
    description: 'A private healthcare network needed a unified app for patient intake, appointment scheduling, and vitals tracking across multiple clinics. We designed and built a cross-platform mobile app with HIPAA-aware data handling and real-time doctor-patient communication. The client onboarded 2,000+ patients in the first quarter, reducing front-desk wait times by 40%.',
    tags: ['Mobile App', 'UI/UX Design', 'Healthcare'],
    outcome: '2,000+ patients onboarded in Q1, 40% reduction in wait times.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'stacks-website',
    title: 'Stacks Website Design & Coding',
    description: 'A B2B SaaS startup needed a high-converting marketing site with an integrated analytics dashboard for their existing product. We built a blazing-fast Next.js site with custom animations, a live demo sandbox, and embedded analytics views. The new site achieved a 92 Lighthouse score and increased demo signups by 3.2x within 60 days of launch.',
    tags: ['Web Design', 'Development', 'SaaS'],
    outcome: '92 Lighthouse score, 3.2x increase in demo signups in 60 days.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'financial-wallet',
    title: 'Financial & Wallet Website Design',
    description: 'A fintech company required a secure crypto wallet interface with portfolio tracking, transaction history, and real-time market data feeds. We delivered a responsive web application with multi-currency support, two-factor authentication, and institutional-grade encryption. The platform processed over $1.2M in transactions within its first 3 months.',
    tags: ['Fintech', 'UI/UX Design', 'Crypto'],
    outcome: '$1.2M+ in transactions processed in first 3 months.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
  },
  {
    id: 'sales-management-app',
    title: 'Sales Management Mobile App Design',
    description: 'An enterprise client with a 40-person sales team needed a mobile CRM to replace spreadsheets and disconnected tools. We built a custom mobile app with lead scoring, pipeline visualization, automated follow-up reminders, and manager dashboards. The sales team reported a 27% increase in quarterly revenue and cut reporting time by over 60%.',
    tags: ['Mobile App', 'Enterprise', 'CRM'],
    outcome: '27% revenue increase, 60% reduction in reporting time.',
    tech: ['React Native', 'GraphQL', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform Design',
    description: 'A property development firm needed a digital platform to showcase luxury apartments and streamline buyer inquiries. We built a responsive listing site with interactive map search, advanced filters, virtual tour integration, and a lead capture system. The platform generated 150+ qualified leads in its first month.',
    tags: ['Web Design', 'UI/UX', 'Real Estate'],
    outcome: '150+ qualified leads generated in the first month.',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'fitness-tracking-app',
    title: 'Fitness Tracking Mobile App',
    description: 'A fitness startup wanted a mobile app to help users track workouts, monitor calories, and view heart rate trends from wearable devices. We developed a native-feel app with gamified progress tracking, social challenges, and Apple Health/Google Fit integration. The app reached 5,000 active users within 8 weeks with a 4.7-star average rating.',
    tags: ['Mobile App', 'Health', 'Fitness'],
    outcome: '5,000 active users in 8 weeks, 4.7-star average rating.',
    tech: ['React Native', 'Python', 'PostgreSQL', 'AWS'],
  },
];

const darkCard = {
  background: '#FFFFFF',
  border: '1px solid #E2E8F0',
  borderRadius: '16px',
  padding: '32px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: 'Project Not Found | BD Matrix' };
  return {
    title: `${project.title} | BD Matrix`,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main style={{ minHeight: '100vh', background: '#0A0F1E', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: '60px', fontWeight: 900, color: '#1F6FFF' }}>404</div>
        <h1 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 700, margin: 0 }}>Project Not Found</h1>
        <Link href="/project" style={{ color: '#1F6FFF', textDecoration: 'none', fontWeight: 600 }}>← Back to Projects</Link>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main style={{ background: '#FFFFFF', paddingTop: '100px' }}>
        {/* Hero */}
        <section style={{ padding: '80px 0 60px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
            <Link href="/project" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.9rem', marginBottom: '32px', textDecoration: 'none' }}>
              ← Back to Projects
            </Link>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {project.tags.map((tag, i) => (
                <span key={i} style={{ padding: '5px 14px', background: 'transparent', border: '1px solid rgba(31,111,255,0.3)', borderRadius: '9999px', color: '#1F6FFF', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {tag}
                </span>
              ))}
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px' }}>
              {project.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)', display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Image placeholder */}
            <div style={{ height: 'clamp(200px, 40vw, 400px)', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>

            {/* Description */}
            <div style={darkCard}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>About This Project</h2>
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem' }}>{project.description}</p>
            </div>

            {/* Outcome */}
            <div style={{ ...darkCard, background: 'rgba(31,111,255,0.05)', borderColor: 'rgba(31,111,255,0.2)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1F6FFF', marginBottom: '12px' }}>Results Achieved</h2>
              <p style={{ color: '#0F172A', fontSize: '1.1rem', fontWeight: 500 }}>{project.outcome}</p>
            </div>

            {/* Tech Stack */}
            <div style={darkCard}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '20px' }}>Tech Stack</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{ padding: '8px 20px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', color: '#475569', fontSize: '0.9rem', fontWeight: 600 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ ...darkCard, textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Have a Similar Project?</h2>
              <p style={{ color: '#94A3B8', marginBottom: '24px' }}>Let&apos;s talk about how we can help you achieve the same results.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1F6FFF', color: '#ffffff', padding: '16px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
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
