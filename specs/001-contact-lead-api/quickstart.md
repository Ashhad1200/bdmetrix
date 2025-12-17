# Quickstart Guide: Contact & Lead Form API Integration

**Feature**: 001-contact-lead-api
**Last Updated**: 2025-12-16

## Overview

This guide walks through setting up the development environment, running the application locally, and deploying to Vercel.

## Prerequisites

- **Node.js**: v18+ (LTS recommended)
- **npm**: v9+ (comes with Node.js)
- **Git**: Latest version
- **Vercel Account**: Free tier sufficient (vercel.com/signup)
- **Code Editor**: VS Code recommended

## Project Structure

```
bdmatrix landing site/
├── frontendv2/                   # Next.js application
│   ├── src/
│   │   ├── pages/
│   │   │   ├── api/             # ⚠️ NEW: API routes
│   │   │   │   ├── contact/
│   │   │   │   │   ├── submit.js
│   │   │   │   │   └── list.js
│   │   │   │   └── db/
│   │   │   │       ├── export.js
│   │   │   │       └── import.js
│   │   │   └── contact.jsx      # Contact page
│   │   ├── forms/
│   │   │   └── contact-form.jsx # ⚠️ MODIFY: Add API integration
│   │   ├── lib/                 # ⚠️ NEW: Utilities
│   │   │   ├── db.js
│   │   │   ├── validation.js
│   │   │   └── sanitization.js
│   │   └── ...
│   ├── data/                    # ⚠️ NEW: Database storage (dev only)
│   │   └── contacts.db
│   ├── .env.local               # ⚠️ NEW: Environment variables
│   └── package.json             # ⚠️ MODIFY: Add dependencies
└── vercel.json                  # Existing Vercel config (no changes)
```

## Installation

### 1. Clone Repository (if not already done)

```bash
cd "/Users/ashhad/Dev/soft/bdmatrix landing site"
git checkout 001-contact-lead-api
```

### 2. Install Dependencies

```bash
cd frontendv2
npm install better-sqlite3@9.2.2 validator@13.11.0 sanitize-html@2.11.0 --save
```

**Development Dependencies** (for testing):
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom playwright
```

### 3. Configure Environment Variables

Create `.env.local` in `frontendv2` directory:

```env
# Database Configuration
DATABASE_PATH=./data/contacts.db

# Optional: Rate Limiting (future enhancement)
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=900000

# Node Environment (auto-set by Next.js)
# NODE_ENV=development
```

**Note**: `.env.local` is git-ignored by default in Next.js projects.

### 4. Initialize Database

The database is auto-initialized on first API request. To pre-initialize:

```bash
# Start dev server (triggers database initialization)
npm run dev

# Or manually initialize (optional)
node -e "require('./src/lib/db').initializeDatabase()"
```

Database file created at: `frontendv2/data/contacts.db`

## Running Locally

### Start Development Server

```bash
cd frontendv2
npm run dev
```

Server runs at: http://localhost:3000

### Test Contact Form

1. Navigate to: http://localhost:3000/contact
2. Fill out contact form:
   - Name: Test User
   - Email: test@example.com
   - Service Type: Web Development
   - Phone: +1-555-123-4567
   - Message: Test message
3. Click "Send Message"
4. Verify success message appears
5. Check database: `data/contacts.db` (use DB Browser for SQLite)

### Test API Endpoints Directly

**Submit Contact Form**:
```bash
curl -X POST http://localhost:3000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "service_type": "Web Development",
    "phone": "+1-555-123-4567",
    "message": "Test inquiry"
  }'
```

**List Submissions** (Admin):
```bash
curl http://localhost:3000/api/contact/list?limit=10&offset=0
```

**Export Database**:
```bash
curl http://localhost:3000/api/db/export -o contacts-backup.db
```

**Import Database**:
```bash
curl -X POST http://localhost:3000/api/db/import \
  -F "file=@contacts-backup.db"
