# Tasks: EvoPeople Professional Website

**Project**: React 18 + TypeScript + Vite professional business website  
**Deployment**: GitHub Pages with GitHub Actions CI/CD  
**Timeline**: 18 days (7 implementation phases)  
**Tech Stack**: React 18, TypeScript 5, Vite 5, Tailwind CSS 3, React Router v6, Formspree, GA4  
**Quality Requirements**: Lighthouse 90+, WCAG 2.1 AA, <3s load time, 100% spec implementation

---

## Phase 1: Foundation & Project Setup (Days 1-2)

**Objective**: Scaffold the Vite project, configure development environment, set up deployment infrastructure

**Phase 1 Acceptance Criteria**:
- [ ] Vite dev server runs without errors (`npm run dev`)
- [ ] Production build succeeds (`npm run build` → dist/ folder)
- [ ] TypeScript compiles with zero errors (strict mode)
- [ ] GitHub Actions workflows trigger and pass
- [ ] All placeholder files and directory structure created per architecture plan
- [ ] Environment variables configured in .env.example

### Vite Project Initialization

- [ ] T001 Initialize Vite project with React 18 + TypeScript template
  - Run: `npm create vite@latest csa-od-page -- --template react-ts`
  - Install core dependencies: react, react-dom, react-router-dom, tailwindcss, typescript
  - Verify: `npm run dev` starts dev server without errors

- [ ] T002 [P] Install and configure ESLint with TypeScript support
  - Create `.eslintrc.json` with recommended config for React + TypeScript
  - Install: eslint, eslint-plugin-react, eslint-plugin-react-hooks, @typescript-eslint/eslint-plugin
  - Add npm script: `npm run lint`
  - Target: Zero errors or only style warnings on initial run

- [ ] T003 [P] Install and configure Prettier for code formatting
  - Create `.prettierrc` with consistent style settings
  - Install: prettier, prettier-plugin-tailwindcss
  - Add npm script: `npm run format`
  - Integrate Prettier with ESLint

- [ ] T004 [P] Configure TypeScript with path aliases and strict mode
  - Update `tsconfig.json`:
    - Set `strict: true`, `noImplicitAny: true`, `noUnusedLocals: true`
    - Add path aliases: `@/components`, `@/utils`, `@/pages`, `@/hooks`, `@/data`
  - Verify: `npm run type-check` shows zero errors

- [ ] T005 [P] Create root `.env.example` with required environment variables
  - Variables: `GA4_ID`, `FORMSPREE_ENDPOINT`, `NODE_ENV`
  - Add instructions for copying to `.env` and filling in values
  - Ensure `.env` is in `.gitignore`

- [ ] T006 Create `.gitignore` with Node.js, Vite, IDE, and OS exclusions
  - Include: node_modules/, dist/, .env, .DS_Store, .vscode/, *.log, coverage/

- [ ] T007 [P] Create `.github/workflows/deploy.yml` for GitHub Pages CI/CD
  - Trigger: On push to main branch
  - Steps: (1) Checkout code, (2) Install dependencies, (3) Run build, (4) Deploy to gh-pages branch
  - Configure base path for GitHub Pages (repo name in URL)
  - Set permissions for GITHUB_TOKEN

- [ ] T008 [P] Create `.github/workflows/quality-checks.yml` for PR/push validation
  - Trigger: On PR or push to main
  - Steps: (1) Lint check, (2) Type check, (3) Run tests, (4) Lighthouse audit
  - Fail on ESLint/TypeScript errors
  - Report Lighthouse scores in PR comment

- [ ] T009 [P] Create full directory structure per architecture plan
  - Create folders: src/components/, src/pages/, src/layouts/, src/hooks/, src/utils/, src/data/, src/styles/
  - Create subfolders: components/Layout/, components/Common/, components/Forms/, components/SEO/
  - Create test folders: tests/components/, tests/pages/, tests/utils/
  - Create public assets folder: public/

- [ ] T010 [P] Create placeholder files for all components, pages, and utilities
  - Pages: Home.tsx, About.tsx, Services.tsx, ServiceDetail.tsx, Contact.tsx, NotFound.tsx
  - Components: Layout/Header.tsx, Layout/Footer.tsx, Layout/Layout.tsx, Common/Button.tsx, Common/Card.tsx, Common/Section.tsx, Common/CTA.tsx, Common/Breadcrumb.tsx, Common/Image.tsx
  - Forms: ContactForm.tsx, FormField.tsx
  - SEO: Meta.tsx
  - Hooks: usePageTitle.ts, useScrollToTop.ts, useMediaQuery.ts
  - Utils: seo.ts, content.ts, analytics.ts, constants.ts, types.ts

- [ ] T011 [P] Create package.json scripts for development workflow
  - Scripts: `dev` (Vite dev server), `build` (production build), `preview` (build preview), `lint` (ESLint), `format` (Prettier), `type-check` (tsc), `test` (Vitest), `test:watch` (watch mode), `e2e` (Playwright), `lighthouse` (Lighthouse CI)
  - Verify all scripts execute without errors

- [ ] T012 [P] Create `vite.config.ts` with React plugin and optimizations
  - Configure React plugin for JSX
  - Set up path aliases matching tsconfig.json
  - Configure base path for GitHub Pages deployment
  - Enable production minification and code splitting
  - Set output directory to `dist/`

- [ ] T013 [P] Create `tsconfig.json` with strict type checking and React settings
  - Target: ES2020 or later
  - Module: ESNext (for Vite)
  - JSX: react-jsx
  - Strict mode: true
  - All noUnused* options: true
  - Skip lib check: false (validate node_modules types)

- [ ] T014 Create `README.md` with setup and development instructions
  - Sections: (1) Project Overview, (2) Prerequisites, (3) Installation, (4) Development Setup, (5) Build & Deployment, (6) Testing, (7) Project Structure, (8) Troubleshooting
  - Include commands for `npm run dev`, `npm run build`, `npm run test`, `npm run lint`

- [ ] T015 Create `CONTRIBUTING.md` documenting code standards and conventions
  - Code style guidelines (ESLint, Prettier)
  - TypeScript best practices (strict mode, no any)
  - Component structure patterns
  - Testing requirements (unit tests for components)
  - PR review checklist (linting, tests, Lighthouse)

