# Phase 1: Data Model & Entity Definitions

**EvoPeople Professional Website - Data Model**  
**Date**: 2026-10-16  
**Status**: ✅ Complete

---

## Executive Summary

This document defines the data model for the EvoPeople website, including entities, relationships, validation rules, and state transitions. The data model supports all features described in the specification while maintaining type safety and predictable behavior.

---

## 1. Core Entities

### 1.1 Service Entity

**Description**: Represents an organizational development or talent management service offered by EvoPeople.

```typescript
interface Service {
  // Identifiers
  id: string;                    // Unique slug (e.g., "talent-strategy-od")
  title: string;                 // Display title (e.g., "Estrategia de Talento...")
  
  // Content
  description: string;           // Short description (1-2 sentences)
  fullDescription: string;       // Long description (paragraph)
  
  // Metadata
  keywords: string[];            // SEO keywords (3-5 tags)
  shortDescription: string;      // Card display text (< 100 chars)
  
  // Engagement Details
  engagementModel: string;       // How EvoPeople engages (e.g., "Personalized program...")
  focusAreas: string[];          // Key focus areas (3-4 items)
  
  // Relationships
  relatedServiceIds?: string[];  // IDs of related services (for cross-linking)
  
  // Metadata
  createdAt?: string;            // ISO 8601 timestamp
  updatedAt?: string;            // ISO 8601 timestamp
}
```

**Validation Rules**:
- `id`: Required, must match pattern `^[a-z0-9-]+$` (kebab-case), must be unique
- `title`: Required, min 5 characters, max 100 characters
- `description`: Required, min 20 characters, max 200 characters
- `fullDescription`: Required, min 100 characters, max 1000 characters
- `keywords`: Required, array of 3-5 strings, each 2-20 characters
- `engagementModel`: Required, min 20 characters, max 300 characters
- `focusAreas`: Required, array of 3-4 strings, each 10-50 characters

**State Transitions**:
- NEW → PUBLISHED (when all fields validated)
- PUBLISHED → ARCHIVED (when service no longer offered)
- ARCHIVED → PUBLISHED (when service re-enabled)

**Example**:
```json
{
  "id": "talent-strategy-od",
  "title": "Estrategia de Talento y Desarrollo Organizacional",
  "description": "Diseñamos soluciones que fortalecen la estructura organizacional",
  "fullDescription": "Diseñamos soluciones que fortalecen la estructura organizacional y desarrollan las capacidades necesarias para alcanzar los objetivos del negocio.",
  "keywords": ["organización", "talento", "estrategia", "desarrollo", "estructura"],
  "shortDescription": "Soluciones de estructura organizacional",
  "engagementModel": "Acompañamiento estratégico en diagnóstico, diseño e implementación",
  "focusAreas": ["Diseño Organizacional", "Estructura de roles", "Capacidades clave", "Alineación estratégica"],
  "relatedServiceIds": ["leadership-development", "culture-change"]
}
```

---

### 1.2 NavigationItem Entity

**Description**: Represents a navigational link in header, footer, or breadcrumb.

```typescript
interface NavigationItem {
  // Identifiers
  label: string;                 // Display text (e.g., "Home", "Services")
  href: string;                  // Route or URL (e.g., "/", "/services")
  
  // Display
  icon?: string;                 // Icon name/class (optional)
  ariaLabel?: string;            // Accessible label
  
  // Hierarchy
  children?: NavigationItem[];   // Nested nav items (for dropdowns)
  
  // Behavior
  isExternal?: boolean;          // Opens in new tab if true
  isActive?: boolean;            // Computed: true if current route matches
}
```

**Validation Rules**:
- `label`: Required, min 2 characters, max 50 characters
- `href`: Required, must start with `/` or `http`, must be valid URL format
- `ariaLabel`: Optional, min 5 characters if provided
- `children`: Optional array of NavigationItem (depth max 2 levels)
- `isExternal`: Optional boolean (default: false)

**Computed Properties**:
- `isActive`: True if window.location.pathname === href

**Example**:
```json
{
  "label": "Services",
  "href": "/services",
  "ariaLabel": "Our consulting services",
  "isExternal": false,
  "children": [
    { "label": "Talent Strategy", "href": "/services/talent-strategy-od" }
  ]
}
```

---

### 1.3 FormData Entity

**Description**: Represents user-submitted contact form data.