```

## Running Tests

### Unit Tests (Jest)

```bash
npm test                    # Run all tests
npm test -- --watch        # Watch mode
npm test -- --coverage     # Coverage report
```

### Integration Tests (Playwright)

```bash
npm run test:e2e           # Run E2E tests
npm run test:e2e -- --ui   # Interactive UI mode
```

### Manual Testing Checklist

- [ ] Form submission with valid data
- [ ] Form validation (empty fields, invalid email)
- [ ] Success message displayed after submission
- [ ] Form cleared after successful submission
- [ ] Error messages displayed for validation failures
- [ ] Loading state during submission
- [ ] Double-submit prevention (button disabled)
- [ ] Keyboard accessibility (tab navigation, Enter to submit)
- [ ] Mobile responsive (test 320px width)
- [ ] Cross-browser (Chrome, Firefox, Safari)

## Deployment to Vercel

### First-Time Deployment

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd "/Users/ashhad/Dev/soft/bdmatrix landing site"
   vercel
   ```

4. **Follow prompts**:
   - Set up and deploy? **Y**
   - Which scope? **[Your account]**
   - Link to existing project? **N** (or Y if already exists)
   - Project name? **bdmatrix-landing-site**
   - Directory? **./frontendv2**
   - Override settings? **N**

5. **Deployment Complete**:
   - Preview URL: `https://bdmatrix-landing-site-xxx.vercel.app`
   - Inspect: `https://vercel.com/your-username/bdmatrix-landing-site`

### Production Deployment

```bash
vercel --prod
```

### Environment Variables (Vercel Dashboard)

1. Go to: https://vercel.com/your-username/bdmatrix-landing-site/settings/environment-variables
2. Add variables:
   - `DATABASE_PATH`: `/tmp/contacts.db` (Production)
   - `NODE_ENV`: `production` (auto-set by Vercel)

### Post-Deployment Checklist

- [ ] Visit production URL: `https://your-domain.vercel.app/contact`
- [ ] Test form submission in production
- [ ] Verify data stored (check via `/api/contact/list`)
- [ ] Export database backup immediately after first submission
- [ ] Set up recurring backup reminders (weekly recommended)
- [ ] Monitor Vercel logs for errors
- [ ] Test API endpoints with production URL

## Database Management

### Backup Database (Important!)

**Vercel Production**:
1. Visit: `https://your-domain.vercel.app/api/db/export`
2. Save downloaded `.db` file securely
3. **Do this before every redeployment!**

**Local Development**:
```bash
cp frontendv2/data/contacts.db backups/contacts-$(date +%Y%m%d).db
```

### Restore Database

**Vercel Production**:
1. Visit: `https://your-domain.vercel.app` (any page to trigger database initialization)
2. Use Postman or curl to upload backup:
   ```bash
   curl -X POST https://your-domain.vercel.app/api/db/import \
     -F "file=@contacts-backup.db"
   ```

**Local Development**:
```bash
cp backups/contacts-20251216.db frontendv2/data/contacts.db
```

### View Database Contents

**DB Browser for SQLite** (GUI tool):
1. Download: https://sqlitebrowser.org/
2. Open: `frontendv2/data/contacts.db`
3. Browse Data tab → contact_submissions table

**Command Line** (sqlite3):
```bash
sqlite3 frontendv2/data/contacts.db
sqlite> SELECT * FROM contact_submissions ORDER BY submitted_at DESC LIMIT 10;
sqlite> .exit
```

## Troubleshooting

### Database Not Initializing

**Symptom**: API returns "Database error"

**Solution**:
```bash
# Check if data directory exists
ls frontendv2/data

# If not, create it
mkdir -p frontendv2/data

# Restart dev server
npm run dev
```

### Better-sqlite3 Installation Fails

**Symptom**: `npm install better-sqlite3` fails with native module error

