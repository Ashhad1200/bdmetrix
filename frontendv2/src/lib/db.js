/**
 * Database utility module for contact form submissions
 * Uses better-sqlite3 for synchronous SQLite operations
 * 
 * @module lib/db
 */

const Database = require('better-sqlite3');
const path = require('path');

// Database path - use environment variable or default to data/contacts.db
const DB_PATH = process.env.DATABASE_PATH ||
    (process.env.NODE_ENV === 'production'
        ? '/tmp/contacts.db'
        : path.join(process.cwd(), 'data', 'contacts.db'));

let db = null;

/**
 * Database schema for contact submissions
 */
const SCHEMA = `
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    service_type TEXT NOT NULL,
    phone TEXT NOT NULL,
    message TEXT NOT NULL,
    ip_address TEXT,
    submitted_at TEXT NOT NULL DEFAULT (datetime('now')),
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE INDEX IF NOT EXISTS idx_submitted_at ON contact_submissions(submitted_at DESC);
  CREATE INDEX IF NOT EXISTS idx_email ON contact_submissions(email);
`;

/**
 * Initialize database connection and create tables if they don't exist
 * Uses singleton pattern to ensure only one connection
 * 
 * @returns {Database} SQLite database instance
 */
function initializeDatabase() {
    if (db) {
        return db;
    }

    try {
        // Create database connection
        db = new Database(DB_PATH, {
            verbose: process.env.NODE_ENV === 'development' ? console.log : null
        });

        // Enable WAL mode for better concurrency
        db.pragma('journal_mode = WAL');

        // Create schema
        db.exec(SCHEMA);

        console.log(`[DB] Initialized database at: ${DB_PATH}`);

        return db;
    } catch (error) {
        console.error('[DB] Failed to initialize database:', error);
        throw new Error(`Database initialization failed: ${error.message}`);
    }
}

/**
 * Get database connection (creates if doesn't exist)
 * 
 * @returns {Database} SQLite database instance
 */
function getDatabase() {
    if (!db) {
        return initializeDatabase();
    }
    return db;
}

/**
 * Insert a new contact submission into the database
 * 
 * @param {Object} submission - Contact form data
 * @param {string} submission.name - Contact name
 * @param {string} submission.email - Contact email
 * @param {string} submission.service_type - Service type requested
 * @param {string} submission.phone - Contact phone number
 * @param {string} submission.message - Contact message
 * @param {string} [submission.ip_address] - Requester IP address (optional)
 * @returns {Object} Inserted submission with ID
 */
function insertSubmission(submission) {
    const database = getDatabase();

    const stmt = database.prepare(`
    INSERT INTO contact_submissions (name, email, service_type, phone, message, ip_address)
    VALUES (@name, @email, @service_type, @phone, @message, @ip_address)
  `);

    const info = stmt.run({
        name: submission.name,
        email: submission.email,
        service_type: submission.service_type,
        phone: submission.phone,
        message: submission.message,
        ip_address: submission.ip_address || null,
    });

    return {
        id: info.lastInsertRowid,
        ...submission,
    };
}

/**
 * Get all contact submissions with pagination
 * 
 * @param {Object} options - Query options
 * @param {number} [options.limit=50] - Maximum number of results
 * @param {number} [options.offset=0] - Number of results to skip
 * @returns {Array} Array of contact submissions
 */
function getSubmissions({ limit = 50, offset = 0 } = {}) {
    const database = getDatabase();

    const stmt = database.prepare(`
    SELECT 
      id, name, email, service_type, phone, message, ip_address, 
      submitted_at, created_at
    FROM contact_submissions
    ORDER BY submitted_at DESC
    LIMIT ? OFFSET ?
  `);

    return stmt.all(limit, offset);
}

/**
 * Get total count of contact submissions
 * 
 * @returns {number} Total number of submissions
 */
function getSubmissionsCount() {
    const database = getDatabase();

    const stmt = database.prepare('SELECT COUNT(*) as count FROM contact_submissions');
    const result = stmt.get();

    return result.count;
}

/**
 * Get database file path
 * 
 * @returns {string} Absolute path to database file
 */
function getDatabasePath() {
    return DB_PATH;
}

/**
 * Validate that a file is a valid SQLite database
 * Checks for SQLite magic bytes at the start of the file
 * 
 * @param {Buffer} buffer - File buffer to validate
 * @returns {boolean} True if valid SQLite database
 */
function validateDatabaseFile(buffer) {
    // SQLite magic bytes: "SQLite format 3\0"
    const SQLITE_MAGIC = Buffer.from('SQLite format 3\0', 'utf-8');

    if (buffer.length < SQLITE_MAGIC.length) {
        return false;
    }

    return buffer.slice(0, SQLITE_MAGIC.length).equals(SQLITE_MAGIC);
}

/**
 * Close database connection (for cleanup/testing)
 */
function closeDatabse() {
    if (db) {
        db.close();
        db = null;
    }
}

module.exports = {
    initializeDatabase,
    getDatabase,
    insertSubmission,
    getSubmissions,
    getSubmissionsCount,
    getDatabasePath,
    validateDatabaseFile,
    closeDatabase: closeDatabse,
};
