import React from 'react'

interface SectionProps {
  /**
   * Section content
   */
  children: React.ReactNode
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Section HTML id attribute
   */
  id?: string
  /**
   * Background color variant
   * @default 'white'
   */
  background?: 'white' | 'slate' | 'emerald' | 'gradient'
  /**
   * Vertical padding size
   * @default 'md'
   */
  spacing?: 'sm' | 'md' | 'lg'
  /**
   * Maximum width container
   * @default 'lg'
   */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

/**
 * Reusable Section Component
 * 
 * A container for page sections with consistent padding, background options,
 * and responsive spacing. Used to organize page content into logical sections.
 * 
 * @example
 * ```tsx
 * <Section id="features" background="slate" spacing="lg">
 *   <h2>Features</h2>
 *   <p>Our amazing features</p>
 * </Section>
 * ```
 */
const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
  spacing = 'md',
  maxWidth = 'lg',
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    slate: 'bg-slate-50',
    emerald: 'bg-emerald-50',
    gradient: 'bg-gradient-to-br from-emerald-50 to-slate-100',
  }

  const spacingStyles = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16 lg:py-20',
    lg: 'py-16 sm:py-24 lg:py-32',
  }

  const maxWidthStyles = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }

  const containerClasses = `${maxWidthStyles[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8`

  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${spacingStyles[spacing]} ${className}`}
    >
      <div className={containerClasses}>
        {children}
      </div>
    </section>
  )
}

export default Section