- [ ] T016 Initialize Git repository and verify initial commit
  - Run: `git init` && `git add .` && `git commit -m "Initial commit: Vite setup"`
  - Verify: `git log` shows initial commit
  - Verify: Remote origin configured for GitHub

- [ ] T017 Verify GitHub Actions workflows trigger successfully
  - Push code to main or feature branch
  - Wait for GitHub Actions to run
  - Verify: All workflow jobs pass (lint, type-check, build)
  - Verify: Artifacts generated (dist/ folder in build job)

- [ ] T018 Verify production build outputs optimized bundle to dist/
  - Run: `npm run build`
  - Verify: dist/ folder created with optimized files
  - Check file sizes: main bundle < 100KB gzipped (target)
  - Verify: No console errors or TypeScript warnings

---

## Phase 2: Design System & Core Components (Days 3-5)

**Objective**: Establish visual identity via Tailwind CSS and build reusable component library

**Phase 2 Acceptance Criteria**:
- [ ] All 13+ core components render without errors
- [ ] Responsive design verified at 320px, 768px, 1440px breakpoints
- [ ] Tailwind build optimized (unused styles removed)
- [ ] Design system tokens (colors, typography, spacing) consistent
- [ ] Unit tests written for core components (Button, Card, FormField)
- [ ] Component documentation or Storybook (optional) created

### Tailwind & Global Styles

- [ ] T019 Configure Tailwind CSS with custom design system
  - Create `src/styles/tailwind.config.ts` with:
    - Colors: slate (neutral), emerald-600 (secondary), amber-500 (accent), red-600 (error)
    - Typography: Inter font (headings + body), JetBrains Mono (code)
    - Spacing scale: 8px base (0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128)
    - Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
    - Extend: custom utilities for consistent patterns

- [ ] T020 [P] Define typography hierarchy and font setup
  - Heading styles: h1 (3rem), h2 (2.25rem), h3 (1.875rem), h4 (1.5rem), h5 (1.25rem), h6 (1rem)
  - Body text: 16px base, line-height 1.6
  - Import Inter font: Use @import from Google Fonts or system fonts
  - Create CSS classes for each heading level

- [ ] T021 [P] Create global styles in `src/styles/globals.css`
  - Tailwind imports: @tailwind base, components, utilities
  - Reset browser defaults
  - Configure base body styling (font, colors, line-height)
  - Define custom CSS variables if needed

- [ ] T022 [P] Create component-specific styles in `src/styles/components.css`
  - Utility classes for common component patterns
  - Shadows, borders, transitions
  - Responsive spacing helpers
  - Animation keyframes (fade, slide, etc.)

### Layout Components

- [ ] T023 Create `src/components/Layout/Header.tsx`
  - Features: Fixed/sticky nav, logo/brand, nav links (Home, About, Services, Contact)
  - Mobile: Hamburger menu (using Tailwind)
  - Desktop: Horizontal nav links
  - Active link indicator based on current route
  - Smooth scroll behavior, proper z-index layering

- [ ] T024 Create `src/components/Layout/Footer.tsx`
  - Contact info: Email (contacto@evopeopleod.com), LinkedIn URL
  - Footer nav: Home, Services, About, Contact (matching main nav)
  - Copyright: "© 2026 EvoPeople OD Consulting. All rights reserved."
  - Social icons with links and accessible aria-labels
  - Background color: slate-900 (contrasts with body)

- [ ] T025 Create `src/components/Layout/Layout.tsx`
  - Wrapper component: Header + children + Footer
  - Ensures layout components persist across route changes
  - Manages layout-wide state (mobile menu open/close)

### Common Components

- [ ] T026 [P] Create `src/components/Common/Button.tsx`
  - Variants: primary (emerald-600), secondary (slate-200), tertiary (text only), ghost (no style)
  - Sizes: sm (12px), md (16px), lg (18px)
  - States: default, hover, active, disabled
  - Support: text links, external links, form buttons
  - Accessibility: proper tabIndex, disabled state

- [ ] T027 [P] Create `src/components/Common/Card.tsx`
  - Flexible card layout with configurable padding (px-4, px-6, px-8)
  - Shadow variants: none, sm, md, lg
  - Border options: none, 1px solid, rounded corners
  - Optional image support (top or side)
  - Optional link wrapper for clickable cards
  - Hover effects (scale, shadow)

- [ ] T028 [P] Create `src/components/Common/Section.tsx`
  - Standard page section wrapper with consistent vertical spacing
  - Background color variants: white, light gray (slate-50), dark (slate-900)
  - Responsive horizontal padding: mobile (px-4), tablet (px-6), desktop (px-12)
  - Manage max-width container (1280px)
  - Optional section title/heading

- [ ] T029 Create `src/components/Common/CTA.tsx`
  - Call-to-action block with headline + description + button
  - Headline: 24-32px, bold
  - Description: 16px, supporting text
  - Button: Primary or secondary variant
  - Layout: Centered, with vertical spacing
  - Color variants: light (default), dark (slate-900 bg)

- [ ] T030 [P] Create `src/components/Common/Breadcrumb.tsx`
  - Hierarchical navigation: Home > Services > [Current Page]
  - Last item not a link (current page)
  - Arrow separator between items
  - Keyboard accessible (Tab through links)
  - aria-current="page" for current breadcrumb item

- [ ] T031 [P] Create `src/components/Common/Image.tsx`
  - Lazy loading by default (loading="lazy")
  - Responsive sizing (width and height props)
  - Optional next-gen format support (AVIF, WebP)
  - Alt text required (accessibility)
  - Optional fill (cover) or contain (aspect-ratio) modes

### Form Components

- [ ] T032 Create `src/components/Forms/FormField.tsx`
  - Reusable input wrapper with label + input + error message
  - Support types: text, email, textarea, select
  - Error state styling (red border, error text)
  - Optional helper text below input
  - Label associated via htmlFor
  - aria-describedby linking error messages

