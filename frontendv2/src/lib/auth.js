/**
 * Simple authentication middleware for admin routes
 * Uses environment variables for credentials
 * 
 * IMPORTANT: For production, replace with proper authentication
 * (e.g., NextAuth.js, Auth0, or your existing auth system)
 */

/**
 * Check if the request has valid admin credentials
 * Uses HTTP Basic Authentication
 * 
 * @param {Object} req - Next.js request object
 * @returns {boolean} True if authenticated
 */
export function isAuthenticated(req) {
    // Get admin credentials from environment variables
    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme123';

    // Get Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return false;
    }

    // Decode Basic Auth credentials
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');

    // Verify credentials
    return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

/**
 * Middleware wrapper to protect admin routes
 * Returns 401 if not authenticated
 * 
 * Usage:
 * export default requireAuth(async function handler(req, res) {
 *   // Your protected route logic
 * });
 */
export function requireAuth(handler) {
    return async (req, res) => {
        if (!isAuthenticated(req)) {
            res.setHeader('WWW-Authenticate', 'Basic realm="Admin Area"');
            return res.status(401).json({
                success: false,
                message: 'Authentication required',
            });
        }

        return handler(req, res);
    };
}
