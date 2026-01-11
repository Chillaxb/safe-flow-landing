# Newsletter Setup with Resend

## Overview

The newsletter signup uses [Resend](https://resend.com) for transactional emails. When a user signs up:

1. They receive a welcome email confirming their subscription
2. Admin receives a notification with the new signup details
3. Contact is added to Resend audience for future email campaigns

## Configuration

### Environment Variables

Add these to `.env.local`:

```bash
# Required: Your Resend API key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Admin email for signup notifications
ADMIN_EMAIL=contact@safe-flow.ai

# Optional: Audience ID for contact management
RESEND_AUDIENCE_ID=aud_xxxxxxxxxxxx
```

### Domain Verification

Before sending emails, verify your domain in [Resend Dashboard](https://resend.com/domains):

1. Go to Domains > Add Domain
2. Add `safe-flow.ai`
3. Add the DNS records provided by Resend
4. Wait for verification (usually a few minutes)

Until verified, emails will be sent from `onboarding@resend.dev`.

## API Endpoint

**POST** `/api/newsletter`

### Request Body

```json
{
  "email": "user@example.com",
  "language": "en"  // or "fr"
}
```

### Response

**Success (200):**
```json
{
  "success": true
}
```

**Error (400/500):**
```json
{
  "error": "Error message"
}
```

## Email Templates

### Welcome Email (EN)
- Subject: "Welcome to Safe-Flow Beta!"
- Content: Welcome message + what to expect

### Welcome Email (FR)
- Subject: "Bienvenue dans la Beta Safe-Flow !"
- Content: Message de bienvenue + prochaines étapes

### Admin Notification
- Subject: "New Beta Signup: {email}"
- Content: Email, language, date, source

## Managing Contacts

### Resend Audiences

1. Create an audience in [Resend Dashboard](https://resend.com/audiences)
2. Copy the Audience ID
3. Add to `.env.local` as `RESEND_AUDIENCE_ID`

### Viewing Contacts

Contacts are automatically added to your audience. View them in:
- Resend Dashboard > Audiences > Your Audience

### Sending Broadcasts

Use Resend's Broadcast feature to send emails to all subscribers:
1. Go to Broadcasts
2. Create new broadcast
3. Select your audience
4. Compose and send

## Troubleshooting

### "Failed to send confirmation email"
- Check API key is correct
- Verify domain is set up
- Check Resend dashboard for logs

### Emails going to spam
- Complete domain verification
- Add SPF and DKIM records
- Use consistent sender name

### Contact not added to audience
- Ensure `RESEND_AUDIENCE_ID` is set
- Contact may already exist (no error, just skipped)

## Local Development

For testing, emails will be sent but may end up in spam without domain verification. Check Resend dashboard for delivery logs.

## Cost

Resend pricing (as of 2025):
- Free: 3,000 emails/month
- Pro: $20/month for 50,000 emails

For a beta launch, the free tier is more than sufficient.
