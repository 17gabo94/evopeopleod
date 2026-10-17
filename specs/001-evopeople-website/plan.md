# EvoPeople Professional Website — Implementation Plan

## Executive Summary

This plan outlines a 4-week implementation roadmap for building a professional, production-ready business website for EvoPeople OD Consulting using **React 18, TypeScript, Vite, and GitHub Pages deployment**.

The implementation prioritizes **quality-first development**, **mobile-responsive design**, and **SEO/SEM optimization** per the EvoPeople Web Platform Constitution. The architecture is designed for maintainability, performance, and future evolution as the business grows.

**Target Launch Date**: Week 5 (post-implementation + QA)  
**Tech Stack**: React 18, TypeScript 5, Vite 5, Tailwind CSS 3, React Router v6, Formspree (form handling), GA4  
**Deployment**: GitHub Pages with GitHub Actions CI/CD  
**Hosting Cost**: $0/month (GitHub Pages)  
**Performance Target**: Lighthouse 90+ across all audits

---

## 1. Architecture & Technical Decisions

### 1.1 Why This Stack?

| Component | Choice | Rationale |
|-----------|--------|-----------|
| **Framework** | React 18 | Modern, component-based, excellent ecosystem, strong TypeScript support |
| **Language** | TypeScript | Type safety, better IDE support, reduced runtime errors, maintainability |
| **Build Tool** | Vite | Fast HMR, minimal config, optimized production builds, great for SPA |
| **Styling** | Tailwind CSS | Utility-first, responsive-friendly, optimized build size, consistent design system |
| **Routing** | React Router v6 | Standard routing, nested routes, dynamic imports, layout persistence |
| **Form Handling** | Formspree | Zero backend needed, email delivery, free tier, GDPR compliant |
| **Analytics** | Google Analytics 4 | Industry standard, free, rich insights, conversion tracking |
| **Deployment** | GitHub Pages | Free hosting, automatic deployments from main branch, CDN distribution |
| **CI/CD** | GitHub Actions | Built-in, free, simple workflow YAML, no external dependencies |

### 1.2 Project Directory Structure

```
csa-od-page/
├── .github/
│   └── workflows/
│       ├── deploy.yml              # GitHub Pages deployment pipeline
│       └── quality-checks.yml       # Linting, tests, Lighthouse
├── public/
│   ├── index.html                  # Entry point (Vite)
│   ├── sitemap.xml                 # SEO: sitemap
│   ├── robots.txt                  # SEO: robot directives
│   └── favicon.ico
├── src/
│   ├── App.tsx                     # Main app component & routing
│   ├── main.tsx                    # Vite entry point
│   ├── vite-env.d.ts               # Vite type declarations
│   ├── index.css                   # Global Tailwind imports
│   ├── components/                 # Reusable components
│   │   ├── Layout/
│   │   │   ├── Header.tsx          # Fixed navigation header
│   │   │   ├── Footer.tsx          # Footer with links & contact
│   │   │   └── Layout.tsx          # Main layout wrapper
│   │   ├── Common/
│   │   │   ├── Button.tsx          # Styled button component
│   │   │   ├── Card.tsx            # Reusable card layout
│   │   │   ├── Section.tsx         # Section wrapper with spacing
│   │   │   ├── Breadcrumb.tsx      # Breadcrumb navigation
│   │   │   ├── CTA.tsx             # Call-to-action component
│   │   │   └── Image.tsx           # Image with lazy loading
│   │   ├── Forms/
│   │   │   ├── ContactForm.tsx     # Main contact form
│   │   │   └── FormField.tsx       # Reusable form input
│   │   └── SEO/
│   │       └── Meta.tsx            # Dynamic meta tags component
│   ├── pages/                      # Page-level components (one per route)
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx            # Services index page
│   │   ├── ServiceDetail.tsx       # Individual service page
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx            # 404 page
│   ├── layouts/                    # Layout components
│   │   └── PageLayout.tsx          # Standard page wrapper
│   ├── hooks/                      # Custom React hooks
│   │   ├── usePageTitle.ts         # Set page title & meta
│   │   ├── useScrollToTop.ts       # Scroll to top on route change
│   │   └── useMediaQuery.ts        # Responsive query hook
│   ├── utils/                      # Utility functions
│   │   ├── seo.ts                  # SEO helper functions
│   │   ├── content.ts              # Content/services data
│   │   ├── analytics.ts            # GA4 event tracking
│   │   ├── constants.ts            # App-wide constants
│   │   └── types.ts                # TypeScript types/interfaces
│   ├── styles/
│   │   ├── globals.css             # Tailwind globals, custom utilities
│   │   ├── components.css          # Component-specific styles
│   │   └── tailwind.config.ts      # Tailwind configuration
│   └── data/                       # Content data (future CMS)
│       ├── services.json           # Service descriptions
│       ├── copy.json               # UI copy/text
│       └── navigation.json         # Nav structure
├── tests/                          # Test files (mirror src structure)
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── setup.ts                    # Test configuration
├── .env.example                    # Environment variables template
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts                # Unit test config
├── playwright.config.ts            # E2E test config
└── specs/
    └── 001-evopeople-website/
        ├── spec.md                 # Feature specification
        └── plan.md                 # This file
```

### 1.3 Design System & Tailwind Configuration

**Typography**:
```typescript
// Font stacks
- Headings: Inter or Poppins (sans-serif, professional)
- Body: Inter (readable, clean)
- Code: JetBrains Mono (technical clarity)
```

