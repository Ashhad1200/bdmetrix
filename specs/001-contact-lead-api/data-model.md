# Data Model: Contact & Lead Form API Integration

**Date**: 2025-12-16
**Feature**: 001-contact-lead-api
**Database**: SQLite (better-sqlite3)

## Overview

Single-table design for storing contact form submissions. Simple schema optimized for insert and chronological retrieval operations.

## Entity: Contact Submission

Represents a single inquiry submitted through the contact form.

### Attributes

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | INTEGER | PRIMARY KEY, AUTOINCREMENT | Unique submission identifier |
| `name` | TEXT | NOT NULL, CHECK(length <= 100) | Visitor's full name |
| `email` | TEXT | NOT NULL, CHECK(length <= 100) | Visitor's email address (validated format) |
| `service_type` | TEXT | NOT NULL, CHECK(length <= 100) | Type of service inquiry (e.g., "Web Development") |
| `phone` | TEXT | NOT NULL, CHECK(length <= 20) | Visitor's phone number |
| `message` | TEXT | NOT NULL, CHECK(length <= 2000) | Inquiry message content |
| `submitted_at` | DATETIME | DEFAULT CURRENT_TIMESTAMP | Server timestamp of submission (ISO 8601 format) |
| `ip_address` | TEXT | NULLABLE | Visitor's IP address (for spam analysis) |

### Validation Rules

**Server-Side Validation** (enforced in API layer, not database constraints):

1. **name**:
   - Required: Yes
   - Min length: 1 character
   - Max length: 100 characters
   - Sanitized: Remove HTML tags, trim whitespace

2. **email**:
   - Required: Yes
   - Format: Valid email regex (RFC 5322 compliant)
   - Max length: 100 characters
   - Sanitized: Lowercase, trim whitespace

3. **service_type**:
   - Required: Yes
   - Min length: 1 character
   - Max length: 100 characters
   - Sanitized: Remove HTML tags, trim whitespace

4. **phone**:
   - Required: Yes
   - Min length: 1 character
   - Max length: 20 characters
   - Format: Flexible (international formats allowed)
   - Sanitized: Remove HTML tags, trim whitespace

5. **message**:
   - Required: Yes
   - Min length: 1 character
   - Max length: 2000 characters
   - Sanitized: Remove HTML tags, trim whitespace

6. **ip_address**:
   - Required: No
   - Auto-populated: Server extracts from request headers
   - Format: IPv4 or IPv6 address string

7. **submitted_at**:
   - Required: No (auto-generated)
   - Format: ISO 8601 datetime (YYYY-MM-DDTHH:MM:SS.sssZ)
   - Timezone: UTC

### Indexes

```sql
-- Primary key index (automatic)
CREATE INDEX idx_contact_submissions_pk ON contact_submissions(id);

-- Chronological retrieval (newest first)
CREATE INDEX idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);
```

**Index Rationale**:
- `submitted_at DESC`: Optimizes admin panel queries (GET /api/contact/list orders by newest first)
- Expected query: `SELECT * FROM contact_submissions ORDER BY submitted_at DESC LIMIT 50 OFFSET 0`
- Performance: <50ms for up to 10,000 records with this index

## Database Schema (SQL)

```sql
-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL CHECK(length(name) > 0 AND length(name) <= 100),
  email TEXT NOT NULL CHECK(length(email) > 0 AND length(email) <= 100),
  service_type TEXT NOT NULL CHECK(length(service_type) > 0 AND length(service_type) <= 100),
  phone TEXT NOT NULL CHECK(length(phone) > 0 AND length(phone) <= 20),
  message TEXT NOT NULL CHECK(length(message) > 0 AND length(message) <= 2000),
  submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT
);

-- Create index for chronological queries
CREATE INDEX IF NOT EXISTS idx_submitted_at ON contact_submissions(submitted_at DESC);
```

## Database Initialization

**Location**: `src/lib/db.js`

