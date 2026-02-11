# Portfolio Website - EmailJS Setup Guide

## 📧 How to Enable Email Functionality

Your contact form is ready to send emails! You just need to configure EmailJS with your credentials.

## Quick Setup (5 minutes)

### 1. Create EmailJS Account
- Visit: https://www.emailjs.com/
- Click "Sign Up" (it's free!)
- Verify your email

### 2. Add Email Service
1. Dashboard → **Email Services** → **Add New Service**
2. Choose your email provider (Gmail recommended)
3. For Gmail:
   - Click "Connect Account"
   - Sign in with your Gmail
   - Allow EmailJS access
4. Copy your **Service ID** (looks like: `service_abc123`)

### 3. Create Email Template
1. Dashboard → **Email Templates** → **Create New Template**
2. Template Name: "Portfolio Contact Form"
3. Replace template content with:

```
New message from your portfolio!

From: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click **Save**
5. Copy your **Template ID** (looks like: `template_xyz789`)

### 4. Get Your Public Key
1. Dashboard → **Account** → **General**
2. Find **Public Key** section
3. Copy your public key (looks like: `aBcDeFgHiJkLmNoPqR`)

### 5. Update Your Code
Open: `C:\Users\DELL\Desktop\Portfolio\src\components\Contact.jsx`

Find lines 15-17 and replace:
```javascript
const serviceId = 'YOUR_SERVICE_ID';      // ← Paste your Service ID here
const templateId = 'YOUR_TEMPLATE_ID';    // ← Paste your Template ID here
const publicKey = 'YOUR_PUBLIC_KEY';      // ← Paste your Public Key here
```

Example:
```javascript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'aBcDeFgHiJkLmNoPqR';
```

### 6. Test It!
1. Save the file
2. Go to your website: http://localhost:5173/
3. Scroll to the contact form
4. Fill it out and click "Send Message"
5. Check your email inbox!

## 🎉 That's It!

Your contact form will now send emails directly to your inbox whenever someone fills it out.

## 📝 Free Tier Limits
- 200 emails/month (EmailJS free plan)
- Perfect for a portfolio website!

## 🔒 Security Note
The public key is safe to use in client-side code - it's designed for this purpose!

## ❓ Troubleshooting

**Form says "Something went wrong"?**
- Double-check your Service ID, Template ID, and Public Key
- Make sure there are no extra spaces
- Verify your EmailJS account is active

**Not receiving emails?**
- Check your spam folder
- Verify the email template is saved
- Test by sending an email from EmailJS dashboard

## 🚀 Ready to Deploy?
Once EmailJS is configured, your portfolio is ready to deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

The contact form will work the same way in production!
