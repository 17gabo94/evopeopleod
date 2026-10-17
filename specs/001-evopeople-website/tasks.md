# Tasks: EvoPeople Professional Website

**Feature**: EvoPeople OD Consulting Professional Website  
**Tech Stack**: React 18, TypeScript 5, Vite 5, Tailwind CSS 3, React Router v6, Formspree, GA4  
**Deployment**: GitHub Pages with GitHub Actions CI/CD  
**Timeline**: 18 days (7 implementation phases)  
**Total Tasks**: 140  
**Quality Requirements**: Lighthouse 90+, WCAG 2.1 AA, <3s load time, 100% spec implementation  

---

## Implementation Strategy

**Principles** (from EvoPeople Web Platform Constitution):
1. **Quality-First**: All deliverables meet high standards before deployment; code reviews and testing are non-negotiable
2. **Mobile-Responsive Design**: Optimal experience across all device sizes (320px, 768px, 1440px)
3. **SEO & SEM Experience**: All content optimized for search discoverability with semantic HTML and structured data

**Phase Structure**:
- **Phase 1** (Days 1-2): Foundation & Project Setup (18 tasks)
- **Phase 2** (Days 3-5): Design System & Core Components (26 tasks)
- **Phase 3** (Days 6-12): Page Development & Content Integration (30 tasks)
- **Phase 4** (Days 13-14): SEO & Performance Optimization (14 tasks)
- **Phase 5** (Days 14-15): Analytics & Form Integration (10 tasks)
- **Phase 6** (Days 15-17): Testing & Quality Assurance (23 tasks)
- **Phase 7** (Days 17-18): Deployment & Launch (17 tasks)

---

## Phase 1: Foundation & Project Setup (Days 1-2)

**Objective**: Scaffold Vite project, configure development environment, set up deployment infrastructure

**Phase 1 Acceptance Criteria**:
- [ ] Vite dev server runs without errors (`npm run dev`)
- [ ] Production build succeeds (`npm run build` → dist/ folder)
- [ ] TypeScript compiles with zero errors (strict mode)
- [ ] GitHub Actions workflows trigger and pass
- [ ] All placeholder files and directory structure created per architecture plan
- [ ] Environment variables configured in .env.example

### Vite Project Initialization

- [ ] T001 Initialize Vite project with React 18 + TypeScript template
- [ ] T002 [P] Install and configure ESLint with TypeScript support
- [ ] T003 [P] Install and configure Prettier for code formatting
- [ ] T004 [P] Configure TypeScript with path aliases and strict mode
- [ ] T005 [P] Create root `.env.example` with required environment variables
- [ ] T006 Create `.gitignore` with Node.js, Vite, IDE, and OS exclusions
- [ ] T007 [P] Create `.github/workflows/deploy.yml` for GitHub Pages CI/CD
- [ ] T008 [P] Create `.github/workflows/quality-checks.yml` for PR/push validation
- [ ] T009 [P] Create full directory structure per architecture plan
- [ ] T010 [P] Create placeholder files for all components, pages, and utilities
- [ ] T011 [P] Create package.json scripts for development workflow
- [ ] T012 [P] Create `vite.config.ts` with React plugin and optimizations
- [ ] T013 [P] Create `tsconfig.json` with strict type checking and React settings
- [ ] T014 Create `README.md` with setup and development instructions
- [ ] T015 Create `CONTRIBUTING.md` documenting code standards and conventions
- [ ] T016 Initialize Git repository and verify initial commit
- [ ] T017 Verify GitHub Actions workflows trigger successfully
- [ ] T018 Verify production build outputs optimized bundle to dist/

---

## Phase 2: Design System & Core Components (Days 3-5)

**Objective**: Establish visual identity via Tailwind CSS and build reusable component library

**Phase 2 Acceptance Criteria**:
- [ ] All 13+ core components render without errors
- [ ] Responsive design verified at 320px, 768px, 1440px breakpoints
- [ ] Tailwind build optimized (unused styles removed)
- [ ] Design system tokens (colors, typography, spacing) consistent
- [ ] Unit tests written for core components (Button, Card, FormField)
- [ ] Component documentation created

### Tailwind & Global Styles

- [ ] T019 Configure Tailwind CSS with custom design system
- [ ] T020 [P] Define typography hierarchy and font setup
- [ ] T021 [P] Create global styles in `src/styles/globals.css`
- [ ] T022 [P] Create component-specific styles in `src/styles/components.css`

### Layout Components

- [ ] T023 Create `src/components/Layout/Header.tsx`
- [ ] T024 Create `src/components/Layout/Footer.tsx`
- [ ] T025 Create `src/components/Layout/Layout.tsx`

### Common Components

- [ ] T026 [P] Create `src/components/Common/Button.tsx`
- [ ] T027 [P] Create `src/components/Common/Card.tsx`
- [ ] T028 [P] Create `src/components/Common/Section.tsx`
- [ ] T029 Create `src/components/Common/CTA.tsx`
- [ ] T030 [P] Create `src/components/Common/Breadcrumb.tsx`
- [ ] T031 [P] Create `src/components/Common/Image.tsx`

