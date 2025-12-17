/**
 * GET /api/contact/list
 * 
 * TEMPORARY VERSION FOR VERCEL:
 * - better-sqlite3 doesn't work on Vercel
 * - Submissions are logged to Vercel function logs
 * - To view submissions: Vercel Dashboard → Deployments → Functions → Logs
 * - Search for "NEW CONTACT FORM SUBMISSION"
 * 
 * TODO: Migrate to Vercel Postgres or Vercel KV
 */

export default async function handler(req, res) {
    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed. Please use GET.'
        });
    }

    // Return empty list with migration notice
    return res.status(200).json({
        success: true,
        submissions: [],
        total: 0,
        limit: 50,
        offset: 0,
        hasMore: false,
        __notice: 'Database temporarily disabled on Vercel. View submissions in Vercel function logs. Search for "NEW CONTACT FORM SUBMISSION".',
        __migration_needed: 'Please migrate to Vercel Postgres, Vercel KV, or Supabase for permanent storage.',
    });
}