```typescript
interface FormData {
  // Contact Information
  name: string;                  // User's full name
  email: string;                 // User's email address
  
  // Service Selection
  serviceType: string;           // Selected service ID (references Service.id)
  
  // Message
  message: string;               // User's inquiry message
  
  // Metadata
  submittedAt: string;           // ISO 8601 timestamp (auto-set on submit)
  sourceUrl: string;             // URL form was submitted from
}
```

**Validation Rules**:
- `name`: Required, min 2 characters, max 100 characters, matches `/^[a-zA-Z\s'-]+$/` (letters, spaces, hyphens, apostrophes)
- `email`: Required, must match RFC 5322 email format
- `serviceType`: Required, must be valid Service.id from services.json
- `message`: Required, min 10 characters, max 2000 characters
- `submittedAt`: Auto-set to current ISO 8601 timestamp
- `sourceUrl`: Auto-set to window.location.href

**State Transitions**:
- DRAFT → VALIDATING (on form submit)
- VALIDATING → VALID (validation passes) or INVALID (validation fails)
- VALID → SUBMITTING (sending to Formspree)
- SUBMITTING → SUCCESS (Formspree confirms) or ERROR (network/server error)
- ERROR → VALIDATING (on user retry)

**Example**:
```json
{
  "name": "Juan Pérez",
  "email": "juan@company.com",
  "serviceType": "talent-strategy-od",
  "message": "Estamos interesados en explorar cómo EvoPeople puede ayudarnos con nuestra transformación organizacional.",
  "submittedAt": "2026-10-16T14:32:00Z",
  "sourceUrl": "https://evopeopleod.com/contact"
}
```

---

### 1.4 SiteMetadata Entity

**Description**: Global site metadata used across all pages.

```typescript
interface SiteMetadata {
  // Site Identity
  name: string;                  // "EvoPeople OD Consulting"
  tagline: string;               // "Transforming Talent. Enabling Leadership..."
  description: string;           // Default meta description
  url: string;                   // Site root URL (e.g., "https://evopeopleod.com")
  
  // Founder/Contact
  founder: {
    name: string;                // "Cristina Segura"
    title: string;               // "Strategic Partner..."
    bio?: string;                // Extended biography
    imageUrl?: string;           // Founder photo URL
  };
  
  // Contact & Social
  contact: {
    email: string;               // contacto@evopeopleod.com
    phone?: string;              // Phone number (if applicable)
    location: string;            // "Ciudad de México, México"
  };
  
  social: {
    linkedin?: string;           // LinkedIn profile URL
    twitter?: string;            // Twitter handle
    instagram?: string;          // Instagram handle
  };
  
  // SEO & Analytics
  seo: {
    siteUrl: string;             // For canonical URLs
    robots: "index, follow" | string; // robots.txt directive
  };
  
  analytics: {
    ga4Id?: string;              // Google Analytics 4 measurement ID (env var)
  };
}
```

**Validation Rules**:
- `name`: Required, immutable value: "EvoPeople OD Consulting"
- `tagline`: Required, matches spec value
- `description`: Required, 155-160 characters (SEO best practice)
- `url`: Required, valid HTTPS URL
- `founder.name`: Required, min 2 characters
- `founder.title`: Required, min 10 characters
- `contact.email`: Required, valid email format, must match "contacto@evopeopleod.com"
- `contact.location`: Required, valid location string
- `social.linkedin`: Optional, must be valid LinkedIn URL if provided
- `analytics.ga4Id`: Optional, loaded from environment variable

**Example**:
```json
{
  "name": "EvoPeople OD Consulting",
  "tagline": "Transforming Talent. Enabling Leadership. Driving Organizational Excellence.",
  "description": "EvoPeople OD Consulting specializes in talent strategy, leadership development, and organizational transformation. 15+ years of experience.",
  "url": "https://evopeopleod.com",
  "founder": {
    "name": "Cristina Segura",
    "title": "Strategic Partner in Talent, Leadership & Organizational Development",
    "bio": "15+ years in HR and Organizational Development..."
  },
  "contact": {
    "email": "contacto@evopeopleod.com",
    "location": "Ciudad de México, México"
  },
  "social": {
    "linkedin": "https://linkedin.com/in/cristina-segura"
  },
  "seo": {
    "siteUrl": "https://evopeopleod.com",
    "robots": "index, follow"
  },
  "analytics": {
    "ga4Id": "G-XXXXXXXXXX"
  }
}
```

---

### 1.5 PageMetaTags Entity

