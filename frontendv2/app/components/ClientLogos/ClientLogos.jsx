'use client';
import styles from './ClientLogos.module.css';

const clients = [
    { name: 'HealthCare Pro' },
    { name: 'Stacks Inc.' },
    { name: 'FinVault' },
    { name: 'ShopNova' },
    { name: 'DataBridge' },
    { name: 'PulseMedia' },
    { name: 'CloudNest' },
    { name: 'RetailEdge' },
    { name: 'TechForge' },
    { name: 'MedTrack' },
    { name: 'BuildSmart' },
    { name: 'SalesFlow' },
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
                            <span className={styles.clientName}>{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
