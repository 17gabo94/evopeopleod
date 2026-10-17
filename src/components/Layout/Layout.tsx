import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

/**
 * Main Layout Component
 * 
 * Wraps pages with:
 * - Fixed sticky header with navigation
 * - Main content area with min-height for footer to stick
 * - Fixed footer
 * 
 * Provides consistent layout structure across all pages
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
