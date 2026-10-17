# EvoPeople Professional Website

A modern, professional business website for EvoPeople OD Consulting built with React 18, TypeScript, and Vite.

## Features

- **React 18 + TypeScript**: Modern component architecture with strict type safety
- **Vite 5**: Fast development server and optimized production builds
- **Tailwind CSS 3**: Utility-first responsive design system
- **React Router v6**: Client-side routing with code splitting
- **Responsive Design**: Optimized for desktop, tablet, and mobile (320px - 1440px)
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Lighthouse 90+ target, <3s load time
- **SEO**: Semantic HTML, structured data, meta tags optimization
- **Analytics**: Google Analytics 4 integration
- **Forms**: Formspree integration for contact form handling
- **CI/CD**: GitHub Actions workflows for automated testing and deployment
- **GitHub Pages**: Zero-cost hosting with automatic deployments

## Prerequisites

- Node.js 18+
- npm 9+
- git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/evopeople-website.git
cd evopeople-website
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env and fill in your GA4 ID and Formspree endpoint
```

## Development

Start the development server:
```bash
npm run dev
```

The app will open in your browser at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run unit tests with Vitest
- `npm run test:ui` - Run tests with UI

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Header, Footer, Layout
│   ├── Common/         # Button, Card, Section, etc.
│   ├── Forms/          # Contact form components
│   └── SEO/            # Meta tags component
├── pages/              # Page-level components
├── layouts/            # Layout wrappers
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── data/               # Data files (services, content)
├── styles/             # Global styles
└── types/              # TypeScript type definitions
```

## Quality Standards

- **Linting**: ESLint with TypeScript support (zero warnings)
- **Type Safety**: TypeScript strict mode enabled
- **Testing**: Unit tests with Vitest (80%+ coverage target)
- **Formatting**: Prettier code formatting
- **Performance**: Lighthouse 90+ on all audits
- **Accessibility**: WCAG 2.1 AA compliance verification
- **Code Review**: PR-based workflow with quality gates

## Deployment

### GitHub Pages

The project automatically deploys to GitHub Pages when code is pushed to the `main` branch. The deployment workflow:

1. GitHub Actions runs on push to main
2. Dependencies are installed
3. Build is created
4. Built files are deployed to gh-pages branch

To enable GitHub Pages:
1. Go to repository Settings
2. Navigate to Pages section
3. Select "Deploy from a branch"
4. Choose `gh-pages` branch as source
5. Save

### Local Build

To build for production:
```bash
npm run build
```

Output will be in the `dist/` folder ready for deployment.

## Configuration

### Tailwind CSS

Custom design system in `tailwind.config.js`:
- Primary color: slate-900 (#0f172a)
- Secondary color: emerald-600 (#059669)
- Accent color: amber-500 (#f59e0b)
- Spacing: 8px base scale
- Typography: Inter font for readability

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_GA4_ID=G-XXXXXXXXXX
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/XXXXXXXXX
NODE_ENV=development
```

## Testing

### Unit Tests

Run unit tests:
```bash
npm run test
```

Watch mode:
```bash
npm run test:watch
```

### End-to-End Tests

(Playwright E2E tests coming in Phase 6)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Target: ES2020 JavaScript

## Performance Targets

- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- Total Load Time: < 3s on 4G network
- Bundle Size: < 100KB gzipped

## Accessibility

WCAG 2.1 Level AA compliance:
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Color contrast 4.5:1 (normal), 3:1 (large)
- Touch targets ≥ 44px
- Mobile-friendly responsive design

## SEO

- Semantic HTML markup
- Structured data (JSON-LD schema)
- Meta tags for all pages
- OG tags for social sharing
- Twitter card tags
- Robots.txt and sitemap.xml
- Fast page load times
- Mobile optimization

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on code style, testing, and contribution process.

## License

MIT

## Support

For issues or questions, please contact: contacto@evopeopleod.com

## Changelog

### v1.0.0 (Initial Release)
- React 18 + TypeScript foundation
- Responsive design (mobile-first)
- GA4 analytics integration
- Formspree contact form
- GitHub Pages deployment
- Accessibility (WCAG 2.1 AA)
- Performance optimization (Lighthouse 90+)
