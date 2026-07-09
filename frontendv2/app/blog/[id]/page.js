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
    content: `Starting a blog can be one of the most rewarding endeavors for individuals, developers, and brands alike. Whether you want to build personal authority, document your learning journey, or drive organic traffic to a B2B business, success requires a structured approach. This guide breaks down the essential steps to launch and maintain a professional blog in 2026.

### 1. Identify Your Specific Niche
One of the most common mistakes beginners make is trying to write about everything. General blogs rarely succeed because they compete with massive, established media networks. Instead, focus on a narrow, well-defined niche where you have genuine experience. 
* Ask yourself: What specific problem do I solve?
* Conduct competitor research: Look at other blogs in your field. Where are the gaps in their content?
* Analyze search volume: Use keyword research tools to see if people are searching for topics in your chosen niche. A combination of low-to-medium difficulty and steady search interest is the sweet spot.

### 2. Choose the Right Platform & Tech Stack
Your blogging platform determines your site's speed, flexibility, and SEO potential.
* **WordPress:** Still the dominant player, perfect for non-technical bloggers who need pre-built themes and plugins.
* **Next.js & Headless CMS (Vercel, Sanity, Strapi):** The developer's choice. Offers blazing-fast performance, static generation (SSG) for perfect SEO, and complete design freedom.
* **Medium/Substack:** Excellent for writing immediately and reaching a built-in audience, but you do not own the platform or the SEO equity.
For maximum control, we recommend building a custom static site using Next.js, as speed and core web vitals are key ranking factors.

### 3. Design for Readability & User Experience (UX)
If your site loads slowly or is difficult to read, users will bounce immediately.
* **Typography:** Use clean, readable web fonts (like Inter or Roboto) with a font size of at least 16px to 18px for body text.
* **Whitespace:** Leave generous space between paragraphs. Bullet points and subheadings help break up blocks of text.
* **Contrast:** Maintain high contrast between your text and background. Avoid dark gray text on a black background or light gray text on white.
* **Mobile Responsiveness:** Over 60% of web traffic is mobile. Test your blog on different screen sizes to make sure images scale and links are easy to tap.

### 4. Build a Consistent Content Calendar
Consistency is what separates amateur blogs from successful publications. Google's crawlers favor sites that publish on a regular schedule.
* Aim for at least 1-2 high-quality, comprehensive articles per week.
* Focus on depth. Google's helpful content system prioritizes comprehensive, expert articles over short, superficial posts.
* Plan your content in advance using a calendar tool (like Notion or Trello) to keep yourself on track.

### 5. SEO and Promotion Strategies
Publishing great content is only half the battle; you also need to make sure people can find it.
* **On-Page SEO:** Optimize your title tags, meta descriptions, image alt tags, and URL slugs. Ensure your primary keyword is placed naturally in the first paragraph and heading tags.
* **Internal Linking:** Link to your other related blog posts. This keeps readers on your site longer and helps search engines crawl your content more effectively.
* **Social Sharing:** Share your articles on platforms where your audience hangs out, such as LinkedIn, X (Twitter), Reddit, or developer forums.`,
    readTime: '6 min read',
  },
  {
    id: 'web-design-trends',
    title: 'Top Web Design Trends to Watch in 2026',
    date: 'January 8, 2026',
    category: 'Web Design',
    excerpt: 'Discover the latest web design trends shaping the digital landscape.',
    content: `The digital design space changes rapidly. In 2026, we are seeing a shift away from standard, boring grid layouts and toward highly interactive, premium, and motion-driven web experiences. To stand out online, websites must blend fast technical performance with sophisticated aesthetics. Here are the top design trends dominating the web this year.

### 1. Premium Dark Aesthetics and Neon Accents
Light backgrounds will always be a standard for readability, but dark mode and deep, atmospheric color schemes are dominating premium SaaS and agency designs.
* **Deep Grays & Blacks:** Instead of pure black (#000), designers are using soft charcoal, deep navy, and midnight blue shades.
* **Accent Colors:** Vibrant neon blues, electric purples, and radioactive greens are used sparingly for active states, CTA buttons, and highlighted keywords to draw immediate attention.
* **Glassmorphism:** Frosted-glass overlays (using CSS backdrop-filter) create layers and depth in the interface, giving it a high-end, futuristic look.

### 2. Micro-Interactions & Scroll-Driven Animations
Static websites feel dead. Users expect interfaces to react to their actions in subtle, pleasing ways.
* **Button Hovers:** Buttons that expand slightly, shift background gradients, or feature animated arrows make the site feel responsive and alive.
* **GSAP ScrollTrigger:** Content that slides, fades, or scales up as you scroll creates a sense of storytelling. When done subtly, it increases the user's dwell time on the page.
* **Custom Cursor Effects:** Some agency sites implement custom cursors that morph when hovering over interactive elements, adding a layer of playfulness.

### 3. Bold, Typography-Led Layouts
Instead of relying on heavy stock photos or generic illustrations, modern designs are using typography as the primary visual element.
* **Oversized Serif & Sans-Serif Fonts:** Giant headlines with tight letter spacing (tracking) immediately convey a strong brand message.
* **Variable Fonts:** The use of CSS variables to dynamically change font weight and width on scroll or hover.
* **Mixed Font Styles:** Combining a bold geometric sans-serif for headings with a elegant serif font for key phrases creates contrast and artistic flair.

### 4. Performance as a Design Decision
Speed is no longer just a technical issue; it is a design parameter. A heavy site with gorgeous animations that takes 5 seconds to load is a bad design.
* **Minimal JavaScript:** Relying on lightweight libraries (like vanilla CSS animations or GSAP) instead of heavy frameworks.
* **Next-Generation Image Formats:** Automatic optimization using WebP or AVIF formats.
* **Optimized Rendering:** Utilizing Next.js Turbopack or Vite to keep client bundles tiny, ensuring instantaneous transitions and initial loads.

### 5. Inclusive and Accessible Design (A11y)
Modern design is inclusive. Ensuring your site can be navigated by everyone is not just a legal requirement but a design best practice.
* **Contrast Compliance:** Adhering strictly to WCAG 2.1 contrast ratios.
* **Keyboard Navigation:** Ensuring all interactive elements can be accessed via the tab key.
* **ARIA Landmarks:** Implementing screen-reader-friendly semantic HTML so that the content layout remains accessible to all visitors.`,
    readTime: '5 min read',
  },
  {
    id: 'ecommerce-optimization',
    title: '10 Ways to Optimize Your E-commerce Conversion Rate',
    date: 'January 5, 2026',
    category: 'E-commerce',
    excerpt: 'Boost your online sales with these proven strategies.',
    content: `Conversion Rate Optimization (CRO) is the practice of turning more of your existing website visitors into paying customers. Many online shop owners focus entirely on getting more traffic, but optimizing your conversion rate is often much cheaper and more effective. Here are 10 proven strategies to boost your online sales.

### 1. Simplify the Checkout Process
Every extra step in your checkout flow is a point where a customer can change their mind.
* **Guest Checkout:** Never force users to create an account to buy. Allow them to check out as a guest and offer account creation on the thank-you page.
* **Single-Page Checkout:** Consolidate shipping, billing, and payment details onto one clean page to reduce form friction.

### 2. Implement Trust Signals
Online shoppers are highly sensitive to security and fraud. You must build trust immediately.
* **SSL Certificates:** Ensure your site uses HTTPS.
* **Security Badges:** Display recognizable payment badges (like Visa, Mastercard, PayPal) near the purchase buttons.
* **Social Proof:** Show reviews, ratings, and customer testimonials prominently on product pages.

### 3. Optimize Product Imagery and Media
Since online shoppers cannot touch or try your products, your visuals must do the selling.
* **Multiple Angles:** Show the product from various sides.
* **Zoom Functionality:** Allow customers to zoom in to see fabric, material, or build quality.
* **Product Videos:** Short 10-second video clips showing the product in use can increase conversion rates by up to 30%.

### 4. Create Urgency and Scarcity
Human psychology responds strongly to the fear of missing out (FOMO).
* **Low Stock Counters:** Display messages like "Only 3 left in stock."
* **Countdown Timers:** Show timers for sales or next-day shipping cutoffs (e.g., "Order within the next 2 hours for shipping today").

### 5. Improve Site Speed and Performance
If your product page takes longer than 2 seconds to load, your conversion rate will drop.
* Compress and lazy-load all images.
* Use a Content Delivery Network (CDN) to serve assets fast worldwide.
* Clean up unnecessary third-party tracking scripts.

### 6. Make Call-To-Action (CTA) Buttons Obvious
Your "Add to Cart" or "Buy Now" buttons should stand out visually from the rest of the page.
* Use high-contrast colors (like vibrant green, orange, or blue).
* Keep the button text clear and action-oriented.
* Ensure the CTA is above the fold on both mobile and desktop screens.

### 7. Optimize for Mobile Shoppers
More than 60% of e-commerce purchases are completed on mobile devices.
* Design a mobile-first grid.
* Make sure form fields are easy to tap and input fields trigger the correct keyboard layout (e.g., numeric keypad for phone numbers).
* Utilize quick payment integrations like Apple Pay, Google Pay, or Shopify Pay.

### 8. Provide a Clear Return Policy
Reducing purchase anxiety is a great way to close a sale.
* Display a clear, simple return policy (e.g., "30-day money-back guarantee").
* Put a link to your return policy in the footer and on product detail pages.

### 9. Offer Live Chat and Real-Time Support
If a customer has a question about sizing, shipping, or compatibility, they will leave if they can't find an answer.
* Implement an AI-powered chatbot to answer common questions immediately.
* Provide a direct link to WhatsApp support for personalized assistance.

### 10. Implement Abandoned Cart Recovery Emails
Many customers add products to their cart and leave. You can win them back.
* Set up automated emails to send 1 hour, 24 hours, and 48 hours after cart abandonment.
* Offer a small discount or free shipping in the final email to encourage them to complete their purchase.`,
    readTime: '7 min read',
  },
  {
    id: 'brand-identity-guide',
    title: 'Complete Guide to Building Brand Identity',
    date: 'January 2, 2026',
    category: 'Branding',
    excerpt: 'How to create a powerful brand that resonates with your audience.',
    content: `A brand identity is far more than just a logo or a catchy slogan. It is the complete visual, emotional, and verbal language that your business uses to communicate with the world. A strong brand identity sets you apart from competitors, fosters customer loyalty, and builds long-term equity. Here is a step-by-step guide to building a cohesive brand identity from the ground up.

### 1. Define Your Brand Strategy
Before you choose colors or design logos, you must define the foundation of your business.
* **Core Mission:** Why does your business exist, beyond making money?
* **Target Audience:** Who is your ideal customer? What are their problems, desires, and behaviors?
* **Brand Personality:** If your brand were a person, what would they be like? Professional, playful, energetic, or luxurious?
* **Value Proposition:** What makes your product or service better than the competition?

### 2. Choose Your Typography & Colors
Your visual assets will represent your brand on your website, social media, and physical packaging.
* **Color Palette:** Choose 1-2 primary colors and 2-3 secondary colors. Use color psychology to select colors that reflect your brand personality (e.g., blue for trust, green for health/sustainability, yellow for energy).
* **Typography:** Select 2-3 fonts. A bold heading font (sans-serif for modern brands, serif for classic/luxurious brands) and a clean, highly readable body font. Keep your typeface choices consistent across all mediums.

### 3. Design a Flexible Logo System
A good logo is simple, memorable, and works in any size or format.
* **Responsive Logo Design:** Create multiple variations of your logo. You need a primary logo (horizontal layout), a stacked logo (square layout), and a simplified sub-mark/icon (for social media avatars and favicons).
* **Color Adaptability:** Ensure your logo looks good in full color, solid black, and solid white.

### 4. Create Comprehensive Brand Guidelines
Consistency is the key to building a strong brand identity. If your website looks sleek and dark, but your social media is bright and playful, you will confuse customers and lose trust.
* Compile all of your rules into a "Brand Guidelines" document.
* Include rules for logo placement, minimum sizes, color codes (HEX, RGB, CMYK), typography hierarchy, and tone of voice.
* Share this document with your developers, designers, and marketing team to ensure everyone is aligned.

### 5. Integrate Your Brand Across All Touchpoints
Once your brand identity is defined, apply it to every aspect of your business.
* **Website:** The digital home of your brand. It should represent your styling, messaging, and typography.
* **Social Media:** Use consistent templates and color themes.
* **Customer Support:** Ensure your support agents use a tone of voice that matches your brand guidelines (e.g., friendly and conversational vs formal and authoritative).`,
    readTime: '6 min read',
  },
  {
    id: 'mobile-first-design',
    title: 'Mobile-First Design: Why It Matters',
    date: 'December 28, 2025',
    category: 'UI/UX',
    excerpt: 'Understanding the importance of mobile-first approach in modern web design.',
    content: `Mobile-first design is a design philosophy where you start creating your interface for the smallest mobile screen first, and then scale up to tablet and desktop viewports. Since the majority of global web traffic comes from mobile devices, this approach has become an industry standard. Here is why mobile-first design is essential and how you can implement it.

### 1. The Mobile-First Indexing Era
In the past, Google crawled the desktop version of a website to determine search rankings. Today, Google uses **mobile-first indexing**.
* This means Google primarily evaluates the mobile version of your site for search engine optimization.
* If your mobile site has a bad layout, slow performance, or missing content, your search rankings will suffer on all devices, including desktop.

### 2. The Power of Layout Prioritization
Designing for mobile forces you to focus on what is truly important. On a desktop screen, you have plenty of space to add sidebars, decorative images, and extra text. On a mobile screen, you only have room for the essentials.
* This constraint forces you to prioritize your copy, your navigation, and your call-to-actions.
* The result is a cleaner, more focused design that helps users accomplish their goals faster.

### 3. Responsive Web Constraints & Performance
Mobile devices have less CPU power, slower network connections, and smaller memory footprints than desktop computers.
* When you design mobile-first, you are forced to optimize your code, compress your assets, and minimize JavaScript.
* This focus on performance ensures that when the site is viewed on desktop, it will load instantly and feel incredibly fast.

### 4. Practical Guidelines for Mobile Design
* **Touch Targets:** Make sure all buttons and interactive links are at least **44x44 pixels** in size, with generous spacing around them. This prevents accidental taps.
* **Font Sizes:** Avoid small text. Use a minimum font size of **16px** for body copy.
* **Form Inputs:** Keep forms simple. Minimize the number of input fields and use auto-fill tags where possible.
* **Responsive Breakpoints:** Use media queries to scale layouts up, rather than scaling down. Start with your base styles (mobile), and use min-width breakpoints for tablets (768px) and desktops (1024px+).

### 5. Real Device Testing
Never rely solely on your browser's responsive emulation tools. Always test your website on real mobile devices (both iOS and Android) to ensure that touch interactions, animations, and scrolling feel smooth.`,
    readTime: '5 min read',
  },
  {
    id: 'seo-strategies',
    title: 'SEO Strategies That Actually Work in 2026',
    date: 'December 25, 2025',
    category: 'Digital Marketing',
    excerpt: 'Proven SEO techniques to improve your website ranking.',
    content: `Search Engine Optimization (SEO) is constantly evolving. In 2026, search engines like Google are smarter than ever before, prioritizing user experience, depth of content, and technical excellence. The old tactics of keyword stuffing and low-quality link building will only get your site penalized. Here are the core SEO strategies that actually work to improve your website rankings today.

### 1. Optimize for User Intent & Topic Clusters
Google no longer ranks pages based on single keywords. Instead, it ranks pages based on how well they satisfy the searcher's intent.
* **Identify Intent:** Determine if a keyword's intent is informational (e.g., "how to start a blog"), commercial (e.g., "best POS systems"), or transactional (e.g., "buy POS system").
* **Topic Clustering:** Instead of writing random articles, build content clusters. Create a detailed "pillar page" that gives an overview of a broad topic, and write multiple supporting "sub-pages" that link back to the pillar page. This builds topical authority in Google's eyes.

### 2. Elevate E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
Google's Helpful Content System evaluates the quality of your website using the E-E-A-T guidelines.
* **Experience:** Show that you have first-hand experience with the product or service you are reviewing.
* **Expertise:** Display author profiles at the bottom of articles, listing their qualifications and linking to their social channels.
* **Authoritativeness:** Earn mentions and links from reputable, high-authority websites in your niche.
* **Trustworthiness:** Keep your contact details visible, use secure payment and privacy policies, and link to credible scientific or news sources.

### 3. Master Core Web Vitals and Page Speed
Google includes page speed and user experience metrics in its core ranking algorithm.
* **Largest Contentful Paint (LCP):** Optimize your site structure so the main content renders in under 2.5 seconds.
* **Interaction to Next Paint (INP):** Ensure your pages react instantly to user inputs (like clicks and taps) within 200 milliseconds.
* **Cumulative Layout Shift (CLS):** Fix layout stability issues so elements don't jump around as images and fonts load.

### 4. Implement Structured Data (Schema Markup)
Schema markup is a code snippet that helps search engines understand the context of your page content.
* Implement **Product Schema** on product detail pages to display prices, reviews, and stock availability directly in search results.
* Use **Article Schema** on blog posts to help search engines display your articles in the "Top Stories" carousel.
* Apply **Local Business Schema** on contact pages to rank higher in local search results.

### 5. Focus on Quality Backlink Acquisition
High-quality backlinks from authoritative websites remain one of the strongest ranking factors.
* **Linkable Assets:** Create original, research-backed guides, case studies, or free tools that people naturally want to link to.
* **Outreach:** Connect with other bloggers and businesses in your industry to share your resources.
* **Digital PR:** Pitch expert commentary to journalists and publications to earn high-authority media links.`,
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
        <div style={{ fontSize: '60px', fontWeight: 900, color: '#1F6FFF' }}>404</div>
        <h1 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 700, margin: 0 }}>Post Not Found</h1>
        <Link href="/blog" style={{ color: '#1F6FFF', textDecoration: 'none', fontWeight: 600 }}>← Back to Blog</Link>
      </main>
    );
  }

  // Parse custom markdown-like headings and lists
  const renderParagraphs = (content) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('### ')) {
        return (
          <h3 key={i} style={{ color: '#0F172A', fontSize: '1.4rem', fontWeight: 700, marginTop: '24px', marginBottom: '12px' }}>
            {block.replace('### ', '')}
          </h3>
        );
      }
      if (block.startsWith('* ') || block.startsWith('- ')) {
        const items = block.split('\n').map((item) => item.replace(/^[*-\s]+/, ''));
        return (
          <ul key={i} style={{ paddingLeft: '24px', marginBottom: '16px', listStyleType: 'disc' }}>
            {items.map((item, idx) => (
              <li key={idx} style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '8px' }}>
                {item.includes('**') ? (
                  <>
                    <strong>{item.split('**')[1]}</strong>
                    {item.split('**')[2]}
                  </>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} style={{ color: '#475569', lineHeight: 1.9, fontSize: '1.05rem', marginBottom: '20px' }}>
          {block.includes('**') ? (
            block.split('**').map((chunk, idx) => (idx % 2 === 1 ? <strong key={idx}>{chunk}</strong> : chunk))
          ) : (
            block
          )}
        </p>
      );
    });
  };

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
              <span style={{ padding: '5px 14px', background: 'transparent', border: '1px solid rgba(31,111,255,0.3)', borderRadius: '9999px', color: '#1F6FFF', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {post.category}
              </span>
              <span style={{ color: '#94A3B8', fontSize: '0.875rem' }}>{post.date}</span>
              <span style={{ color: '#94A3B8', fontSize: '0.875rem' }}>· {post.readTime}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '20px' }}>
              {post.title}
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#64748B', lineHeight: 1.6 }}>{post.excerpt}</p>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)', display: 'flex', flexDirection: 'column', gap: '40px' }}>

            {/* Visual Header Styling instead of empty SVG box */}
            <div style={{ 
              height: 'clamp(180px, 40vw, 320px)', 
              background: 'linear-gradient(135deg, #1F6FFF 0%, #0F172A 100%)', 
              borderRadius: '16px', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '40px',
              textAlign: 'center',
              color: '#FFFFFF'
            }}>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{post.category}</h2>
              <p style={{ fontSize: '1.05rem', opacity: 0.8, maxWidth: '500px', margin: 0 }}>Deep dive guide into technical and strategy best practices</p>
            </div>

            {/* Article */}
            <div style={darkCard}>
              {renderParagraphs(post.content)}
              
              {/* Author Bio Section for E-E-A-T Trust Score */}
              <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '40px 0 24px' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  background: '#1F6FFF', 
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.2rem'
                }}>
                  BD
                </div>
                <div>
                  <h4 style={{ margin: '0 0 4px', color: '#0F172A', fontWeight: 700 }}>Written by BD Matrix Editorial Team</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748B' }}>Experienced digital architects, POS engineers, and SEO specialists.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ ...darkCard, textAlign: 'center', background: 'rgba(31,111,255,0.05)', borderColor: 'rgba(31,111,255,0.2)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Want to grow your digital presence?</h2>
              <p style={{ color: '#64748B', marginBottom: '24px' }}>BD Matrix helps businesses build scalable software and digital strategies.</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1F6FFF', color: '#ffffff', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
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
