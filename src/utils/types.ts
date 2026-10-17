/**
 * TypeScript Interfaces and Types
 */

export interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  engagementModel: string
  focusAreas: string[]
  keywords: string[]
  icon?: string
}

export interface NavItem {
  label: string
  href: string
  ariaLabel?: string
  target?: string
}

export interface BreadcrumbItem {
  label: string
  href: string
  ariaLabel?: string
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  photo?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  image?: string
}

export interface PageMeta {
  title: string
  description: string
  keywords: string[]
  canonical?: string
}
