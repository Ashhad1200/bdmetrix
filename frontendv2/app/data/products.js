export const products = [
  {
    id: 'pos-system',
    name: 'BD Matrix POS',
    tagline: 'All-in-one point of sale for retail and restaurants',
    category: 'Point of Sale',
    industry: 'Retail',
    industryTag: 'Retail',
    color: '#1F6FFF',
    description:
      'A modern, tax-compliant POS system built for restaurants and retail businesses. Manage sales, inventory, and customer loyalty across multiple locations from a single dashboard.',
    heroImage:
      'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1400&q=80',
    valueProps: [
      'Tax-compliant invoicing and financial reporting out of the box',
      'Manage all locations from one unified dashboard',
      'Real-time inventory tracking and sales analytics',
    ],
    features: [
      {
        title: 'Tax-Compliant Billing',
        description:
          'Generate accurate tax invoices automatically, with built-in tax calculation and submission-ready financial reports for your jurisdiction.',
        problem: 'Manual tax filing takes hours and risks costly errors',
        icon: 'receipt',
      },
      {
        title: 'Multi-Location Management',
        description:
          'Manage all your outlets from a single dashboard. Compare performance, transfer stock, and control staff access per location.',
        problem: 'Operating multiple branches creates data silos and blind spots',
        icon: 'map',
      },
      {
        title: 'Real-Time Inventory Tracking',
        description:
          'Automatic stock deductions per sale, low-stock alerts, and purchase order generation keep your shelves optimized.',
        problem: 'Manual stock counts lead to stockouts and costly overordering',
        icon: 'box',
      },
      {
        title: 'Fast Checkout Experience',
        description:
          'Barcode scanning, split-payment support, and offline mode ensure your staff can serve customers without delays.',
        problem: 'Slow systems frustrate customers and lose sales at peak hours',
        icon: 'zap',
      },
      {
        title: 'Customer Loyalty Programs',
        description:
          'Built-in loyalty points, discount campaigns, and customer purchase history keep your regulars coming back.',
        problem: 'No systematic way to reward repeat customers',
        icon: 'star',
      },
      {
        title: 'Sales Analytics & Reports',
        description:
          'Daily, weekly, and monthly sales reports with best-sellers, peak hours, and staff performance breakdowns.',
        problem: 'Business decisions made on gut feeling instead of data',
        icon: 'chart',
      },
      {
        title: 'Flexible Payment Modes',
        description:
          'Accept cash, card, and mobile payments. Track all payment modes separately for clean end-of-day reconciliation.',
        problem: 'Mixed payment modes cause daily cash discrepancies',
        icon: 'credit-card',
      },
      {
        title: 'Role-Based Access Control',
        description:
          'Define what each staff member can see and do — cashiers, managers, and owners all get tailored access.',
        problem: 'Shared logins eliminate accountability and invite misuse',
        icon: 'shield',
      },
    ],
    personas: [
      {
        title: 'Restaurant Owners',
        description:
          'Manage dine-in, takeaway, and delivery orders with kitchen display integration and per-table billing.',
      },
      {
        title: 'Retail Chain Managers',
        description:
          'Centralize inventory and sales reporting across all branches with live dashboards and branch comparison.',
      },
      {
        title: 'Single-Location Shops',
        description:
          'A complete POS solution with no IT overhead — up and running in under a day.',
      },
      {
        title: 'Food Courts & Kiosks',
        description:
          'Lightweight, fast-billing interface optimized for high-volume, quick-service environments.',
      },
    ],
    pricing: {
      type: 'contact',
      message:
        'Pricing is tailored to your number of locations, terminals, and required features. Contact us for a quote.',
    },
  },

  {
    id: 'medical-pos',
    name: 'Medical POS',
    tagline: 'Healthcare billing and pharmacy management in one system',
    category: 'Healthcare',
    industry: 'Healthcare',
    industryTag: 'Healthcare',
    color: '#0EA5E9',
    description:
      'A purpose-built POS for clinics, pharmacies, and diagnostic labs. Manage patient records, prescriptions, billing, and inventory from a single, compliance-aware platform.',
    heroImage:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80',
    valueProps: [
      'Patient records linked directly to billing and prescription history',
      'Real-time pharmacy inventory with expiry date tracking',
      'Insurance panel billing with automated deductible calculations',
    ],
    features: [
      {
        title: 'Patient Record Management',
        description:
          'Maintain complete patient profiles with visit history, diagnoses, prescriptions, and billing records — all under one patient ID.',
        problem: 'Scattered paper records make patient history impossible to retrieve quickly',
        icon: 'user',
      },
      {
        title: 'Prescription Billing',
        description:
          'Convert prescriptions into itemized invoices automatically, with drug inventory deducted per dispensed item.',
        problem: 'Manual prescription billing is slow and introduces dosage and billing errors',
        icon: 'receipt',
      },
      {
        title: 'Pharmacy Inventory Tracking',
        description:
          'Real-time stock levels per medicine, expiry date alerts, and automated reorder points prevent stockouts and waste.',
        problem: 'Expired medicines and unexpected stockouts damage patient safety and trust',
        icon: 'box',
      },
      {
        title: 'Insurance & Panel Billing',
        description:
          'Support for insurance panels and corporate accounts with deductible calculations and panel-specific pricing tiers.',
        problem: 'Manual insurance claim calculations are slow, error-prone, and hard to audit',
        icon: 'shield',
      },
      {
        title: 'Multi-Specialty Support',
        description:
          'Configure billing rates per doctor, service type, or department. Supports multi-specialty clinics under one roof.',
        problem: 'A single billing rate does not work for multi-specialty practices',
        icon: 'settings',
      },
      {
        title: 'Lab & Diagnostic Integration',
        description:
          'Raise diagnostic test orders, track sample collection, and link results delivery to the patient record and invoice.',
        problem: 'Lab orders and billing managed in entirely separate systems',
        icon: 'file',
      },
      {
        title: 'Daily Cash & Revenue Reports',
        description:
          'End-of-day cash summaries, payment mode breakdowns, and doctor-wise revenue reports for management oversight.',
        problem: 'Manual cash reconciliation consumes significant staff time each day',
        icon: 'chart',
      },
      {
        title: 'Role-Based Staff Access',
        description:
          'Receptionists, pharmacists, and doctors each see only what their role requires — with full audit trails.',
        problem: 'Sensitive patient data accessible to unauthorized staff members',
        icon: 'lock',
      },
    ],
    personas: [
      {
        title: 'Private Clinics',
        description:
          'Streamline patient flow, doctor scheduling, and billing in a single, connected system.',
      },
      {
        title: 'Pharmacies & Chemists',
        description:
          'Manage medicine inventory, expiry tracking, and customer prescriptions efficiently and accurately.',
      },
      {
        title: 'Diagnostic Labs',
        description:
          'Track test orders, sample collection, result delivery, and lab billing in one integrated place.',
      },
      {
        title: 'Hospital Departments',
        description:
          'Modular setup for OPD, emergency, and pharmacy departments within a larger facility.',
      },
    ],
    pricing: {
      type: 'contact',
      message:
        'Pricing is customized based on clinic size, number of users, and required modules. Contact us for a quote.',
    },
  },

  {
    id: 'school-management',
    name: 'School Management System',
    tagline: 'End-to-end management for modern educational institutions',
    category: 'Education',
    industry: 'Education',
    industryTag: 'Education',
    color: '#8B5CF6',
    description:
      'A comprehensive school management platform covering student enrollment, attendance, academic records, fee collection, and a parent-facing portal — designed for schools, colleges, and tutoring centers.',
    heroImage:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80',
    valueProps: [
      'Full student lifecycle from enrollment to graduation records',
      'Automated fee collection with payment tracking and reminders',
      'Parent portal with real-time attendance and grade visibility',
    ],
    features: [
      {
        title: 'Student Enrollment & Profiles',
        description:
          'Digital enrollment with complete student profiles — personal details, emergency contacts, medical notes, and full academic history.',
        problem: 'Paper-based enrollment creates data loss and slow access in emergencies',
        icon: 'user',
      },
      {
        title: 'Attendance Management',
        description:
          'Mark attendance per class or subject, generate absentee reports, and send automated alerts to parents in real time.',
        problem: 'Manual attendance registers are time-consuming and hard to analyze or audit',
        icon: 'check',
      },
      {
        title: 'Fee Collection & Receipts',
        description:
          'Define fee structures per class or student, collect payments, issue digital receipts, and track outstanding dues automatically.',
        problem: 'Fee collection managed in ledgers with no automated reminders or tracking',
        icon: 'credit-card',
      },
      {
        title: 'Academic Performance Tracking',
        description:
          'Record exam marks, generate report cards, and track student performance trends across the full academic year.',
        problem: 'Grade calculations done manually in spreadsheets with high error rates',
        icon: 'chart',
      },
      {
        title: 'Timetable & Scheduling',
        description:
          'Build class timetables, assign teachers to subjects, and resolve scheduling conflicts using a visual calendar.',
        problem: 'Manual scheduling inevitably creates clashes and last-minute chaos',
        icon: 'calendar',
      },
      {
        title: 'Parent Portal',
        description:
          'A parent-facing web portal for attendance, grades, fee payment status, and school announcements — accessible anytime.',
        problem: 'Parents have no visibility into their child\'s progress between parent-teacher meetings',
        icon: 'globe',
      },
      {
        title: 'Staff & Payroll Management',
        description:
          'Manage teacher profiles, leave requests, and monthly salary processing inside the same system as academic data.',
        problem: 'Staff records kept in separate spreadsheets disconnected from academic operations',
        icon: 'users',
      },
      {
        title: 'Notifications & Communication',
        description:
          'Send announcements, fee reminders, and exam schedules via SMS or WhatsApp to parents and staff instantly.',
        problem: 'Important communications reach families too late or never at all',
        icon: 'bell',
      },
    ],
    personas: [
      {
        title: 'Private Schools',
        description:
          'Manage students, staff, and parents in a unified system with a self-service parent portal.',
      },
      {
        title: 'Colleges & Universities',
        description:
          'Handle enrollment, courses, exam scheduling, and fee management for large and growing student bodies.',
      },
      {
        title: 'Tutoring Centers',
        description:
          'Track student progress, batch scheduling, and fee collection for small-to-medium coaching centers.',
      },
      {
        title: 'Religious & Specialist Institutes',
        description:
          'Adaptable to specialized education structures with custom fee configurations and communication workflows.',
      },
    ],
    pricing: {
      type: 'contact',
      message:
        'Pricing based on number of students, staff seats, and required modules. Contact us for a quote.',
    },
  },

  {
    id: 'real-estate-erp',
    name: 'Real Estate ERP',
    tagline: 'The complete operating system for property businesses',
    category: 'ERP',
    industry: 'Real Estate',
    industryTag: 'Real Estate',
    color: '#F59E0B',
    description:
      'A full-featured real estate ERP covering property inventory, CRM, leasing, finance, maintenance, and client portals. Built for agencies, developers, and property management firms that need everything in one place.',
    heroImage:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80',
    valueProps: [
      'End-to-end property management from listing to signed lease',
      'CRM built in — track leads, deals, and agent commissions automatically',
      'Tenant, owner, and customer self-service portals included',
    ],
    features: [
      {
        title: 'Property & Unit Management',
        description:
          'Maintain a complete inventory of properties and units with availability status, pricing history, floor plans, and location data.',
        problem: 'Property listings managed in spreadsheets with no real-time availability control',
        icon: 'map',
      },
      {
        title: 'CRM — Leads, Deals & Commissions',
        description:
          'Track leads through your sales pipeline, manage contacts, close deals, and automatically calculate and disburse agent commissions.',
        problem: 'Sales teams working without a pipeline miss follow-ups and lose deals',
        icon: 'users',
      },
      {
        title: 'Lease Management',
        description:
          'Create, manage, and renew leases digitally. Track rental payments, due dates, and lease expirations in one consolidated view.',
        problem: 'Paper leases with no payment tracking create recurring cash flow gaps',
        icon: 'file',
      },
      {
        title: 'Finance & Accounting',
        description:
          'Invoices, receipts, approval flows, GL journal entries, withholding tax fields, and period locks — all built in and audit-ready.',
        problem: 'Separate accounting software creates reconciliation complexity every month',
        icon: 'chart',
      },
      {
        title: 'Maintenance & Work Orders',
        description:
          'Tenants submit maintenance requests via the portal. Track work orders, assign vendors, and log resolution times.',
        problem: 'Maintenance requests tracked informally through WhatsApp with no accountability',
        icon: 'settings',
      },
      {
        title: 'Tenant & Owner Portals',
        description:
          'Self-service web portals for tenants (rent statements, maintenance), owners (performance, payouts), and customers.',
        problem: 'Staff spend hours answering routine status questions that portals can handle',
        icon: 'globe',
      },
      {
        title: 'WhatsApp Campaign Management',
        description:
          'Broadcast property listings, follow-up reminders, and announcements to segmented lead lists via WhatsApp Business API.',
        problem: 'Manual one-by-one WhatsApp messages to leads do not scale for growing agencies',
        icon: 'bell',
      },
      {
        title: 'Multi-Branch Analytics',
        description:
          'Branch-aware dashboards and reporting for agencies with multiple offices — compare performance across all locations.',
        problem: 'Head office has no consolidated view of what each branch is actually doing',
        icon: 'map',
      },
    ],
    personas: [
      {
        title: 'Real Estate Agencies',
        description:
          'Manage listings, agents, leads, and commissions across your entire sales operation from a single platform.',
      },
      {
        title: 'Property Developers',
        description:
          'Track project inventory, bookings, payment plans, and customer portals from project launch to handover.',
      },
      {
        title: 'Property Management Firms',
        description:
          'Handle leases, maintenance, tenant portals, and owner reporting at scale with full audit trails.',
      },
      {
        title: 'Investment Firms',
        description:
          'Portfolio-level financial reporting, GL export, and multi-property performance dashboards for investors.',
      },
    ],
    pricing: {
      type: 'contact',
      message:
        'Pricing based on number of users, properties managed, and modules required. Contact us for a quote.',
    },
  },

  {
    id: 'matrix-hr',
    name: 'Matrix HR',
    tagline: 'The connected HR platform for growing businesses worldwide',
    category: 'HR & Payroll',
    industry: 'HR',
    industryTag: 'HR',
    color: '#10B981',
    description:
      'A multi-tenant SaaS HR platform with configurable payroll, recruitment, attendance tracking, performance management, and an AI workforce assistant — built for growing companies worldwide.',
    heroImage:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
    valueProps: [
      'Full payroll engine with configurable tax, statutory contributions, and deductions',
      'End-to-end recruitment pipeline with built-in ATS',
      'AI assistant that answers natural language questions about your workforce',
    ],
    features: [
      {
        title: 'Employee Database (HRIS)',
        description:
          'A single record for every employee — personal details, documents, employment history, and org structure. Accessible on web and mobile.',
        problem: 'Employee data scattered across spreadsheets, email threads, and filing cabinets',
        icon: 'users',
      },
      {
        title: 'Payroll Engine',
        description:
          'Automated salary computation with configurable tax slabs, statutory contributions, and benefit deductions. Generate payslips and bank transfer files for any jurisdiction.',
        problem: 'Manual payroll calculation is slow and prone to compliance errors every month',
        icon: 'credit-card',
      },
      {
        title: 'Leave Management',
        description:
          'Configurable leave policies, online application and approval flows, and leave balance tracking visible to every employee.',
        problem: 'Leave requests managed via WhatsApp with no centralized balance visibility',
        icon: 'calendar',
      },
      {
        title: 'Attendance & Time Tracking',
        description:
          'Record attendance via web, mobile, or biometric integration. Track shifts, overtime, and late arrivals with full audit logs.',
        problem: 'Attendance registers are inaccurate, easy to manipulate, and hard to audit',
        icon: 'check',
      },
      {
        title: 'Recruitment & ATS',
        description:
          'Post jobs, manage applications, schedule interviews, and send offer letters — all within Matrix HR.',
        problem: 'Recruitment tracked in overflowing email inboxes with no pipeline structure',
        icon: 'star',
      },
      {
        title: 'Performance Management',
        description:
          'Set goals, run review cycles, collect 360° feedback, and link performance scores to compensation decisions.',
        problem: 'Annual reviews done on paper with no data to back compensation decisions',
        icon: 'chart',
      },
      {
        title: 'Learning Management (LMS)',
        description:
          'Assign training courses, track completion rates, and issue certificates — integrated directly with employee HR profiles.',
        problem: 'Employee training tracked in separate systems with no compliance visibility',
        icon: 'file',
      },
      {
        title: 'AI — Ask MatrixHR',
        description:
          'Natural language queries about your workforce: "Who has pending leave approvals?" or "Show me overtime hours this month."',
        problem: 'Managers wait days for HR reports when they need answers in seconds',
        icon: 'zap',
      },
    ],
    personas: [
      {
        title: 'Growing SMBs',
        description:
          'Replace spreadsheets with a proper HR system the moment your headcount crosses 20 employees.',
      },
      {
        title: 'Enterprise HR Departments',
        description:
          'A unified platform for 500+ employees with full compliance, audit trails, and role-based access.',
      },
      {
        title: 'Staffing Agencies',
        description:
          'Manage contractor onboarding, payroll processing, and compliance across multiple client accounts.',
      },
      {
        title: 'Multi-Country Operations',
        description:
          'Configurable payroll rules for multiple countries under a single multi-tenant login — adapt to any jurisdiction without a full system change.',
      },
    ],
    pricing: {
      type: 'contact',
      message:
        'Per-employee per-month pricing with volume discounts. Contact us for a tailored quote.',
    },
  },

  {
    id: 'bd-fitness',
    name: 'BD Fitness',
    tagline: 'Offline-first strength and body-weight tracker',
    category: 'Mobile App',
    industry: 'Fitness',
    industryTag: 'Fitness',
    color: '#EF4444',
    description:
      'An offline-first mobile app for tracking strength training and body-weight workouts. Your data lives on your device and syncs to the cloud when connected. No ads, no subscriptions required for core tracking.',
    heroImage:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80',
    valueProps: [
      'Works fully offline — no internet required during workouts',
      'Tracks strength progressions with clear visual charts per exercise',
      'Free core tracking with no ads, ever',
    ],
    features: [
      {
        title: 'Offline-First Design',
        description:
          'Log every workout without an internet connection. Data lives on your device and syncs to the cloud automatically when back online.',
        problem: 'Gym Wi-Fi is unreliable — most tracking apps fail or lag mid-workout',
        icon: 'zap',
      },
      {
        title: 'Workout & Set Logging',
        description:
          'Log sets, reps, and weight for any exercise. Integrated rest timer. Flexible enough to support any training program.',
        problem: 'Generic apps do not accommodate custom training programs or unusual exercises',
        icon: 'check',
      },
      {
        title: 'Strength Progression Charts',
        description:
          'Visual charts for every exercise show your progressive overload trend over time. Know exactly when you are growing or plateauing.',
        problem: 'Tracking strength trends manually in a notebook or spreadsheet is tedious',
        icon: 'chart',
      },
      {
        title: 'Body-Weight Tracking',
        description:
          'Log your bodyweight with optional notes and view the trend alongside your training data for full context.',
        problem: 'Body weight and workout data kept in separate apps with no correlation view',
        icon: 'star',
      },
      {
        title: 'Exercise Library',
        description:
          'Built-in library of strength and body-weight exercises with muscle group tagging. Add custom exercises at any time.',
        problem: 'Searching for exercise names slows down logging when you need to be in the zone',
        icon: 'file',
      },
      {
        title: 'Cross-Device Sync',
        description:
          'When connected, your full workout history syncs across all your devices. Switch phones without losing a single session.',
        problem: 'Switching phones means losing months of hard-earned training data',
        icon: 'globe',
      },
    ],
    personas: [
      {
        title: 'Gym-Goers',
        description:
          'Track every session and every lift, and watch your personal records climb week over week.',
      },
      {
        title: 'Home Workout Athletes',
        description:
          'Log calisthenics and body-weight programs without needing a specialized wearable or expensive subscription.',
      },
      {
        title: 'Personal Trainers',
        description:
          'Monitor client progress between sessions and adjust programs based on real logged data.',
      },
      {
        title: 'Beginners',
        description:
          'A clean, simple logging interface with no overwhelming features to figure out on day one.',
      },
    ],
    pricing: {
      type: 'freemium',
      tiers: [
        {
          name: 'Free',
          price: 'Free forever',
          description: 'Core tracking, no ads, no limits',
          features: [
            'Unlimited Workouts',
            'Exercise Library',
            'Progress Charts',
            'Offline Mode',
            'Basic Sync',
          ],
        },
        {
          name: 'Pro',
          price: 'Coming Soon',
          description: 'Advanced analytics and coaching tools',
          features: [
            'Everything in Free',
            'AI Coaching Suggestions',
            'Advanced Analytics',
            'Priority Cloud Sync',
            'Coach Dashboard',
            'Export Data',
          ],
        },
      ],
    },
  },

  {
    id: 'zipper-erp',
    name: 'Zipper ERP',
    tagline: 'Purpose-built ERP for plastic zipper manufacturers',
    category: 'Manufacturing ERP',
    industry: 'Production',
    industryTag: 'Production',
    color: '#6366F1',
    description:
      'A cloud-based ERP designed for the plastic zipper manufacturing industry. Track production by shift, manage raw material consumption automatically, digitize gate passes with QR scanning, and monitor client ledgers — all in real time from any device.',
    heroImage:
      'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1400&q=80',
    valueProps: [
      'Real-time Daily Progress Report visible on the owner\'s mobile instantly',
      'Raw material consumption calculated automatically from production data',
      'Digital gate passes with QR scanning sync stock and client ledger automatically',
    ],
    features: [
      {
        title: 'Shift-Level Production Tracking',
        description:
          'Log per-shift output by plant, zipper variant, and worker. Electricity usage is validated against expected output per machine. Owner sees the DPR live on mobile.',
        problem: 'Owner only learns today\'s output after physically visiting the factory',
        icon: 'chart',
      },
      {
        title: 'Raw Material Management',
        description:
          'Grain purchases are logged and automatically deducted based on production entries. Low-stock alerts fire before you run out.',
        problem: 'Unexpected raw material stockouts bring production to a complete stop',
        icon: 'box',
      },
      {
        title: 'Digital Gate Pass with QR',
        description:
          'Create printable gate passes with QR codes. When scanned at the client\'s receiving dock, stock is deducted and the client ledger is debited — all in one transaction.',
        problem: 'Paper gate passes are lost in transit and stock records are never updated',
        icon: 'file',
      },
      {
        title: 'Order Management',
        description:
          'Record client orders with a finance approval workflow. Production sees variants and deadlines — pricing is never exposed to production staff.',
        problem: 'Orders communicated via WhatsApp with no central record or approval trail',
        icon: 'check',
      },
      {
        title: 'Client Ledger & Receivables',
        description:
          'Each gate pass auto-debits the client ledger. Payments are manually credited. Overdue balances are flagged in red with a days-overdue counter.',
        problem: 'Outstanding receivables tracked in paper notebooks with no overdue alerts',
        icon: 'credit-card',
      },
      {
        title: 'Expense & Voucher Management',
        description:
          'Every company expense is recorded as a voucher with category, payment mode, and an approval workflow before posting.',
        problem: 'No visibility into company-wide spending until someone tallies it at month-end',
        icon: 'receipt',
      },
      {
        title: 'Electricity Discrepancy Detection',
        description:
          'The system cross-checks electricity consumed against expected usage per machine output and automatically flags anomalies to the owner.',
        problem: 'Electricity theft or machine inefficiency goes undetected for months',
        icon: 'zap',
      },
      {
        title: 'Role-Based Access Control',
        description:
          'Production operators, finance staff, logistics managers, and owners all see exactly what their role requires — nothing more.',
        problem: 'Pricing and financial data inadvertently visible to production and logistics staff',
        icon: 'shield',
      },
    ],
    personas: [
      {
        title: 'Factory Owners',
        description:
          'Monitor the DPR, client ledgers, and financial health from your phone — from anywhere, at any hour.',
      },
      {
        title: 'Production Managers',
        description:
          'Manage shift entries, scrap tracking, and variant output without paper forms or manual tallying.',
      },
      {
        title: 'Finance Teams',
        description:
          'Approve orders, record client payments, manage expense vouchers, and export reports in minutes.',
      },
      {
        title: 'Logistics Managers',
        description:
          'Create digital gate passes, track dispatches in real time, and confirm client deliveries via QR scan.',
      },
    ],
    pricing: {
      type: 'contact',
      message:
        'Priced based on number of plants, user seats, and required modules. Contact us for a quote.',
    },
  },

  {
    id: 'sofax-venue',
    name: 'Sofax Venue',
    tagline: 'Complete venue and event management for hospitality businesses',
    category: 'Venue Management',
    industry: 'Hospitality',
    industryTag: 'Hospitality',
    color: '#EC4899',
    description:
      'A full-stack venue management platform for event halls, wedding venues, and hospitality businesses. Manage bookings, client enquiries, event schedules, catering, invoicing, and staff — all from one system.',
    heroImage:
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80',
    valueProps: [
      'Visual booking calendar with real-time availability across all spaces',
      'End-to-end event management from first enquiry to final invoice',
      'Client self-service portal for proposal review and payment tracking',
    ],
    features: [
      {
        title: 'Booking & Availability Calendar',
        description:
          'Visual calendar showing booked, tentative, and available dates across all halls and event spaces. Double-booking is prevented automatically.',
        problem: 'Paper booking logs result in double-bookings and significant lost revenue',
        icon: 'calendar',
      },
      {
        title: 'Client Enquiry Management',
        description:
          'Capture enquiries from your website, phone, or walk-in. Track follow-up status, conversion probability, and the assigned team member.',
        problem: 'Enquiries get lost without a CRM — leads never become bookings',
        icon: 'users',
      },
      {
        title: 'Event & Package Setup',
        description:
          'Define venue packages with catering, décor, and setup options. Generate professional proposals with itemized pricing for client approval.',
        problem: 'Building custom proposals manually for each event takes hours',
        icon: 'file',
      },
      {
        title: 'Invoicing & Payment Tracking',
        description:
          'Generate invoices with advance deposit requirements. Track deposit and balance payments with automatic due-date reminders.',
        problem: 'Outstanding balances are not noticed until the event date arrives',
        icon: 'credit-card',
      },
      {
        title: 'Catering & Menu Management',
        description:
          'Build menus per event with per-head costing. Menu selections are automatically linked to the event invoice.',
        problem: 'Catering orders communicated verbally result in wrong setups on event day',
        icon: 'box',
      },
      {
        title: 'Staff Scheduling',
        description:
          'Assign staff to events, track shift hours for each event, and manage overtime for event-day teams.',
        problem: 'Staff assignments managed through WhatsApp groups with no accountability',
        icon: 'check',
      },
      {
        title: 'Client Self-Service Portal',
        description:
          'Clients review event proposals, approve packages, view payment status, and download invoices from a branded portal.',
        problem: 'Staff spend hours on calls answering routine client status questions',
        icon: 'globe',
      },
      {
        title: 'Revenue & Occupancy Reports',
        description:
          'Monthly revenue reports, peak season analysis, and venue occupancy rates help owners make data-backed pricing and marketing decisions.',
        problem: 'No data on which months drive the majority of annual revenue',
        icon: 'chart',
      },
    ],
    personas: [
      {
        title: 'Wedding Venues & Halls',
        description:
          'Manage wedding bookings, package selections, catering orders, and payment collection in one place.',
      },
      {
        title: 'Corporate Event Spaces',
        description:
          'Handle corporate bookings, AV setup requests, catering, and post-event invoicing efficiently.',
      },
      {
        title: 'Hotel Banquet Operations',
        description:
          'Integrate venue bookings with hotel operations, room reservations, and food & beverage management.',
      },
      {
        title: 'Community Centers',
        description:
          'Manage multi-hall facilities with different pricing tiers for varied event types and member booking privileges.',
      },
    ],
    pricing: {
      type: 'contact',
      message:
        'Pricing based on number of venues, event spaces, and required integrations. Contact us for a quote.',
    },
  },
  {
    id: 'client-chatbot',
    name: 'BD Matrix ClientBot',
    tagline: 'AI-powered 24/7 client handling for real estate, restaurants, and clinics',
    category: 'AI Chatbot',
    industry: 'AI Chatbot',
    industryTag: 'AI Chatbot',
    color: '#0D9488',
    description:
      'A professionally designed AI chatbot that handles client inquiries, books appointments, qualifies leads, and provides instant answers — 24/7, across your website, WhatsApp, and social channels. Purpose-built for real estate agencies, restaurants, and medical and dental clinics.',
    heroImage:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1400&q=80',
    valueProps: [
      'Answers client questions and books appointments around the clock — no staff required',
      'Industry-specific flows for real estate, restaurants, dental, and doctor clinics',
      'Deploys on your website, WhatsApp, and Instagram in days',
    ],
    features: [
      {
        title: '24/7 Automated Client Engagement',
        description:
          'Respond to every inquiry instantly — day or night, weekends and holidays included. Leads never go cold because no one was available to reply.',
        problem: 'Leads go cold when staff are offline or overwhelmed with manual replies',
        icon: 'zap',
      },
      {
        title: 'Appointment & Booking System',
        description:
          'Patients, restaurant guests, and property viewers book directly through the chat. Slots sync with your calendar and staff receive instant notifications for every confirmed booking.',
        problem: 'Booking calls and manual follow-ups consume hours of front-desk time each day',
        icon: 'calendar',
      },
      {
        title: 'Lead Capture & Qualification',
        description:
          'The chatbot collects contact details, intent, budget, and timeline from every visitor — then scores and routes leads to the right team member automatically.',
        problem: 'Valuable visitor data is lost when there is no structured intake process',
        icon: 'users',
      },
      {
        title: 'Multi-Channel Deployment',
        description:
          'One chatbot, multiple channels: website widget, WhatsApp Business, Instagram DMs, and Facebook Messenger — all managed from a single dashboard with unified conversation history.',
        problem: 'Managing inquiries across multiple platforms creates missed messages and chaos',
        icon: 'globe',
      },
      {
        title: 'Seamless Human Handoff',
        description:
          'When a conversation needs a real person, the bot transfers full context, history, and contact details to the right staff member in seconds. The client never has to repeat themselves.',
        problem: 'Bots that cannot escalate leave clients frustrated and deals lost',
        icon: 'bell',
      },
      {
        title: 'Industry Knowledge Base',
        description:
          'Train the bot on your services, pricing, property listings, menu items, clinic specialties, or treatment FAQs. It answers accurately using your actual business data — not guesswork.',
        problem: 'Generic chatbots give wrong or irrelevant answers that embarrass the business',
        icon: 'file',
      },
      {
        title: 'Analytics & Conversation Reports',
        description:
          'See which questions are asked most, where leads drop off, booking conversion rates, and overall chatbot performance — all in a clear, actionable dashboard.',
        problem: 'No visibility into how potential clients engage before they become customers',
        icon: 'chart',
      },
      {
        title: 'Custom Branding & Personality',
        description:
          'The chatbot carries your brand voice, colors, and name. Clients interact with "Aria from City Dental" — not a generic, off-the-shelf bot. Fully white-labelled for your business.',
        problem: 'Off-the-shelf bots feel robotic and damage the professional trust your brand has built',
        icon: 'star',
      },
    ],
    personas: [
      {
        title: 'Dental & Medical Clinics',
        description:
          'Handle appointment requests, answer treatment FAQs, send reminders, collect patient intake information, and manage follow-ups — all before the receptionist arrives in the morning.',
      },
      {
        title: 'Doctor Practices',
        description:
          'Triage patient questions, book follow-up consultations, collect pre-visit information, and reduce no-shows with automated reminders and confirmations.',
      },
      {
        title: 'Real Estate Agencies',
        description:
          'Answer property inquiries, qualify buyer and renter budgets, schedule viewings, and notify agents instantly — directly from any listing page or portal.',
      },
      {
        title: 'Restaurants & Cafes',
        description:
          'Take reservations, share menus and daily specials, answer allergen and dietary questions, handle delivery queries, and collect guest feedback automatically.',
      },
    ],
    pricing: {
      type: 'contact',
      message:
        'Pricing is based on your monthly conversation volume, number of channels, and industry configuration. Contact us for a live demo and a custom quote for your business.',
    },
  },
];

export const productIds = products.map((p) => p.id);

export const industries = [
  'All',
  'AI Chatbot',
  'Retail',
  'Healthcare',
  'Education',
  'Real Estate',
  'HR',
  'Fitness',
  'Production',
  'Hospitality',
];
