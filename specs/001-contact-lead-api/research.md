# Research: Contact & Lead Form API Integration

**Date**: 2025-12-16
**Feature**: 001-contact-lead-api
**Purpose**: Technology evaluation and decision rationale

## R001: Next.js 13.3.0 API Routes + Vercel Serverless

**Question**: Can Next.js 13.3.0 API Routes deploy as Vercel serverless functions with Node.js 18 runtime?

**Research Findings**:
- ✅ Next.js 13.3.0 fully supports API Routes in `pages/api/*` directory
- ✅ Vercel automatically detects and deploys API routes as serverless functions
- ✅ Node.js 18.x runtime is default on Vercel (LTS support)
- ✅ Zero configuration needed - works out of the box with existing `vercel.json`
- ✅ Request/Response API uses standard Node.js `req`/`res` objects

**Decision**: Use Next.js API Routes (`pages/api/*`)

**Rationale**: Native integration with existing Next.js app, zero-config Vercel deployment, no additional infrastructure needed.

**References**:
- Next.js API Routes docs: https://nextjs.org/docs/pages/building-your-application/routing/api-routes
- Vercel Node.js runtime: https://vercel.com/docs/functions/runtimes/node-js

---

## R002: SQLite Library - better-sqlite3 vs sql.js

**Question**: Which SQLite library works best in Vercel serverless functions?

**Research Findings**:

**better-sqlite3**:
- ✅ Synchronous API (simpler error handling)
- ✅ Native Node.js bindings (C++ addon)
- ✅ Fast performance (~5x faster than sql.js for small datasets)
- ✅ Vercel supports native modules in serverless functions
- ✅ Automatic WAL mode support for concurrency
- ⚠️ Requires native compilation (handled by Vercel build process)
- Size: ~1.5MB (server-side only, not in client bundle)

**sql.js**:
- ✅ Pure JavaScript (WebAssembly)
- ✅ Works in browser and Node.js
- ⚠️ Slower than native bindings
- ⚠️ Async API (more complex in serverless)
- Size: ~1.8MB

**Decision**: Use `better-sqlite3` (v9.2.2)

**Rationale**: Synchronous API is simpler for serverless functions, native performance is superior, Vercel build system handles native modules automatically.

**References**:
- better-sqlite3: https://github.com/WiseLibs/better-sqlite3
- Vercel native modules: https://vercel.com/docs/functions/runtimes/node-js#native-node.js-modules

---

## R003: Vercel Filesystem & /tmp Directory

**Question**: How does Vercel handle file storage in serverless functions?

**Research Findings**:
- ⚠️ Vercel serverless functions have **ephemeral filesystem**
- ⚠️ Files written during deployment are read-only at runtime
- ✅ `/tmp` directory is writable (up to 512MB)
- ⚠️ `/tmp` contents cleared between function invocations (cold starts)
- ⚠️ `/tmp` contents **lost on redeployment**
- ✅ Acceptable for temporary file operations
- ✅ Can use Vercel Blob Storage for persistent files (requires SDK)

**Decision**: Use `/tmp/contacts.db` with backup/restore API endpoints

**Rationale**:
- Simple zero-config solution for low-traffic MVP
- SQLite file is portable (single .db file)
- Manual backup acceptable for 100-1000 submissions/month
- Future migration path to Vercel Blob Storage or external database if needed

**Trade-offs**:
- **Con**: Database lost on redeployment without backup
- **Pro**: Zero cost, zero configuration
- **Pro**: Fast local file access (no network latency)

**References**:
- Vercel serverless functions filesystem: https://vercel.com/docs/functions/runtimes/node-js#filesystem
- Vercel Blob Storage (future): https://vercel.com/docs/storage/vercel-blob

---

## R004: Database Backup/Restore Patterns

**Question**: How to implement backup/restore for SQLite in serverless environment?

**Research Findings**:

**Approach 1: Export/Import API Endpoints**:
- ✅ GET `/api/db/export` - Download .db file as binary response
- ✅ POST `/api/db/import` - Upload .db file via FormData
- ✅ Simple implementation (read/write file, send as response)
- ⚠️ Manual process (admin must remember to backup)

**Approach 2: Automated Backup to Vercel Blob**:
- ✅ Automatic backup on each submission
- ✅ Persistent storage (survives redeployments)
- ⚠️ Requires Vercel Blob SDK (additional dependency)
- ⚠️ Adds cost (Blob storage pricing)
- ⚠️ More complex implementation

