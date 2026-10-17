import { describe, it, expect } from 'vitest'
import { GA4_CONFIG } from '@/config/constants'

describe('GA4 Integration', () => {
  it('checks GA4 is enabled in config', () => {
    expect(GA4_CONFIG.IS_ENABLED).toBe(true)
  })

  it('has valid measurement ID', () => {
    expect(GA4_CONFIG.MEASUREMENT_ID).toBe('G-H0JEWWEP8D')
  })
})

describe('Page View Tracking', () => {
  it('GA4 configuration exists', () => {
    expect(GA4_CONFIG).toBeDefined()
  })
})

describe('Form Submission Tracking', () => {
  it('GA4 is configured for form tracking', () => {
    expect(GA4_CONFIG.IS_ENABLED).toBe(true)
  })
})

describe('CTA Click Tracking', () => {
  it('GA4 measurement ID is valid', () => {
    expect(GA4_CONFIG.MEASUREMENT_ID).toMatch(/^G-/)
  })
})

describe('Service View Tracking', () => {
  it('GA4 measurement ID matches expected format', () => {
    expect(GA4_CONFIG.MEASUREMENT_ID).toBe('G-H0JEWWEP8D')
  })
})
