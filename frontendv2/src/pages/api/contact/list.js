/**
 * GET /api/contact/list
 * 
 * Retrieve all contact submissions with pagination
 * 
 * PROTECTED ROUTE: Requires authentication
 * 
 * Query parameters:
 * - limit: number (optional, default: 50, max results per page)
 * - offset: number (optional, default: 0, skip N results)
 * 
 * Response (200):
 * {
 *   success: true,
 *   submissions: [...],
 *   total: number,
 *   limit: number,
 *   offset: number
 * }
 * 
 * Response (401):
 * { success: false, message: 'Authentication required' }
 * 
 * Response (500):
 * { success: false, message: 'Server error' }
 */

const { getSubmissions, getSubmissionsCount } = require('../../../lib/db');
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
        // Parse pagination parameters
        const limit = Math.min(parseInt(req.query.limit) || 50, 100); // Max 100 per page
        const offset = Math.max(parseInt(req.query.offset) || 0, 0);

        // Get submissions and total count
        const submissions = getSubmissions({ limit, offset });
        const total = getSubmissionsCount();

        // Return paginated results
        return res.status(200).json({
            success: true,
            submissions,
            total,
            limit,
            offset,
            hasMore: offset + limit < total,
        });

    } catch (error) {
        console.error('[API] Failed to retrieve submissions:', error);

        return res.status(500).json({
            success: false,
            message: 'Unable to retrieve submissions. Please try again later.',
        });
    }
}

// Export with authentication middleware
export default requireAuth(handler);
