import React from 'react'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Field label text
   */
  label: string
  /**
   * Unique field identifier
   */
  id: string
  /**
   * Input type
   * @default 'text'
   */
  type?: 'text' | 'email' | 'textarea' | 'tel' | 'number' | 'url' | 'password' | 'select'
  /**
   * Placeholder text
   */
  placeholder?: string
  /**
   * Current field value
   */
  value?: string | number
  /**
   * Change handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  /**
   * Field is required
   * @default false
   */
  required?: boolean
  /**
   * Error message to display
   */
  error?: string
  /**
   * Helper text below field
   */
  helperText?: string
  /**
   * Options for select type
   */
  options?: Array<{ value: string; label: string }>
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Row count for textarea
   * @default 4
   */
  rows?: number
}

/**
 * Reusable Form Field Component
 * 
 * Supports text, email, textarea, tel, number, url, password, and select inputs.
 * Includes label, error display, and helper text.
 * 
 * @example
 * ```tsx
 * <FormField
 *   id="email"
 *   label="Email Address"
 *   type="email"
 *   placeholder="you@example.com"
 *   required
 *   helperText="We'll never share your email"
 * />
 * ```
 */
const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  error,
  helperText,
  options,
  className = '',
  rows = 4,
  ...props
}) => {
  const commonStyles =
    'w-full px-4 py-2.5 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent'

  const borderStyles = error
    ? 'border-red-500 bg-red-50'
    : 'border-slate-300 bg-white hover:border-slate-400'

  const inputClasses = `${commonStyles} ${borderStyles} text-slate-900 placeholder-slate-400`

  return (
    <div className={`form-field mb-4 ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-slate-700 mb-2"
      >
        {label}
        {required && <span className="text-red-600 ml-1" aria-label="required">
          *
        </span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          required={required}
          className={`${inputClasses} resize-vertical font-sans`}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}
          required={required}
          className={`${inputClasses} appearance-none cursor-pointer pr-10 font-sans`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
        >
          <option value="">Select an option</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          required={required}
          className={`${inputClasses} font-sans`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...props}
        />
      )}

      {error && (
        <p id={`${id}-error`} className="text-red-600 text-sm mt-1.5 flex items-center gap-1">
          <span aria-hidden="true">⚠</span>
          {error}
        </p>
      )}

      {helperText && !error && (
        <p id={`${id}-helper`} className="text-slate-500 text-sm mt-1.5">
          {helperText}
        </p>
      )}
    </div>
  )
}

export default FormField