**Color Palette**:
```typescript
// Professional, confident colors
- Primary: slate-900 (deep, professional)
- Secondary: emerald-600 (strategic, growth-oriented)
- Accent: amber-500 (attention, CTAs)
- Neutral: slate-50 → slate-900 (full gray range)
- Success: emerald-600
- Warning: amber-500
- Error: red-600
```

**Spacing Scale** (8px base):
```typescript
// 8px modular scale
0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128
// Tailwind: px-2, px-4, px-6, px-8, px-12, etc.
```

**Responsive Breakpoints**:
```typescript
- Mobile: 320px - 640px (sm)
- Tablet: 641px - 1024px (md, lg)
- Desktop: 1025px+ (xl, 2xl)
- Focus: Mobile-first development
```

---

## 2. Component Architecture

### 2.1 Component Hierarchy

```
App (Router configuration)
└── Routes
    ├── Layout (Header, Footer wrapper)
    │   ├── Home
    │   │   ├── HeroSection
    │   │   ├── ValuePropositionSection
    │   │   ├── ServiceOverviewGrid
    │   │   ├── CredibilitySection
    │   │   └── CTASection
    │   ├── About
    │   │   ├── PhilosophySection
    │   │   ├── ApproachSection
    │   │   ├── FounderBio
    │   │   ├── EngagementModelSection
    │   │   └── ValuePropositionSection
    │   ├── Services
    │   │   ├── ServicesGrid
    │   │   │   └── ServiceCard (×6)
    │   │   └── CTASection
    │   ├── ServiceDetail (/:serviceId)
    │   │   ├── ServiceHero
    │   │   ├── ProblemStatement
    │   │   ├── ApproachSection
    │   │   ├── EngagementStructure
    │   │   ├── OutcomesSection
    │   │   ├── RelatedServices
    │   │   └── CTASection
    │   ├── Contact
    │   │   ├── ContactHeader
    │   │   ├── ContactForm
    │   │   └── ContactInfo
    │   └── NotFound
    │       └── 404Message
    └── Header & Footer (persistent layout)
```

### 2.2 Core Components Specification

#### **Layout Components**

**Header.tsx**
- Fixed/sticky navigation bar
- Logo (text-based or minimal)
- Navigation links (Home, About, Services, Contact)
- Mobile hamburger menu (responsive)
- Smooth scroll behavior

**Footer.tsx**
- Company info section
- Footer navigation (Services, About, Privacy)
- Contact info (email, LinkedIn)
- Copyright & legal links
- Newsletter signup (optional, future)

#### **Page Components**

**Home.tsx**
- Hero section: compelling headline + subheading + CTA
- Value proposition: 2-3 key differentiators
- Service overview: 6 service cards (grid layout)
- Credibility anchors: 15+ years, proven approach, client-focused
- Final CTA to contact or explore services

**About.tsx**
- Strategic philosophy section
- Engagement approach explanation
- Founder/principal bio (when available)
- Engagement model & project structure
- Why this approach differentiates

**Services.tsx**
- Services overview grid (6 cards)
- Card content: title, description, CTA
- Filter/category options (optional, future)

**ServiceDetail.tsx (/:serviceId)**
- Service header (title + description)
- Problem statement: what organizations face
- Approach & methodology overview
- Typical engagement structure
- Key outcomes & impact areas
- Related services links
- Contact CTA

**Contact.tsx**
- Contact header with value message
- Contact form (Name, Email, Service Type, Message)
- Contact information (email, LinkedIn)
- Confirmation message on success

#### **Common/Utility Components**

**Button.tsx**
- Variants: primary, secondary, tertiary, ghost
- Sizes: sm, md, lg
- States: default, hover, active, disabled
- Support for links & form buttons

**Card.tsx**
- Flexible card layout
- Configurable padding, shadow, border
- Optional image support
- Optional link wrapper

**Section.tsx**
- Standard page section wrapper
- Consistent vertical spacing
- Optional background color
- Responsive horizontal padding

**CTA.tsx**
- Consistent call-to-action block
- Headline + subheading + button
- Centered layout
- Color variants

**Breadcrumb.tsx**
- Hierarchical navigation
- Last item not linked
- Keyboard accessible

#### **Forms**

**ContactForm.tsx**
- Fields: Name, Email, Service Type (select), Message
- Validation (client-side + server-side via Formspree)
- Loading state & submission feedback
- Success/error messages
- Accessibility: labels, ARIA attributes

**FormField.tsx**
- Reusable input wrapper
- Label + input + error message
- Support for text, email, textarea, select
- Consistent styling & spacing

#### **SEO Components**

**Meta.tsx**
- Accepts title, description, image, url, type
- Renders Open Graph tags
- Renders Twitter Card tags
- Manages canonical URLs
- Structured data (JSON-LD)

---

## 3. Implementation Phases

### Phase 1: Foundation & Project Setup (Days 1-2)

**Objective**: Scaffold the project, establish development environment, configure build tools and deployment.

**Tasks**:

1. **Vite Project Scaffolding**
   - [ ] Initialize Vite project: `npm create vite@latest csa-od-page -- --template react-ts`
   - [ ] Install dependencies: React, React Router, Tailwind CSS, TypeScript
   - [ ] Configure Vite for GitHub Pages (base path, build output)
   - [ ] Set up Tailwind CSS with custom config
   - [ ] Create TypeScript paths configuration (`@/components`, `@/utils`, etc.)

