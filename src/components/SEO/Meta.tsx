import { useEffect } from 'react'

interface MetaProps {
  title: string
  description: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  canonical?: string
}

const Meta: React.FC<MetaProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = 'summary',
  canonical,
}) => {
  useEffect(() => {
    // Set page title
    document.title = title

    // Update meta tags
    updateMetaTag('description', description)
    
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    // Open Graph
    updateMetaTag('og:title', ogTitle || title, 'property')
    updateMetaTag('og:description', ogDescription || description, 'property')
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage, 'property')
    }
    
    if (ogUrl) {
      updateMetaTag('og:url', ogUrl, 'property')
    }

    // Twitter Card
    updateMetaTag('twitter:card', twitterCard)
    updateMetaTag('twitter:title', ogTitle || title)
    updateMetaTag('twitter:description', ogDescription || description)

    // Canonical
    if (canonical) {
      updateCanonical(canonical)
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, canonical])

  return null
}

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    document.head.appendChild(tag)
  }

  tag.content = content
}

function updateCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement

  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }

  link.href = url
}

export default Meta
