'use client';
import styles from './ChatbotFlowDoc.module.css';

const FLOWS = [
  {
    icon: '🦷',
    title: 'Dental Clinic',
    subtitle: 'Appointment & FAQ flow',
    steps: [
      { type: 'bot',  text: 'Greets patient by name. Presents main options.', chips: ['Book appointment', 'Pricing', 'Emergency'] },
      { type: 'user', text: 'Book appointment', selected: true },
      { type: 'bot',  text: 'Asks treatment type.', chips: ['Checkup', 'Whitening', 'Emergency'] },
      { type: 'user', text: 'Teeth whitening', selected: true },
      { type: 'bot',  text: 'Confirms availability. Offers time slots.' },
      { type: 'user', text: 'Chooses preferred slot' },
      { type: 'bot',  text: 'Collects name & phone number.' },
      { type: 'user', text: 'Provides contact details' },
      { type: 'bot',  text: 'Confirms booking. Sends SMS confirmation + 24h reminder.' },
    ],
    terminal: { icon: '✅', text: 'Appointment confirmed. Staff notified.' },
  },
  {
    icon: '🏡',
    title: 'Real Estate',
    subtitle: 'Lead qualification & viewing flow',
    steps: [
      { type: 'bot',  text: 'Greets visitor. Asks intent.', chips: ['Buy', 'Rent', 'Sell', 'Valuation'] },
      { type: 'user', text: 'Buy', selected: true },
      { type: 'bot',  text: 'Qualifies budget range.', chips: ['$200k–$400k', '$400k–$700k', '$700k+'] },
      { type: 'user', text: 'Selects budget range', selected: true },
      { type: 'bot',  text: 'Presents matching properties. Asks if they want a viewing.' },
      { type: 'user', text: 'Yes, schedule a viewing' },
      { type: 'bot',  text: 'Collects contact number.' },
      { type: 'user', text: 'Provides phone number' },
      { type: 'bot',  text: 'Routes to agent. Sends property listings via SMS.' },
    ],
    terminal: { icon: '📞', text: 'Agent assigned. Listings sent. Viewing booked.' },
  },
  {
    icon: '🍽️',
    title: 'Restaurant',
    subtitle: 'Reservation & menu flow',
    steps: [
      { type: 'bot',  text: 'Welcomes guest. Shows options.', chips: ['Reserve table', 'Menu', 'Specials'] },
      { type: 'user', text: 'Reserve table', selected: true },
      { type: 'bot',  text: 'Asks party size.', chips: ['2', '4', '6+'] },
      { type: 'user', text: 'Selects party size', selected: true },
      { type: 'bot',  text: 'Asks preferred date/evening.' },
      { type: 'user', text: 'Selects date' },
      { type: 'bot',  text: 'Shows available time slots.' },
      { type: 'user', text: 'Chooses time slot' },
      { type: 'bot',  text: 'Notes dietary needs / occasion. Confirms reservation + sends SMS.' },
    ],
    terminal: { icon: '🎉', text: 'Table reserved. Confirmation & reminder sent.' },
  },
  {
    icon: '🏥',
    title: 'Doctor Practice',
    subtitle: 'Consultation booking & triage flow',
    steps: [
      { type: 'bot',  text: 'Greets patient. Asks intent.', chips: ['New concern', 'Follow-up', 'Prescription'] },
      { type: 'user', text: 'New concern', selected: true },
      { type: 'bot',  text: 'Routes to appropriate specialist.', chips: ['GP', 'Cardiologist', 'Dermatologist'] },
      { type: 'user', text: 'Selects specialist', selected: true },
      { type: 'bot',  text: 'Presents available appointment slots.' },
      { type: 'user', text: 'Chooses time slot' },
      { type: 'bot',  text: 'Collects patient name & contact.' },
      { type: 'user', text: 'Provides details' },
      { type: 'bot',  text: 'Confirms appointment. Sends 24h reminder. Flags to front desk.' },
    ],
    terminal: { icon: '🩺', text: 'Appointment confirmed. Clinic notified. Reminder scheduled.' },
  },
];

export default function ChatbotFlowDoc() {
  const handleDownload = () => {
    window.open('/products/client-chatbot/flow-doc', '_blank');
  };

  return (
    <section className={styles.flowSection} id="flow-documentation">
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <div className={styles.label}>Flow Documentation</div>
            <h2 className={styles.title}>
              Conversation flows for <span className={styles.accent}>every industry</span>
            </h2>
            <p className={styles.desc}>
              Detailed step-by-step flows showing exactly how ClientBot handles real client interactions — from first message to confirmed outcome.
            </p>
          </div>
          <button className={styles.downloadBtn} onClick={handleDownload}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download as PDF
          </button>
        </div>

        <div className={styles.flowGrid}>
          {FLOWS.map((flow) => (
            <div key={flow.title} className={styles.flowCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{flow.icon}</span>
                <div className={styles.cardTitle}>{flow.title}</div>
                <div className={styles.cardSubtitle}>{flow.subtitle}</div>
              </div>

              <div className={styles.steps}>
                {flow.steps.map((step, i) => (
                  <div key={i} className={styles.step}>
                    <div className={styles.stepLeft}>
                      <div className={`${styles.stepDot} ${styles[step.type]}`}>
                        {step.type === 'bot' ? 'B' : 'U'}
                      </div>
                    </div>
                    <div className={styles.stepRight}>
                      <div className={`${styles.stepTag} ${styles[step.type]}`}>
                        {step.type === 'bot' ? 'Bot' : 'User'}
                      </div>
                      <div className={styles.stepText}>{step.text}</div>
                      {step.chips && (
                        <div className={styles.stepChips}>
                          {step.chips.map(c => (
                            <span key={c} className={`${styles.stepChip} ${step.selected ? styles.selected : ''}`}>
                              {c}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <div className={styles.terminalStep}>
                  <span className={styles.terminalIcon}>{flow.terminal.icon}</span>
                  <span className={styles.terminalText}>{flow.terminal.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
