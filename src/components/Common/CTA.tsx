import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

interface CTAProps {
  /**
   * Main heading text
   */
  heading: string
  /**
   * Description/subtitle text
   */
  description?: string
  /**
   * Button label text
   * @default 'Get Started'
   */
  buttonText?: string
  /**
   * Button link target (internal route)
   * @default '/contact'
   */
  buttonLink?: string
  /**
   * Button variant style
   * @default 'secondary'
   */
  buttonVariant?: 'primary' | 'secondary' | 'outline'
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Call-to-Action Section Component
 * 
 * A prominent section designed to encourage user action.
 * Features a heading, optional description, and call-to-action button.
 * 
 * @example
 * ```tsx
 * <CTA
 *   heading="Ready to transform your organization?"
 *   description="Let's discuss how we can help"
 *   buttonText="Contact Us"
 *   buttonLink="/contact"
 * />
 * ```
 */
const CTA: React.FC<CTAProps> = ({
  heading,
  description,
  buttonText = 'Get Started',
  buttonLink = '/contact',
  buttonVariant = 'secondary',
  className = '',
}) => {
  return (
    <div
      className={`bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl p-8 sm:p-12 lg:p-16 text-center shadow-lg ${className}`}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {heading}
        </h2>
        {description && (
          <p className="text-lg sm:text-xl mb-8 text-emerald-50 leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex justify-center">
          <Link to={buttonLink} className="inline-block">
            <Button
              variant={buttonVariant}
              size="lg"
              className="!text-white hover:!bg-white hover:!text-emerald-600 focus:!ring-emerald-300"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CTA