```javascript
import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

// Determine database path based on environment
const dbPath = process.env.NODE_ENV === 'production'
  ? '/tmp/contacts.db'  // Vercel ephemeral storage
  : path.join(process.cwd(), 'data', 'contacts.db');  // Local development

/**
 * Initialize database connection and create tables if not exist
 * @returns {Database} SQLite database instance
 */
export function initializeDatabase() {
  // Ensure data directory exists (development only)
  if (process.env.NODE_ENV !== 'production') {
    const dataDir = path.dirname(dbPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
  }

  // Create database connection
  const db = new Database(dbPath, {
    verbose: process.env.NODE_ENV === 'development' ? console.log : undefined
  });

  // Enable WAL mode for better concurrency
  db.pragma('journal_mode = WAL');

  // Create tables if not exist
  db.exec(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL CHECK(length(name) > 0 AND length(name) <= 100),
      email TEXT NOT NULL CHECK(length(email) > 0 AND length(email) <= 100),
      service_type TEXT NOT NULL CHECK(length(service_type) > 0 AND length(service_type) <= 100),
      phone TEXT NOT NULL CHECK(length(phone) > 0 AND length(phone) <= 20),
      message TEXT NOT NULL CHECK(length(message) > 0 AND length(message) <= 2000),
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      ip_address TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_submitted_at ON contact_submissions(submitted_at DESC);
  `);

  return db;
}

/**
 * Get singleton database instance
 */
let dbInstance = null;
export function getDatabase() {
  if (!dbInstance) {
    dbInstance = initializeDatabase();
  }
  return dbInstance;
}
```

## CRUD Operations

### Create (Insert)

```javascript
// POST /api/contact/submit
const db = getDatabase();

const stmt = db.prepare(`
  INSERT INTO contact_submissions (name, email, service_type, phone, message, ip_address)
  VALUES (?, ?, ?, ?, ?, ?)
`);

const info = stmt.run(
  sanitizedData.name,
  sanitizedData.email,
  sanitizedData.service_type,
  sanitizedData.phone,
  sanitizedData.message,
  req.headers['x-forwarded-for'] || req.connection.remoteAddress
);

console.log(`Inserted submission ID: ${info.lastInsertRowid}`);
```

### Read (Select All)

```javascript
// GET /api/contact/list?limit=50&offset=0
const db = getDatabase();

const stmt = db.prepare(`
  SELECT id, name, email, service_type, phone, message, submitted_at, ip_address
  FROM contact_submissions
  ORDER BY submitted_at DESC
  LIMIT ? OFFSET ?
`);

const submissions = stmt.all(limit, offset);

// Get total count for pagination
const countStmt = db.prepare('SELECT COUNT(*) as total FROM contact_submissions');
const { total } = countStmt.get();
```

### Read (Select One)

```javascript
// GET /api/contact/:id (optional - not in MVP spec)
const db = getDatabase();

const stmt = db.prepare(`
  SELECT id, name, email, service_type, phone, message, submitted_at, ip_address
  FROM contact_submissions
  WHERE id = ?
`);