2. **Development Environment**
   - [ ] Configure ESLint and Prettier for code quality
   - [ ] Set up .env.example with necessary variables (GA4 ID, Form endpoint)
   - [ ] Configure VS Code settings (extensions, debug config)
   - [ ] Create .gitignore, .npmrc

3. **Directory Structure**
   - [ ] Create full folder structure per Architecture section
   - [ ] Create placeholder files for all components & pages
   - [ ] Set up data files (services.json, content.json)

4. **GitHub Actions Configuration**
   - [ ] Create `.github/workflows/deploy.yml` for GitHub Pages deployment
   - [ ] Create `.github/workflows/quality-checks.yml` for testing & linting
   - [ ] Configure deployment to `gh-pages` branch
   - [ ] Test workflow on test branch

5. **Build Configuration**
   - [ ] Configure Vite build for production (minification, code splitting)
   - [ ] Set up source map generation for debugging
   - [ ] Configure public assets (favicon, robots.txt, sitemap)

6. **Documentation**
   - [ ] Create README.md with setup instructions
   - [ ] Document environment variables needed
   - [ ] Create CONTRIBUTING.md for code standards

**Deliverables**:
- Fully configured Vite project with all dependencies installed
- GitHub Actions workflows configured and tested
- Development environment ready for component development
- Project scaffolding complete

**Acceptance Criteria**:
- [ ] `npm run dev` starts dev server without errors
- [ ] `npm run build` produces optimized production build
- [ ] GitHub Actions workflows execute successfully
- [ ] All required directories and placeholder files exist
- [ ] TypeScript compiles with no errors

---

### Phase 2: Design System & Core Components (Days 3-5)

**Objective**: Build reusable component library and establish visual identity.

**Tasks**:

1. **Tailwind Configuration & Global Styles**
   - [ ] Configure custom color palette in tailwind.config.ts
   - [ ] Define typography system (font sizes, weights, line heights)
   - [ ] Set up spacing scale and breakpoints
   - [ ] Create custom CSS utilities for common patterns
   - [ ] Configure dark mode support (if applicable)
   - [ ] Create component.css for component-specific styles
   - [ ] Create globals.css with Tailwind imports

2. **Typography & Font Setup**
   - [ ] Choose and import primary font (Inter or Poppins)
   - [ ] Choose and import secondary font (serif complement, optional)
   - [ ] Set up font-face declarations
   - [ ] Define heading hierarchy (h1-h6) CSS classes
   - [ ] Establish body text defaults

3. **Core Layout Components**
   - [ ] **Header.tsx**: Fixed nav with responsive menu
     - [ ] Logo/brand section
     - [ ] Navigation links
     - [ ] Mobile hamburger menu
     - [ ] Active link indicators
   - [ ] **Footer.tsx**: Company info + links
     - [ ] Contact information
     - [ ] Footer navigation
     - [ ] Copyright notice
     - [ ] Legal links (Privacy, Terms)
   - [ ] **Layout.tsx**: Main layout wrapper
     - [ ] Header + main content + Footer
     - [ ] Consistent spacing

4. **Common/Utility Components**
   - [ ] **Button.tsx**: Styled button with variants
     - [ ] Primary, secondary, tertiary, ghost variants
     - [ ] Size variants (sm, md, lg)
     - [ ] Link button support
     - [ ] Loading state
   - [ ] **Card.tsx**: Flexible card component
     - [ ] Padding options
     - [ ] Shadow/border variants
     - [ ] Image support
     - [ ] Link wrapper support
   - [ ] **Section.tsx**: Page section wrapper
     - [ ] Vertical spacing
     - [ ] Background color variants
     - [ ] Responsive padding
   - [ ] **CTA.tsx**: Call-to-action block
     - [ ] Headline + description + button
     - [ ] Color variants
     - [ ] Centered layout
   - [ ] **Breadcrumb.tsx**: Navigation breadcrumb
     - [ ] Hierarchical links
     - [ ] Accessibility

5. **Form Components**
   - [ ] **FormField.tsx**: Reusable input wrapper
     - [ ] Label + input + error message
     - [ ] Support for text, email, textarea, select
     - [ ] Error state styling
     - [ ] Helper text
   - [ ] **ContactForm.tsx**: Full contact form
     - [ ] Fields: Name, Email, Service Type, Message
     - [ ] Client-side validation
     - [ ] Formspree integration
     - [ ] Loading/success/error states
     - [ ] Accessibility

6. **SEO & Utility Components**
   - [ ] **Meta.tsx**: Meta tag management
     - [ ] Open Graph tags
     - [ ] Twitter Card tags
     - [ ] Canonical URLs
     - [ ] Structured data (JSON-LD)
   - [ ] Create SEO utility functions
     - [ ] Generate meta tags
     - [ ] Manage canonical URLs
     - [ ] Schema markup helpers

7. **Testing Setup**
   - [ ] Configure Vitest for unit testing
   - [ ] Create test setup files
   - [ ] Write unit tests for Button, Card, FormField components (sample tests)

**Deliverables**:
- Complete, reusable component library
- Tailwind CSS configuration with design system
- Global styling and typography system
- Sample component tests
- Living component documentation (optional Storybook setup)

**Acceptance Criteria**:
- [ ] All components export correctly
- [ ] Components render without errors
- [ ] Responsive design works at all breakpoints
- [ ] Components follow TypeScript types
- [ ] Unit tests pass for core components (80%+ coverage)
- [ ] Tailwind build is optimized (no unused styles)

---

### Phase 3: Page Development & Content Integration (Days 6-12)

