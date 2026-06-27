'use client';
import { useEffect } from 'react';
import styles from './flowdoc.module.css';

const FLOWS = [
  {
    icon: '🦷',
    industry: 'Dental Clinic',
    bot: 'Aria',
    tagline: 'Handles appointment booking, treatment FAQs, and reminders — 24/7',
    color: '#0D9488',
    steps: [
      {
        actor: 'Bot',
        text: 'Hi! Welcome to Smile Dental Clinic 😊 How can I help you today?',
        chips: ['Book appointment', 'Pricing & treatments', 'Emergency help'],
      },
      { actor: 'Client', text: 'Book appointment' },
      {
        actor: 'Bot',
        text: 'Great! Which treatment are you looking for?',
        chips: ['Routine checkup', 'Teeth whitening', 'Dental emergency'],
      },
      { actor: 'Client', text: 'Teeth whitening' },
      {
        actor: 'Bot',
        text: 'Excellent! Sessions run Mon–Sat. Morning or afternoon?',
        chips: ['Morning', 'Afternoon'],
      },
      { actor: 'Client', text: 'Morning' },
      {
        actor: 'Bot',
        text: 'Available: Tuesday 9:00am or Friday 10:00am. Which works?',
        chips: ['Tuesday 9:00am', 'Friday 10:00am'],
      },
      { actor: 'Client', text: 'Friday 10:00am' },
      { actor: 'Bot', text: 'May I have your name and mobile number to confirm?' },
      { actor: 'Client', text: 'Sarah — +1 555 0192' },
      {
        actor: 'Bot',
        text: '✅ Booked! Friday 10:00am – Teeth whitening at Smile Dental. SMS confirmation sent.',
        terminal: true,
      },
    ],
  },
  {
    icon: '🏡',
    industry: 'Real Estate Agency',
    bot: 'Alex',
    tagline: 'Qualifies leads, schedules viewings, and routes to agents automatically',
    color: '#1F6FFF',
    steps: [
      {
        actor: 'Bot',
        text: 'Welcome to Prime Properties! 🏡 How can I help you today?',
        chips: ['Browse listings', 'Schedule a viewing', 'Get a valuation'],
      },
      { actor: 'Client', text: 'Schedule a viewing' },
      {
        actor: 'Bot',
        text: 'Are you looking to buy or rent?',
        chips: ['Buy', 'Rent'],
      },
      { actor: 'Client', text: 'Buy' },
      {
        actor: 'Bot',
        text: 'What is your approximate budget?',
        chips: ['$200k–$400k', '$400k–$700k', '$700k+'],
      },
      { actor: 'Client', text: '$400k–$700k' },
      {
        actor: 'Bot',
        text: 'We have 3 matching properties. Connect you with Agent Sarah for a private viewing?',
        chips: ['Yes, connect me', 'See listings first'],
      },
      { actor: 'Client', text: 'Yes, connect me' },
      { actor: 'Bot', text: 'What is the best number to reach you on?' },
      { actor: 'Client', text: '+1 555 0847' },
      {
        actor: 'Bot',
        text: '✅ Agent Sarah will call within the hour. 3 matching listings sent via SMS.',
        terminal: true,
      },
    ],
  },
  {
    icon: '🍽️',
    industry: 'Restaurant / Cafe',
    bot: 'Luna',
    tagline: 'Takes reservations, answers menu questions, and confirms bookings instantly',
    color: '#F59E0B',
    steps: [
      {
        actor: 'Bot',
        text: 'Welcome to Casa Bella 🍝 How can I help you today?',
        chips: ['Reserve a table', 'View menu', "Today's specials"],
      },
      { actor: 'Client', text: 'Reserve a table' },
      {
        actor: 'Bot',
        text: 'For how many guests?',
        chips: ['2 guests', '4 guests', '6+ guests'],
      },
      { actor: 'Client', text: '4 guests' },
      {
        actor: 'Bot',
        text: 'Which evening works for you?',
        chips: ['Tonight', 'Tomorrow', 'This weekend'],
      },
      { actor: 'Client', text: 'This weekend' },
      {
        actor: 'Bot',
        text: 'Saturday slots: 6:00pm, 7:30pm, or 9:00pm. Which do you prefer?',
        chips: ['6:00pm', '7:30pm', '9:00pm'],
      },
      { actor: 'Client', text: '7:30pm' },
      { actor: 'Bot', text: 'Any dietary requirements or special occasion?' },
      { actor: 'Client', text: 'Anniversary dinner 🎉' },
      {
        actor: 'Bot',
        text: '✅ Reserved! Saturday 7:30pm – 4 guests, anniversary noted. SMS confirmation sent.',
        terminal: true,
      },
    ],
  },
  {
    icon: '🏥',
    industry: 'Doctor Practice',
    bot: 'Medi',
    tagline: 'Triages patients, routes to specialists, and confirms consultations with reminders',
    color: '#8B5CF6',
    steps: [
      {
        actor: 'Bot',
        text: 'Good day! I\'m Medi at ClearMed Clinic 🏥 How can I assist?',
        chips: ['Book consultation', 'Prescription refill', 'Test results'],
      },
      { actor: 'Client', text: 'Book consultation' },
      {
        actor: 'Bot',
        text: 'Is this a new concern or a follow-up visit?',
        chips: ['New concern', 'Follow-up visit'],
      },
      { actor: 'Client', text: 'New concern' },
      {
        actor: 'Bot',
        text: 'Which type of doctor do you need to see?',
        chips: ['General Physician', 'Cardiologist', 'Dermatologist'],
      },
      { actor: 'Client', text: 'General Physician' },
      {
        actor: 'Bot',
        text: 'Dr. Ahmed is available. Morning (9am–12pm) or afternoon (2pm–5pm)?',
        chips: ['Morning', 'Afternoon'],
      },
      { actor: 'Client', text: 'Morning' },
      { actor: 'Bot', text: 'Wednesday 10:30am with Dr. Ahmed is open. Shall I confirm?' },
      { actor: 'Client', text: 'Yes please' },
      {
        actor: 'Bot',
        text: '✅ Confirmed! Wednesday 10:30am – Dr. Ahmed. 24h reminder will be sent automatically.',
        terminal: true,
      },
    ],
  },
];

