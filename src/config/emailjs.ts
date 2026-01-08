// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from the Integration page
// 6. Either update the values below OR create a .env.local file with your credentials

export const EMAILJS_CONFIG = {
  // Replace with your EmailJS Service ID
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_purviewtech',
  
  // Replace with your EmailJS Template ID
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact_form',
  
  // Replace with your EmailJS Public Key
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE',
  
  // Your email where you want to receive notifications
  TO_EMAIL: import.meta.env.VITE_TO_EMAIL || 'info@purviewtech.ai'
};

// Email template variables that will be sent:
// - from_name: User's name
// - from_email: User's email
// - company: User's company (optional)
// - message: User's message
// - to_email: Your email (where notifications will be sent)
// - reply_to: User's email for easy replies
// - timestamp: When the form was submitted