- [ ] T033 Create `src/components/Forms/ContactForm.tsx`
  - Fields: Name (required), Email (required), Service Type (select dropdown), Message (textarea)
  - Client-side validation:
    - Name: Required, 2-100 chars, letters/spaces/hyphens only
    - Email: Valid RFC 5322 format
    - Service Type: Must select valid service
    - Message: Required, 10-2000 chars
  - Formspree integration (POST to FORMSPREE_ENDPOINT env var)
  - States: Idle, Validating, Submitting, Success, Error
  - Success message: "Thank you! We'll be in touch soon."
  - Error handling with retry button
  - Accessibility: Form labels, error messaging, keyboard nav

### SEO & Utility Components

- [ ] T034 Create `src/components/SEO/Meta.tsx`
  - Dynamic meta tags: title, description, keywords
  - Open Graph tags: og:title, og:description, og:image, og:url, og:type
  - Twitter Card tags: twitter:card, twitter:title, twitter:description, twitter:image
  - Canonical URL (prevents duplicate indexing)
  - Structured data support (JSON-LD)
  - Pass all meta data as props from pages

- [ ] T035 [P] Create `src/utils/seo.ts` with SEO helper functions
  - `generateMetaTags()`: Generate all meta tags for a page
  - `getCanonicalUrl()`: Build canonical URL for current page
  - `getSchemaMarkup()`: Generate JSON-LD schema for different page types (Organization, Service, LocalBusiness)
  - `getMeta()`: Centralized meta tag data store per route

- [ ] T036 [P] Create `src/utils/types.ts` with TypeScript interfaces
  - Service interface: id, title, description, keywords, engagementModel, focusAreas, relatedServiceIds
  - NavigationItem interface: label, href, children, isExternal, isActive
  - FormData interface: name, email, serviceType, message, submittedAt, sourceUrl
  - PageMetaTags interface: title, description, keywords, og, twitter, canonical
  - SiteMetadata interface: name, founder, contact, social, analytics

- [ ] T037 [P] Create `src/utils/constants.ts` with app-wide constants
  - Site name: "EvoPeople OD Consulting"
  - Tagline: "Transforming Talent. Enabling Leadership. Driving Organizational Excellence."
  - Email: contacto@evopeopleod.com
  - Social links: LinkedIn, Twitter (if applicable)
  - API endpoints: Formspree endpoint
  - Route paths: home, about, services, contact, notfound

- [ ] T038 [P] Create `src/utils/analytics.ts` with GA4 event tracking
  - `trackPageView()`: Track page views (auto-called by routing)
  - `trackEvent()`: Generic event tracking (category, action, label, value)
  - `trackFormSubmission()`: Track contact form submission
  - `trackCTAClick()`: Track call-to-action clicks
  - `trackServiceView()`: Track service page views
  - Initialize GA4 on app startup

### Testing Setup & Core Tests

- [ ] T039 [P] Configure Vitest for unit testing
  - Create `vitest.config.ts` (extends Vite config)
  - Install: vitest, @vitest/ui, @testing-library/react, @testing-library/user-event
  - Create `tests/setup.ts` with testing library setup
  - Configure jsdom environment for DOM testing

- [ ] T040 [P] Create test setup file `tests/setup.ts`
  - Extend matchers (custom assertions)
  - Mock GA4 (gtag) to avoid tracking in tests
  - Mock environment variables
  - Set up test utilities (render, screen, fireEvent)

- [ ] T041 [P] Write unit tests for Button component
  - Test: Renders text correctly
  - Test: All variants render (primary, secondary, tertiary, ghost)
  - Test: All sizes render (sm, md, lg)
  - Test: Disabled state prevents clicks
  - Test: onClick handler fires
  - Target coverage: 100%

- [ ] T042 [P] Write unit tests for Card component
  - Test: Renders children correctly
  - Test: All shadow variants apply
  - Test: Border variants apply
  - Test: Link wrapper works (clickable card)
  - Test: Image renders with lazy loading
  - Target coverage: 90%+

- [ ] T043 [P] Write unit tests for FormField component
  - Test: Label renders and links to input
  - Test: All input types render (text, email, textarea, select)
  - Test: Error message displays
  - Test: Error state styling applied
  - Test: Helper text displays
  - Target coverage: 90%+

- [ ] T044 Verify Tailwind CSS build is optimized
  - Run production build: `npm run build`
  - Check: Tailwind CSS file size (target < 50KB gzipped)
  - Verify: Only used classes included (PurgeCSS removed unused)
  - No unused CSS from all utility classes

---

## Phase 3: Page Development & Content Integration (Days 6-12)

**Objective**: Build all page components, integrate content from specification, set up routing

**Phase 3 Acceptance Criteria**:
- [ ] All 7+ pages render without errors
- [ ] Navigation works across all pages
- [ ] Mobile responsive verified on all pages (320px, 768px, 1440px)
- [ ] Content matches specification exactly (from CONTENT_MAPPING.md)
- [ ] Page load times < 3 seconds (Lighthouse)
- [ ] Meta tags properly configured for SEO on each page
- [ ] All internal links working (no 404s)

### Routing Setup

- [ ] T045 Configure React Router v6 in `src/App.tsx`
  - Routes: Home (/), About (/about), Services (/services), ServiceDetail (/services/:id), Contact (/contact), NotFound (404)
  - Nested routes with Layout wrapper (Header, Footer persist)
  - Lazy loading for pages: `React.lazy()` + `<Suspense fallback>`
  - Dynamic service routes from services.json data
  - 404 fallback for unmatched routes

- [ ] T046 [P] Create `src/pages/NotFound.tsx` (404 error page)
  - Headline: "Page Not Found" or "404"
  - Message: "Sorry, the page you're looking for doesn't exist."
  - CTA button: "Return to Home" → navigates to /
  - Match design system styling

- [ ] T047 Create `src/hooks/useScrollToTop.ts`
  - Scroll to top of page on route change
  - Called from Layout component on every route navigation
  - Smooth scroll behavior (optional)

- [ ] T048 Create `src/hooks/usePageTitle.ts`
  - Hook for setting page title and meta description
  - Called from each page component: `usePageTitle({ title: "...", description: "..." })`
  - Updates document.title and calls Meta.tsx
  - Returns meta data for current page