**Objective**: Build all page components and integrate content from specification.

**Tasks**:

1. **Routing Setup**
   - [ ] Configure React Router v6
   - [ ] Define route structure
   - [ ] Set up lazy loading for pages (code splitting)
   - [ ] Create NotFound (404) page
   - [ ] Configure scroll-to-top on route change

2. **Home Page**
   - [ ] **HeroSection**: Compelling headline + subheading + CTA
     - [ ] Professional background/image
     - [ ] Mobile-responsive text sizing
     - [ ] Button links to Services/Contact
   - [ ] **ValuePropositionSection**: Key differentiators
     - [ ] 3 key values (Strategic + Execution + Results)
     - [ ] Icon or visual support
     - [ ] Clear messaging
   - [ ] **ServiceOverviewGrid**: 6 service cards
     - [ ] Grid layout (3 cols desktop, 1-2 cols mobile)
     - [ ] Each card: title, description, link to detail
     - [ ] Card hover effects
   - [ ] **CredibilitySection**: Trust anchors
     - [ ] 15+ years experience
     - [ ] Proven approach
     - [ ] Client-focused philosophy
   - [ ] **CTASection**: Final call-to-action
     - [ ] Contact CTA
     - [ ] Services exploration CTA

3. **About/Our Approach Page**
   - [ ] **Hero**: Page title + intro
   - [ ] **PhilosophySection**: Strategic framework
     - [ ] Clear articulation of approach
     - [ ] How OD connects to business results
   - [ ] **ApproachSection**: Engagement methodology
     - [ ] Typical project flow
     - [ ] Engagement model overview
   - [ ] **FounderBio**: Professional background (when content available)
   - [ ] **EngagementModelSection**: Project structure & process
   - [ ] **ValuePropositionSection**: Why this approach works
   - [ ] **CTASection**: Contact for discussion

4. **Services Pages**
   - [ ] **Services.tsx**: Services overview
     - [ ] Grid of 6 service cards
     - [ ] Each card: title, icon, description, link to detail
   - [ ] **ServiceDetail.tsx**: Individual service page
     - [ ] Hero section (title + intro)
     - [ ] **ProblemStatement**: What organizations face
     - [ ] **ApproachSection**: How EvoPeople helps
     - [ ] **EngagementStructure**: Typical project flow
     - [ ] **OutcomesSection**: Key results & impact areas
     - [ ] **RelatedServices**: Links to related services
     - [ ] **CTASection**: Contact CTA

   **Service Details** (from Pagina OD.md):
   1. Organizational Development & Talent Strategy
   2. Talent Management & Succession Planning
   3. Leadership Development
   4. Culture & Organizational Change Management
   5. Performance Management
   6. Strategic HR Advisory

5. **Contact Page**
   - [ ] **Hero**: Page title + intro message
   - [ ] **ContactForm**: Main contact form
     - [ ] Fields: Name, Email, Service Type, Message
     - [ ] Formspree integration
     - [ ] Form validation & error messages
     - [ ] Success message
   - [ ] **ContactInfo**: Direct contact details
     - [ ] Email address
     - [ ] LinkedIn link
     - [ ] Response time expectation

6. **Data Integration**
   - [ ] Create services.json with all service descriptions
   - [ ] Create content.json with page copy
   - [ ] Create navigation.json with nav structure
   - [ ] Implement content loading from data files
   - [ ] Ensure type safety with TypeScript interfaces

7. **Page-Level SEO**
   - [ ] Create usePageTitle hook
   - [ ] Implement Meta component in all pages
   - [ ] Define page titles & descriptions
   - [ ] Create breadcrumb navigation for sub-pages
   - [ ] Implement Open Graph metadata
   - [ ] Add Twitter Card metadata

**Deliverables**:
- All 7+ page components fully implemented
- Content data files (services, copy, navigation)
- React Router configuration with code splitting
- Page-level SEO metadata
- Breadcrumb navigation

**Acceptance Criteria**:
- [ ] All pages render without errors
- [ ] Navigation works across all pages
- [ ] Mobile responsive on all pages
- [ ] Page load times < 3 seconds (Lighthouse)
- [ ] All content from spec is displayed
- [ ] Meta tags properly configured
- [ ] No broken links or 404 errors
- [ ] Scroll-to-top works on route changes

---

### Phase 4: SEO & Performance Optimization (Days 13-14)

**Objective**: Implement SEO best practices and optimize performance to meet constitution requirements.

**Tasks**:

1. **SEO Implementation**
   - [ ] Create sitemap.xml generation (dynamic)
   - [ ] Create robots.txt with proper rules
   - [ ] Implement semantic HTML structure
     - [ ] Proper heading hierarchy (h1-h6)
     - [ ] Semantic tags (header, nav, main, article, section, footer)
     - [ ] Alt text on all images
   - [ ] Add structured data (JSON-LD)
     - [ ] Organization schema
     - [ ] LocalBusiness schema
     - [ ] Service schema (for each service)
     - [ ] WebPage schema for each page
   - [ ] Configure canonical URLs
   - [ ] Implement meta descriptions for all pages
   - [ ] Set up Open Graph tags
   - [ ] Create SEO utility functions

