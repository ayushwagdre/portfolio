# Ayush Wagdre Portfolio Website

## Overview
This is a modern, responsive portfolio website for Ayush Wagdre, Senior Backend Developer. The site showcases professional experience, skills, projects, and contact information in a clean, interactive design.

## Project Architecture
- **Type**: Static frontend website (HTML/CSS/JavaScript)
- **Server**: Python HTTP server serving static files
- **Port**: 5000 (configured for Replit environment)
- **Deployment**: Autoscale deployment target for production

## Recent Changes
- **2025-09-14**: Initial setup in Replit environment
  - Configured Python 3.11 for HTTP server
  - Set up workflow to serve on port 5000 with 0.0.0.0 binding
  - Configured autoscale deployment for production
  - Verified all static assets load correctly

## Project Structure
```
/
├── index.html              # Main portfolio page
├── styles.css              # Main CSS styles and responsive design
├── services-testimonials.css # Additional CSS for services/testimonials
├── script.js               # JavaScript functionality and interactions
├── config.js               # EmailJS configuration for contact form
├── README.md               # Project documentation
├── EMAIL_SETUP.md          # EmailJS setup instructions
└── replit.md               # Replit-specific documentation
```

## Key Features
- Responsive design optimized for all devices
- Dark/light theme toggle
- Smooth scrolling navigation
- Interactive animations and hover effects
- Professional timeline for experience
- Project showcase with live demos
- Skills categorization
- Contact form with EmailJS integration
- Mobile-friendly hamburger navigation

## Technologies Used
- HTML5 with semantic markup
- CSS3 with custom properties, Grid, and Flexbox
- Vanilla JavaScript (ES6+)
- Font Awesome icons
- Google Fonts (Inter family)
- EmailJS for contact form functionality

## Deployment Notes
- Uses Python HTTP server for serving static files
- Configured for autoscale deployment in production
- All assets served from root directory
- No build process required (pure static site)

## Contact Form Integration
The contact form uses EmailJS service. To make it functional:
1. Set up EmailJS account and service
2. Update credentials in config.js
3. Follow EMAIL_SETUP.md for detailed instructions

## User Preferences
- Static site architecture maintained as designed
- Simple Python server setup preferred for hosting
- No additional build tools or frameworks added