- [ ] T049 Create `src/layouts/PageLayout.tsx`
  - Standard page wrapper with consistent structure
  - Props: children, title, description, meta
  - Renders Meta.tsx with SEO data
  - Handles loading state (if applicable)

### Content Data Files

- [ ] T050 Create `src/data/services.json` with all 6 services
  - Copy from SERVICES_DATA.json: id, title, description, keywords
  - Add: fullDescription, engagementModel, focusAreas, relatedServiceIds
  - Validate JSON structure matches data-model.md Service interface
  - Services (6 total):
    1. Talent Strategy & OD
    2. Leadership Development
    3. Talent Management & Succession Planning
    4. Culture & Change Management
    5. Performance Management
    6. Strategic HR Advisory

- [ ] T051 Create `src/data/copy.json` with UI copy and content
  - Global: site name, tagline, email, founder name/title
  - Home: hero headline, subheading, value props, service overview intro
  - About: philosophy headline, approach description, founder bio, engagement model
  - Services: page headline, service intro copy
  - Contact: form heading, form subheading, contact info
  - Footer: copyright text, social labels

- [ ] T052 Create `src/data/navigation.json` with navigation structure
  - Main nav (header): Home, About, Services, Contact
  - Footer nav: Home, Services, About, Contact
  - Each item: label, href, optional ariaLabel
  - Format: array of NavigationItem objects

- [ ] T053 Create `src/utils/content.ts` for data management
  - `loadServices()`: Load and parse services.json, return Service[]
  - `loadCopy()`: Load and parse copy.json, return content object
  - `loadNavigation()`: Load and parse navigation.json, return NavigationItem[]
  - Error handling: Validate loaded data, log warnings if missing
  - Caching: Cache loaded data in module scope (loaded once on app init)
  - TypeScript types: All functions properly typed

### Homepage

- [ ] T054 Create `src/pages/Home.tsx`
  - Import: Meta (SEO), all section components
  - Structure:
    1. Hero section (headline, subheading, CTA button)
    2. Value proposition (3 key values: Strategic Vision, Practical Execution, Measurable Impact)
    3. Service overview grid (6 cards, each with title, description, link to /services)
    4. Credibility section (15+ years, proven approach, client focus)
    5. Final CTA (Contact or Explore Services button)
  - Meta: Set title, description, keywords for SEO
  - Content: From copy.json and CONTENT_MAPPING.md

- [ ] T055 [P] Create `src/components/Home/HeroSection.tsx`
  - Large headline (48-64px)
  - Subheading (24px)
  - Hero image or background color (slate-900)
  - CTA button (primary): "Explore Services"
  - Responsive text sizing: 32px mobile, 48px+ desktop
  - Vertical centering and spacing

- [ ] T056 [P] Create `src/components/Home/ValuePropositionSection.tsx`
  - 3 value cards (grid layout)
  - Each card: Icon (optional), title, description
  - Responsive: 1 column mobile, 3 columns desktop
  - Background: light gray (slate-50)

- [ ] T057 [P] Create `src/components/Home/ServiceOverviewGrid.tsx`
  - 6 service cards (grid layout)
  - Each card: Title, 1-2 sentence description, "Learn More" link
  - Responsive: 1 column mobile, 2 columns tablet, 3 columns desktop
  - Card hover effect (shadow, scale)
  - Links to `/services` (or `/services/:id` for detail view)

- [ ] T058 [P] Create `src/components/Home/CredibilitySection.tsx`
  - Headline: "Why EvoPeople?"
  - 3-4 trust anchors (15+ years experience, strategic + execution, client-focused)
  - Background: white or dark section
  - Small icons or bullet points

- [ ] T059 Create `src/pages/Home.tsx` (compose all sections)
  - Import all section components
  - Set page title, meta description
  - Render: Hero → Value Props → Services Grid → Credibility → Final CTA
  - Verify mobile and desktop layouts

### About / Our Approach Page

- [ ] T060 Create `src/pages/About.tsx`
  - Sections: Philosophy, Approach, Founder Bio, Engagement Model, Why EvoPeople
  - Meta: Set title, description for SEO
  - Content: From CONTENT_MAPPING.md §3-4

- [ ] T061 [P] Create `src/components/About/PhilosophySection.tsx`
  - Headline: "A Strategic Vision for Organizational Excellence"
  - Body text: Explanation of OD approach, business impact
  - Background: light or white
  - Responsive text sizing

- [ ] T062 [P] Create `src/components/About/ApproachSection.tsx`
  - Headline: "Our Approach"
  - 3-4 approach pillars (Strategic, Practical, Results-Oriented)
  - Each with description
  - Grid or card layout

- [ ] T063 [P] Create `src/components/About/FounderBio.tsx`
  - Name: Cristina Segura
  - Title: "Strategic Partner in Talent, Leadership & Organizational Development"
  - Bio: "15+ years in HR and Organizational Development"
  - Additional background (optional photo)
  - Content: From CONTENT_MAPPING.md §2.4

- [ ] T064 [P] Create `src/components/About/EngagementModelSection.tsx`
  - Headline: "Our Engagement Model"
  - 4-step process:
    1. Strategic Assessment
    2. Solution Design
    3. Implementation
    4. Impact Measurement
  - Each step with description and visual indicator (number or icon)

- [ ] T065 Create `src/pages/About.tsx` (compose all sections)
  - Import all About section components
  - Set page title, meta description
  - Render: Philosophy → Approach → Founder Bio → Engagement Model → Why Choose Us

### Services Pages

- [ ] T066 Create `src/pages/Services.tsx` (Services index)
  - Meta: Set title, description
  - Headline: "Our Services" or similar
  - 6 service cards in grid layout
  - Each card: Title, description (100-150 chars), "Learn More" link to `/services/:id`
  - Load services from services.json
  - Final CTA: "Let's discuss your challenges"

- [ ] T067 Create `src/pages/ServiceDetail.tsx` (individual service page)
  - Dynamic route: `/services/:serviceId`
  - Load service by ID from services.json
  - Sections:
    1. Service hero (title, short description, breadcrumb)
    2. Problem statement (challenges organizations face)
    3. Approach section (methodology overview)
    4. Engagement structure (typical engagement details)
    5. Outcomes section (key results and impact)
    6. Related services (links to other services)
    7. Contact CTA (bottom of page)
  - Meta: Set title, description, keywords per service
  - Handle 404: If service not found, show NotFound page