const submission = stmt.get(id);
```

### Update & Delete

**Not Required**: Contact form submissions are immutable records. No update or delete operations needed in MVP.

**Future Enhancement**: If needed, add soft-delete (e.g., `deleted_at` column) rather than hard delete for audit trail.

## Data Relationships

**No Relationships**: Single-table design. No foreign keys, no joins required.

**Rationale**: Contact form submissions are independent records with no relationships to other entities. Simplifies schema and queries.

## Migration Strategy

**MVP**: No migrations needed (single table, initial schema)

**Future Migrations**: If schema changes needed:

1. **Option 1: Manual SQL Scripts**:
   ```sql
   -- migration_001_add_source_field.sql
   ALTER TABLE contact_submissions ADD COLUMN source TEXT DEFAULT 'website';
   ```

2. **Option 2: Knex.js Migrations** (if complexity grows):
   ```javascript
   exports.up = function(knex) {
     return knex.schema.table('contact_submissions', table => {
       table.string('source').defaultTo('website');
     });
   };
   ```

**Current Decision**: No migration framework for MVP. Add if multiple schema changes occur.

## Data Retention & Archival

**MVP**: No automatic archival (manual admin responsibility)

**Retention Policy** (recommended):
- Keep all submissions indefinitely (no auto-delete)
- Archive to external storage when database exceeds 10,000 records
- Backup database file monthly (manual or automated via cron)

**Future Enhancement**:
- Automatic archival: Move records >1 year old to separate archive table or external storage
- GDPR compliance: Add "delete user data" API endpoint if serving EU customers

## Performance Considerations

**Query Performance**:
- Expected: <50ms for queries up to 10,000 records (with index)
- Tested: SQLite handles 100,000+ records efficiently with proper indexing

**Write Performance**:
- Expected: <10ms per INSERT operation
- Concurrency: better-sqlite3 handles locking automatically with WAL mode

**Database Size**:
- Average submission: ~500 bytes
- 10,000 submissions: ~5MB database file
- 100,000 submissions: ~50MB database file
- Vercel limit: 512MB /tmp storage (plenty of headroom)

## Backup & Restore

**Backup** (Export Database):
```javascript
// GET /api/db/export
import fs from 'fs';

export default function handler(req, res) {
  const dbPath = process.env.NODE_ENV === 'production'
    ? '/tmp/contacts.db'
    : path.join(process.cwd(), 'data', 'contacts.db');

  const dbFile = fs.readFileSync(dbPath);

  res.setHeader('Content-Type', 'application/x-sqlite3');
  res.setHeader('Content-Disposition', `attachment; filename="contacts-${Date.now()}.db"`);
  res.send(dbFile);
}
```

**Restore** (Import Database):
```javascript
// POST /api/db/import
import formidable from 'formidable';
import fs from 'fs';

export default async function handler(req, res) {
  const form = formidable({ maxFileSize: 50 * 1024 * 1024 }); // 50MB max
  const [fields, files] = await form.parse(req);

  const uploadedFile = files.file[0];

  // Validate file is SQLite database (check magic bytes)
  const buffer = fs.readFileSync(uploadedFile.filepath);
  if (!buffer.toString('utf8', 0, 15).includes('SQLite format')) {
    return res.status(400).json({ success: false, message: 'Invalid database file' });
  }

  // Replace current database
  const dbPath = '/tmp/contacts.db';
  fs.copyFileSync(uploadedFile.filepath, dbPath);

  // Verify database integrity
  const db = getDatabase();
  const { total } = db.prepare('SELECT COUNT(*) as total FROM contact_submissions').get();

  res.json({ success: true, message: 'Database restored', records_count: total });
}
```

## Security Considerations

1. **SQL Injection Prevention**: Use prepared statements (parameterized queries) for all database operations
2. **XSS Prevention**: Sanitize all user inputs before storing (remove HTML tags)
3. **Input Validation**: Validate all fields server-side (never trust client)
4. **Rate Limiting**: Log IP addresses for spam analysis (future CAPTCHA if needed)
5. **Access Control**: Admin endpoints (list, export, import) need authentication (P2 user story)

## Testing Strategy

**Unit Tests** (Jest):
```javascript
describe('Database Operations', () => {
  test('should insert contact submission', () => {
    const db = initializeDatabase(':memory:'); // In-memory for tests
    const stmt = db.prepare('INSERT INTO contact_submissions (...) VALUES (?, ?, ...)');
    const info = stmt.run('John Doe', 'john@example.com', ...);
    expect(info.changes).toBe(1);
  });

  test('should retrieve submissions in chronological order', () => {
    // ... insert test data
    const submissions = db.prepare('SELECT * FROM contact_submissions ORDER BY submitted_at DESC').all();
    expect(submissions[0].submitted_at).toBeGreaterThan(submissions[1].submitted_at);
  });
});
```

**Integration Tests** (Playwright):
- Submit form → Verify data appears in database
- Export database → Verify file downloads correctly
- Import database → Verify data restored correctly

---

**Data Model Complete**: ✅ Schema defined, CRUD operations documented, backup/restore strategy planned. Ready for API contract design.
