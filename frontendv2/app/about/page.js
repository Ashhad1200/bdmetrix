import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './about.module.css';

export const metadata = {
  title: 'About Us | BD Matrix',
  description: 'BD Matrix is a software development agency building high-integrity digital products for businesses in Canada, UK, and Pakistan.',
};

export default function AboutPage() {
    const values = [
        {
            title: 'Innovation',
            description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            )
        },
        {
            title: 'Excellence',
            description: 'Quality is at the heart of everything we do, ensuring exceptional results for every project.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
            )
        },
        {
            title: 'Collaboration',
            description: 'We believe in building strong partnerships with our clients through transparent communication.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            )
        },
        {
            title: 'Results-Driven',
            description: 'Our focus is on delivering measurable results that drive real business growth.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
            )
        }
    ];

    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className="pill-tag" data-aos="fade-up">About BD Matrix</div>
                        <h1 className={styles.title} data-aos="fade-up" data-aos-delay="100">
                            Engineering <span className={styles.accent}>Digital Excellence</span>
                        </h1>
                        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
                            We build high-integrity digital products for businesses that demand 
                            reliability, security, and scalable growth in the modern economy.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className={styles.story}>
                    <div className={styles.container}>
                        <div className={styles.storyGrid}>
                            <div className={styles.storyContent} data-aos="fade-right">
                                <div className="pill-tag">Our Philosophy</div>
                                <h2 className={styles.storyTitle}>
                                    A Commitment to <span className={styles.accent}>Strategic Growth</span>
                                </h2>
                                <p className={styles.storyText}>
                                    BD Matrix was founded by a team of software engineers and digital architects 
                                    who recognized a gap in the market for high-trust, bank-grade digital solutions. 
                                    Operating with a global mindset, we serve clients across Canada, UK, and Pakistan.
                                </p>
                                <p className={styles.storyText}>
                                    We don't just write code; we architect solutions. Our journey is defined by 
                                    technical rigor and a quality-first approach that ensures every product we 
                                    deliver is built to last and engineered for impact.
                                </p>
                            </div>
                            <div className={styles.storyStats} data-aos="fade-left">
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>100%</span>
                                    <span className={styles.statLabel}>Secure Architecture</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>99.9%</span>
                                    <span className={styles.statLabel}>Infrastructure Uptime</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>Quality</span>
                                    <span className={styles.statLabel}>Standard Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className={styles.values}>
                    <div className={styles.container}>
                        <div className={styles.valuesHeader}>
                            <div className="pill-tag" data-aos="fade-up">Our Values</div>
                            <h2 className={styles.valuesTitle} data-aos="fade-up" data-aos-delay="100">
                                What Drives <span className={styles.accent}>Our Success</span>
                            </h2>
                        </div>
                        <div className={styles.valuesGrid}>
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className={styles.valueCard}
                                    data-aos="fade-up"
                                    data-aos-delay={100 + index * 100}
                                >
                                    <div className={styles.valueIcon}>{value.icon}</div>
                                    <h3 className={styles.valueTitle}>{value.title}</h3>
                                    <p className={styles.valueDesc}>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
