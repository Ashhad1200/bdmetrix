'use client';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './about.module.css';

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
                        <div className="pill-tag" data-aos="fade-up">About Us</div>
                        <h1 className={styles.title} data-aos="fade-up" data-aos-delay="100">
                            We're a <span className={styles.accent}>Software House</span>
                        </h1>
                        <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
                            With 7+ years of experience, we've helped businesses worldwide
                            transform their digital presence and achieve remarkable growth.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className={styles.story}>
                    <div className={styles.container}>
                        <div className={styles.storyGrid}>
                            <div className={styles.storyContent} data-aos="fade-right">
                                <div className="pill-tag">Our Story</div>
                                <h2 className={styles.storyTitle}>
                                    From Humble Beginnings to <span className={styles.accent}>Global Impact</span>
                                </h2>
                                <p className={styles.storyText}>
                                    BD Matrix started as a team of passionate developers and digital strategists
                                    with a vision to revolutionize software solutions. Based in Canada and UK,
                                    now in Karachi, Pakistan, we've grown into a full-service digital agency with a global presence.
                                </p>
                                <p className={styles.storyText}>
                                    Our journey has been marked by countless success stories, innovative
                                    projects, and lasting partnerships with clients who share our vision
                                    for excellence.
                                </p>
                            </div>
                            <div className={styles.storyStats} data-aos="fade-left">
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>24+</span>
                                    <span className={styles.statLabel}>Projects Completed</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>99%</span>
                                    <span className={styles.statLabel}>Client Satisfaction</span>
                                </div>
                                <div className={styles.statItem}>
                                    <span className={styles.statNumber}>5+</span>
                                    <span className={styles.statLabel}>Years Experience</span>
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