### Form Components

- [ ] T032 Create `src/components/Forms/FormField.tsx`
- [ ] T033 Create `src/components/Forms/ContactForm.tsx`

### SEO & Utility Components

- [ ] T034 Create `src/components/SEO/Meta.tsx`
- [ ] T035 [P] Create `src/utils/seo.ts` with SEO helper functions
- [ ] T036 [P] Create `src/utils/types.ts` with TypeScript interfaces
- [ ] T037 [P] Create `src/utils/constants.ts` with app-wide constants
- [ ] T038 [P] Create `src/utils/analytics.ts` with GA4 event tracking

### Testing Setup & Core Tests

- [ ] T039 [P] Configure Vitest for unit testing
- [ ] T040 [P] Create test setup file `tests/setup.ts`
- [ ] T041 [P] Write unit tests for Button component
- [ ] T042 [P] Write unit tests for Card component
- [ ] T043 [P] Write unit tests for FormField component
- [ ] T044 Verify Tailwind CSS build is optimized

---

## Phase 3: Page Development & Content Integration (Days 6-12)

**Objective**: Build all page components, integrate content from specification, set up routing

**Phase 3 Acceptance Criteria**:
- [ ] All 7+ pages render without errors
- [ ] Navigation works across all pages
- [ ] Mobile responsive verified on all pages (320px, 768px, 1440px)
- [ ] Content matches specification exactly
- [ ] Page load times < 3 seconds (Lighthouse)
- [ ] Meta tags properly configured for SEO on each page
- [ ] All internal links working (no 404s)

### Routing Setup

- [X] T045 Configure React Router v6 in `src/App.tsx`
- [X] T046 [P] Create `src/pages/NotFound.tsx` (404 error page)
- [X] T047 Create `src/hooks/useScrollToTop.ts`
- [X] T048 Create `src/hooks/usePageTitle.ts`
- [X] T049 Create `src/layouts/PageLayout.tsx`

### Content Data Files

- [X] T050 Create `src/data/services.json` with all 6 services
- [X] T051 Create `src/data/copy.json` with UI copy and content
- [X] T052 Create `src/data/navigation.json` with navigation structure
- [X] T053 Create `src/utils/content.ts` for data management

### Homepage

- [X] T054 Create `src/pages/Home.tsx`
- [X] T055 [P] Create `src/components/Home/HeroSection.tsx`
- [X] T056 [P] Create `src/components/Home/ValuePropositionSection.tsx`
- [X] T057 [P] Create `src/components/Home/ServiceOverviewGrid.tsx`
- [X] T058 [P] Create `src/components/Home/CredibilitySection.tsx`
- [X] T059 Create `src/pages/Home.tsx` (compose all sections)

### About / Our Approach Page

- [X] T060 Create `src/pages/About.tsx`
- [X] T061 [P] Create `src/components/About/PhilosophySection.tsx`
- [X] T062 [P] Create `src/components/About/ApproachSection.tsx`
- [X] T063 [P] Create `src/components/About/FounderBio.tsx`
- [X] T064 [P] Create `src/components/About/EngagementModelSection.tsx`
- [X] T065 Create `src/pages/About.tsx` (compose all sections)

### Services Pages

- [X] T066 Create `src/pages/Services.tsx` (Services index)
- [X] T067 Create `src/pages/ServiceDetail.tsx` (individual service page)
- [X] T068 [P] Create `src/components/Services/ServiceCard.tsx`

### Contact Page

- [X] T069 Create `src/pages/Contact.tsx`
- [X] T070 [P] Create `src/components/Contact/ContactHeader.tsx`
- [X] T071 [P] Create `src/components/Contact/ContactForm.tsx` integration
- [X] T072 [P] Create `src/components/Contact/ContactInfo.tsx`
- [X] T073 Create `src/pages/Contact.tsx` (compose sections)

### Verification & Linking

- [X] T074 Verify all internal links (no 404s)
- [X] T075 [P] Test all page routes load correctly
- [X] T076 [P] Verify responsive design on all pages

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
- [ ] T078 Create `public/robots.txt` with crawling directives
- [ ] T079 Implement structured data (JSON-LD) for all pages
- [ ] T080 [P] Verify and optimize meta tags per page
- [ ] T081 [P] Optimize images for performance
- [ ] T082 [P] Implement code splitting with React.lazy()
- [ ] T083 [P] Optimize CSS bundle size

### Performance & Core Web Vitals

- [ ] T084 [P] Optimize Largest Contentful Paint (LCP)
- [ ] T085 [P] Optimize First Input Delay (FID) / Interaction to Next Paint (INP)
- [ ] T086 [P] Optimize Cumulative Layout Shift (CLS)
- [ ] T087 Run Lighthouse audit and verify all scores ≥ 90
- [ ] T088 [P] Verify Core Web Vitals with real-world testing

### Accessibility Compliance