- [ ] T068 [P] Create `src/components/Services/ServiceCard.tsx`
  - Card component for service listing
  - Props: title, description, serviceId, link
  - Renders Card component with icon (optional)
  - Link to `/services/:serviceId`
  - Hover effect

### Contact Page

- [ ] T069 Create `src/pages/Contact.tsx`
  - Meta: Set title, description
  - Sections:
    1. Contact header (headline, subheading)
    2. Contact form (Name, Email, Service Type, Message)
    3. Contact info (Email, LinkedIn, location)
  - Content: From CONTENT_MAPPING.md §5
  - Formspree integration for form submission
  - Success message after submit

- [ ] T070 [P] Create `src/components/Contact/ContactHeader.tsx`
  - Headline: "Get in Touch"
  - Subheading: "Let's discuss how we can help your organization"
  - Simple, professional styling

- [ ] T071 [P] Create `src/components/Contact/ContactForm.tsx` integration
  - Embed ContactForm.tsx component (from Phase 2)
  - Pre-populate service type if coming from service detail page
  - Handle form submission and success state
  - Display error messages if submission fails

- [ ] T072 [P] Create `src/components/Contact/ContactInfo.tsx`
  - Display contact information:
    - Email: contacto@evopeopleod.com
    - Location: Ciudad de México, México
    - LinkedIn: link to Cristina Segura's profile
  - Responsive layout (desktop: side-by-side with form, mobile: below form)

- [ ] T073 Create `src/pages/Contact.tsx` (compose sections)
  - Import ContactHeader, ContactForm, ContactInfo
  - Set page title, meta description
  - Layout: Form on left/top, info on right/bottom
  - Verify responsive design

### Verification & Linking

- [ ] T074 Verify all internal links (no 404s)
  - Test: Home → About (✅)
  - Test: Home → Services (✅)
  - Test: Services → ServiceDetail → Related Services (✅)
  - Test: All pages have working navigation
  - Test: Footer links work
  - Test: Breadcrumbs navigate correctly

- [ ] T075 [P] Test all page routes load correctly
  - /, /about, /services, /services/:id (all 6), /contact, /notfound
  - Each page loads in < 2 seconds
  - No console errors or warnings
  - All components render without crashes

- [ ] T076 [P] Verify responsive design on all pages
  - Test at 320px (mobile): Single column, readable text, no horizontal scroll
  - Test at 768px (tablet): 2-column layouts work
  - Test at 1440px (desktop): Full layouts, proper spacing
  - Images scale appropriately
  - No content cut off

---

## Phase 4: SEO & Performance Optimization (Days 13-14)

**Objective**: Optimize for search engines and performance, ensure Lighthouse 90+