**Description**: SEO and social sharing metadata for individual pages.

```typescript
interface PageMetaTags {
  // Page Identity
  url: string;                   // Full page URL
  path: string;                  // URL path (e.g., "/services")
  
  // Content Metadata
  title: string;                 // Page title (max 60 chars for SEO)
  description: string;           // Meta description (155-160 chars)
  keywords: string[];            // SEO keywords (3-5)
  
  // Open Graph (Social Sharing)
  og: {
    title: string;               // OG title (often same as title)
    description: string;         // OG description
    image: string;               // OG image URL (1200x630px recommended)
    url: string;                 // OG url (canonical)
    type: "website" | "article"; // Content type
  };
  
  // Twitter Cards
  twitter: {
    card: "summary" | "summary_large_image";
    title: string;               // Twitter title
    description: string;         // Twitter description
    image: string;               // Twitter image URL
  };
  
  // Canonical URL (for SEO)
  canonical: string;             // Canonical URL (prevents duplicate indexing)
  
  // Structured Data (JSON-LD)
  structuredData?: Record<string, unknown>; // JSON-LD schema object
}
```

**Validation Rules**:
- `url`: Required, valid HTTPS URL, must include domain + path
- `title`: Required, 30-60 characters (SEO best practice)
- `description`: Required, 155-160 characters (SEO sweet spot)
- `keywords`: Required, array of 3-5 lowercase strings
- `og.title`: Required, 30-60 characters (usually same as title)
- `og.description`: Required, 155-160 characters
- `og.image`: Required, must be valid image URL, recommended 1200x630px
- `twitter.image`: Required, valid image URL, recommended 1200x675px
- `canonical`: Required, must be valid HTTPS URL

**Example (Home Page)**:
```json
{
  "url": "https://evopeopleod.com/",
  "path": "/",
  "title": "EvoPeople OD Consulting - Talent Strategy & Organizational Development",
  "description": "Transform your organization with expert talent strategy, leadership development, and organizational change management. 15+ years of proven expertise.",
  "keywords": ["talent strategy", "organizational development", "leadership development", "talent management", "HR consulting"],
  "og": {
    "title": "EvoPeople OD Consulting",
    "description": "Transforming Talent. Enabling Leadership. Driving Organizational Excellence.",
    "image": "https://evopeopleod.com/og-image-home.jpg",
    "url": "https://evopeopleod.com/",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "EvoPeople OD Consulting",
    "description": "Expert organizational development and talent strategy",
    "image": "https://evopeopleod.com/twitter-image-home.jpg"
  },
  "canonical": "https://evopeopleod.com/",
  "structuredData": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EvoPeople OD Consulting",
    "url": "https://evopeopleod.com",
    "logo": "https://evopeopleod.com/logo.png"
  }
}
```

---

## 2. Entity Relationships

### Relationship Map

```
Service
├── Multiple services (1:many)
├── Related to other Services (many:many via relatedServiceIds)
└── Referenced in FormData.serviceType

NavigationItem
├── Home page lists all Services (1:many)
├── Service page links to ServiceDetail (1:1)
└── Nested navigation items (1:many hierarchical)

FormData
├── References exactly one Service (many:1)
├── User contact information (anonymous, not stored)
└── Submitted to Formspree (external email delivery)

SiteMetadata
├── Global reference used on all pages (1:many)
└── Used in PageMetaTags generation (1:many)

PageMetaTags
├── One per page/route (1:1)
├── References SiteMetadata for common values
└── Specific structured data per page type
```

### Cardinality Summary

| Entity A | Relationship | Entity B | Cardinality |
|----------|--------------|----------|-------------|
| Service | "related to" | Service | Many:Many |
| FormData | "selects" | Service | Many:One |
| NavigationItem | "links to" | Service | One:One |
| Page | "has" | PageMetaTags | One:One |
| SiteMetadata | "used by" | All Pages | One:Many |

---

## 3. Data Consistency Rules

### Referential Integrity

**Service References**:
- Any `serviceType` in FormData must reference a valid Service.id
- Any `relatedServiceIds` in Service must reference valid Service.id values
- Deletion of Service requires updating FormData and related Services

**Navigation References**:
- Any href in NavigationItem pointing to /services/:id must reference valid Service.id
- Navigation structure must not create circular references

**Metadata References**:
- All URLs in PageMetaTags must be valid, resolvable URLs
- Canonical URLs must match the actual page URL to prevent indexing issues

