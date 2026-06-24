# BD Matrix Products Redesign — Product Spec

> **This is the product contract.** Plans.md is the task ledger. When the two conflict, spec.md wins.

---

## Goal

Redesign and extend the BD Matrix website to present 8 software products for a global/international market. Each product gets a dedicated detail page. A hub page lists all 8 with industry filtering. A reusable demo/contact form captures leads per product.

---

## Products Catalogue

| ID | Name | Industry |
|----|------|----------|
| `pos-system` | BD Matrix POS | Retail |
| `medical-pos` | Medical POS | Healthcare |
| `school-management` | School Management System | Education |
| `real-estate-erp` | Real Estate ERP | Real Estate |
| `matrix-hr` | Matrix HR | HR |
| `bd-fitness` | BD Fitness | Fitness |
| `zipper-erp` | Zipper ERP | Production |
| `sofax-venue` | Sofax Venue | Hospitality |

---

## Data Contract

All product content lives in `app/data/products.js` and is the single source of truth for both the hub page and product detail pages. Each product object includes:

- `id`: URL slug
- `name`: Display name
- `tagline`: One-line value statement
- `category`: Product category label
- `industry`: Broad industry (matches filter options)
- `industryTag`: Short label for filter chip
- `color`: Hex accent color
- `description`: 2–3 sentence overview
- `heroImage`: Unsplash URL
- `valueProps`: Array of 2–3 key value propositions (strings)
- `features`: Array of 6–8 objects `{ title, description, problem, icon }`
- `personas`: Array of 3–4 objects `{ title, description }`
- `pricing`: Object — one of `type: 'tiered'`, `type: 'contact'`, `type: 'saas'`, `type: 'freemium'`

---

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/products` | Client component | Hub page — all 8 products, industry filter |
| `/products/[id]` | Server component + client form | Product detail page |

---

## Products Hub Page

- Hero: pill tag "Our Products", H1 title, subtitle
- Industry filter tabs: All, Retail, Healthcare, Education, Real Estate, HR, Fitness, Production, Hospitality
- Product grid: 4 columns desktop → 2 tablet → 1 mobile
- Each card: industry badge, product name, tagline, 3 key features, "Learn More" CTA link
- GSAP scroll-trigger animations on card grid

---

## Product Detail Page

Sections in order:

1. **Hero**: Back link, industry pill tag, product name, tagline, description, 2–3 value props, two CTAs ("View Features" scroll anchor + "Request Demo" scroll anchor)
2. **Features**: Grid of 6–8 cards — each card shows title, problem statement (muted), solution description, and icon
3. **Who It's For**: 3–4 persona cards with title and description
4. **Pricing**: Renders differently based on `pricing.type` — tiered table / freemium table / contact-sales card
5. **Demo Form**: Embedded `ProductDemoForm` component (no separate page for Phase 1)

---

## ProductDemoForm Component

Path: `app/components/ProductDemoForm/ProductDemoForm.jsx`

Fields:
- `name` (text, required)
- `email` (email, required)
- `company` (text, optional)
- `phone` (tel, required)
- `inquiryType` (select, required): Demo / Pricing / Implementation Details / Custom Solution
- `message` (textarea, optional)

Submission:
- `service_type` = `productName + " — " + inquiryType` (sent to existing API)
- `message` = `Company: ${company}\n\n${userMessage}` (if company provided)
- POSTs to `/api/contact/submit` — redirects to `/thank-you` on success

---

## API Contract

Reuses existing `POST /api/contact/submit`. No new endpoint required.

Mapping:
- `name` → `name`
- `email` → `email`
- `phone` → `phone`
- `service_type` → `"${productName} — ${inquiryType}"`
- `message` → company embedded at top if provided

---

## Design Principles

- Matches existing design system: CSS modules + global classes from `globals.css`
- Colors: `--accent: #1F6FFF`, `--text-primary: #0A1733`, `--bg-secondary: #F5F8FF`
- Each product can use its own `color` accent for industry badge only
- Fonts: Inter (body), Sora (headings) — already loaded in root layout
- No external UI library additions
- Mobile-first: 4 → 2 → 1 column breakpoints at 1024px and 768px

---

## SEO

- `generateMetadata` on `/products/[id]/page.js` — title, description per product
- `/products` listed in `sitemap.js` with `priority: 0.9`
- Each `/products/[id]` listed in `sitemap.js` with `priority: 0.8`
- Header nav updated: "Products" link added between "Services" and "Projects"

---

## Out of Scope (Phase 1)

- Multi-language (i18n) — Phase 3
- Advanced analytics/tracking — Phase 3
- Centralized pricing page — Phase 3
- Case studies / testimonials — Phase 3
- Form backend changes (database persistence) — Phase 2
- Structured data (JSON-LD) — Phase 2
