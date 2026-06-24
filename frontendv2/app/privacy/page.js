import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export const metadata = {
  title: 'Privacy Policy | BD Matrix',
  description:
    'BD Matrix privacy policy — how we collect, use, and protect your information on bdmatrix.org.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main style={{ background: '#FFFFFF', paddingTop: '100px', minHeight: '100vh' }}>
        <section style={{ padding: '60px 0 80px' }}>
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: '0 clamp(20px, 5vw, 40px)',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 900,
                color: '#0F172A',
                marginBottom: '12px',
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: '#94A3B8', marginBottom: '40px' }}>
              Last updated: 13 June 2026 · Applies to bdmatrix.org and subdomains
            </p>

            <div style={{ color: '#475569', lineHeight: 1.9, fontSize: '1.05rem' }}>
              <p style={{ marginBottom: '20px' }}>
                BD Matrix (&quot;we&quot;, &quot;us&quot;) operates bdmatrix.org and
                related digital properties including fifa2026.bdmatrix.org. This policy
                explains what information we collect and how we use it.
              </p>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                Information We Collect
              </h2>
              <p style={{ marginBottom: '20px' }}>
                <strong>Contact forms.</strong> When you submit our contact form, we
                receive your name, email, phone number, and message content to respond
                to enquiries.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong>Analytics.</strong> We use analytics tools to understand site
                traffic, pages visited, and general device information. This helps us
                improve our services and content.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong>Newsletter.</strong> If you subscribe, we store your email to
                send updates you requested.
              </p>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                Cookies & Advertising
              </h2>
              <p style={{ marginBottom: '20px' }}>
                We use cookies for analytics and may display advertisements through
                Google AdSense on bdmatrix.org and authorized subdomains. Google and
                its partners may use cookies to serve ads based on your visits. Manage
                preferences at{' '}
                <a href="https://www.google.com/settings/ads" style={{ color: '#1F6FFF' }}>
                  Google Ads Settings
                </a>
                .
              </p>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                How We Use Your Data
              </h2>
              <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
                <li>Respond to business and support enquiries</li>
                <li>Improve website content and user experience</li>
                <li>Send newsletters you opt into</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                Data Sharing
              </h2>
              <p style={{ marginBottom: '20px' }}>
                We do not sell personal information. We share data only with service
                providers (hosting, email delivery, analytics, advertising) who process
                it on our behalf under appropriate agreements.
              </p>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                Contact
              </h2>
              <p style={{ marginBottom: '20px' }}>
                Privacy questions:{' '}
                <a href="mailto:support@bdmatrix.org" style={{ color: '#1F6FFF' }}>
                  support@bdmatrix.org
                </a>
              </p>

              <p style={{ marginTop: '40px' }}>
                <Link href="/" style={{ color: '#1F6FFF', textDecoration: 'none', fontWeight: 600 }}>
                  ← Back to Home
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
