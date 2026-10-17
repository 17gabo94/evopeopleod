/**
 * Google Analytics 4 Integration Utilities
 * Handles event tracking and page analytics
 */

import { GA4_CONFIG } from '@/config/constants'

interface GTAGFunction {
  (command: string, ...args: Array<string | number | Record<string, unknown>>): void
}

declare global {
  interface Window {
    gtag?: GTAGFunction
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Initialize Google Analytics 4
 * Call this once in your app initialization
 */
export const initGA4 = (measurementId?: string): void => {
  const id = measurementId || GA4_CONFIG.MEASUREMENT_ID

  if (!GA4_CONFIG.IS_ENABLED || !window.gtag) {
    console.warn('GA4 is not enabled or gtag is not available')
    return
  }

  window.gtag('config', id, {
    page_path: window.location.pathname,
    page_title: document.title,
    allow_google_signals: true,
    allow_ad_personalization_signals: true,
  })
}

/**
 * Track custom event
 * Use this for tracking any event
 * @param eventName - Name of the event
 * @param eventData - Event data
 */
export const trackEvent = (
  eventName: string,
  eventData?: Record<string, string | number | boolean>
): void => {
  if (!GA4_CONFIG.IS_ENABLED || !window.gtag) {
    return
  }

  window.gtag('event', eventName, eventData || {})
}

/**
 * Track page view
 * Called automatically by useScrollToTop hook, but can be called manually
 * @param pageTitle - Page title
 * @param pageLocation - Page location/path
 */
export const trackPageView = (pageTitle: string, pageLocation: string): void => {
  if (!GA4_CONFIG.IS_ENABLED || !window.gtag) {
    return
  }

  window.gtag('event', 'page_view', {
    page_title: pageTitle,
    page_location: pageLocation,
  })
}

/**
 * Track form submission
 * @param formName - Name of the form
 * @param email - User email (optional, hashed)
 */
export const trackFormSubmission = (formName: string, email?: string): void => {
  if (!GA4_CONFIG.IS_ENABLED || !window.gtag) {
    return
  }

  const eventData: Record<string, string> = {
    form_name: formName,
    timestamp: new Date().toISOString(),
  }

  if (email) {
    eventData.user_email = hashEmail(email)
  }

  window.gtag('event', 'form_submit', eventData)
}

/**
 * Track CTA click
 * @param ctaText - Text of the CTA button
 * @param ctaLocation - Where the CTA is located (e.g., "hero", "service-card", "footer")
 * @param destination - Where the CTA leads to (URL or page name)
 */
export const trackCTAClick = (
  ctaText: string,
  ctaLocation: string,
  destination: string
): void => {
  if (!GA4_CONFIG.IS_ENABLED || !window.gtag) {
    return
  }

  window.gtag('event', 'cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation,
    destination: destination,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track service view
 * @param serviceId - Service ID
 * @param serviceName - Service name
 */
export const trackServiceView = (serviceId: string, serviceName: string): void => {
  if (!GA4_CONFIG.IS_ENABLED || !window.gtag) {
    return
  }

  window.gtag('event', 'service_view', {
    service_id: serviceId,
    service_name: serviceName,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track engagement (scrolling, time on page, etc.)
 * @param eventName - Name of the engagement event
 * @param metadata - Additional metadata
 */
export const trackEngagement = (
  eventName: string,
  metadata?: Record<string, string | number | boolean>
): void => {
  if (!GA4_CONFIG.IS_ENABLED || !window.gtag) {
    return
  }

  const eventData: Record<string, string | number | boolean> = {
    timestamp: new Date().toISOString(),
  }

  if (metadata) {
    Object.assign(eventData, metadata)
  }

  window.gtag('event', eventName, eventData)
}

/**
 * Get GA4 measurement ID
 * @returns The GA4 measurement ID or empty string if not enabled
 */
export const getGA4MeasurementId = (): string => {
  return GA4_CONFIG.IS_ENABLED ? GA4_CONFIG.MEASUREMENT_ID : ''
}

/**
 * Check if GA4 is enabled
 * @returns Whether GA4 is enabled
 */
export const isGA4Enabled = (): boolean => {
  return GA4_CONFIG.IS_ENABLED
}

/**
 * Simple email hasher (for privacy)
 * Hashes email for privacy-preserving tracking
 * @param email - Email to hash
 * @returns Hashed email (first 8 chars)
 */
const hashEmail = (email: string): string => {
  let hash = 0
  const str = email.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16).substring(0, 8)
}

export const trackConversion = (conversionId: string, value?: number) => {
  trackEvent('conversion', {
    conversion_id: conversionId,
    value: value || 1,
  })
}

export const trackButtonClick = (buttonName: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
  })
}

export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
  })
}

export const trackInternalLink = (linkName: string, linkUrl: string) => {
  trackEvent('internal_link_click', {
    link_name: linkName,
    link_url: linkUrl,
  })
}
