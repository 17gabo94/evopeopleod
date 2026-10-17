import React from 'react'
import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  /**
   * Display label for breadcrumb item
   */
  label: string
  /**
   * Link path (if omitted, item is not clickable)
   */
  href?: string
}

interface BreadcrumbProps {
  /**
   * Array of breadcrumb items
   */
  items: BreadcrumbItem[]
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Reusable Breadcrumb Navigation Component
 * 
 * Shows hierarchical navigation path with clickable links.
 * The last item (active) is not clickable.
 * 
 * @example
 * ```tsx
 * <Breadcrumb items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Services', href: '/services' },
 *   { label: 'Consulting' },
 * ]} />
 * ```
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  className = '',
}) => {
  return (
    <nav className={`text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isActive = index === items.length - 1
          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <svg
                  className="w-4 h-4 text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
              {isActive ? (
                <span
                  className="text-slate-900 font-semibold"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  to={item.href}
                  className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-600">{item.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
