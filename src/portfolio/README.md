# Ahmed Khalil - Senior .NET Engineer Portfolio

A modern, responsive portfolio website built with Angular 18, showcasing my professional experience, skills, and projects as a Senior .NET Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Elements**: Smooth scrolling, hover effects, and transitions
- **Performance Optimized**: Fast loading with lazy loading and optimization
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Technologies Used

- **Angular 18** - Latest version with standalone components
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling with variables and mixins
- **AOS (Animate On Scroll)** - Smooth scroll animations
- **Particles.js** - Interactive background effects
- **Font Awesome** - Professional icons
- **Google Fonts** - Modern typography

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── hero/            # Hero section with introduction
│   │   ├── about/           # About me section
│   │   ├── skills/          # Technical skills showcase
│   │   ├── projects/        # Featured projects
│   │   ├── experience/      # Professional experience timeline
│   │   ├── contact/         # Contact form and information
│   │   └── footer/          # Footer with links and social media
│   ├── app.component.ts     # Main app component
│   └── app.routes.ts        # Routing configuration
├── assets/
│   └── images/              # Portfolio images and icons
├── styles.scss              # Global styles
├── index.html               # Main HTML file
└── main.ts                  # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Navigate to the portfolio directory:
   ```bash
   cd src/portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build:prod
```

### Build for GitHub Pages

```bash
npm run build:gh-pages
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 🎨 Customization

### Colors
The portfolio uses a modern color scheme with CSS custom properties. Main colors:
- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Accent: `#ffd700` (Gold)
- Text: `#333` (Dark Gray)

### Typography
- Primary Font: Inter (Google Fonts)
- Code Font: JetBrains Mono

### Images
Replace placeholder images in `src/assets/images/` with your own:
- `profile.jpg` - Main profile photo
- `about-image.jpg` - About section image
- `project1.jpg` to `project6.jpg` - Project screenshots

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## ⚡ Performance Features

- Lazy loading for images
- Optimized bundle size
- Efficient animations
- Minimal external dependencies

## 🔧 Development

### Adding New Sections

1. Create a new component in `src/app/components/`
2. Add the component to the home component
3. Update the navigation in the header component

### Customizing Animations

The portfolio uses AOS (Animate On Scroll) for animations. Customize in `src/app/app.component.ts`:

```typescript
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

Ahmed Khalil - Senior .NET Engineer
- Email: progeng_ahmed_khalil@outlook.com
- LinkedIn: [Ahmed Khalil](https://www.linkedin.com/in/ahmed-khalil-b09abb176/)
- GitHub: [AhmedKhalil777](https://github.com/AhmedKhalil777)

---

Built with ❤️ using Angular 18


