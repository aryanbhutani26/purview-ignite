# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to receive email notifications when users submit the contact form on your website.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Subject:
```
New Contact Form Submission from {{from_name}}
```

### Template Body:
```
You have received a new contact form submission from your website.

Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Company: {{company}}
- Submitted: {{timestamp}}

Message:
{{message}}

---
You can reply directly to this email to respond to {{from_name}}.
```

4. Set the "To Email" field to your email address (e.g., `info@purviewtech.ai`)
5. Set the "Reply To" field to `{{reply_to}}`
6. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to "Account" → "General" in your dashboard
2. Find your **Public Key** (e.g., `user_abcdef123456`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual EmailJS credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',      // From Step 2
  TEMPLATE_ID: 'your_template_id_here',    // From Step 3
  PUBLIC_KEY: 'your_public_key_here',      // From Step 4
  TO_EMAIL: 'your_email@domain.com'        // Your email address
};
```

## Step 6: Test the Form

1. Save your changes and restart your development server
2. Go to your website's contact form
3. Fill out and submit a test message
4. Check your email inbox for the notification

## Troubleshooting

### Common Issues:

1. **"EmailJS service is not available"**
   - Check that your Service ID is correct
   - Ensure your email service is properly configured

2. **"Template not found"**
   - Verify your Template ID is correct
   - Make sure the template is published (not in draft)

3. **"Invalid public key"**
   - Double-check your Public Key from the Account settings

4. **Emails not arriving**
   - Check your spam/junk folder
   - Verify the "To Email" in your template is correct
   - Ensure your email service is properly authenticated

### Rate Limits:
- Free EmailJS accounts have a limit of 200 emails per month
- Consider upgrading if you expect more submissions

## Security Notes

- The Public Key is safe to use in frontend code
- Never expose your Private Key in frontend code
- EmailJS handles the secure email sending on their servers

## Support

If you need help with setup:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their dashboard

---

Once configured, you'll receive an email notification every time someone submits the contact form with their details!