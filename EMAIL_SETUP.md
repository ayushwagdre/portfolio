# EmailJS Integration Setup Guide

This guide will help you set up EmailJS to make your contact form functional.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_1234567`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template with these variables:

```html
Subject: New Contact from {{from_name}} - {{subject}}

Hello Ayush,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Save the template and note down your **Template ID** (e.g., `template_1234567`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `user_1234567890abcdef`)

## Step 5: Update Configuration

1. Open `config.js` in your portfolio folder
2. Replace the placeholder values with your actual credentials:

```javascript
const EMAIL_CONFIG = {
    publicKey: 'your_public_key_here',
    serviceId: 'your_service_id_here',
    templateId: 'your_template_id_here'
};
```

## Step 6: Test the Contact Form

1. Open your portfolio website
2. Fill out the contact form
3. Submit the form
4. Check your email for the message

## Troubleshooting

### Form shows "Demo mode"
- Make sure `config.js` is loaded properly
- Check that all three values in `EMAIL_CONFIG` are set correctly
- Verify the EmailJS script is loading (check browser console)

### Email not being sent
- Check browser console for error messages
- Verify your EmailJS service is active
- Make sure your email template variables match the ones in the code
- Check your EmailJS dashboard for quota limits (free tier has limits)

### Template variables not working
Make sure your EmailJS template uses these exact variable names:
- `{{from_name}}` - sender's name
- `{{from_email}}` - sender's email
- `{{subject}}` - email subject
- `{{message}}` - email message
- `{{to_name}}` - your name (optional)

## EmailJS Free Tier Limits

- 200 emails per month
- EmailJS branding in emails
- Basic email services support

Consider upgrading to a paid plan for production use.

## Security Notes

- Your EmailJS public key is safe to use in client-side code
- Never expose your private key in frontend code
- Consider adding reCAPTCHA for spam protection
- EmailJS handles the actual email sending securely

## Alternative Setup (Environment Variables)

For better security in production, you can set up environment variables:

1. Create a `.env` file (don't commit to git):
```
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_SERVICE_ID=your_service_id  
EMAILJS_TEMPLATE_ID=your_template_id
```

2. Update `config.js` to read from environment (requires build process):
```javascript
const EMAIL_CONFIG = {
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    serviceId: process.env.EMAILJS_SERVICE_ID,
    templateId: process.env.EMAILJS_TEMPLATE_ID
};
```

## Support

If you need help:
1. Check the EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Contact EmailJS support for service-specific issues
3. Check browser developer tools console for JavaScript errors