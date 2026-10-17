import React, { useState } from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Image source URL
   */
  src: string
  /**
   * Alternative text for accessibility
   */
  alt: string
  /**
   * Enable lazy loading (default: true)
   * @default true
   */
  lazy?: boolean
  /**
   * Show loading skeleton while image loads
   * @default false
   */
  showSkeleton?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Responsive Image Component with Lazy Loading
 * 
 * An enhanced image component that supports:
 * - Lazy loading for performance
 * - Smooth fade-in animation
 * - Loading skeleton option
 * - Full accessibility support
 * 
 * @example
 * ```tsx
 * <Image 
 *   src="/images/hero.jpg" 
 *   alt="Hero image"
 *   lazy
 *   className="w-full h-auto"
 * />
 * ```
 */
const Image: React.FC<ImageProps> = ({
  src,
  alt,
  lazy = true,
  showSkeleton = false,
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(!lazy)

  return (
    <div className="relative overflow-hidden bg-slate-100 rounded-lg">
      {!isLoaded && showSkeleton && (
        <div
          className={`absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 animate-pulse`}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        className={`w-full h-auto transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  )
}

export default Image
