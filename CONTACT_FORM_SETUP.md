# Contact Form Setup – Send messages to arehmaanmughal@gmail.com

The contact form uses **Formspree** so submissions are delivered to your inbox with no backend required.

## Quick setup (about 2 minutes)

1. Go to **[https://formspree.io](https://formspree.io)** and sign up (free).
2. Click **“New form”** and set the notification email to **arehmaanmughal@gmail.com**.
3. After creating the form, Formspree shows your **Form ID** (e.g. `mzbblnqa` in `https://formspree.io/f/mzbblnqa`).
4. Open **`src/components/Contact.jsx`** and replace the placeholder:

   ```javascript
   const FORMSPREE_FORM_ID = 'YOUR_FORMSPREE_FORM_ID';
   ```

   with your Form ID, e.g.:

   ```javascript
   const FORMSPREE_FORM_ID = 'mzbblnqa';
   ```

5. Save the file. When someone clicks **“Send Message”**, the message will be sent to **arehmaanmughal@gmail.com**.

No other code changes are needed. The form already sends name, email, subject, and message.