2. **Performance Optimization**
   - [ ] **Code Splitting**
     - [ ] Lazy load page components
     - [ ] Lazy load heavy components
   - [ ] **Image Optimization**
     - [ ] Use responsive images (srcset)
     - [ ] Lazy load images (loading="lazy")
     - [ ] Optimize image formats (WebP with fallback)
     - [ ] Compress all images
   - [ ] **Bundle Optimization**
     - [ ] Analyze bundle size (vite plugin)
     - [ ] Remove unused dependencies
     - [ ] Tree-shake unused code
   - [ ] **CSS Optimization**
     - [ ] Purge unused Tailwind CSS
     - [ ] Minify CSS
     - [ ] Inline critical CSS
   - [ ] **JavaScript Optimization**
     - [ ] Minify and compress
     - [ ] Remove unused code
     - [ ] Optimize dependencies
   - [ ] **Font Optimization**
     - [ ] Use system fonts or cached CDN fonts
     - [ ] Preload fonts
     - [ ] Use font-display: swap

3. **Lighthouse Audit**
   - [ ] Run Lighthouse for each page
   - [ ] Achieve 90+ scores in:
     - [ ] Performance
     - [ ] Accessibility
     - [ ] Best Practices
     - [ ] SEO
   - [ ] Fix any identified issues
   - [ ] Document performance metrics

4. **Core Web Vitals**
   - [ ] LCP (Largest Contentful Paint): < 2.5s
   - [ ] FID (First Input Delay): < 100ms
   - [ ] CLS (Cumulative Layout Shift): < 0.1
   - [ ] Test with Lighthouse, WebPageTest

5. **Accessibility Audit**
   - [ ] WCAG 2.1 Level AA compliance
   - [ ] Automated testing (axe DevTools)
   - [ ] Manual testing
   - [ ] Keyboard navigation
   - [ ] Screen reader compatibility
   - [ ] Color contrast ratios (4.5:1 for text)
   - [ ] Focus management

