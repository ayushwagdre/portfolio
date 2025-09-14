// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the values below with your actual credentials

const EMAIL_CONFIG = {
    // Your EmailJS Public Key (found in Account -> API Keys)
    publicKey: 'TTJOWr_7SzV6C99XQ',
    
    // Your Service ID (found in Email Services)
    serviceId: 'service_0uxifr1',
    
    // Your Template ID (found in Email Templates)
    templateId: 'template_lyr168f'
};

// Example EmailJS template variables (customize based on your template):
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{subject}} - email subject
// {{message}} - email message
// {{to_name}} - your name (can be hardcoded in template)

// For testing, you can use these demo credentials (limited functionality):
const DEMO_CONFIG = {
    publicKey: 'demo_public_key',
    serviceId: 'demo_service',
    templateId: 'demo_template'
};

// Uncomment the line below to use demo config for testing
// const EMAIL_CONFIG = DEMO_CONFIG;