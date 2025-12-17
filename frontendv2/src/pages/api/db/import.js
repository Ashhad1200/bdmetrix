/**
 * POST /api/db/import
 * 
 * Import/restore SQLite database from uploaded file
 * Replaces current database with uploaded backup
 * 
 * PROTECTED ROUTE: Requires authentication
 * 
 * Request: multipart/form-data with 'database' file field
 * 
 * Response (200):
 * { success: true, message: 'Database restored successfully', recordCount: number }
 * 
 * Response (400):
 * { success: false, message: 'Invalid file' }
 * 
 * Response (401):
 * { success: false, message: 'Authentication required' }
 * 
 * Response (500):
 * { success: false, message: 'Server error' }
 */

const fs = require('fs');
const path = require('path');
const { IncomingForm } = require('formidable');
const { getDatabasePath, validateDatabaseFile, closeDatabase } = require('../../../lib/db');
const { requireAuth } = require('../../../lib/auth');

// Disable Next.js body parser for file uploads
export const config = {
    api: {
        bodyParser: false,
    },
};

export default requireAuth(async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed. Please use POST.'
        });
    }

    try {
        // Parse multipart form data
        const form = new IncomingForm({
            maxFileSize: 50 * 1024 * 1024, // 50MB max
            keepExtensions: true,
        });

        const [fields, files] = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) reject(err);
                else resolve([fields, files]);
            });
        });

        // Get uploaded file
        const uploadedFile = files.database?.[0] || files.database;

        if (!uploadedFile) {
            return res.status(400).json({
                success: false,
                message: 'No database file provided. Please upload a file.',
            });
        }

        // Read file buffer
        const fileBuffer = fs.readFileSync(uploadedFile.filepath);

        // Validate SQLite file format
        if (!validateDatabaseFile(fileBuffer)) {
            // Clean up temp file
            fs.unlinkSync(uploadedFile.filepath);

            return res.status(400).json({
                success: false,
                message: 'Invalid database file. Please upload a valid SQLite database.',
            });
        }

        // Close existing database connection
        closeDatabase();

        // Backup current database (if exists)
        const dbPath = getDatabasePath();
        if (fs.existsSync(dbPath)) {
            const backupPath = `${dbPath}.backup-${Date.now()}`;
            fs.copyFileSync(dbPath, backupPath);
            console.log(`[DB] Created backup at: ${backupPath}`);
        }

        // Replace database file
        fs.copyFileSync(uploadedFile.filepath, dbPath);

        // Clean up temp file
        fs.unlinkSync(uploadedFile.filepath);

        // Reopen database and get record count
        const { getSubmissionsCount, initializeDatabase } = require('../../../lib/db');
        initializeDatabase();
        const recordCount = getSubmissionsCount();

        console.log(`[DB] Database restored successfully (${recordCount} records)`);

        return res.status(200).json({
            success: true,
            message: 'Database restored successfully',
            recordCount,
        });

    } catch (error) {
        console.error('[API] Database import error:', error);

        return res.status(500).json({
            success: false,
            message: 'Unable to import database. Please try again later.',
        });
    }
});
