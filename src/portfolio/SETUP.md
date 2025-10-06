# Portfolio Setup Guide

This guide will help you set up and deploy Ahmed Khalil's portfolio website.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **Angular CLI** - Install globally: `npm install -g @angular/cli`

## 🚀 Quick Start

### 1. Navigate to the Portfolio Directory

```bash
cd src/portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

The portfolio will be available at `http://localhost:4200`

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run build:gh-pages` | Build for GitHub Pages |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm test` | Run unit tests |

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/app/components/hero/hero.component.ts`)
   - Update name, title, and description
   - Replace profile image

2. **About Section** (`src/app/components/about/about.component.ts`)
   - Update personal description
   - Modify education and experience details

3. **Skills Section** (`src/app/components/skills/skills.component.ts`)
   - Add/remove skills
   - Update skill percentages

4. **Projects Section** (`src/app/components/projects/projects.component.ts`)
   - Replace with your projects
   - Update project descriptions and technologies

5. **Experience Section** (`src/app/components/experience/experience.component.ts`)
   - Update work experience
   - Modify education details

6. **Contact Section** (`src/app/components/contact/contact.component.ts`)
   - Update contact information
   - Modify social media links

### Images

Replace placeholder images in `src/assets/images/`:

- `profile.jpg` - Main profile photo
- `about-image.jpg` - About section image
- `project1.jpg` to `project6.jpg` - Project screenshots

### Colors and Styling

Main color variables are defined in `src/styles.scss`:

```scss
// Primary colors
$primary: #667eea;
$secondary: #764ba2;
$accent: #ffd700;
```

## 🚀 Deployment

### GitHub Pages Deployment

1. **Build for GitHub Pages:**
   ```bash
   npm run build:gh-pages
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

### Manual Deployment

1. **Build the project:**
   ```bash
   npm run build:gh-pages
   ```

2. **Copy contents of `dist/ahmed-khalil-portfolio/` to your web server**

### Other Hosting Platforms

The portfolio can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist/ahmed-khalil-portfolio` folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload to S3 bucket with static website hosting

## 🔧 Troubleshooting

### Common Issues

1. **Build Errors:**
   - Ensure all dependencies are installed: `npm install`
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

2. **Deployment Issues:**
   - Check GitHub Pages settings in repository settings
   - Ensure `gh-pages` branch is created
   - Verify base href is correct for your repository

3. **Image Loading Issues:**
   - Ensure images are in `src/assets/images/`
   - Check file paths in components
   - Verify image file extensions

### Performance Optimization

1. **Image Optimization:**
   - Compress images before adding to assets
   - Use WebP format for better compression
   - Implement lazy loading for large images

2. **Bundle Optimization:**
   - Run `npm run build:prod` for production build
   - Analyze bundle with `ng build --stats-json`

## 📱 Mobile Optimization

The portfolio is fully responsive, but you can customize breakpoints in `src/styles.scss`:

```scss
// Mobile
@media (max-width: 480px) { ... }

// Tablet
@media (max-width: 768px) { ... }

// Desktop
@media (min-width: 769px) { ... }
```

## 🎯 SEO Optimization

1. **Meta Tags:** Update in `src/index.html`
2. **Open Graph:** Add social media preview images
3. **Sitemap:** Generate sitemap.xml
4. **Robots.txt:** Add robots.txt file

## 🔒 Security

1. **Content Security Policy:** Add CSP headers
2. **HTTPS:** Ensure SSL certificate
3. **Dependencies:** Keep dependencies updated

## 📊 Analytics

Add Google Analytics or other tracking:

1. Add tracking code to `src/index.html`
2. Update in `src/app/app.component.ts` if needed

## 🆘 Support

If you encounter issues:

1. Check the console for errors
2. Verify all dependencies are installed
3. Ensure Node.js version is compatible
4. Check Angular CLI version

## 📝 License

This portfolio template is open source. Feel free to customize and use for your own portfolio.

---

**Happy Coding! 🚀**

