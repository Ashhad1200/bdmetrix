/**
 * GET /api/db/export
 * 
 * Export the SQLite database file for backup
 * Downloads the contacts.db file
 * 
 * PROTECTED ROUTE: Requires authentication
 * 
 * Response (200): Binary SQLite database file
 * Response (401): Authentication required
 * Response (404): Database file not found
 * Response (500): Server error
 */

const fs = require('fs');
const path = require('path');
const { getDatabasePath } = require('../../../lib/db');
const { requireAuth } = require('../../../lib/auth');

async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed. Please use GET.'
        });
    }

    try {
        const dbPath = getDatabasePath();

        // Check if database file exists
        if (!fs.existsSync(dbPath)) {
            return res.status(404).json({
                success: false,
                message: 'Database file not found',
            });
        }

        // Read database file
        const dbBuffer = fs.readFileSync(dbPath);

        // Generate filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
        const filename = `contacts-backup-${timestamp}.db`;

        // Set headers for file download
        res.setHeader('Content-Type', 'application/x-sqlite3');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.setHeader('Content-Length', dbBuffer.length);

        // Send file
        return res.status(200).send(dbBuffer);

    } catch (error) {
        console.error('[API] Database export error:', error);

        return res.status(500).json({
            success: false,
            message: 'Unable to export database. Please try again later.',
        });
    }
}

// Export with authentication middleware
export default requireAuth(handler);
