import React from 'react'

interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Shadow intensity level
   * @default 'md'
   */
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  /**
   * Padding size
   * @default 'md'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /**
   * Whether card is hoverable (lifted on hover)
   * @default false
   */
  hover?: boolean
  /**
   * Border visibility
   * @default false
   */
  bordered?: boolean
}

/**
 * Reusable Card Component
 * 
 * A flexible card container with customizable shadow, padding, and hover effects.
 * Used for grouping related content.
 * 
 * @example
 * ```tsx
 * <Card shadow="lg" padding="md" hover>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  shadow = 'md',
  padding = 'md',
  hover = false,
  bordered = false,
}) => {
  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  }

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const hoverStyles = hover ? 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-default' : ''
  const borderStyles = bordered ? 'border border-slate-200' : ''

  const classes = `bg-white rounded-lg ${shadowStyles[shadow]} ${paddingStyles[padding]} ${hoverStyles} ${borderStyles} ${className}`

  return (
    <div className={classes} role="region">
      {children}
    </div>
  )
}

export default Card
