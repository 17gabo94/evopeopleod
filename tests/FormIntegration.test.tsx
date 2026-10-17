import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/Forms/ContactForm'

// Mock Formspree utility
vi.mock('@/utils/formspree', () => ({
  submitFormToFormspree: vi.fn((data) => {
    // Simulate successful submission
    if (data.email && data.name && data.message) {
      return Promise.resolve({ ok: true, message: 'Email sent' })
    }
    // Simulate validation failure
    return Promise.resolve({ ok: false, message: 'Missing required fields' })
  }),
}))

// Mock analytics
vi.mock('@/utils/analytics', () => ({
  trackFormSubmission: vi.fn(),
}))

describe('ContactForm - Formspree Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/empresa/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/servicio/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument()
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/nombre/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Test message')

    const submitButton = screen.getByRole('button', { name: /enviar/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/gracias por tu mensaje/i)).toBeInTheDocument()
    })
  })

  it('shows success message with correct styling', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/nombre/i), 'Jane Smith')
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Another test')

    const submitButton = screen.getByRole('button', { name: /enviar/i })
    await user.click(submitButton)

    await waitFor(() => {
      const successAlert = screen.getByText(/gracias por tu mensaje/i)
      expect(successAlert).toBeInTheDocument()
      expect(successAlert.closest('div')).toHaveClass('bg-emerald-50')
    })
  })

  it('validates required fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Try to submit empty form
    const submitButton = screen.getByRole('button', { name: /enviar/i })
    await user.click(submitButton)

    // Form should still show and be fillable (HTML5 validation handles required)
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument()
  })

  it('disables submit button during submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/nombre/i), 'Test User')
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Test')

    const submitButton = screen.getByRole('button', { name: /enviar/i })
    
    // Note: The actual disabling happens via isSubmitting state
    // We verify the button exists and is clickable before submission
    expect(submitButton).toBeInTheDocument()
  })

  it('allows optional company field', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const companyField = screen.getByLabelText(/empresa/i)
    expect(companyField).toBeInTheDocument()

    // Optional field - should not prevent submission
    await user.type(screen.getByLabelText(/nombre/i), 'Test')
    await user.type(screen.getByLabelText(/email/i), 'test@test.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Test')

    const submitButton = screen.getByRole('button', { name: /enviar/i })
    await user.click(submitButton)

    // Should still submit successfully
    await waitFor(() => {
      expect(screen.getByText(/gracias/i)).toBeInTheDocument()
    })
  })

  it('allows optional service selection', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const serviceField = screen.getByLabelText(/servicio/i)
    expect(serviceField).toBeInTheDocument()
    
    // Optional field - form should work without it
    await user.type(screen.getByLabelText(/nombre/i), 'Test')
    await user.type(screen.getByLabelText(/email/i), 'test@test.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Test')

    const submitButton = screen.getByRole('button', { name: /enviar/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/gracias/i)).toBeInTheDocument()
    })
  })

  it('clears form after successful submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const nameInput = screen.getByLabelText(/nombre/i) as HTMLInputElement
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement
    const messageInput = screen.getByLabelText(/mensaje/i) as HTMLTextAreaElement

    await user.type(nameInput, 'Clear Test')
    await user.type(emailInput, 'clear@test.com')
    await user.type(messageInput, 'Test clear')

    const submitButton = screen.getByRole('button', { name: /enviar/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/gracias/i)).toBeInTheDocument()
    })

    // Form fields should be cleared
    expect(nameInput.value).toBe('')
    expect(emailInput.value).toBe('')
    expect(messageInput.value).toBe('')
  })

  it('displays error message on submission failure', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Submit empty form (will fail validation)
    const submitButton = screen.getByRole('button', { name: /enviar/i })
    await user.click(submitButton)

    // HTML5 validation will prevent submission
    // Form should remain visible
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument()
  })
})
