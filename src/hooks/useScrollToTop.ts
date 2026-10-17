/**
 * useScrollToTop Hook
 * Automatically scrolls to top of page when route changes and tracks page views
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '@/utils/analytics'

export default function useScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    // Track page view
    trackPageView(document.title, location.pathname)
  }, [location.pathname])
}
