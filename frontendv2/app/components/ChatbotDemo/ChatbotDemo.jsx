'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './ChatbotDemo.module.css';

const INDUSTRIES = [
  { key: 'dental',      label: 'Dental Clinic',     icon: '🦷' },
  { key: 'realestate',  label: 'Real Estate',        icon: '🏡' },
  { key: 'restaurant',  label: 'Restaurant',         icon: '🍽️' },
  { key: 'doctor',      label: 'Doctor Practice',    icon: '🏥' },
];

const FLOWS = {
  dental: {
    botName: 'Aria',
    business: 'Smile Dental Clinic',
    copyTitle: 'How Aria handles your dental clinic — 24/7',
    copyDesc: 'Patients book appointments, ask treatment questions, and receive confirmations — all without a receptionist picking up the phone.',
    steps: [
      { type: 'bot',  text: "Hi! Welcome to Smile Dental Clinic 😊 I'm Aria, your 24/7 assistant. How can I help you today?", chips: ['Book appointment', 'Pricing & treatments', 'Emergency help'] },
      { type: 'user', text: 'Book appointment' },
      { type: 'bot',  text: "Great! Which treatment are you looking for?", chips: ['Routine checkup', 'Teeth whitening', 'Dental emergency'] },
      { type: 'user', text: 'Teeth whitening' },
      { type: 'bot',  text: "Excellent choice ✨ Sessions run Mon–Sat. Do you prefer morning or afternoon?", chips: ['Morning', 'Afternoon'] },
      { type: 'user', text: 'Morning' },
      { type: 'bot',  text: "Available this week:\n• Tuesday 9:00am ✓\n• Friday 10:00am ✓\n\nWhich works best?", chips: ['Tuesday 9:00am', 'Friday 10:00am'] },
      { type: 'user', text: 'Friday 10:00am' },
      { type: 'bot',  text: "Perfect! May I have your name and mobile number to confirm?" },
      { type: 'user', text: 'Sarah — +1 555 0192' },
      { type: 'bot',  text: "You're all set, Sarah! 🎉\n✓ Friday at 10:00am\n✓ Teeth whitening\n✓ Smile Dental Clinic\n\nConfirmation SMS sent to your number!" },
    ],
  },
  realestate: {
    botName: 'Alex',
    business: 'Prime Properties',
    copyTitle: 'How Alex qualifies buyers for your agency — around the clock',
    copyDesc: 'Property enquiries are captured, budgets qualified, and viewings scheduled — before your agents start their day.',
    steps: [
      { type: 'bot',  text: "Welcome to Prime Properties! 🏡 I'm Alex, your property assistant. How can I help?", chips: ['Browse listings', 'Schedule a viewing', 'Get a valuation'] },
      { type: 'user', text: 'Schedule a viewing' },
      { type: 'bot',  text: "Wonderful! Are you looking to buy or rent?", chips: ['Buy', 'Rent'] },
      { type: 'user', text: 'Buy' },
      { type: 'bot',  text: "Exciting! What's your approximate budget range?", chips: ['$200k–$400k', '$400k–$700k', '$700k+'] },
      { type: 'user', text: '$400k–$700k' },
      { type: 'bot',  text: "We have 3 properties matching that range right now. Shall I connect you with Agent Sarah to arrange a private viewing?", chips: ['Yes, connect me', 'See listings first'] },
      { type: 'user', text: 'Yes, connect me' },
      { type: 'bot',  text: "Great! What's the best number to reach you on?" },
      { type: 'user', text: '+1 555 0847' },
      { type: 'bot',  text: "Done! 📱 Agent Sarah will call you within the hour.\n\nI'm also sending you the 3 property listings via SMS right now. Anything else I can help with?" },
    ],
  },
  restaurant: {
    botName: 'Luna',
    business: 'Casa Bella',
    copyTitle: 'How Luna fills your tables — even while the kitchen is closed',
    copyDesc: 'Reservations, menus, dietary questions, and special occasion requests — all handled automatically, any hour of the day.',
    steps: [
      { type: 'bot',  text: "Buonasera! Welcome to Casa Bella 🍝 I'm Luna, your table assistant. How can I help?", chips: ['Reserve a table', 'View menu', "Today's specials"] },
      { type: 'user', text: 'Reserve a table' },
      { type: 'bot',  text: "I'd love to help! For how many guests?", chips: ['2 guests', '4 guests', '6+ guests'] },
      { type: 'user', text: '4 guests' },
      { type: 'bot',  text: "Perfect for four! Which evening works for you?", chips: ['Tonight', 'Tomorrow', 'This weekend'] },
      { type: 'user', text: 'This weekend' },
      { type: 'bot',  text: "Available this Saturday:\n• 6:00pm ✓\n• 7:30pm ✓\n• 9:00pm ✓\n\nWhich do you prefer?", chips: ['6:00pm', '7:30pm', '9:00pm'] },
      { type: 'user', text: '7:30pm' },
      { type: 'bot',  text: "Lovely! Any dietary requirements or special occasion we should know about?" },
      { type: 'user', text: 'Anniversary dinner 🎉' },
      { type: 'bot',  text: "How wonderful — we'll make it special! 🥂\n✓ Saturday 7:30pm — 4 guests\n✓ Anniversary setup noted\n\nSee you Saturday, Casa Bella awaits!" },
    ],
  },
  doctor: {
    botName: 'Medi',
    business: 'ClearMed Clinic',
    copyTitle: 'How Medi handles patient intake — before your doors open',
    copyDesc: 'Consultation bookings, specialist routing, and appointment reminders — automated so your front desk focuses on patients who are already there.',
    steps: [
      { type: 'bot',  text: "Good day! I'm Medi, your health assistant at ClearMed Clinic 🏥 How can I assist?", chips: ['Book consultation', 'Prescription refill', 'Test results'] },
      { type: 'user', text: 'Book consultation' },
      { type: 'bot',  text: "Of course. Is this a new concern or a follow-up visit?", chips: ['New concern', 'Follow-up visit'] },
      { type: 'user', text: 'New concern' },
      { type: 'bot',  text: "Understood. Which type of doctor do you need?", chips: ['General Physician', 'Cardiologist', 'Dermatologist'] },
      { type: 'user', text: 'General Physician' },
      { type: 'bot',  text: "Dr. Ahmed has availability this week. Morning or afternoon?", chips: ['Morning (9am–12pm)', 'Afternoon (2pm–5pm)'] },
      { type: 'user', text: 'Morning (9am–12pm)' },
      { type: 'bot',  text: "Wednesday 10:30am with Dr. Ahmed is open. Shall I confirm?" },
      { type: 'user', text: 'Yes please' },
      { type: 'bot',  text: "Confirmed! ✓\n✓ Wednesday 10:30am\n✓ Dr. Ahmed — General Physician\n✓ ClearMed Clinic\n\nA reminder will be sent 24 hours before your appointment 📱" },
    ],
  },
};

