/**
 * Application Constants
 */

export const SITE_NAME = 'EvoPeople'
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://evopeople.com'
export const SITE_DESCRIPTION = 'Professional OD Consulting Services'

export const CONTACT_EMAIL = 'info@evopeople.com'
export const CONTACT_PHONE = '(555) 123-4567'

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/evopeople',
  twitter: 'https://twitter.com/evopeople',
  facebook: 'https://facebook.com/evopeople',
}

export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
}

export const COLORS = {
  primary: '#1e293b', // slate-900
  secondary: '#059669', // emerald-600
  accent: '#f59e0b', // amber-500
  success: '#10b981', // emerald-500
  error: '#ef4444', // red-500
  warning: '#f59e0b', // amber-500
}

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
}

export const GA4_ID = import.meta.env.VITE_GA4_ID || 'G-XXXXXXXXXX'

export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'f/YOUR_FORM_ID'
