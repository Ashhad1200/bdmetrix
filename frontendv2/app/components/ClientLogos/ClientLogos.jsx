'use client';
import Image from 'next/image';
import styles from './ClientLogos.module.css';

const clients = [
    { name: 'Client One', logo: '/images/clients/client-logo-1.png' },
    { name: 'Client Two', logo: '/images/clients/client-logo-2.png' },
    { name: 'Client Three', logo: '/images/clients/client-logo-3.png' },
    { name: 'Client Four', logo: '/images/clients/client-logo-4.png' },
];

export default function ClientLogos() {
    return (
        <section className={styles.section}>
            <div className={styles.label}>
                <span className={styles.dot}></span>
                Clients We've Served
            </div>
            <div className={styles.tickerWrapper}>
                <div className={styles.ticker}>
                    {[...clients, ...clients].map((client, i) => (
                        <div key={i} className={styles.clientItem}>
                            <div className={styles.logoWrap}>
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className={styles.clientLogo}
                                />
                            </div>
                            <span className={styles.clientName}>{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
