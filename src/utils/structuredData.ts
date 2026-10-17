/**
 * Structured Data (JSON-LD) Generation for SEO
 * Implements Schema.org structured data for rich snippets
 */

import { Service } from './types'

// Base configuration
const siteUrl = 'https://evopeopleod.com'
const organizationName = 'EvoPeople OD Consulting'
const organizationLogo = `${siteUrl}/logo.svg`
const organizationEmail = 'info@evopeopleod.com'
const organizationPhone = '+1-555-0123'
const organizationAddress = {
  streetAddress: '123 Business Ave',
  addressLocality: 'Bogotá',
  addressRegion: 'DC',
  postalCode: '110000',
  addressCountry: 'CO',
}

/**
 * Organization Schema
 * Used for site-wide identity and rich snippets
 */
export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organizationName,
    url: siteUrl,
    logo: organizationLogo,
    email: organizationEmail,
    telephone: organizationPhone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: organizationAddress.streetAddress,
      addressLocality: organizationAddress.addressLocality,
      addressRegion: organizationAddress.addressRegion,
      postalCode: organizationAddress.postalCode,
      addressCountry: organizationAddress.addressCountry,
    },
    sameAs: [
      'https://www.linkedin.com/company/evopeople',
      'https://twitter.com/evopeople',
      'https://www.facebook.com/evopeople',
    ],
    foundingDate: '2010',
    founder: {
      '@type': 'Person',
      name: 'Cristina Segura',
      jobTitle: 'CEO & Founder',
    },
    description:
      'EvoPeople OD Consulting especializa en desarrollo organizacional, estrategia de talento y transformación empresarial.',
    knowsAbout: [
      'Organizational Development',
      'Talent Strategy',
      'Leadership Development',
      'Change Management',
      'HR Advisory',
    ],
  }
}

/**
 * Page Schema (generic)
 * Used for individual pages with title and description
 */
export const getPageSchema = (pageTitle: string, description: string, pagePath: string = '') => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: description,
    url: `${siteUrl}${pagePath}`,
    isPartOf: {
      '@type': 'WebSite',
      name: organizationName,
      url: siteUrl,
    },
    publisher: getOrganizationSchema(),
  }
}

/**
 * Breadcrumb Schema
 * Used for breadcrumb navigation
 */
export interface BreadcrumbItem {
  name: string
  url: string
}

export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Service Schema
 * Used for individual services / LocalBusiness service offerings
 */
export const getServiceSchema = (service: Service, servicePath: string = '') => {
  return {
    '@context': 'https://schema.org',
    '@type': ['Service', 'ProfessionalService'],
    name: service.title,
    description: service.fullDescription || service.shortDescription,
    url: `${siteUrl}/services${servicePath}`,
    provider: getOrganizationSchema(),
    serviceType: 'Organizational Development',
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
    offers: {
      '@type': 'Offer',
      description: service.engagementModel || 'Personalized consulting engagement',
    },
    image: `${siteUrl}/service-${service.id}.jpg`,
    keywords: service.keywords?.join(', ') || '',
  }
}

/**
 * Contact Schema
 * Used for Contact page
 */
export const getContactSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    contactOption: 'TollFree',
    areaServed: 'CO',
    availableLanguage: ['en', 'es'],
    email: organizationEmail,
    telephone: organizationPhone,
    url: `${siteUrl}/contact`,
  }
}

/**
 * Person Schema (Founder)
 * Used for About/Founder bio
 */
export const getPersonSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Cristina Segura',
    jobTitle: 'CEO & Founder, Executive Coach',
    url: siteUrl,
    email: organizationEmail,
    sameAs: [
      'https://www.linkedin.com/in/cristinasegura',
      'https://twitter.com/cristinasegura',
    ],
    worksFor: {
      '@type': 'Organization',
      name: organizationName,
      url: siteUrl,
    },
    description:
      'Cristina Segura es experta en desarrollo organizacional con más de 15 años de experiencia guiando transformaciones empresariales.',
    knowsAbout: [
      'Organizational Development',
      'Executive Coaching',
      'Talent Management',
      'Change Management',
      'Strategic Planning',
    ],
  }
}

/**
 * LocalBusiness Schema
 * Alternative for service-based businesses
 */
export const getLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteUrl,
    name: organizationName,
    image: organizationLogo,
    description:
      'EvoPeople OD Consulting especializa en desarrollo organizacional, estrategia de talento y transformación empresarial en Colombia.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: organizationAddress.streetAddress,
      addressLocality: organizationAddress.addressLocality,
      addressRegion: organizationAddress.addressRegion,
      postalCode: organizationAddress.postalCode,
      addressCountry: organizationAddress.addressCountry,
    },
    telephone: organizationPhone,
    email: organizationEmail,
    url: siteUrl,
    sameAs: [
      'https://www.linkedin.com/company/evopeople',
      'https://twitter.com/evopeople',
      'https://www.facebook.com/evopeople',
    ],
  }
}

/**
 * Inject Schema.org structured data into page <head>
 * Used as helper for Meta component
 */
export const injectStructuredData = (schema: Record<string, unknown>) => {
  // Remove existing structured data with same @type
  const schemaType = (schema['@type'] as string | string[])[0]
  const existingScripts = document.querySelectorAll(
    `script[type="application/ld+json"][data-schema-type="${schemaType}"]`
  )
  existingScripts.forEach(script => script.remove())

  // Create and inject new script
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-schema-type', schemaType)
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}

/**
 * Helper: Inject multiple schemas
 */
export const injectMultipleSchemas = (schemas: Record<string, unknown>[]) => {
  schemas.forEach(schema => injectStructuredData(schema))
}