- [ ] T089 Verify WCAG 2.1 Level AA compliance
- [ ] T090 Run automated accessibility scan

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
- [ ] T092 [P] Integrate GA4 tracking in routing
- [ ] T093 [P] Implement custom GA4 events in `src/utils/analytics.ts`
- [ ] T094 [P] Add GA4 event tracking to Contact form
- [ ] T095 [P] Add GA4 event tracking to CTA buttons

### Form Integration & Email Delivery

- [ ] T096 Configure Formspree form endpoint
- [ ] T097 Test Formspree email delivery
- [ ] T098 [P] Add form submission feedback
- [ ] T099 [P] Implement client-side form validation

---

## Phase 6: Testing & Quality Assurance (Days 15-17)

**Objective**: Comprehensive testing, manual QA, performance verification

**Phase 6 Acceptance Criteria**:
- [ ] All unit tests pass (≥ 80% coverage for components)
- [ ] All E2E tests pass (main user journeys)
- [ ] All manual QA scenarios pass
- [ ] Lighthouse scores ≥ 90 all pages
- [ ] No console errors or warnings
- [ ] Accessibility audit passes (WCAG 2.1 AA)

### Unit Testing

- [ ] T100 [P] Expand component unit test coverage
- [ ] T101 [P] Write unit tests for utility functions
- [ ] T102 [P] Write unit tests for custom hooks
- [ ] T103 [P] Run unit tests with coverage report
- [ ] T104 Verify all unit tests pass

### End-to-End Testing (Playwright)

- [ ] T105 [P] Configure Playwright for E2E testing
- [ ] T106 [P] Write E2E test for homepage flow
- [ ] T107 [P] Write E2E test for services flow
- [ ] T108 [P] Write E2E test for contact form flow
- [ ] T109 [P] Write E2E test for navigation flow
- [ ] T110 Run E2E tests and verify all pass

### Manual QA Testing

- [ ] T111 Manual QA: Homepage Load & Navigation
- [ ] T112 Manual QA: Services Page & Details
- [ ] T113 Manual QA: About Page & Founder Bio
- [ ] T114 Manual QA: Contact Form Submission
- [ ] T115 Manual QA: Mobile Experience
- [ ] T116 Manual QA: Accessibility (WCAG 2.1 AA)
- [ ] T117 Manual QA: SEO & Meta Tags
- [ ] T118 Manual QA: Analytics & Tracking

### Performance & Quality Verification

- [ ] T119 [P] Run Lighthouse audit on all pages
- [ ] T120 [P] Verify Core Web Vitals on all pages
- [ ] T121 [P] Run linting and type checking
- [ ] T122 Verify bundle size meets targets

### QA Sign-off

- [ ] T123 Document QA test results

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
- [ ] T125 [P] Verify GitHub Actions workflows configured
- [ ] T126 [P] Configure GitHub Pages settings
- [ ] T127 [P] Merge all feature branches to main

### Deployment Execution

- [ ] T128 Trigger deployment via push to main
- [ ] T129 [P] Verify deployment artifacts
- [ ] T130 Wait for GitHub Pages site to be live

### Post-Deployment Verification

- [ ] T131 Verify all pages load on live site
- [ ] T132 [P] Verify live site performance
- [ ] T133 [P] Verify GA4 tracking on live site
- [ ] T134 [P] Verify Formspree email delivery on live site
- [ ] T135 [P] Verify responsive design on live site
- [ ] T136 Verify all links work on live site

### Launch Notification

- [ ] T137 Create launch announcement
- [ ] T138 Notify stakeholders of launch
- [ ] T139 Monitor live site performance (first 24 hours)
- [ ] T140 Create post-launch checklist and next steps

---

## Summary Statistics

**Task Breakdown by Phase**:
| Phase | Name | Days | Tasks | Parallelizable | Status |
|-------|------|------|-------|---|---|
| 1 | Foundation & Setup | 2 | 18 | 12 [P] | Ready |
| 2 | Design System | 3 | 26 | 15 [P] | Ready |
| 3 | Page Development | 7 | 30 | 12 [P] | Ready |
| 4 | SEO & Performance | 2 | 14 | 8 [P] | Ready |
| 5 | Analytics & Forms | 2 | 10 | 6 [P] | Ready |
| 6 | Testing & QA | 3 | 23 | 14 [P] | Ready |
| 7 | Deployment | 2 | 17 | 5 [P] | Ready |
| **TOTAL** | | **18** | **140** | **72 parallelizable (51%)** | **READY** |

**Quality Metrics**:
- Lighthouse Target: 90+ (Performance, SEO, Accessibility, Best Practices)
- Accessibility: WCAG 2.1 Level AA
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Code Coverage: 80%+ unit tests
- Bundle Size: Main < 50KB, Service chunks < 20KB, CSS < 30KB (gzipped)
- Page Load Time: < 3 seconds on 4G
- TypeScript: Strict mode, zero type errors
- Linting: ESLint zero errors, Prettier formatted

---

**Generated**: 2026-10-16  
**Status**: Ready for Phase 1 Implementation  
**Constitution**: Ratified v1.0.0 (Quality-First, Mobile-Responsive, SEO/SEM)  
**Next Steps**: Begin Phase 1 setup, follow task sequence, verify phase gates before progression
