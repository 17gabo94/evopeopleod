import { useEffect } from 'react'

export interface PageTitleProps {
  title: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterTitle?: string
  twitterDescription?: string
  canonical?: string
  keywords?: string
  robots?: string
}

/**
 * usePageTitle Hook
 * Sets document title and all meta tags (OG, Twitter, canonical, robots, etc.)
 */
export const usePageTitle = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = '/og-image.jpg',
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  canonical,
  keywords,
  robots = 'index, follow',
}: PageTitleProps) => {
  useEffect(() => {
    // Set page title
    document.title = `${title} - EvoPeople OD Consulting`

    // Helper function to update or create meta tag
    const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null

      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, name)
        document.head.appendChild(tag)
      }

      tag.content = content
    }

    // Description
    if (description) {
      updateMetaTag('description', description)
    }

    // Keywords
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    // Robots
    updateMetaTag('robots', robots)

    // Open Graph (for social media sharing)
    updateMetaTag('og:title', ogTitle || title, 'property')
    updateMetaTag('og:description', ogDescription || description || '', 'property')
    updateMetaTag('og:image', ogImage, 'property')
    updateMetaTag('og:type', 'website', 'property')

    if (ogUrl) {
      updateMetaTag('og:url', ogUrl, 'property')
    }

    // Twitter Card (for Twitter sharing)
    updateMetaTag('twitter:card', twitterCard)
    updateMetaTag('twitter:title', twitterTitle || ogTitle || title)
    updateMetaTag('twitter:description', twitterDescription || ogDescription || description || '')

    if (ogImage) {
      updateMetaTag('twitter:image', ogImage)
    }

    // Canonical URL (prevents duplicate content issues)
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null

      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }

      link.href = canonical
    }

    // Viewport is set in index.html but ensure it's present
    let viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null
    if (!viewport) {
      viewport = document.createElement('meta')
      viewport.name = 'viewport'
      viewport.content = 'width=device-width, initial-scale=1.0'
      document.head.appendChild(viewport)
    }

    // Charset
    let charset = document.querySelector('meta[charset]') as HTMLMetaElement | null
    if (!charset) {
      charset = document.createElement('meta')
      charset.setAttribute('charset', 'UTF-8')
      document.head.appendChild(charset)
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, twitterTitle, twitterDescription, canonical, keywords, robots])
}
