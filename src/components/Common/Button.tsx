import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'tertiary'
  /**
   * Size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Whether the button is loading (shows spinner)
   * @default false
   */
  isLoading?: boolean
  /**
   * Button content (text or elements)
   */
  children: React.ReactNode
}

/**
 * Reusable Button Component
 * 
 * A flexible button component with multiple variants and sizes.
 * Supports primary, secondary, outline, and tertiary styling.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">Click me</Button>
 * ```
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-colors duration-200 inline-flex items-center justify-center'

  const variantStyles = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-slate-600 text-white hover:bg-slate-700 active:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed',
    tertiary: 'text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button 
      type="button"
      className={classes} 
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}

export default Button