const COPY_FEATURES = {
  dental:     ['Appointment booking without phone calls', 'Handles treatment FAQs instantly', 'Sends confirmation + reminder SMS', 'Escalates emergencies to on-call staff'],
  realestate: ['Captures leads & qualifies budgets 24/7', 'Routes buyers to the right agent instantly', 'Schedules viewings directly from listings', 'Follows up cold leads automatically'],
  restaurant: ['Takes reservations any time of night', 'Answers menu & allergen questions', 'Handles special occasions gracefully', 'Sends booking confirmations & reminders'],
  doctor:     ['Routes patients to the right specialist', 'Collects pre-visit information upfront', 'Reduces no-shows with auto-reminders', 'Handles prescription refill requests'],
};

let msgId = 0;

export default function ChatbotDemo() {
  const [activeKey, setActiveKey]     = useState('dental');
  const [messages, setMessages]       = useState([]);
  const [chips, setChips]             = useState([]);
  const [selectedChip, setSelected]   = useState(null);
  const [typing, setTyping]           = useState(false);
  const [done, setDone]               = useState(false);
  const chatRef   = useRef(null);
  const timerRef  = useRef([]);

  const clearTimers = () => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
  };

  const addTimer = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timerRef.current.push(id);
  };

  const scrollBottom = () => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  };

  const runFlow = useCallback((key) => {
    clearTimers();
    setMessages([]);
    setChips([]);
    setSelected(null);
    setTyping(false);
    setDone(false);

    const steps = FLOWS[key].steps;
    let delay = 400;

    steps.forEach((step, idx) => {
      if (step.type === 'bot') {
        const typingStart = delay;
        const typingDur   = Math.min(900 + step.text.length * 18, 2400);
        const showMsg     = typingStart + typingDur;

        addTimer(() => { setTyping(true); scrollBottom(); }, typingStart);
        addTimer(() => {
          setTyping(false);
          setMessages(m => [...m, { id: ++msgId, type: 'bot', text: step.text }]);
          if (step.chips) {
            addTimer(() => { setChips(step.chips); scrollBottom(); }, 250);
          }
          scrollBottom();
        }, showMsg);

        delay = showMsg + (step.chips ? 2000 : 900);

      } else {
        addTimer(() => {
          setChips([]);
          setSelected(null);
          setMessages(m => [...m, { id: ++msgId, type: 'user', text: step.text }]);
          scrollBottom();
        }, delay);
        delay += 600;
      }

      if (idx === steps.length - 1) {
        addTimer(() => setDone(true), delay + 400);
      }
    });
  }, []);

  useEffect(() => {
    runFlow(activeKey);
    return clearTimers;
  }, [activeKey, runFlow]);

  useEffect(scrollBottom, [messages, typing]);

  const flow = FLOWS[activeKey];

  return (
    <section className={styles.demoSection}>
      <div className={styles.container}>

        <div className={styles.sectionHeader}>
          <div className={styles.label}>Live Demo</div>
          <h2 className={styles.title}>
            Watch the bot <span className={styles.accent}>handle real clients</span>
          </h2>
          <p className={styles.subtitle}>
            Select an industry below and watch an actual client conversation play out in real time.
          </p>
        </div>

        {/* Industry tabs */}
        <div className={styles.tabs}>
          {INDUSTRIES.map(ind => (
            <button
              key={ind.key}
              className={`${styles.tab} ${activeKey === ind.key ? styles.tabActive : ''}`}
              onClick={() => setActiveKey(ind.key)}
            >
              <span className={styles.tabIcon}>{ind.icon}</span>
              {ind.label}
            </button>
          ))}
        </div>

        <div className={styles.demoGrid}>
          {/* Left copy */}
          <div className={styles.demoCopy}>
            <h3 className={styles.copyTitle}>{flow.copyTitle}</h3>
            <p className={styles.copyDesc}>{flow.copyDesc}</p>

            <ul className={styles.featureList}>
              {COPY_FEATURES[activeKey].map((f, i) => (
                <li key={i} className={styles.featureItem}>
                  <span className={styles.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className={styles.copyActions}>
              <Link href="/contact" className={styles.ctaBtn}>
                Get this for my business
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/products/client-chatbot#demo-form" className={styles.ghostBtn}>
                Request a live demo
              </Link>
            </div>
          </div>

          {/* Phone mockup */}
          <div className={styles.phoneWrap}>
            <div className={styles.phone}>
              {/* Pill notch */}
              <div className={styles.phonePill}>
                <div className={styles.pillInner} />
              </div>

              {/* Chat header */}
              <div className={styles.chatHeader}>
                <div className={styles.chatAvatar}>{flow.botName[0]}</div>
                <div className={styles.chatHeaderText}>
                  <div className={styles.chatBotName}>{flow.botName}</div>
                  <div className={styles.chatBotStatus}>● Online · {flow.business}</div>
                </div>
              </div>

              {/* Messages */}
              <div className={styles.chatBody} ref={chatRef}>
                {messages.map(msg => (
                  <div key={msg.id} className={`${styles.msgRow} ${styles[msg.type]}`}>
                    {msg.type === 'bot' && (
                      <div className={styles.msgAvatar}>{flow.botName[0]}</div>
                    )}
                    <div className={styles.bubble}>{msg.text}</div>
                  </div>
                ))}

                {/* Suggestion chips (between last bot message and next user message) */}
                {chips.length > 0 && (
                  <div className={styles.suggestionsRow}>
                    {chips.map(c => (
                      <span
                        key={c}
                        className={`${styles.chip} ${selectedChip === c ? styles.chipSelected : ''}`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}

                {/* Typing indicator */}
                {typing && (
                  <div className={styles.typingRow}>
                    <div className={styles.msgAvatar}>{flow.botName[0]}</div>
                    <div className={styles.typingBubble}>
                      <span className={styles.dot} /><span className={styles.dot} /><span className={styles.dot} />
                    </div>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div className={styles.chatInputBar}>
                <input className={styles.chatInput} placeholder="Type a message…" readOnly />
                <div className={styles.sendBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Restart */}
            <button className={styles.restartBtn} onClick={() => runFlow(activeKey)}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 .49-4"/></svg>
              Replay conversation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
