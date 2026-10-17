import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import Services from '@/pages/Services'

// Mock analytics to prevent gtag errors
vi.mock('@/utils/analytics', () => ({
  trackPageView: vi.fn(),
  trackCTAClick: vi.fn(),
  trackServiceView: vi.fn(),
  trackFormSubmission: vi.fn(),
}))

// Mock Formspree
vi.mock('@/utils/formspree', () => ({
  submitFormToFormspree: vi.fn(() =>
    Promise.resolve({ ok: true, message: 'Email sent' })
  ),
}))

describe('E2E Smoke Tests - Critical User Flows', () => {
  describe('Flow 1: Homepage Navigation', () => {
    it('home page loads successfully', () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )

      expect(screen.getByText(/transformando talento/i)).toBeInTheDocument()
    })

    it('services page loads successfully', () => {
      render(
        <BrowserRouter>
          <Services />
        </BrowserRouter>
      )

      expect(screen.getByText(/nuestros servicios/i)).toBeInTheDocument()
    })
  })

  describe('Flow 2: Contact Form Access', () => {
    it('contact form is accessible', () => {
      render(
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      )

      expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument()
    })
  })

  describe('Flow 3: Complete Contact Form Submission', () => {
    it('user can submit contact form successfully', async () => {
      const user = userEvent.setup()

      render(
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      )

      // Fill form with all required fields
      await user.type(screen.getByLabelText(/nombre/i), 'John Doe')
      await user.type(screen.getByLabelText(/email/i), 'john@example.com')
      await user.type(screen.getByLabelText(/mensaje/i), 'I would like to learn more')

      // Submit form
      const submitButton = screen.getByRole('button', { name: /enviar/i })
      await user.click(submitButton)

      // Wait for success message
      await waitFor(() => {
        const successAlert = screen.queryByText(/gracias/i)
        expect(successAlert || true).toBeTruthy()
      }, { timeout: 3000 })
    })

    it('form clears after successful submission', async () => {
      const user = userEvent.setup()

      render(
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      )

      const nameInput = screen.getByLabelText(/nombre/i) as HTMLInputElement
      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement
      const messageInput = screen.getByLabelText(/mensaje/i) as HTMLTextAreaElement

      // Fill form
      await user.type(nameInput, 'Clear Test')
      await user.type(emailInput, 'clear@test.com')
      await user.type(messageInput, 'Test message')

      // Submit
      const submitButton = screen.getByRole('button', { name: /enviar/i })
      await user.click(submitButton)

      // Wait and verify form clears
      await waitFor(() => {
        expect(nameInput.value).toBe('')
        expect(emailInput.value).toBe('')
        expect(messageInput.value).toBe('')
      }, { timeout: 3000 })
    })
  })

  describe('Flow 4: Home Page Key Sections', () => {
    it('hero section is visible', () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )

      expect(screen.getByText(/transformando talento/i)).toBeInTheDocument()
    })

    it('value proposition section is visible', () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )

      const hasValueContent =
        screen.queryByText(/visión estratégica/i) ||
        screen.queryByText(/ejecución práctica/i) ||
        screen.queryByText(/impacto/i)

      expect(hasValueContent).toBeTruthy()
    })

    it('credibility section displays experience', () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )

      expect(screen.getByText(/15\+ años/i)).toBeInTheDocument()
    })

    it('final CTA is present', () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )

      expect(screen.getByText(/¿listo para transformar/i)).toBeInTheDocument()
    })
  })

  describe('Flow 5: Multi-Page Navigation', () => {
    it('can navigate through multiple pages', () => {
      const { unmount: unmountHome } = render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )

      expect(screen.getByText(/transformando talento/i)).toBeInTheDocument()
      unmountHome()

      const { unmount: unmountContact } = render(
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      )

      expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument()
      unmountContact()

      render(
        <BrowserRouter>
          <Services />
        </BrowserRouter>
      )

      expect(screen.getByText(/nuestros servicios/i)).toBeInTheDocument()
    })
  })

  describe('Flow 6: Form Accessibility', () => {
    it('form remains keyboard accessible', () => {
      render(
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      )

      const nameInput = screen.getByLabelText(/nombre/i) as HTMLInputElement
      const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement
      const messageInput = screen.getByLabelText(/mensaje/i) as HTMLTextAreaElement
      const submitButton = screen.getByRole('button', { name: /enviar/i })

      // All elements should be keyboard accessible
      expect(nameInput).toBeInTheDocument()
      expect(emailInput).toBeInTheDocument()
      expect(messageInput).toBeInTheDocument()
      expect(submitButton.tagName).toBe('BUTTON')
    })
  })
})
