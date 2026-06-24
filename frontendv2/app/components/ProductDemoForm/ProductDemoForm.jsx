'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ProductDemoForm.module.css';

const inquiryTypes = [
    'Request a Demo',
    'Get Pricing Information',
    'Implementation Details',
    'Custom Solution',
];

export default function ProductDemoForm({ productName }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        inquiryType: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const companyLine = formData.company ? `Company: ${formData.company}\n\n` : '';
        const fullMessage = `${companyLine}${formData.message}`.trim();

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service_type: `${productName} — ${formData.inquiryType}`,
            message: fullMessage || 'No additional message provided.',
        };

        try {
            const response = await fetch('/api/contact/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                router.push('/thank-you');
            } else {
                setError(data.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setError('Unable to send your request. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className="pill-tag">Get in Touch</div>
                <h2 className={styles.title}>
                    Interested in <span className={styles.accent}>{productName}</span>?
                </h2>
                <p className={styles.subtitle}>
                    Fill out the form and our team will get back to you within 24 hours.
                </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.row}>
                    <div className={styles.group}>
                        <label className={styles.label} htmlFor="demo-name">
                            Full Name <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="demo-name"
                            type="text"
                            name="name"
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.group}>
                        <label className={styles.label} htmlFor="demo-email">
                            Email Address <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="demo-email"
                            type="email"
                            name="email"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.group}>
                        <label className={styles.label} htmlFor="demo-company">
                            Company / Organization
                        </label>
                        <input
                            id="demo-company"
                            type="text"
                            name="company"
                            placeholder="Acme Corp"
                            value={formData.company}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.group}>
                        <label className={styles.label} htmlFor="demo-phone">
                            Phone Number <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="demo-phone"
                            type="tel"
                            name="phone"
                            placeholder="+1 555 000 0000"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.group}>
                    <label className={styles.label} htmlFor="demo-inquiry">
                        I&apos;m interested in <span className={styles.required}>*</span>
                    </label>
                    <select
                        id="demo-inquiry"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className={styles.select}
                    >
                        <option value="">Select an option…</option>
                        {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.group}>
                    <label className={styles.label} htmlFor="demo-message">
                        Message <span className={styles.optional}>(optional)</span>
                    </label>
                    <textarea
                        id="demo-message"
                        name="message"
                        placeholder="Tell us about your business, current challenges, or any specific questions…"
                        value={formData.message}
                        onChange={handleChange}
                        className={`${styles.input} ${styles.textarea}`}
                    />
                </div>

                {error && <p className={styles.errorMsg}>{error}</p>}

                <button type="submit" className={styles.submit} disabled={loading}>
                    {loading ? (
                        <span className={styles.loadingDot}>Sending…</span>
                    ) : (
                        <>
                            Send Request
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </>
                    )}
                </button>

                <p className={styles.privacyNote}>
                    Your information is kept private and never shared with third parties.
                </p>
            </form>
        </div>
    );
}