6. **Browser & Device Testing**
   - [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - [ ] Mobile testing (iOS Safari, Chrome Mobile)
   - [ ] Tablet testing
   - [ ] Different screen sizes (320px - 2560px)

**Deliverables**:
- Optimized production build
- Sitemap and robots.txt
- Structured data (JSON-LD) implemented
- Lighthouse reports (90+ scores)
- Core Web Vitals optimized
- Accessibility audit passed

**Acceptance Criteria**:
- [ ] Lighthouse scores: 90+ for all audits
- [ ] Performance: < 3 seconds page load (4G)
- [ ] Mobile: Score 90+ on mobile audit
- [ ] SEO: All pages indexed by Google (via GSC)
- [ ] Accessibility: WCAG AA compliant
- [ ] Core Web Vitals: All in "good" range
- [ ] No console errors or warnings

---

### Phase 5: Analytics & Form Integration (Day 15)

**Objective**: Set up tracking, analytics, and form handling.

**Tasks**:

1. **Google Analytics 4 Setup**
   - [ ] Create GA4 property
   - [ ] Install GA4 script/tag
   - [ ] Set up Google Tag Manager (optional, recommended)
   - [ ] Configure conversion tracking
     - [ ] Contact form submission
     - [ ] CTA button clicks
     - [ ] Service page views
     - [ ] Contact page views
   - [ ] Set up events for key user actions
   - [ ] Create custom dashboards
   - [ ] Set up goals/conversions
   - [ ] Link to Google Search Console

2. **Formspree Configuration**
   - [ ] Create Formspree account
   - [ ] Set up form for contact form submissions
   - [ ] Configure email delivery to business
   - [ ] Set up form submission confirmation
   - [ ] Configure spam protection
   - [ ] Test form submission end-to-end

3. **Analytics Event Tracking**
   - [ ] Track page views
   - [ ] Track CTA clicks (with button label)
   - [ ] Track form submissions (with service type)
   - [ ] Track internal navigation
   - [ ] Track time on page
   - [ ] Track scroll depth
   - [ ] Create gtag wrapper utility

4. **Privacy & GDPR Compliance**
   - [ ] Add privacy policy page (or link to external)
   - [ ] Configure Analytics consent
   - [ ] Implement cookie consent banner (optional)
   - [ ] Document data handling practices
   - [ ] Configure GDPR-compliant analytics

5. **Testing**
   - [ ] Test form submission
   - [ ] Verify email delivery
   - [ ] Test Analytics tracking (GA debugger)
   - [ ] Verify events are firing correctly
   - [ ] Check for form errors

**Deliverables**:
- GA4 property fully configured
- Formspree form endpoint configured
- Event tracking implemented
- Privacy policy/GDPR compliance documented
- Analytics dashboard set up

**Acceptance Criteria**:
- [ ] Form submissions deliver emails
- [ ] GA4 tracks page views
- [ ] CTA clicks tracked
- [ ] Form submissions tracked
- [ ] Form confirmation works
- [ ] No personally identifiable data in logs

---

### Phase 6: Testing & QA (Days 16-17)

**Objective**: Comprehensive testing and quality assurance before launch.

**Tasks**:

1. **Unit Tests** (React components)
   - [ ] Test Button component (variants, click handlers)
   - [ ] Test Card component (content, links)
   - [ ] Test FormField component (validation)
   - [ ] Test ContactForm component (submission)
   - [ ] Test utility functions (SEO, content loading)
   - [ ] Achieve 80%+ code coverage
   - [ ] Vitest configuration and runner

2. **Integration Tests**
   - [ ] Test page rendering
   - [ ] Test navigation between pages
   - [ ] Test form submission flow
   - [ ] Test data loading
   - [ ] Test SEO meta tags per page

3. **E2E Tests** (Playwright)
   - [ ] Home page: load, navigation, CTAs
   - [ ] Services: view list, click service card, view detail
   - [ ] About: load, navigate to contact
   - [ ] Contact: form submission, validation, success message
   - [ ] Mobile flow: responsive menu, mobile form
   - [ ] Dark mode (if implemented)

4. **Manual Testing**
   - [ ] Full page walkthrough on desktop
   - [ ] Full page walkthrough on tablet
   - [ ] Full page walkthrough on mobile
   - [ ] Test all CTAs
   - [ ] Test form validation
   - [ ] Test navigation on all devices
   - [ ] Test print layout (optional)

5. **Cross-Browser Testing**
   - [ ] Chrome (latest)
   - [ ] Firefox (latest)
   - [ ] Safari (latest)
   - [ ] Edge (latest)
   - [ ] Mobile: iOS Safari, Chrome Mobile

6. **Performance Testing**
   - [ ] Lighthouse audit for all pages
   - [ ] WebPageTest analysis
   - [ ] Core Web Vitals measurement
   - [ ] Bundle size analysis
   - [ ] Load time testing

7. **Accessibility Testing**
   - [ ] Axe DevTools automated scan
   - [ ] Manual WCAG 2.1 AA audit
   - [ ] Keyboard navigation (Tab, Enter, Escape)
   - [ ] Screen reader testing (VoiceOver, NVDA)
   - [ ] Color contrast audit
   - [ ] Focus management

8. **SEO Testing**
   - [ ] Robots.txt validation
   - [ ] Sitemap validation
   - [ ] Meta tags verification (all pages)
   - [ ] Structured data validation (Schema.org)
   - [ ] Canonical URL check
   - [ ] Mobile-friendly test (Google)
   - [ ] Open Graph preview (Facebook, Twitter)

9. **Content Review**
   - [ ] Proofread all copy
   - [ ] Verify all content matches spec
   - [ ] Check brand consistency
   - [ ] Verify contact information
   - [ ] Test all external links

10. **Bug Tracking & Fix**
    - [ ] Document all issues in GitHub Issues
    - [ ] Prioritize bugs (critical, high, medium, low)
    - [ ] Fix critical/high priority issues
    - [ ] Defer low priority issues to post-launch
    - [ ] Re-test fixes

**Deliverables**:
- Unit test suite (80%+ coverage)
- Integration test suite
- E2E test suite (Playwright)
- Test execution reports
- Bug tracking with resolution status
- QA sign-off document

**Acceptance Criteria**:
- [ ] All unit tests pass
- [ ] All integration tests pass
- [ ] All E2E tests pass
- [ ] Lighthouse 90+ on all pages
- [ ] WCAG AA compliant
- [ ] No critical or high-severity bugs
- [ ] All content verified
- [ ] Cross-browser testing passed

---

### Phase 7: Deployment & Launch (Day 18)

**Objective**: Deploy to production and verify live site.

**Tasks**:

1. **Pre-Deployment Checklist**
   - [ ] All tests passing
   - [ ] QA sign-off obtained
   - [ ] Lighthouse scores 90+
   - [ ] No console errors
   - [ ] Environment variables configured (.env)
   - [ ] Analytics configured
   - [ ] Form backend tested
   - [ ] Backup strategy documented

2. **GitHub Pages Setup**
   - [ ] Configure repository settings for GitHub Pages
   - [ ] Set custom domain (if available)
   - [ ] Configure HTTPS (automatic with GitHub Pages)
   - [ ] Test deployment workflow
   - [ ] Verify GitHub Actions runs successfully

3. **Production Deployment**
   - [ ] Merge all code to main branch
   - [ ] Run GitHub Actions deployment workflow
   - [ ] Monitor build and deployment logs
   - [ ] Verify site is live and accessible
   - [ ] Test critical user journeys on live site

4. **Post-Deployment Verification**
   - [ ] Verify homepage loads (< 3 seconds)
   - [ ] Verify all pages accessible
   - [ ] Test contact form submission
   - [ ] Verify analytics tracking (GA debugger)
   - [ ] Check mobile responsiveness on live site
   - [ ] Verify images loading correctly
   - [ ] Test all CTAs

5. **Search Engine Indexing**
   - [ ] Submit to Google Search Console
   - [ ] Submit sitemap to GSC
   - [ ] Request indexing of key pages
   - [ ] Submit to Bing Webmaster Tools
   - [ ] Monitor indexing status

6. **Monitoring & Health Checks**
   - [ ] Set up Uptime Robot (monitor site availability)
   - [ ] Configure error tracking (Sentry or similar)
   - [ ] Monitor Analytics for traffic
   - [ ] Monitor form submissions
   - [ ] Set up alerts for critical issues

7. **Documentation**
   - [ ] Document deployment process
   - [ ] Document monitoring setup
   - [ ] Create runbooks for common issues
   - [ ] Document future maintenance tasks
   - [ ] Create post-launch checklist

**Deliverables**:
- Live website on GitHub Pages
- Monitoring and alerting configured
- Search engine indexing initiated
- Deployment documentation
- Post-launch runbooks

**Acceptance Criteria**:
- [ ] Website live and accessible
- [ ] All pages load without errors
- [ ] Contact form works end-to-end
- [ ] Analytics tracking verified
- [ ] Mobile responsive on live site
- [ ] Lighthouse 90+ on live site
- [ ] Search engines begin indexing
- [ ] Monitoring and alerts active

---

## 4. Testing Strategy

### 4.1 Testing Pyramid

```
        /\
       /  \  E2E Tests (5%)
      /    \ Playwright (user flows, form submission)
     /------\
    /        \  Integration Tests (15%)
   /          \ React Testing Library (components, routing, data)
  /            \
 /              \ Unit Tests (80%)
/________________\ Vitest (utilities, functions, component logic)
```

### 4.2 Test File Structure

```
tests/
├── setup.ts                           # Test configuration
├── unit/
│   ├── components/
│   │   ├── Button.test.tsx
│   │   ├── Card.test.tsx
│   │   ├── FormField.test.tsx
│   │   └── ContactForm.test.tsx
│   └── utils/
│       ├── seo.test.ts
│       └── analytics.test.ts
├── integration/
│   ├── pages/
│   │   ├── Home.test.tsx
│   │   ├── Services.test.tsx
│   │   └── Contact.test.tsx
│   └── routing.test.tsx
└── e2e/
    ├── home.spec.ts
    ├── services.spec.ts
    ├── contact.spec.ts
    └── accessibility.spec.ts
```

### 4.3 Test Coverage Goals

| Layer | Tool | Target Coverage | Key Areas |
|-------|------|-----------------|-----------|
| **Unit** | Vitest | 80%+ | Components, utilities, hooks |
| **Integration** | RTL | 70%+ | Page rendering, routing, data flow |
| **E2E** | Playwright | Key paths | Home → Services, Services → Contact, Form submission |
| **Performance** | Lighthouse | 90+ | All audits (Performance, SEO, A11y, Best Practices) |
| **Accessibility** | axe | WCAG AA | All pages, all components |

### 4.4 GitHub Actions Workflow (quality-checks.yml)

```yaml
name: Quality Checks
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run lint          # ESLint + Prettier
      - run: npm run type-check    # TypeScript
      - run: npm run test          # Vitest unit + integration
      - run: npm run e2e           # Playwright E2E
      - uses: actions/upload-artifact@v3 # Coverage reports

  performance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install && npm run build
      - run: npm run lighthouse    # Lighthouse audit
      - uses: actions/upload-artifact@v3 # Lighthouse reports
```

---

## 5. Deployment Configuration

### 5.1 GitHub Actions Deployment (deploy.yml)

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      
      - run: npm install
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: evopeopleod.com  # Optional: custom domain
```

### 5.2 Vite Configuration (vite.config.ts)

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Root deployment (or '/repo-name/' if needed)
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  
  server: {
    port: 3000,
    open: true,
  },
})
```

### 5.3 Environment Variables (.env.example)

```
# Google Analytics
VITE_GA4_ID=G_XXXXXXXXXX

# Formspree
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# API Base URLs
VITE_API_BASE_URL=https://api.evopeopleod.com

# Environment
VITE_ENV=production
```

### 5.4 GitHub Pages Custom Domain (Optional)

```
# CNAME file
evopeopleod.com
```

---

## 6. Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives",
    "format": "prettier --write src",
    "type-check": "tsc --noEmit",
    
    "test": "vitest run --coverage",
    "test:watch": "vitest",
    "e2e": "playwright test",
    "e2e:ui": "playwright test --ui",
    
    "lighthouse": "lighthouse https://evopeopleod.com --chrome-flags='--headless' --output-path=./lighthouse-report.html"
  }
}
```

---

## 7. Success Metrics & KPIs

### 7.1 Technical Metrics

| Metric | Target | Method |
|--------|--------|--------|
| Lighthouse Performance | 90+ | Automated audit |
| Lighthouse SEO | 90+ | Automated audit |
| Lighthouse Accessibility | 90+ | Automated audit |
| Lighthouse Best Practices | 90+ | Automated audit |
| Mobile Performance | 90+ | Mobile Lighthouse |
| Page Load Time (4G) | < 3 seconds | WebPageTest, Lighthouse |
| First Contentful Paint | < 1.5 seconds | Lighthouse |
| Largest Contentful Paint | < 2.5 seconds | Core Web Vitals |
| Code Coverage | 80%+ | Vitest |
| WCAG AA Compliance | 100% | Axe DevTools + manual |

### 7.2 Business Metrics

| Metric | Baseline | Target | Timeline |
|--------|----------|--------|----------|
| Website Traffic | 0 | 100+ visits/month | 3 months |
| Form Submissions | 0 | 5+ inquiries/month | 3 months |
| Service Page Views | 0 | 30% of sessions | 3 months |
| Average Session Duration | N/A | > 2 minutes | 3 months |
| Mobile Traffic % | N/A | > 50% | Ongoing |
| Bounce Rate | N/A | < 50% | 3 months |
| Conversion Rate | N/A | 3-5% | 6 months |

### 7.3 SEO Metrics

| Metric | Target | Timeline |
|--------|--------|----------|
| Google Indexing | 90%+ pages indexed | 2 weeks |
| Keyword Rankings | Top 20 for primary keywords | 2-3 months |
| Organic Traffic | 50+ visits/month | 3 months |
| Backlinks | 10+ referring domains | 6 months |
| Search Console Impressions | 100+ impressions/month | 3 months |

---

## 8. Risk Mitigation

### 8.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Poor Lighthouse scores | Medium | High | Performance optimization in Phase 4; automated testing in CI/CD |
| Form submission failures | Low | High | Formspree redundancy; alternative email service setup |
| Deployment failures | Low | High | Test workflow before production; rollback strategy |
| Mobile responsiveness issues | Medium | High | Mobile-first development; testing on real devices |
| SEO indexing delays | Medium | Medium | Submit sitemap; Google Search Console setup; quality content |

### 8.2 Mitigation Strategies

- **Automated Testing**: All code changes trigger quality checks before deployment
- **Staging Environment**: Test deployment workflow in staging before production
- **Monitoring**: Uptime monitoring + error tracking post-launch
- **Rollback Plan**: Ability to revert to previous GitHub Pages deployment
- **Documentation**: Runbooks for common issues and emergency procedures

---

## 9. Post-Launch Roadmap (Future Phases)

**Month 1-2**:
- [ ] Monitor analytics and form submissions
- [ ] Iterate on messaging based on user feedback
- [ ] Fix low-priority bugs and UX improvements
- [ ] Optimize for top-performing keywords

**Month 3-6**:
- [ ] Add case study section (with client approval)
- [ ] Add blog/insights section
- [ ] Expand team/credentials pages
- [ ] Implement AI-powered chatbot (optional)
- [ ] Set up email newsletter signup

**Month 6+**:
- [ ] Develop client login portal (if needed)
- [ ] Integrate CRM (HubSpot, Salesforce)
- [ ] Add booking/scheduling system
- [ ] Implement referral program
- [ ] Expand to multiple languages (if applicable)

---

## 10. Acceptance Criteria (Project Completion)

### Phase 1: Foundation
- [ ] Vite project scaffolded with all dependencies
- [ ] GitHub Actions workflows configured and tested
- [ ] Directory structure complete
- [ ] Development environment ready

### Phase 2: Design System
- [ ] Tailwind CSS configured with design system
- [ ] Core components built and tested
- [ ] Component library documented
- [ ] Responsive design verified

### Phase 3: Pages
- [ ] All 7+ page components implemented
- [ ] Content integrated from spec
- [ ] Routing and navigation working
- [ ] No broken links or missing content

### Phase 4: SEO & Performance
- [ ] Lighthouse 90+ on all pages
- [ ] Sitemap and robots.txt generated
- [ ] Structured data implemented
- [ ] Core Web Vitals optimized

### Phase 5: Analytics
- [ ] GA4 configured and tracking
- [ ] Formspree form working
- [ ] All events firing correctly
- [ ] Privacy compliant

### Phase 6: Testing & QA
- [ ] Unit tests passing (80%+ coverage)
- [ ] Integration tests passing
- [ ] E2E tests passing
- [ ] WCAG AA compliant
- [ ] Cross-browser testing complete

### Phase 7: Deployment
- [ ] Live on GitHub Pages
- [ ] All pages accessible
- [ ] Form submissions working
- [ ] Search engine indexing initiated
- [ ] Monitoring and alerts active

### Overall
- [ ] Constitution principles implemented (Quality-First, Mobile-Responsive, SEO/SEM)
- [ ] Professional, distinctive brand identity
- [ ] Clear call-to-action paths
- [ ] Conversion-oriented design
- [ ] Maintainable, scalable architecture

---

## 11. Team Roles & Responsibilities

| Role | Responsibilities | Tasks |
|------|------------------|-------|
| **Frontend Engineer** | Code implementation, testing, optimization | Phases 1-4, 6-7 |
| **UI/UX Designer** | Component design, visual identity, responsive design | Phase 2 |
| **QA Engineer** | Testing strategy, test automation, bug tracking | Phase 6 |
| **DevOps/Infrastructure** | Deployment automation, monitoring, infrastructure | Phases 1, 7 |
| **Content Writer** | Content creation, copywriting, SEO optimization | Phase 3 |
| **Project Manager** | Timeline, coordination, stakeholder communication | All phases |

---

## 12. Timeline Summary

| Phase | Duration | Dates | Owner |
|-------|----------|-------|-------|
| **Phase 1: Foundation** | 2 days | Days 1-2 | DevOps + Frontend |
| **Phase 2: Design System** | 3 days | Days 3-5 | UI/UX + Frontend |
| **Phase 3: Pages** | 7 days | Days 6-12 | Frontend + Content |
| **Phase 4: SEO & Performance** | 2 days | Days 13-14 | Frontend + DevOps |
| **Phase 5: Analytics** | 1 day | Day 15 | Frontend + DevOps |
| **Phase 6: Testing & QA** | 2 days | Days 16-17 | QA + Frontend |
| **Phase 7: Deployment** | 1 day | Day 18 | DevOps + Frontend |
| **Buffer & Contingency** | 2-3 days | — | As needed |
| **TOTAL** | ~18 days | 4 weeks | Cross-functional |

---

## 13. Success Criteria (Final)

The implementation is considered **COMPLETE** when:

✅ **Technical**
- All Lighthouse audits score 90+
- WCAG 2.1 Level AA compliance verified
- All tests passing (unit, integration, E2E)
- Zero critical/high-severity bugs
- Core Web Vitals optimized

✅ **Business**
- All content from specification implemented
- Professional, distinctive brand identity established
- Clear value proposition communicated
- Contact form functional and trackable
- Call-to-action paths clear and working

✅ **SEO & Performance**
- Sitemap generated and submitted
- Robots.txt configured
- Structured data implemented
- Meta tags optimized
- Mobile-friendly verified

✅ **Deployment & Operations**
- Live on GitHub Pages
- CI/CD pipeline active and tested
- Monitoring and alerting configured
- Search engines begin indexing
- All stakeholders sign off

---

**Document Status**: Implementation Plan | **Version**: 1.0 | **Date**: 2026-10-15
