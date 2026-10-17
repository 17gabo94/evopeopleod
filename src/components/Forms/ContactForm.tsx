/**
 * Contact Form Component
 * Integrated with Formspree for email handling
 */

import React, { useState } from 'react'
import FormField from './FormField'
import Button from '@/components/Common/Button'
import { getServices } from '@/utils/content'
import { getCopy } from '@/utils/content'
import { submitFormToFormspree } from '@/utils/formspree'
import { trackFormSubmission } from '@/utils/analytics'

interface ContactFormData {
  name: string
  email: string
  company?: string
  service?: string
  message: string
}

const ContactForm: React.FC = () => {
  const services = getServices()
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const result = await submitFormToFormspree({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      })

      if (result.ok) {
        // Track form submission in GA4
        trackFormSubmission('contact_form', formData.email)
        
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', service: '', message: '' })
        // Auto-reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        console.error('Form submission error:', result.error)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const successMessage = getCopy('contact', 'formSuccessMessage')
  const errorMessage = getCopy('contact', 'formErrorMessage')

  return (
    <form onSubmit={handleSubmit} className="contact-form space-y-6">
      <FormField
        label="Nombre"
        id="name"
        name="name"
        type="text"
        placeholder="Tu nombre completo"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <FormField
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="tu.email@example.com"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <FormField
        label="Empresa"
        id="company"
        name="company"
        type="text"
        placeholder="Nombre de tu empresa (opcional)"
        value={formData.company}
        onChange={handleChange}
      />

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">
          Servicio de Interés
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-900"
        >
          <option value="">Selecciona un servicio...</option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <FormField
        label="Mensaje"
        id="message"
        name="message"
        type="textarea"
        placeholder="Cuéntanos sobre tu desafío o pregunta..."
        value={formData.message}
        onChange={handleChange}
        required
      />

      {submitStatus === 'success' && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
          <p className="text-emerald-700 text-sm font-semibold">✓ {successMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm font-semibold">⚠ {errorMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        variant="primary"
        className="w-full"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </Button>
    </form>
  )
}

export default ContactForm
