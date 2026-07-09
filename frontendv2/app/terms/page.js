import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export const metadata = {
  title: 'Terms of Service | BD Matrix',
  description:
    'BD Matrix Terms of Service — the terms and conditions for using our website bdmatrix.org.',
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p style={{ color: '#94A3B8', marginBottom: '40px' }}>
              Last updated: 13 June 2026 · Applies to bdmatrix.org and subdomains
            </p>

            <div style={{ color: '#475569', lineHeight: 1.9, fontSize: '1.05rem' }}>
              <p style={{ marginBottom: '20px' }}>
                Welcome to BD Matrix. By accessing and using our website (bdmatrix.org) and our services, you agree to comply with and be bound by the following terms and conditions.
              </p>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                1. Acceptance of Terms
              </h2>
              <p style={{ marginBottom: '20px' }}>
                By using our site, you agree to these Terms of Service, our Privacy Policy, and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                2. Intellectual Property Rights
              </h2>
              <p style={{ marginBottom: '20px' }}>
                All content, features, and functionality on this website, including but not limited to text, graphics, logos, icons, and software, are the exclusive property of BD Matrix and are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                3. User Conduct
              </h2>
              <p style={{ marginBottom: '20px' }}>
                You agree to use bdmatrix.org only for lawful purposes. You are prohibited from:
              </p>
              <ul style={{ marginBottom: '20px', paddingLeft: '24px' }}>
                <li>Using the site in any way that violates any local, national, or international law.</li>
                <li>Engaging in any automated data collection, scraping, or harvesting of site content.</li>
                <li>Attempting to interfere with the proper working of the site or bypassing any security measures.</li>
              </ul>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                4. Disclaimer of Warranties
              </h2>
              <p style={{ marginBottom: '20px' }}>
                This site and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                5. Limitation of Liability
              </h2>
              <p style={{ marginBottom: '20px' }}>
                In no event shall BD Matrix, its directors, employees, or partners be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use or inability to use this site or services.
              </p>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                6. Changes to Terms
              </h2>
              <p style={{ marginBottom: '20px' }}>
                We reserve the right to revise and update these Terms of Service at any time without prior notice. By continuing to use the site after changes are posted, you accept the modified terms.
              </p>

              <h2 style={{ color: '#0F172A', fontSize: '1.35rem', fontWeight: 700, margin: '32px 0 12px' }}>
                7. Contact Us
              </h2>
              <p style={{ marginBottom: '20px' }}>
                If you have any questions about these Terms of Service, please contact us at:{' '}
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