---

## 4. Validation & State Management

### Form State Machine (FormData)

```
        ┌─────────────┐
        │ DRAFT START │
        └──────┬──────┘
               │
        ┌──────▼──────┐
        │  VALIDATING │
        └──────┬──────┘
               │
        ┌──────┴──────────┐
        │                 │
   ┌────▼────┐      ┌──────▼─────┐
   │ VALID   │      │  INVALID   │
   └────┬────┘      └──────┬─────┘
        │                  │
        │          ┌───────▼────┐
        │          │ User Retries│
        │          └───────┬────┘
        │                  │
   ┌────▼─────────┐        │
   │  SUBMITTING  │◄───────┘
   └────┬─────────┘
        │
     ┌──┴──────────┐
     │             │
 ┌───▼───┐   ┌────▼─────┐
 │SUCCESS│   │ ERROR    │
 └───────┘   └────┬─────┘
             ┌────▼─────┐
             │RETRY     │
             └────┬─────┘
                  │
             ┌────▼─────┐
             │VALIDATING│
             └──────────┘
```

### Service Validation Schema

```typescript
// Zod or equivalent validation schema
const serviceSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(5).max(100),
  description: z.string().min(20).max(200),
  fullDescription: z.string().min(100).max(1000),
  keywords: z.array(z.string().min(2).max(20)).length(5),
  shortDescription: z.string().min(10).max(100),
  engagementModel: z.string().min(20).max(300),
  focusAreas: z.array(z.string().min(10).max(50)).min(3).max(4),
  relatedServiceIds: z.array(z.string()).optional()
});
```

---

## 5. Data Storage & Retrieval

### File-based Data Storage

```
src/data/
├── services.json          # Array of Service objects
├── copy.json             # Global UI copy and content
└── navigation.json       # Navigation structure
```

### Data Loading Strategy

1. **Runtime Loading**: Load JSON files during build (Vite static import)
2. **Type Safety**: Import with TypeScript types
3. **Validation**: Validate loaded data against schemas on app init
4. **Caching**: Cache in React Context to avoid re-parsing

### Load Order

```
1. App.tsx initializes
2. Load services.json → validate → store in SiteContext
3. Load navigation.json → validate → store in NavigationContext
4. Load copy.json → validate → store in CopyContext
5. Render app with loaded data
```

---

## 6. Content Completeness Checklist

| Entity | Field | Status | Source |
|--------|-------|--------|--------|
| SiteMetadata | name | ✅ Ready | "EvoPeople OD Consulting" |
| SiteMetadata | tagline | ✅ Ready | From Pagina OD.md |
| SiteMetadata | founder.name | ✅ Ready | "Cristina Segura" |
| SiteMetadata | founder.title | ✅ Ready | "Strategic Partner in Talent, Leadership & OD" |
| SiteMetadata | contact.email | ✅ Ready | "contacto@evopeopleod.com" |
| SiteMetadata | social.linkedin | ✅ Ready | "linkedin.com/in/cristina-segura" |
| Service (×6) | All fields | ✅ Ready | SERVICES_DATA.json + CONTENT_MAPPING.md |
| PageMetaTags (×7) | All fields | ✅ Ready | CONTENT_MAPPING.md §8 |
| NavigationItem (×4 main) | All fields | ✅ Ready | Spec §2.1 + CONTENT_MAPPING.md |

---

## 7. Data Model Evolution Plan

### v1.0 (Current MVP)
- ✅ Service (6 services, basic fields)
- ✅ NavigationItem (header + footer nav)
- ✅ FormData (contact form)
- ✅ SiteMetadata (founder + contact)
- ✅ PageMetaTags (SEO per page)

### v1.1 (Post-Launch)
- [ ] Testimonials/Case Studies entity
- [ ] Blog Post entity
- [ ] Author entity
- [ ] Newsletter subscription entity

### v2.0 (Future)
- [ ] CMS integration (Headless CMS backend)
- [ ] Dynamic content loading (API instead of JSON files)
- [ ] Admin dashboard for content management
- [ ] Multi-language support

---

## 8. Data Model Status

**Status**: ✅ COMPLETE & VALIDATED

All entities defined, validated, and ready for implementation. No unknowns remain.

**Ready to proceed to**:
- [ ] Generate contracts/ (interface/API specifications)
- [ ] Generate quickstart.md (validation guide)
- [ ] Begin Phase 2: Component development