**Approach 3: Backup to External Service (S3, Dropbox)**:
- ✅ Automated backups possible
- ⚠️ External dependency (API keys, auth)
- ⚠️ Additional complexity

**Decision**: Implement Approach 1 (Export/Import API) for MVP

**Rationale**: Simplest solution, zero cost, acceptable for low-traffic use case. Future: Add Approach 2 (Vercel Blob) if traffic increases.

**Implementation**:
```javascript
// GET /api/db/export
export default function handler(req, res) {
  const dbPath = '/tmp/contacts.db';
  const dbFile = fs.readFileSync(dbPath);
  res.setHeader('Content-Type', 'application/x-sqlite3');
  res.setHeader('Content-Disposition', 'attachment; filename="contacts.db"');
  res.send(dbFile);
}

// POST /api/db/import
export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  const [fields, files] = await form.parse(req);
  const uploadedFile = files.file[0];
  fs.copyFileSync(uploadedFile.filepath, '/tmp/contacts.db');
  // Validate database integrity...
  res.json({ success: true, records_count: ... });
}
```

---

## R005: Input Validation Library

**Question**: Which validation library is best for form input validation?

**Research Findings**:

**validator** (v13.11.0):
- ✅ Lightweight (8KB minified)
- ✅ Comprehensive validators (email, length, alphanumeric, etc.)
- ✅ Simple function-based API
- ✅ Works in browser and Node.js
- ✅ No dependencies
- Example: `validator.isEmail(email)`, `validator.isLength(name, { min: 1, max: 100 })`

**joi** (v17):
- ⚠️ Heavy (200KB minified)
- ✅ Schema-based validation
- ✅ Complex validation rules
- ⚠️ Overkill for simple form

**zod** (v3):
- ⚠️ TypeScript-focused (unnecessary for JS project)
- ✅ Schema-based validation
- ⚠️ 12KB minified (larger than validator)

**Decision**: Use `validator` (v13.11.0)

**Rationale**: Lightweight, simple API, sufficient for basic form validation needs. No need for schema-based validation for 5 form fields.

**Usage Pattern**:
```javascript
// src/lib/validation.js
import validator from 'validator';

export function validateContactForm(data) {
  const errors = {};

  if (!validator.isLength(data.name, { min: 1, max: 100 })) {
    errors.name = 'Name must be 1-100 characters';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // ... more validation

  return { isValid: Object.keys(errors).length === 0, errors };
}
```

**References**:
- validator.js: https://github.com/validatorjs/validator.js

---

## R006: HTML Sanitization Library

**Question**: How to prevent XSS attacks in user-submitted content?

**Research Findings**:

**sanitize-html** (v2.11.0):
- ✅ Comprehensive HTML sanitization
- ✅ Configurable whitelist/blacklist
- ✅ Removes dangerous tags and attributes
- ✅ 45KB minified (server-side only)
- ✅ Well-maintained, widely used

**DOMPurify**:
- ✅ Popular in browser environments
- ⚠️ Requires jsdom for Node.js (adds 3MB dependency)
- ⚠️ More complex setup for server-side

**Custom Regex**:
- ❌ Error-prone
- ❌ Easily bypassed
- ❌ Reinventing the wheel

**Decision**: Use `sanitize-html` (v2.11.0)

**Rationale**: Purpose-built for server-side Node.js, lightweight, secure, configurable.

**Configuration**:
```javascript
// src/lib/sanitization.js
import sanitizeHtml from 'sanitize-html';

export function sanitizeInput(dirty) {
  return sanitizeHtml(dirty, {
    allowedTags: [], // Strip all HTML tags
    allowedAttributes: {},
    disallowedTagsMode: 'discard'
  });
}
```

**Defense-in-Depth**:
1. Sanitize on server-side before storing (remove HTML tags)
2. React escapes by default when rendering (prevents XSS)
3. Content-Security-Policy headers (additional protection)

**References**:
- sanitize-html: https://github.com/apostrophecms/sanitize-html

---

## R007: API Error Response Format

**Question**: What format should API error responses use?

**Research Findings**:

**RFC 7807 Problem Details**:
- ✅ Standardized format
- ✅ Machine-readable
- ⚠️ Verbose for simple forms
- Example: `{ "type": "...", "title": "...", "status": 400, "detail": "...", "instance": "..." }`

