# Modern Full Stack Developer Portfolio

A beautiful, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern and clean design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (mobile-first design)
- 🎨 Smooth animations with Framer Motion
- 🚀 Fast performance with Vite
- 💼 Sections: Hero, About, Skills, Projects, Testimonials, Contact
- 📧 Contact form with validation
- 🎯 SEO friendly

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and tagline
   - Change social media links
   - Update resume download link

2. **About Section** (`src/components/About.jsx`):
   - Update bio and description
   - Replace placeholder image
   - Modify statistics

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Update proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your actual projects
   - Update screenshots, descriptions, and links
   - Modify tech stack badges

5. **Testimonials Section** (`src/components/Testimonials.jsx`):
   - Add real testimonials
   - Update experience timeline

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Configure form submission (add backend API)
   - Update social media links

### Theme Customization

Edit `tailwind.config.js` to customize:
- Color palette
- Fonts
- Spacing
- Breakpoints

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## Form Backend Integration

To make the contact form functional, integrate with:

- **EmailJS** - Simple email service
- **Formspree** - Form backend service
- **Custom API** - Build your own backend with Node.js/Express

Example with EmailJS:

```bash
npm install @emailjs/browser
```

Update `src/components/Contact.jsx` with EmailJS configuration.

## Performance Optimization

- Images are lazy-loaded
- Code splitting with React.lazy() if needed
- Minified production build
- Optimized animations with Framer Motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your portfolio!

## Credits

- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animations: [Framer Motion](https://www.framer.com/motion/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Images: [Unsplash](https://unsplash.com/)

---

Made with ❤️ by Your Name