**Phase 4 Acceptance Criteria**:
- [ ] Lighthouse scores ≥ 90 all audits (Performance, Accessibility, Best Practices, SEO)
- [ ] Core Web Vitals passing (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Meta tags and structured data verified for all pages
- [ ] robots.txt and sitemap.xml configured
- [ ] Page load time < 3 seconds on 4G

### Search Engine Optimization

- [ ] T077 Create `public/sitemap.xml` for SEO
  - List all pages: /, /about, /services, /services/:id (6), /contact
  - Include: URL, lastmod, changefreq, priority
  - Update automatically via build script (optional)
  - Format: Valid XML for search engines

- [ ] T078 Create `public/robots.txt` with crawling directives
  - Allow: / (allow all crawling)
  - Disallow: /admin (if any private pages)
  - Sitemap: /sitemap.xml
  - User-agent: * (for all bots)

- [ ] T079 Implement structured data (JSON-LD) for all pages
  - Homepage: Organization schema (name, URL, logo, description, social profiles)
  - Services: Service schema (name, description, provider)
  - Service Detail: DetailedService schema (name, description, address, telephone)
  - Contact: LocalBusiness schema (name, address, telephone, email)
  - Use seo.ts utility functions to generate schemas

- [ ] T080 [P] Verify and optimize meta tags per page
  - Title: 30-60 characters (SEO optimal)
  - Description: 155-160 characters (SEO optimal)
  - Keywords: 3-5 relevant keywords per page
  - og:image: 1200x630px recommended
  - twitter:image: 1200x675px recommended
  - Canonical URL: All pages have canonical tag

- [ ] T081 [P] Optimize images for performance
  - Add lazy loading attribute: `loading="lazy"`
  - Use next-gen formats: AVIF or WebP (fallback to JPG)
  - Optimize file sizes: Target < 100KB per image
  - Responsive images: srcset for different screen sizes
  - Use Image.tsx component for all images

- [ ] T082 [P] Implement code splitting with React.lazy()
  - Lazy load all pages: Home, About, Services, ServiceDetail, Contact
  - Wrap with <Suspense fallback={<LoadingSpinner />}>
  - Verify bundle split in production build (separate chunk per route)
  - Target: Main bundle < 50KB, service chunks < 20KB each

- [ ] T083 [P] Optimize CSS bundle size
  - Run Tailwind PurgeCSS to remove unused styles
  - Verify Tailwind CSS file < 30KB gzipped
  - Remove any unused custom CSS
  - Check build output for CSS optimizations

### Performance & Core Web Vitals

- [ ] T084 [P] Optimize Largest Contentful Paint (LCP)
  - Target: < 2.5s
  - Defer non-critical CSS/JS
  - Preload critical fonts (Inter)
  - Lazy load images below fold
  - Minimize render-blocking resources

- [ ] T085 [P] Optimize First Input Delay (FID) / Interaction to Next Paint (INP)
  - Target: < 100ms
  - Break up long JavaScript tasks (< 50ms blocks)
  - Defer non-critical JavaScript
  - Optimize event handlers for forms
  - Use requestIdleCallback() for non-urgent work

- [ ] T086 [P] Optimize Cumulative Layout Shift (CLS)
  - Target: < 0.1
  - Use width/height attributes on images
  - Reserve space for lazy-loaded content
  - Avoid inserting content above existing content
  - Use font-display: swap for web fonts

- [ ] T087 Run Lighthouse audit and verify all scores ≥ 90
  - Command: `npm run lighthouse`
  - Performance: ≥ 90
  - Accessibility: ≥ 90
  - Best Practices: ≥ 90
  - SEO: ≥ 90
  - Fix any failing audits (console errors, warnings, slow metrics)

- [ ] T088 [P] Verify Core Web Vitals with real-world testing
  - Use PageSpeed Insights, GTmetrix, or WebPageTest
  - LCP: < 2.5s
  - FID: < 100ms
  - CLS: < 0.1
  - Document baseline metrics for monitoring

### Accessibility Compliance

- [ ] T089 Verify WCAG 2.1 Level AA compliance
  - Use axe DevTools or Lighthouse accessibility audit
  - Ensure all interactive elements are keyboard accessible
  - Check color contrast ratios (4.5:1 for normal text, 3:1 for large text)
  - Verify all images have alt text
  - Test with screen readers (NVDA, JAWS, VoiceOver)

- [ ] T090 Run automated accessibility scan
  - Use axe-core or Lighthouse accessibility audit
  - Fix all violations (Level A and AA)
  - Warning: Check WCAG best practices (Level AAA recommendations)
  - Document any exceptions to accessibility compliance

---

## Phase 5: Analytics & Form Integration (Days 14-15)

**Objective**: Set up Google Analytics 4 tracking and verify Formspree email delivery

**Phase 5 Acceptance Criteria**:
- [ ] GA4 script loads successfully
- [ ] Page view events tracking in real-time
- [ ] Form submission events tracked
- [ ] CTA click events tracked
- [ ] Formspree email delivery verified
- [ ] Contact form submissions appear in email

### Google Analytics 4 Setup

- [ ] T091 Configure GA4 initialization in `src/main.tsx`
  - Load gtag.js script with GA4_ID from environment
  - Initialize Google Analytics on app startup
  - Handle missing GA4_ID gracefully (disable tracking in development)
  - Track page views automatically

- [ ] T092 [P] Integrate GA4 tracking in routing
  - Track page_view event on route change
  - Include page_title, page_path parameters
  - Use useEffect in App.tsx or custom hook
  - Verify events in GA4 real-time dashboard

- [ ] T093 [P] Implement custom GA4 events in `src/utils/analytics.ts`
  - `trackEvent(category, action, label, value)`: Generic event tracking
  - `trackFormSubmission()`: Called on successful form submit
  - `trackCTAClick(buttonName)`: Called on CTA button clicks
  - `trackServiceView(serviceId)`: Called when viewing service detail
  - `trackEngagementTime()`: Track time on page (optional)

- [ ] T094 [P] Add GA4 event tracking to Contact form
  - Track form submission attempt
  - Track form submission success
  - Track form submission error (with error message)
  - Verify events appear in GA4 real-time with parameters

- [ ] T095 [P] Add GA4 event tracking to CTA buttons
  - Track clicks on "Explore Services" button
  - Track clicks on "Learn More" service links
  - Track clicks on "Get in Touch" CTA
  - Include button text and page path in event

### Form Integration & Email Delivery

- [ ] T096 Configure Formspree form endpoint
  - Create Formspree account (formspree.io)
  - Set up form for contacto@evopeopleod.com
  - Get FORMSPREE_ENDPOINT (form action URL)
  - Add to .env file and .env.example

- [ ] T097 Test Formspree email delivery
  - Fill and submit contact form locally
  - Verify email received at contacto@evopeopleod.com within 5 minutes
  - Check email content: Name, Email, Service Type, Message all present
  - Test with different service types
  - Test error handling (wrong email format, etc.)

- [ ] T098 [P] Add form submission feedback
  - Show "Sending..." state while submitting
  - Show success message on successful submission
  - Show error message on failure (with retry button)
  - Clear form fields on success
  - Auto-focus error message for accessibility

- [ ] T099 [P] Implement client-side form validation
  - Name: Required, 2-100 chars, letters/spaces/hyphens/apostrophes
  - Email: Valid RFC 5322 format
  - Service Type: Must select valid service
  - Message: Required, 10-2000 chars
  - Show inline error messages
  - Prevent submit if validation fails

---

## Phase 6: Testing & Quality Assurance (Days 15-17)

**Objective**: Comprehensive testing, manual QA, performance verification

**Phase 6 Acceptance Criteria**:
- [ ] All unit tests pass (≥ 80% coverage for components)
- [ ] All E2E tests pass (main user journeys)
- [ ] All manual QA scenarios pass (from quickstart.md)
- [ ] Lighthouse scores ≥ 90 all pages
- [ ] No console errors or warnings
- [ ] Accessibility audit passes (WCAG 2.1 AA)

### Unit Testing

- [ ] T100 [P] Expand component unit test coverage
  - Test all layout components (Header, Footer)
  - Test all common components (Button, Card, Section, CTA, Breadcrumb)
  - Test all form components (ContactForm, FormField)
  - Test all SEO components (Meta)
  - Target coverage: 80%+ for all components

- [ ] T101 [P] Write unit tests for utility functions
  - Test seo.ts functions (generateMetaTags, getSchemaMarkup)
  - Test analytics.ts functions (trackEvent, trackFormSubmission)
  - Test content.ts functions (loadServices, loadCopy)
  - Test error handling and edge cases
  - Target coverage: 80%+

- [ ] T102 [P] Write unit tests for custom hooks
  - Test usePageTitle hook (sets document.title, meta tags)
  - Test useScrollToTop hook (scrolls to top on mount)
  - Test useMediaQuery hook (returns correct breakpoint)
  - Test with different screen sizes and states
  - Target coverage: 80%+

- [ ] T103 [P] Run unit tests with coverage report
  - Command: `npm run test:coverage`
  - Verify: Coverage report generated in coverage/ directory
  - Verify: All critical components have 80%+ coverage
  - Identify any untested code paths
  - Add tests for gaps

- [ ] T104 Verify all unit tests pass
  - Command: `npm run test`
  - Result: All tests pass (zero failures)
  - No console errors or warnings during tests
  - Test duration: < 30 seconds for full suite

### End-to-End Testing (Playwright)

- [ ] T105 [P] Configure Playwright for E2E testing
  - Create `playwright.config.ts`
  - Configure browser targets: Chromium, Firefox (Safari optional)
  - Set baseURL to http://localhost:5173
  - Configure test timeout: 30s
  - Set up parallel execution

- [ ] T106 [P] Write E2E test for homepage flow
  - Load homepage
  - Verify hero section loads
  - Click "Explore Services" button
  - Verify navigation to /services
  - Verify services grid renders with 6 services

- [ ] T107 [P] Write E2E test for services flow
  - Navigate to /services
  - Verify 6 service cards render
  - Click on first service card
  - Verify navigation to /services/:id
  - Verify service detail page loads with title, description, breadcrumb

- [ ] T108 [P] Write E2E test for contact form flow
  - Navigate to /contact
  - Fill form: Name, Email, Service Type, Message
  - Click Submit button
  - Verify success message appears
  - Verify form clears or disables
  - Check GA4 event tracking

- [ ] T109 [P] Write E2E test for navigation flow
  - Test: Home → About (✅)
  - Test: About → Services (✅)
  - Test: Services → Contact (✅)
  - Test: Footer links work
  - Test: Mobile hamburger menu works (mobile viewport)

- [ ] T110 Run E2E tests and verify all pass
  - Command: `npm run e2e`
  - Result: All E2E tests pass (zero failures)
  - Verify tests run against production build (npm run build first)
  - Document any flaky tests

### Manual QA Testing (Per quickstart.md)

- [ ] T111 Manual QA: Homepage Load & Navigation
  - Load homepage (http://localhost:5173/)
  - Verify all sections load: Hero, Value Props, Services Grid, Credibility, CTA
  - Test responsive design: 375px, 768px, 1440px
  - Verify navigation links work
  - Verify page load time < 2 seconds

- [ ] T112 Manual QA: Services Page & Details
  - Load /services page
  - Verify 6 service cards render
  - Click on each service → verify detail page loads
  - Verify breadcrumb navigation
  - Verify content matches spec
  - Test responsive design

- [ ] T113 Manual QA: About Page & Founder Bio
  - Load /about page
  - Verify all sections: Philosophy, Approach, Founder Bio, Engagement Model
  - Verify founder info: Name (Cristina Segura), Title, Bio (15+ years)
  - Test responsive design
  - Verify content matches CONTENT_MAPPING.md

- [ ] T114 Manual QA: Contact Form Submission
  - Fill contact form with valid data
  - Click Submit
  - Verify success message appears
  - Check email received at contacto@evopeopleod.com
  - Test form validation (invalid email, empty fields)
  - Test error handling (submit while offline)

- [ ] T115 Manual QA: Mobile Experience
  - Test at 375px (mobile phone)
  - Verify touch targets ≥ 44px
  - Verify all content readable (no horizontal scroll)
  - Test hamburger menu (Header)
  - Test form inputs (mobile keyboard)
  - Verify images scale appropriately

- [ ] T116 Manual QA: Accessibility (WCAG 2.1 AA)
  - Keyboard navigation: Tab through entire page
  - Screen reader: Test with VoiceOver/NVDA
  - Color contrast: Verify 4.5:1 for text
  - Form labels: Verify all linked with htmlFor
  - Error messages: Verify descriptive and linked
  - Link text: Verify descriptive (not "click here")

- [ ] T117 Manual QA: SEO & Meta Tags
  - View page source
  - Verify meta tags (title, description, og:*, twitter:*)
  - Verify structured data (JSON-LD)
  - Verify canonical URLs
  - Verify robots.txt and sitemap.xml accessible
  - Check all pages have unique titles/descriptions

- [ ] T118 Manual QA: Analytics & Tracking
  - Open GA4 dashboard (real-time)
  - Navigate pages: Verify page_view events
  - Click CTA buttons: Verify events track
  - Submit contact form: Verify event tracks
  - Verify all events have correct parameters

### Performance & Quality Verification

- [ ] T119 [P] Run Lighthouse audit on all pages
  - Homepage: Performance ≥ 90, SEO ≥ 90, Accessibility ≥ 90, Best Practices ≥ 90
  - About: All scores ≥ 90
  - Services: All scores ≥ 90
  - Service Detail (any): All scores ≥ 90
  - Contact: All scores ≥ 90
  - Document baseline metrics

- [ ] T120 [P] Verify Core Web Vitals on all pages
  - LCP: < 2.5s (all pages)
  - FID: < 100ms (all pages)
  - CLS: < 0.1 (all pages)
  - Use Lighthouse, PageSpeed Insights, or WebPageTest
  - Document metrics for monitoring

- [ ] T121 [P] Run linting and type checking
  - Command: `npm run lint` (zero errors, fix warnings)
  - Command: `npm run type-check` (zero errors)
  - Command: `npm run format` (format all code)
  - Verify no console errors or warnings

- [ ] T122 Verify bundle size meets targets
  - Production build size: Main bundle < 50KB (gzipped)
  - Service page chunks: < 20KB each (gzipped)
  - Total Tailwind CSS: < 30KB (gzipped)
  - Total JavaScript: < 100KB (gzipped)
  - Report bundle breakdown: js, css, images

### QA Sign-off

- [ ] T123 Document QA test results
  - All manual scenarios passed (✅)
  - All automated tests passed (✅)
  - Lighthouse scores ≥ 90 (✅)
  - Core Web Vitals passing (✅)
  - Accessibility audit passed (✅)
  - Bundle size within targets (✅)
  - Create QA sign-off document

---

## Phase 7: Deployment & Launch (Days 17-18)

**Objective**: Deploy to GitHub Pages, monitor, and declare launch-ready

**Phase 7 Acceptance Criteria**:
- [ ] All code merged to main branch
- [ ] GitHub Actions deployment workflow runs successfully
- [ ] Live site accessible at GitHub Pages URL
- [ ] All pages functional on live site
- [ ] Lighthouse 90+ on live site
- [ ] GA4 tracking active on live site
- [ ] Formspree email delivery verified on live site
- [ ] Team notified of launch

### Pre-Deployment Verification

- [ ] T124 Final code review
  - All code follows style guidelines (ESLint, Prettier)
  - All types are correct (TypeScript strict mode)
  - No console errors or warnings
  - All tests pass
  - All Lighthouse audits pass

- [ ] T125 [P] Verify GitHub Actions workflows configured
  - deploy.yml: Configured to deploy on main branch push
  - quality-checks.yml: Configured to run on PR/push
  - Both workflows have appropriate permissions
  - Secrets configured (if needed): GA4_ID, FORMSPREE_ENDPOINT

- [ ] T126 [P] Configure GitHub Pages settings
  - GitHub repo Settings → Pages
  - Source: Deploy from branch (main, /root or /docs folder)
  - Custom domain (optional): If using custom domain
  - HTTPS: Enabled (required for production)
  - Verify settings match deploy.yml base path

- [ ] T127 [P] Merge all feature branches to main
  - All PRs reviewed and approved
  - All checks passing (linting, tests, Lighthouse)
  - Merge to main branch
  - Verify no merge conflicts

### Deployment Execution

- [ ] T128 Trigger deployment via push to main
  - Push code to main branch: `git push origin main`
  - GitHub Actions workflow starts automatically
  - Monitor workflow execution:
    - Checkout: ✅
    - Install dependencies: ✅
    - Lint: ✅
    - Type check: ✅
    - Build: ✅
    - Deploy: ✅
  - Workflow completes successfully

- [ ] T129 [P] Verify deployment artifacts
  - GitHub Actions build completes
  - dist/ folder generated with optimized files
  - Artifacts uploaded to gh-pages branch
  - Verify file sizes and build output

- [ ] T130 Wait for GitHub Pages site to be live
  - GitHub Pages status: Active (Settings → Pages)
  - Live URL: https://[owner].github.io/csa-od-page/
  - Wait 1-5 minutes for DNS propagation
  - Site should be accessible and load without errors

### Post-Deployment Verification

- [ ] T131 Verify all pages load on live site
  - Homepage: https://[owner].github.io/csa-od-page/ (✅)
  - About: https://[owner].github.io/csa-od-page/#/about (✅)
  - Services: https://[owner].github.io/csa-od-page/#/services (✅)
  - Service Detail (any): https://[owner].github.io/csa-od-page/#/services/talent-strategy-od (✅)
  - Contact: https://[owner].github.io/csa-od-page/#/contact (✅)
  - 404: https://[owner].github.io/csa-od-page/#/nonexistent (✅)
  - All pages load in < 3 seconds
  - No console errors

- [ ] T132 [P] Verify live site performance
  - Run Lighthouse audit on live site
  - Performance: ≥ 90
  - SEO: ≥ 90
  - Accessibility: ≥ 90
  - Best Practices: ≥ 90
  - Compare to development build metrics
  - Document live site baseline

- [ ] T133 [P] Verify GA4 tracking on live site
  - Open GA4 real-time dashboard
  - Visit live site pages
  - Verify page_view events appear in real-time
  - Verify correct page_title and page_path
  - Check for any tracking errors

- [ ] T134 [P] Verify Formspree email delivery on live site
  - Fill and submit contact form on live site
  - Verify email received at contacto@evopeopleod.com within 5 minutes
  - Check email contains all form data
  - Test with different service types
  - Verify success message displays

- [ ] T135 [P] Verify responsive design on live site
  - Test mobile (375px): All sections visible, readable, no horizontal scroll
  - Test tablet (768px): Layout adapts correctly
  - Test desktop (1440px): Full layout with proper spacing
  - All images load and scale appropriately
  - Navigation works at all breakpoints

- [ ] T136 Verify all links work on live site
  - Test internal navigation: Home → About → Services → Contact
  - Test service detail links: Services → ServiceDetail
  - Test footer links
  - Test breadcrumb navigation
  - No broken links (404s)

### Launch Notification

- [ ] T137 Create launch announcement
  - Prepare launch message for team/stakeholders
  - Include live URL: https://[owner].github.io/csa-od-page/
  - Include launch date/time
  - Include summary of features and capabilities
  - Include monitoring instructions

- [ ] T138 Notify stakeholders of launch
  - Send launch email to team
  - Share live URL with founder (Cristina Segura)
  - Share launch announcement on LinkedIn (optional)
  - Request feedback on live site

- [ ] T139 Monitor live site performance (first 24 hours)
  - Check GA4 real-time dashboard
  - Monitor for errors or issues
  - Verify email delivery is working
  - Check Lighthouse scores remain ≥ 90
  - Be ready to fix any production issues

- [ ] T140 Create post-launch checklist and next steps
  - Monitor GA4 analytics for user behavior
  - Collect feedback from team and users
  - Plan for v1.1 enhancements (testimonials, blog, etc.)
  - Establish monitoring and maintenance schedule
  - Document launch date and metrics

---

## Summary

**Total Tasks**: 140 tasks across 7 phases  
**Estimated Timeline**: 18 days (7 phases at varying pace)  
**Phases by Duration**:
- Phase 1: 2 days (18 tasks) - Foundation setup
- Phase 2: 3 days (26 tasks) - Design system & components
- Phase 3: 7 days (30 tasks) - Page development
- Phase 4: 2 days (14 tasks) - SEO & performance
- Phase 5: 2 days (10 tasks) - Analytics & forms
- Phase 6: 3 days (23 tasks) - Testing & QA
- Phase 7: 2 days (17 tasks) - Deployment

**Quality Gates**:
- ✅ TypeScript strict mode (zero errors)
- ✅ ESLint + Prettier (zero errors)
- ✅ Unit tests ≥ 80% coverage
- ✅ E2E tests (all main flows)
- ✅ Manual QA (all scenarios from quickstart.md)
- ✅ Lighthouse ≥ 90 all audits
- ✅ WCAG 2.1 AA accessibility
- ✅ Core Web Vitals passing
- ✅ Performance < 3s load time

**Success Criteria**:
- ✅ All 140 tasks completed
- ✅ All phases delivered on schedule
- ✅ Specification 100% implemented
- ✅ Content from Pagina OD.md fully integrated
- ✅ Quality gates passed
- ✅ Site deployed to GitHub Pages
- ✅ Live site verified and stable
- ✅ Team notified of launch

**Ready to begin Phase 1: Foundation & Project Setup**
