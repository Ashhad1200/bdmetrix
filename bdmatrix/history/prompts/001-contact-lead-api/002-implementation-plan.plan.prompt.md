---
id: 002
title: Implementation Plan
stage: plan
date: 2025-12-16
surface: agent
model: claude-sonnet-4-5
feature: 001-contact-lead-api
branch: 001-contact-lead-api
user: ashhad
command: /sp.plan
labels: ["architecture", "api-design", "database", "vercel", "nextjs", "sqlite"]
links:
  spec: /Users/ashhad/Dev/soft/bdmatrix landing site/specs/001-contact-lead-api/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-contact-lead-api/plan.md
  - specs/001-contact-lead-api/research.md
  - specs/001-contact-lead-api/data-model.md
  - specs/001-contact-lead-api/contracts/api.yaml
  - specs/001-contact-lead-api/quickstart.md
tests:
  - none
---

## Prompt

/sp.plan so the plan is to make the from if not alrady there make the routing fixed according to the vercel after deployed and also follow the theme that we are on

## Response snapshot

Created comprehensive implementation plan for Contact & Lead Form API Integration with architecture decisions tailored to Vercel deployment and existing Technix theme:

**Technical Approach:**
- Next.js 13 API Routes (pages/api/*) for serverless functions on Vercel
- SQLite with better-sqlite3 for database (portable .db file)
- Development: Local persistent file, Production: /tmp with backup/restore
- Existing Vercel routing configuration works without changes
- Theme integration: Bootstrap 5.2.3 styles, existing form component patterns

**Key Architectural Decisions (4 ADRs documented):**

1. **ADR-001: Next.js API Routes vs Separate Express Backend**
   - Decision: Use Next.js API Routes
   - Rationale: Zero-config Vercel deployment, unified codebase, simpler routing

2. **ADR-002: SQLite with better-sqlite3 vs sql.js**
   - Decision: better-sqlite3
   - Rationale: Synchronous API, native performance, Vercel supports native modules

3. **ADR-003: Database Storage Strategy for Vercel**
   - Decision: /tmp directory with backup/restore API endpoints
   - Rationale: Zero-cost, zero-config for MVP, acceptable for low traffic
   - Trade-off: Database lost on redeploy without backup (documented in quickstart)

4. **ADR-004: Input Validation Strategy**
   - Decision: Client + server validation with validator library
   - Rationale: UX feedback (client), security enforcement (server)

**Research Completed (8 topics):**
- R001: Next.js 13.3.0 + Vercel serverless compatibility (✅ works)
- R002: SQLite libraries (better-sqlite3 chosen for sync API)
- R003: Vercel filesystem (/tmp ephemeral, requires backup strategy)
- R004: Backup/restore patterns (export/import API endpoints for MVP)
- R005: Validation library (validator.js - lightweight 8KB)
- R006: Sanitization library (sanitize-html for XSS prevention)
- R007: API error format (custom simple format for forms)
- R008: Rate limiting (client-side + IP logging for MVP)

**Data Model:**
- Single table: contact_submissions (8 fields)
- SQLite schema with CHECK constraints (length limits)
- Index on submitted_at DESC for chronological queries
- Auto-initialization on first API request

**API Contracts (OpenAPI 3.0):**
- POST /api/contact/submit - Submit form (200/400/500 responses)
- GET /api/contact/list - List submissions with pagination
- GET /api/db/export - Download database backup
- POST /api/db/import - Restore database from file

**Project Structure:**
- frontendv2/src/pages/api/ - NEW API routes (4 endpoints)
- frontendv2/src/lib/ - NEW utilities (db.js, validation.js, sanitization.js)
- frontendv2/src/forms/contact-form.jsx - MODIFY with API integration
- frontendv2/data/ - NEW database storage (dev only)

**Quickstart Guide Created:**
- Installation steps (npm install dependencies)
- Environment variables (.env.local)
- Database initialization (auto on first request)
- Local testing (dev server + curl examples)
- Vercel deployment (vercel CLI commands)
- Backup/restore procedures (critical for production)

**Constitutional Compliance:**
✅ All gates passed
- Code Quality: ESLint/Prettier, single-purpose functions
- Testing: TDD approach, 80%+ coverage planned
- UX: Theme integration, loading states, error messages
- Performance: <10KB bundle impact, Lighthouse ≥90 maintained
- Responsive: Existing mobile-first component
- Accessibility: Enhanced with labels, ARIA, keyboard support

**Risks Identified & Mitigated:**
1. Database loss on redeploy (HIGH) - Export API + documentation
2. Concurrent writes (LOW) - SQLite WAL mode + low traffic
3. Cold start latency (MEDIUM) - Minimal dependencies, lazy load DB
4. XSS attacks (MEDIUM) - sanitize-html + React escaping + CSP headers

## Outcome

- ✅ Impact: Complete implementation plan with architecture decisions, ready for task generation
- 🧪 Tests: Test strategy documented (Jest unit tests, Playwright E2E, manual checklist)
- 📁 Files: 5 planning documents created (plan.md, research.md, data-model.md, api.yaml, quickstart.md)
- 🔁 Next prompts: /sp.tasks (generate task list with TDD approach), /sp.adr (optional - document ADRs formally)
- 🧠 Reflection: Plan addresses user's requirements (Vercel deployment, theme integration) with pragmatic technology choices. SQLite in /tmp is acceptable trade-off for MVP (simple, free) with clear migration path to managed database if traffic grows. All constitutional requirements verified in final gate check.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Constitution Check - PASS (all gates satisfied)
- Prompt variant (if applicable): N/A (initial plan)
- Next experiment (smallest change to try): Monitor whether /sp.tasks phase questions the backup/restore strategy or requests automated backup solution
