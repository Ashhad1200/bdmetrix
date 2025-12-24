# Implementation Plan: Contact & Lead Form API Integration

**Branch**: `001-contact-lead-api` | **Date**: 2025-12-16 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-contact-lead-api/spec.md`
**User Plan Context**: "make the form if not already there, fix routing for Vercel deployment, follow existing theme"

## Summary

Implement a functional contact form submission system with Node.js API routes using Next.js API Routes (compatible with Vercel serverless functions). Store submissions in a SQLite database file that can be backed up and restored. The implementation will integrate seamlessly with the existing Bd Matrix theme components and respect the current Vercel routing configuration that serves the Next.js frontend from the `frontendv2` directory.

**Key Technical Approach**:
- Use Next.js 13 API Routes (`pages/api/*`) for serverless backend functionality on Vercel
- SQLite database with `better-sqlite3` for synchronous, serverless-compatible database operations
- React form state management with validation using existing form component
- Follow existing theme patterns for success/error messages and loading states
- Vercel-compatible file system database storage in `/tmp` with backup/restore capability

## Technical Context

**Language/Version**: JavaScript (Node.js 18+), React 18.2.0, Next.js 13.3.0
**Primary Dependencies**:
  - `better-sqlite3` (^9.2.2) - SQLite database, serverless-compatible
  - `validator` (^13.11.0) - Email and input validation
  - `sanitize-html` (^2.11.0) - XSS prevention
  - Existing: React 18.2.0, Next.js 13.3.0, Bootstrap 5.2.3, SASS 1.62.0

**Storage**: SQLite database file
  - Development: `data/contacts.db` (persistent local file)
  - Production (Vercel): `/tmp/contacts.db` (ephemeral) with export/import via API endpoints
  - Backup strategy: Admin endpoint to download/upload `.db` file

**Testing**: Jest + React Testing Library (unit tests), Playwright (integration/E2E tests)
**Target Platform**: Vercel Serverless Functions (Node.js 18.x runtime)
**Project Type**: Web application (Next.js frontend + API routes)
**Performance Goals**:
  - Form submission API response <500ms (p95)
  - Database queries <100ms for up to 10k records
  - Form validation feedback <100ms (client-side)
  - Total form submission flow <2 seconds

**Constraints**:
  - Vercel serverless functions: 10-second timeout, 50MB deployment size limit
  - SQLite file must be portable (single .db file)
  - No persistent filesystem on Vercel (use /tmp with backup/restore mechanism)
  - Must work with existing Vercel routing: all traffic → frontendv2 directory
  - Must maintain existing theme styles and UX patterns

**Scale/Scope**:
  - Expected: 100-1000 form submissions per month
  - Support: Up to 10,000 stored submissions before archival needed
  - Concurrent users: 100 simultaneous form submissions

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Verify compliance with BDMatrix Landing Site Constitution (v1.0.0):

- [x] **Code Quality**: Follows ESLint/Prettier, single-purpose functions, no dead code
- [x] **Testing**: TDD approach, 80%+ coverage for business logic, tests before implementation
- [x] **UX Consistency**: Follows design system, visual feedback, user-friendly errors
- [x] **Performance**: Lighthouse ≥90, FCP <1.5s, TTI <3s, budgets met (JS ≤200KB, CSS ≤50KB)
  - *Note*: API routes add minimal JS bundle impact (<10KB for form handler)
- [x] **Responsive**: Mobile-first, works 320px+, touch targets 44×44px, no horizontal scroll
  - *Note*: Using existing responsive contact form component
- [x] **Accessibility**: Keyboard accessible, WCAG 2.1 AA contrast, semantic HTML, proper ARIA
  - *Note*: Existing form component will be enhanced with proper labels and ARIA attributes
- [x] **Documentation**: JSDoc for public APIs, README current, ADRs for significant decisions

**Gate Status**: ✅ PASSED - All constitutional requirements can be met with this design

## Project Structure

### Documentation (this feature)

```text
specs/001-contact-lead-api/
├── plan.md              # This file (/sp.plan command output)
├── spec.md              # Feature specification
├── research.md          # Phase 0 output (technology decisions)
├── data-model.md        # Phase 1 output (database schema)
├── quickstart.md        # Phase 1 output (setup instructions)
├── contracts/           # Phase 1 output (API contracts)
│   └── api.yaml         # OpenAPI spec for contact form APIs
├── checklists/          # Quality checklists
│   └── requirements.md  # Specification quality checklist
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

**Current Structure** (Next.js web application):
```text
frontendv2/                      # Next.js application root
├── src/
│   ├── pages/
│   │   ├── api/                 # ⚠️ NEW: Next.js API routes (serverless functions)
│   │   │   ├── contact/
│   │   │   │   ├── submit.js    # POST /api/contact/submit - Submit form
│   │   │   │   └── list.js      # GET /api/contact/list - List submissions (admin)
│   │   │   └── db/
│   │   │       ├── export.js    # GET /api/db/export - Download database file
│   │   │       └── import.js    # POST /api/db/import - Upload database file
│   │   ├── contact.jsx          # Contact page (existing)
│   │   └── ...
│   ├── components/
│   │   └── contact/
│   │       └── contact-area.jsx # Contact section (existing)
│   ├── forms/
│   │   └── contact-form.jsx     # ⚠️ MODIFY: Add API integration & validation
│   ├── lib/                     # ⚠️ NEW: Shared utilities
│   │   ├── db.js                # Database connection & initialization
│   │   ├── validation.js        # Input validation utilities
│   │   └── sanitization.js      # Input sanitization utilities
│   └── styles/
│       └── ... (existing theme styles)
├── data/                        # ⚠️ NEW: Database storage (development)
│   └── contacts.db              # SQLite database file
├── public/
│   └── ... (existing assets)
└── package.json                 # ⚠️ MODIFY: Add new dependencies

vercel.json                      # Existing Vercel config (no changes needed)
```

**Structure Decision**: Using **Next.js API Routes** (pages/api/*) pattern since:
1. Already using Next.js 13 with pages router
2. Vercel automatically deploys API routes as serverless functions
3. No need for separate Express.js server or backend directory
4. Seamless integration with existing Vercel routing configuration
5. Unified codebase with frontend and backend in `frontendv2` directory

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

*No violations - constitutional compliance achieved through careful design choices.*

## Architectural Decisions

### ADR-001: Next.js API Routes vs Separate Express Backend

**Decision**: Use Next.js API Routes (pages/api/*)

**Rationale**:
- Already using Next.js 13 with pages router
- Vercel automatically deploys API routes as serverless functions (zero config)
- Unified codebase (frontend + backend in one repo)
- Simpler deployment (single Vercel project)
- Lower operational complexity (no separate backend server)

**Alternatives Considered**:
- Separate Express.js backend: Requires additional Vercel project, more complex routing, separate deployment pipeline
- Next.js App Router API routes (route.js): Requires migration from pages router (breaking change for existing app)

### ADR-002: SQLite with better-sqlite3 vs sql.js

**Decision**: Use `better-sqlite3` library for SQLite

**Rationale**:
- Synchronous API (simpler error handling, better for serverless)
- Native Node.js bindings (faster than WebAssembly)
- Vercel supports native modules in serverless functions
- Better performance for small-medium datasets (<10k records)
- Widely used and well-maintained

**Alternatives Considered**:
- `sql.js`: WebAssembly-based, works in browser but slower for server-side
- `sqlite3` (async): Callback-based API, more complex error handling in serverless context

### ADR-003: Database Storage Strategy for Vercel

**Decision**: Use /tmp directory with backup/restore API endpoints

**Rationale**:
- Vercel serverless functions have ephemeral filesystem (clears between deployments)
- `/tmp` directory persists for the lifetime of a single function invocation
- Provide export/import API endpoints for manual backup/restore
- SQLite file is portable (single .db file, easy to download/upload)
- Acceptable for low-traffic landing pages (100-1000 submissions/month)

**Trade-offs**:
- **Con**: Database can be lost on redeployment without manual backup
- **Con**: Not suitable for high-traffic applications
- **Pro**: Zero-config, no external database service required
- **Pro**: Free (no database hosting costs)
- **Pro**: Simple disaster recovery (download .db file)

**Alternatives Considered**:
- PostgreSQL on Vercel Postgres: Overkill for simple contact form, adds cost
- MongoDB Atlas: External dependency, adds complexity
- Prisma + Planetscale: Over-engineered for use case

**Future Migration Path**: If traffic grows >1000 submissions/month, migrate to Vercel Postgres or Supabase with minimal code changes (swap db.js module).

### ADR-004: Input Validation Strategy

**Decision**: Client-side + server-side validation with `validator` library

**Rationale**:
- Client-side validation: Immediate user feedback, better UX
- Server-side validation: Security enforcement, prevent bypass
- `validator` library: Lightweight (8KB), comprehensive validation functions
- Never trust client-side validation alone (security)

**Alternatives Considered**:
- `joi`: Heavier (200KB), overkill for simple form
- `zod`: TypeScript-focused, unnecessary for JavaScript codebase
- Custom regex: Error-prone, reinventing the wheel

## Risks & Mitigation

### Risk 1: Database Loss on Vercel Redeployment

**Probability**: High (every deployment clears /tmp)
**Impact**: High (lose all contact submissions)
**Mitigation**:
1. Provide clear documentation in quickstart.md: "Export database before redeploying"
2. Implement export API endpoint with single-click download
3. Add Vercel deployment hook to notify admin: "Backup database before deploy"
4. Future: Automate backup to Vercel Blob Storage on each submission

### Risk 2: Concurrent Writes to SQLite (Race Conditions)

**Probability**: Low (small traffic volume, serverless function isolation)
**Impact**: Medium (potential data corruption or lost submission)
**Mitigation**:
1. SQLite WAL mode enabled (Write-Ahead Logging) for better concurrency
2. `better-sqlite3` handles locking automatically
3. Short transactions (INSERT only, no complex queries)
4. If traffic grows, migrate to client-server database (Postgres)

### Risk 3: Cold Start Latency on Vercel

**Probability**: Medium (serverless functions have cold starts)
**Impact**: Low (first request may take 1-2 seconds longer)
**Mitigation**:
1. Keep dependencies minimal (only essential libraries)
2. Lazy-load database connection (connect on first request)
3. Acceptable UX trade-off for zero-cost hosting
4. Future: Use Vercel Edge Functions if cold starts become problematic

### Risk 4: XSS Attack via Form Submission

**Probability**: Medium (user-generated content)
**Impact**: High (malicious scripts in admin panel)
**Mitigation**:
1. Sanitize all inputs with `sanitize-html` before storing
2. Escape output when displaying in admin panel (React handles by default)
3. Content Security Policy headers in Next.js config
4. Regular security audits of sanitization logic
