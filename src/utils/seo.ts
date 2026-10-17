/**
 * SEO Utility Functions
 */

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  canonical?: string
}

export const generateMetaTags = (seoData: SEOData): SEOData => {
  return {
    ...seoData,
    ogTitle: seoData.ogTitle || seoData.title,
    ogDescription: seoData.ogDescription || seoData.description,
  }
}

export const truncateDescription = (text: string, length: number = 160): string => {
  return text.length > length ? text.substring(0, length) + '...' : text
}

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = import.meta.env.VITE_SITE_URL || 'https://evopeople.com'
  return `${baseUrl}${path}`
}

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}