export default function FlowDocPage() {
  useEffect(() => {
    const timer = setTimeout(() => window.print(), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>

      {/* Controls — hidden when printing */}
      <div className={styles.controls}>
        <button className={styles.printBtn} onClick={() => window.print()}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          Save as PDF
        </button>
        <button className={styles.closeBtn} onClick={() => window.close()}>
          ✕ Close
        </button>
      </div>

      {/* Document header */}
      <div className={styles.docHeader}>
        <div className={styles.docBrand}>BD Matrix</div>
        <div className={styles.docMeta}>
          <div className={styles.docTitle}>ClientBot — Conversation Flow Documentation</div>
          <div className={styles.docSub}>
            How the AI assistant handles real client interactions across 4 industries
          </div>
        </div>
        <div className={styles.docDate}>
          {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      <div className={styles.docDivider} />

      {/* Flow cards — 2×2 grid */}
      <div className={styles.flowGrid}>
        {FLOWS.map((flow) => (
          <div key={flow.industry} className={styles.card}>
            {/* Card header */}
            <div className={styles.cardHead} style={{ borderTopColor: flow.color }}>
              <span className={styles.cardIcon}>{flow.icon}</span>
              <div>
                <div className={styles.cardIndustry}>{flow.industry}</div>
                <div className={styles.cardBot}>Bot name: <strong>{flow.bot}</strong></div>
              </div>
            </div>
            <div className={styles.cardTagline}>{flow.tagline}</div>

            {/* Steps */}
            <div className={styles.steps}>
              {flow.steps.map((step, i) => (
                <div
                  key={i}
                  className={`${styles.step} ${step.actor === 'Bot' ? styles.botStep : styles.clientStep} ${step.terminal ? styles.terminalStep : ''}`}
                >
                  <div className={styles.stepActor} style={step.terminal ? { color: '#16a34a' } : {}}>
                    {step.terminal ? '✅ Outcome' : step.actor}
                  </div>
                  <div className={styles.stepBubble} style={step.terminal ? { background: '#f0fdf4', borderColor: '#bbf7d0', color: '#15803d' } : {}}>
                    {step.text}
                    {step.chips && (
                      <div className={styles.chips}>
                        {step.chips.map((c) => (
                          <span key={c} className={styles.chip}>{c}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Document footer */}
      <div className={styles.docFooter}>
        <span>© {new Date().getFullYear()} BD Matrix · support@bdmatrix.org · bdmatrix.org</span>
        <span>Flows shown are defaults. Custom flows are configured during onboarding.</span>
      </div>

    </div>
  );
}