**Solution** (rebuild for your platform):
```bash
npm rebuild better-sqlite3
```

### Form Submission Returns 500 Error

**Check Vercel Logs**:
```bash
vercel logs
```

**Common Causes**:
- Database not initialized (visit any page first to trigger init)
- Invalid environment variables
- Validation library not installed

### Database Lost After Vercel Redeploy

**This is expected behavior!** `/tmp` directory is ephemeral.

**Solution**:
1. Always export database before redeploying
2. Import database after redeployment
3. Future: Set up automated backups to Vercel Blob Storage

## Development Workflow

### Adding New Features

1. **Create feature branch**:
   ```bash
   git checkout -b feature/add-captcha
   ```

2. **Write tests first** (TDD):
   ```bash
   npm test -- --watch
   ```

3. **Implement feature**:
   - Update components/API routes
   - Ensure tests pass

4. **Test manually**:
   - Run dev server
   - Test in browser
   - Test on mobile (responsive)

5. **Deploy preview**:
   ```bash
   vercel
   ```

6. **Merge to main**:
   ```bash
   git checkout 001-contact-lead-api
   git merge feature/add-captcha
   vercel --prod
   ```

### Code Quality Checks

**Linting**:
```bash
npm run lint              # Run ESLint
npm run lint -- --fix     # Auto-fix issues
```

**Formatting** (Prettier):
```bash
npx prettier --write "src/**/*.{js,jsx,json,css,md}"
```

**Type Checking** (if using TypeScript):
```bash
npm run type-check
```

## Performance Optimization

### Check Bundle Size

```bash
npm run build
npm run analyze  # If next-bundle-analyzer installed
```

**Constitution Requirement**: JS bundle ≤200KB gzipped

### Lighthouse Score

```bash
# Install Lighthouse CLI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=http://localhost:3000/contact
```

**Constitution Requirement**: Lighthouse Performance ≥90

### Monitor Production

- Vercel Analytics: https://vercel.com/your-username/bdmatrix-landing-site/analytics
- Vercel Speed Insights: Automatically enabled

## Security

### Audit Dependencies

```bash
npm audit                 # Check for vulnerabilities
npm audit fix            # Auto-fix if possible
```

**Constitution Requirement**: Patch vulnerabilities within 48 hours

### Test Input Sanitization

```bash
# Try submitting XSS payload in form:
Message: <script>alert('XSS')</script>

# Verify it's sanitized in database:
sqlite3 data/contacts.db "SELECT message FROM contact_submissions ORDER BY id DESC LIMIT 1"
# Should show: alert('XSS') (tags stripped)
```

## Getting Help

### Documentation

- Next.js API Routes: https://nextjs.org/docs/pages/building-your-application/routing/api-routes
- better-sqlite3: https://github.com/WiseLibs/better-sqlite3/wiki
- Vercel Serverless Functions: https://vercel.com/docs/functions

### Common Issues

1. **"Cannot find module 'better-sqlite3'"**:
   - Solution: `npm install better-sqlite3`

2. **"ENOENT: no such file or directory, open './data/contacts.db'"**:
   - Solution: `mkdir -p frontendv2/data` then restart server

3. **"Database is locked"**:
   - Solution: Close DB Browser for SQLite (only one process can write)

4. **Vercel deployment fails**:
   - Check build logs: `vercel logs --follow`
   - Verify `frontendv2/package.json` has all dependencies

### Support Channels

- GitHub Issues: [Your repo issues URL]
- Email: info@bdmatrix.com

---

## Next Steps

1. ✅ Development environment set up
2. ✅ API endpoints working locally
3. ✅ Contact form submitting data
4. ⏭ **Run `/sp.tasks`** to generate implementation task list
5. ⏭ Write tests (TDD - Red-Green-Refactor)
6. ⏭ Implement features
7. ⏭ Deploy to production
8. ⏭ Set up backup reminders

**Happy Coding!** 🚀
