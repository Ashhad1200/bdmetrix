import Link from 'next/link';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const posts = [
  {
    id: 'how-to-start-blog',
    title: "How to Start a Blog: Beginner's Best Practice Guide",
    date: 'January 10, 2026',
    category: 'Digital Marketing',
    excerpt: 'Learn the essential steps to start a successful blog from scratch.',
    content: `Starting a blog can be one of the most rewarding things you do for your brand or business. In this guide, we'll walk through everything from choosing your niche and platform to writing your first post and growing your audience.\n\nFirst, identify your niche. A focused blog performs far better than a general one. Think about what you're passionate about and what your audience needs.\n\nNext, choose a platform. WordPress remains the gold standard for flexibility, but platforms like Next.js with a headless CMS offer superior performance for tech-savvy creators.\n\nContent strategy is everything. Plan a content calendar, focus on SEO-driven topics, and publish consistently. Quality beats quantity every time.\n\nFinally, promote your content across social media, email newsletters, and communities relevant to your niche.`,
    readTime: '5 min read',
  },
  {
    id: 'web-design-trends',
    title: 'Top Web Design Trends to Watch in 2026',
    date: 'January 8, 2026',
    category: 'Web Design',
    excerpt: 'Discover the latest web design trends shaping the digital landscape.',
    content: `The web design landscape evolves rapidly. In 2026, we're seeing several trends that are redefining how brands present themselves online.\n\nDark mode and ultra-dark premium themes are dominating agency and SaaS sites. Users prefer the reduced eye strain and the premium feel that dark backgrounds provide.\n\nMicro-interactions and subtle animations are becoming standard. These small details — a hover effect, a loading state — communicate quality and attention to detail.\n\nTypography-led design is having a major moment. Bold, oversized headlines with tight tracking create impact and hierarchy without relying on imagery.\n\nPerformance is design. A site that loads in under 2 seconds is more visually impressive than one with heavy animations. Speed is a design decision.`,
    readTime: '4 min read',
  },
  {
    id: 'ecommerce-optimization',
    title: '10 Ways to Optimize Your E-commerce Conversion Rate',
    date: 'January 5, 2026',
    category: 'E-commerce',
    excerpt: 'Boost your online sales with these proven strategies.',
    content: `Conversion rate optimization (CRO) is the art of turning more of your existing traffic into paying customers. Here are 10 proven strategies:\n\n1. Simplify your checkout — every extra step loses customers.\n2. Add trust signals — reviews, security badges, and guarantees.\n3. Optimize product images — multiple angles, zoom functionality.\n4. Use urgency — limited time offers and stock counters work.\n5. A/B test your CTAs — small changes in wording make big differences.\n6. Mobile-first design — over 60% of shopping happens on mobile.\n7. Fast load times — every second of delay costs conversions.\n8. Clear return policy — reduce purchase anxiety.\n9. Personalization — recommend products based on browsing history.\n10. Live chat — answer questions before they become abandonment reasons.`,
    readTime: '6 min read',
  },
  {
    id: 'brand-identity-guide',
    title: 'Complete Guide to Building Brand Identity',
    date: 'January 2, 2026',
    category: 'Branding',
    excerpt: 'How to create a powerful brand that resonates with your audience.',
    content: `Brand identity is more than a logo. It's the complete visual and emotional language your business speaks. Here's how to build one that lasts.\n\nStart with your brand strategy. Define your mission, vision, and values. Understand who your audience is and what they care about.\n\nDevelop your visual identity: logo, color palette, typography, and imagery style. Each element should reinforce your core message.\n\nCreate brand guidelines — a document that ensures consistency across all touchpoints, from your website to business cards to social media.\n\nApply your brand consistently. Inconsistency erodes trust. Every customer interaction should feel like it came from the same source.\n\nEvolve, don't reinvent. Great brands refresh gradually, maintaining recognition while staying current.`,
    readTime: '7 min read',
  },
  {
    id: 'mobile-first-design',
    title: 'Mobile-First Design: Why It Matters',
    date: 'December 28, 2025',
    category: 'UI/UX',
    excerpt: 'Understanding the importance of mobile-first approach in modern web design.',
    content: `Mobile-first design isn't just a trend — it's a fundamental shift in how we think about web experiences. With over 60% of web traffic coming from mobile devices, designing for the smallest screen first makes strategic sense.\n\nThe mobile-first approach forces you to prioritize. When screen space is limited, you focus on what truly matters. This discipline often results in cleaner, more effective designs on all devices.\n\nGoogle's mobile-first indexing means your mobile experience directly impacts your SEO rankings. A poor mobile experience hurts your visibility.\n\nPractical tips: use flexible grid layouts, optimize images for mobile, ensure tap targets are at least 44x44 pixels, and test on real devices, not just browser emulators.`,
    readTime: '5 min read',
  },
  {
    id: 'seo-strategies',
    title: 'SEO Strategies That Actually Work in 2026',
    date: 'December 25, 2025',
    category: 'Digital Marketing',
    excerpt: 'Proven SEO techniques to improve your website ranking.',
    content: `SEO in 2026 is less about tricks and more about genuinely serving your audience. Here's what actually moves the needle.\n\nCore Web Vitals remain critical. Google measures load speed, interactivity, and visual stability. Sites that score well see meaningful ranking improvements.\n\nE-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is how Google evaluates content quality. Demonstrate real expertise and cite credible sources.\n\nTopical authority beats keyword stuffing. Build comprehensive content clusters around your key topics rather than isolated posts.\n\nTechnical SEO fundamentals: fast hosting, clean site architecture, proper schema markup, and fixing crawl errors. These are table stakes.\n\nLink building through genuine outreach and creating link-worthy content remains one of the highest-leverage activities you can do.`,
    readTime: '6 min read',
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
  const post = posts.find((p) => p.id === id);
  if (!post) return { title: 'Post Not Found | BD Matrix' };
  return {
    title: `${post.title} | BD Matrix`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <main style={{ minHeight: '100vh', background: '#0A0F1E', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: '60px', fontWeight: 900, color: '#10B981' }}>404</div>
        <h1 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 700, margin: 0 }}>Post Not Found</h1>
        <Link href="/blog" style={{ color: '#10B981', textDecoration: 'none', fontWeight: 600 }}>← Back to Blog</Link>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main style={{ background: '#FFFFFF', paddingTop: '100px' }}>
        {/* Hero */}
        <section style={{ padding: '80px 0 60px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.9rem', marginBottom: '32px', textDecoration: 'none' }}>
              ← Back to Blog
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ padding: '5px 14px', background: 'transparent', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '9999px', color: '#10B981', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {post.category}
              </span>
              <span style={{ color: '#94A3B8', fontSize: '0.875rem' }}>{post.date}</span>
              <span style={{ color: '#94A3B8', fontSize: '0.875rem' }}>· {post.readTime}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '20px' }}>
              {post.title}
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.6 }}>{post.excerpt}</p>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)', display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Image Placeholder */}
            <div style={{ height: 'clamp(180px, 40vw, 360px)', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>

            {/* Article */}
            <div style={darkCard}>
              {post.content.split('\n\n').map((para, i) => (
                <p key={i} style={{ color: '#475569', lineHeight: 1.9, fontSize: '1.05rem', marginBottom: '20px' }}>
                  {para}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div style={{ ...darkCard, textAlign: 'center', background: 'rgba(16,185,129,0.05)', borderColor: 'rgba(16,185,129,0.2)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Want to grow your digital presence?</h2>
              <p style={{ color: '#94A3B8', marginBottom: '24px' }}>BD Matrix helps businesses build scalable software and digital strategies.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#10B981', color: '#ffffff', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
                Get in Touch ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
