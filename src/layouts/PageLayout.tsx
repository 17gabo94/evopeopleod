/**
 * PageLayout Component
 * Wrapper that sets page title, meta tags (OG, Twitter, canonical), and structured data
 * Layout (Header/Footer) is provided by App.tsx wrapping
 */

import React, { useEffect } from 'react'
import { usePageTitle, PageTitleProps } from '@/hooks/usePageTitle'
import { injectStructuredData } from '@/utils/structuredData'

interface PageLayoutProps extends PageTitleProps {
  children: React.ReactNode
  /**
   * @deprecated Use 'title' instead
   */
  pageTitle?: string
  /**
   * @deprecated Use 'description' instead
   */
  metaDescription?: string
  /**
   * Structured data schema to inject into page head
   */
  structuredData?: Record<string, unknown>
}

export default function PageLayout({
  children,
  pageTitle,
  metaDescription,
  structuredData,
  ...pageTitleProps
}: PageLayoutProps) {
  // Support legacy props for backward compatibility
  const title = pageTitleProps.title || pageTitle || ''
  const description = pageTitleProps.description || metaDescription || ''

  // Inject structured data if provided
  useEffect(() => {
    if (structuredData) {
      injectStructuredData(structuredData)
    }
  }, [structuredData])

  usePageTitle({
    ...pageTitleProps,
    title,
    description,
  })

  return <>{children}</>
}
