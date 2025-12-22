# Email Notification Setup Guide

## Quick Start

The email notification system has been implemented! Follow these steps to get it running:

### Step 1: Install Dependencies

```bash
cd /Users/ashhad/Dev/soft/bdmatrix\ landing\ site/frontendv2
npm install
```

This will install the `resend` package along with other dependencies.

---

### Step 2: Get Resend API Key

1. **Sign up for Resend** (free tier: 3,000 emails/month)
   - Visit: https://resend.com/signup
   - Sign up with your email

2. **Verify your domain** (optional for testing)
   - Go to: https://resend.com/domains
   - Add `bdmatrix.org` and follow DNS verification steps
   - **For testing**: Skip this and use `onboarding@resend.dev` as the sender

3. **Get your API key**
   - Go to: https://resend.com/api-keys
   - Click "Create API Key"
   - Copy the key (starts with `re_`)

---

### Step 3: Configure Environment Variables

Create a `.env.local` file in the frontendv2 directory:

```bash
# Copy the example file
cp .env.example .env.local
```

Then edit `.env.local` and add your Resend API key:

```bash
# Resend Email Configuration
RESEND_API_KEY=re_your_actual_api_key_here

# For testing, use Resend's test domain:
EMAIL_FROM=onboarding@resend.dev

# Your support email (recipient)
EMAIL_TO=support@bdmatrix.org

# Once you verify bdmatrix.org domain, change to:
# EMAIL_FROM=noreply@bdmatrix.org
```

**Important**: Never commit `.env.local` to git! It's already in `.gitignore`.

---

### Step 4: Restart Development Server

```bash
# Stop the current dev server (Ctrl+C)
# Then restart:
npm run dev
```

---

### Step 5: Test the Contact Form

1. Open http://localhost:3000/contact in your browser
2. Fill out the contact form with test data
3. Submit the form
4. Check the terminal for success messages:
   ```
   [API] Email notification sent successfully: <email_id>
   [API] Contact form processed successfully (ID: contact_xxx, Email: sent)
   ```
5. Check `support@bdmatrix.org` inbox for the email

---

## For Production (Vercel)

### Step 1: Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - `RESEND_API_KEY`: Your Resend API key
   - `EMAIL_FROM`: `noreply@bdmatrix.org` (after domain verification)
   - `EMAIL_TO`: `support@bdmatrix.org`

### Step 2: Redeploy

After adding environment variables, trigger a new deployment or:
```bash
vercel --prod
```

---

## Troubleshooting

### Email not sending?

**Check 1**: Verify API key is configured
```bash
# In your terminal where dev server runs:
echo $RESEND_API_KEY
# Should show your API key
```

**Check 2**: Look for error messages in terminal
- `[Email Service] RESEND_API_KEY not configured` → Add API key to `.env.local`
- `[API] Email notification failed` → Check API key validity at resend.com

**Check 3**: Verify `.env.local` exists and is loaded
```bash
ls -la .env.local
# Should show the file
```

### Form submission fails?

The system is designed to **never fail form submission** even if email fails. If the form itself is failing, check:
- Browser console for JavaScript errors
- Network tab for API request failures
- Server terminal for validation errors

---

## Email Template Preview

Emails will be sent with:
- **Subject**: `New Lead: [Name] - [Service Type]`
- **From**: Your configured sender email
- **To**: `support@bdmatrix.org`
- **Reply-To**: Lead's email address
- **Content**: Professional HTML email with all lead details

The email includes:
- Lead contact information (name, email, phone)
- Service type, budget, and timeline
- Full message from the lead
- Submission metadata (ID, timestamp, IP address)
- BD Matrix branding and links

---

## Next Steps

After testing locally:
1. ✅ Verify domain in Resend dashboard
2. ✅ Update `EMAIL_FROM` to use your domain
3. ✅ Add environment variables to Vercel
4. ✅ Deploy to production
5. ✅ Test production contact form
6. 🎉 Start receiving leads directly to your email!