**Custom Format (Simple)**:
- ✅ Concise
- ✅ Easy to parse on client
- ✅ Sufficient for simple forms
- Example: `{ "success": false, "errors": { "email": "Invalid email" } }`

**Decision**: Use custom simple format

**Rationale**: Contact form errors are simple field-level validation. RFC 7807 adds unnecessary complexity.

**Error Response Schema**:
```javascript
// Success
{ success: true, message: "Thank you! Your message has been sent successfully" }

// Validation Error (400)
{ success: false, errors: { email: "Please enter a valid email address", name: "Name is required" } }

// Server Error (500)
{ success: false, message: "Unable to send message. Please try again later." }
```

**Consistency**: Use same format across all API endpoints (submit, list, export, import).

---

## R008: Rate Limiting Strategy

**Question**: How to prevent form spam and abuse?

**Research Findings**:

**Vercel Rate Limiting (Enterprise)**:
- ✅ Built-in Vercel feature
- ❌ Enterprise plan only ($$$)
- Not applicable for MVP

**Custom Rate Limiting (IP-based)**:
- ✅ Track requests per IP in SQLite
- ✅ Simple to implement
- ⚠️ Can be bypassed with proxies
- ⚠️ Requires state management (not ideal for stateless functions)

**Client-Side Rate Limiting**:
- ✅ Disable submit button after click
- ✅ Debounce submit handler
- ⚠️ Can be bypassed (client-side only)

**CAPTCHA (Google reCAPTCHA, hCaptcha)**:
- ✅ Effective spam prevention
- ⚠️ Additional dependency
- ⚠️ Privacy concerns (Google tracks users)
- ⚠️ UX friction (slows form submission)

**Decision**: Client-side rate limiting + IP logging for MVP

**Rationale**:
- MVP: Focus on functional form, spam is low-priority
- Log IP addresses for future spam analysis
- Client-side: Disable button, debounce, prevent double-submit
- Future: Add CAPTCHA if spam becomes problematic

**Implementation**:
```javascript
// Client-side: Disable button during submission
const [isSubmitting, setIsSubmitting] = useState(false);

async function handleSubmit(e) {
  e.preventDefault();
  if (isSubmitting) return; // Prevent double-submit
  setIsSubmitting(true);
  try {
    await fetch('/api/contact/submit', { ... });
  } finally {
    setIsSubmitting(false);
  }
}

// Server-side: Log IP for spam analysis
const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
db.prepare('INSERT INTO contact_submissions (..., ip_address) VALUES (?, ..., ?)').run(..., ip);
```

**Future Enhancement**: If spam detected, add hCaptcha (open source, privacy-focused).

---

## Summary of Technology Stack

**Backend**:
- Next.js 13.3.0 API Routes (serverless functions on Vercel)
- better-sqlite3 v9.2.2 (SQLite database)
- validator v13.11.0 (input validation)
- sanitize-html v2.11.0 (XSS prevention)

**Frontend**:
- React 18.2.0 (existing)
- Next.js 13.3.0 (existing)
- Bootstrap 5.2.3 (existing theme)

**Testing**:
- Jest + React Testing Library (unit/integration tests)
- Playwright (E2E tests)

**Deployment**:
- Vercel (serverless functions, CDN, automatic deployment)

**Database Storage**:
- Development: `data/contacts.db` (persistent local file)
- Production: `/tmp/contacts.db` (ephemeral, backup via API)

---

## Open Questions & Future Research

**Q1**: How to automate database backups before Vercel deployment?
- **Option**: Vercel deployment hooks + Blob Storage
- **Priority**: Medium (can be added post-MVP)

**Q2**: How to handle database migrations (schema changes)?
- **Option**: Alembic-style migrations or manual SQL scripts
- **Priority**: Low (MVP has single table, no migrations needed yet)

**Q3**: How to scale beyond 10k submissions?
- **Option**: Migrate to Vercel Postgres or Supabase
- **Priority**: Low (MVP targets <1k submissions)

**Q4**: How to add admin authentication?
- **Option**: NextAuth.js with password authentication
- **Priority**: Medium (P2 user story, not critical for MVP)

---

**Research Complete**: ✅ All technology decisions documented and justified. Ready for Phase 1 (Design & Contracts).
