# Database Backup & Restore Procedure

**Application**: BD Matrix Contact Form  
**Database**: SQLite (`contacts.db`)  
**Critical**: Database is _ephemeral_ on Vercel - must be backed up before deployment

---

## 🚨 Critical Warning

**Vercel Limitation**: The `/tmp` directory (where production database lives) is **ephemeral** and cleared on every deployment.

**Risk**: Without manual backup _before_ each deployment, **all contact submissions will be lost**.

---

## 📥 Backup Procedure (Export)

### Via Admin Panel (Recommended)

1. Navigate to http://your-domain.com/admin/leads
2. Enter admin credentials when prompted
3. Click the **"📥 Export Database"** button
4. Save the downloaded file: `contacts-backup-YYYY-MM-DD.db`
5. Store in secure location (Google Drive, Dropbox, local backup)

**Filename Format**: `contacts-backup-2025-12-17.db`

### Via API (Programmatic)

```bash
curl -u admin:your_password \
  http://your-domain.com/api/db/export \
  --output backup.db
```

### Via Database File (Development Only)

```bash
# Local development only
cp /path/to/frontendv2/data/contacts.db ~/Backups/contacts-$(date +%Y-%m-%d).db
```

---

## 📤 Restore Procedure (Import)

### Via Admin Panel (Future Feature)

_Note: UI for database import is not yet implemented. Use API method below._

### Via API (Current Method)

```bash
curl -u admin:your_password \
  -X POST \
  -F "database=@path/to/contacts-backup.db" \
  http://your-domain.com/api/db/import
```

**Response** (Success):
```json
{
  "success": true,
  "message": "Database restored successfully",
  "recordCount": 42
}
```

### Verification After Restore

1. Navigate to `/admin/leads`
2. Verify submission count matches expected
3. Spot-check a few recent submissions

---

## 🔄 Deployment Workflow

### Before Every Deployment

**Critical Steps**:

1. **Export Current Database**
   ```bash
   # Via admin panel or API
   curl -u admin:password https://your-site.vercel.app/api/db/export \
     --output backups/pre-deploy-$(date +%Y-%m-%d-%H%M).db
   ```

2. **Verify Backup Downloaded**
   ```bash
   ls -lh backups/pre-deploy-*.db
   # Should show non-zero file size
   ```

3. **Deploy to Vercel**
   ```bash
   git push origin main
   # or: vercel deploy --prod
   ```

4. **After Deployment**:
   - If first deployment: Nothing to restore
   - If redeployment: Restore backup via API

### Automated Backup (Recommended)

Set up a cron job or GitHub Action:

```yaml
# .github/workflows/backup-db.yml
name: Backup Database

on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight
  workflow_dispatch:      # Manual trigger

jobs:
  backup:
    runs-on: ubuntu-latest
    steps:
      - name: Download Database
        run: |
          curl -u ${{ secrets.ADMIN_USERNAME }}:${{ secrets.ADMIN_PASSWORD }} \
            https://your-site.vercel.app/api/db/export \
            --output db-backup-$(date +%Y-%m-%d).db
      
      - name: Upload to GitHub Artifacts
        uses: actions/upload-artifact@v3
        with:
          name: database-backup
          path: db-backup-*.db
          retention-days: 90
```

---

## 📋 Backup Schedule Recommendations

| Frequency | Scenario |
|-----------|----------|
| **Daily** | Active site receiving submissions |
| **Weekly** | Low-traffic site |
| **Before Every Deploy** | **MANDATORY** |
| **On Demand** | After bulk operations, testing |

---

## 🗄️ Backup Storage

### Recommended Locations

✅ **Good**:
- Google Drive / Dropbox
- GitHub repository (private repo via GitHub Actions)
- AWS S3 / Vercel Blob Storage
- Local encrypted external drive

❌ **NOT Recommended**:
- Vercel filesystem (ephemeral)
- Same server as application
- Public GitHub repository (sensitive data)

---

## 🔍 Database File Validation

### Check if File is Valid SQLite

```bash
# Method 1: Check magic bytes
head -c 16 contacts-backup.db
# Should output: "SQLite format 3"

# Method 2: Use sqlite3 CLI
sqlite3 contacts-backup.db "SELECT COUNT(*) FROM contact_submissions;"
# Should output number of records
```

### Database Schema

```sql
SELECT * FROM sqlite_master WHERE type='table';
-- Should show: contact_submissions table
```

---

## 🐛 Troubleshooting

### Problem: Backup file is empty (0 bytes)

**Cause**: Authentication failed or database doesn't exist  
**Solution**: Verify admin credentials, check database path

### Problem: Import fails with "Invalid database file"

**Cause**: File is corrupted or not SQLite format  
**Solution**: 
1. Verify file with `head -c 16 backup.db`
2. Try opening with `sqlite3 backup.db`
3. Use a different backup file

### Problem: Record count doesn't match after restore

**Cause**: Wrong backup file selected  
**Solution**: Check backup file timestamp, verify it's the correct version

### Problem: 401 Unauthorized when using API

**Cause**: Incorrect credentials  
**Solution**: Double-check `ADMIN_USERNAME` and `ADMIN_PASSWORD` in environment variables

---

## 📊 Monitoring Database Size

```bash
# Check database file size
ls -lh /path/to/contacts.db

# Check number of records
sqlite3 contacts.db "SELECT COUNT(*) FROM contact_submissions;"

# Check oldest/newest submission
sqlite3 contacts.db "SELECT MIN(submitted_at), MAX(submitted_at) FROM contact_submissions;"
```

**Recommended Actions**:
- Archive database when reaching 10,000 submissions
- Export to CSV for long-term storage
- Create new database for fresh start

---

## 🚀 Production Migration Plan

### Moving from Development to Production

1. **Export Development Database**
   ```bash
   cd frontendv2
   npm run db:init  # Ensure database exists
   cp data/contacts.db ~/production-seed.db
   ```

2. **Deploy to Vercel** (first time)
   ```bash
   vercel deploy --prod
   ```

3. **Seed Production Database** (if needed)
   ```bash
   curl -u admin:prod_password \
     -X POST \
     -F "database=@~/production-seed.db" \
     https://your-prod-site.vercel.app/api/db/import
   ```

---

## 📝 Backup Log Template

Keep a backup log for audit purposes:

```markdown
## Database Backup Log

| Date       | Time  | Backup File | Records | Notes |
|------------|-------|-------------|---------|-------|
| 2025-12-17 | 03:00 | backup-2025-12-17.db | 42 | Before deployment |
| 2025-12-18 | 03:00 | backup-2025-12-18.db | 58 | Daily backup |
```

---

## 🎯 Checklist

**Before Every Deployment**:
- [ ] Export current database
- [ ] Verify backup file size > 0
- [ ] Test opening backup with sqlite3
- [ ] Store backup in secure location
- [ ] Document backup in log
- [ ] Deploy application
- [ ] Verify application works after deployment

**Weekly**:
- [ ] Run scheduled backup
- [ ] Test restore procedure
- [ ] Clean up old backups (keep last 4 weeks)
- [ ] Verify admin access still works

---

## 📞 Support

If you encounter issues with backup/restore:

1. Check [Security Implementation Guide](./security-implementation.md)
2. Review [Walkthrough Documentation](./walkthrough.md)
3. Inspect database with: `sqlite3 contacts.db .schema`

---

**Last Updated**: 2025-12-17  
**Version**: 1.0
