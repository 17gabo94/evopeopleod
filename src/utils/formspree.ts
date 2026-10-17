/**
 * Formspree Integration Utilities
 * Handles form submission and email sending via Formspree
 */

import { FORMSPREE_CONFIG } from '@/config/constants'

export interface FormspreeSubmissionData {
  name: string
  email: string
  company?: string
  service?: string
  message: string
}

export interface FormspreeResponse {
  ok: boolean
  error?: string
  message?: string
}

/**
 * Submit form data to Formspree
 * @param data - Form data to submit
 * @returns Promise resolving to success/failure
 */
export const submitFormToFormspree = async (
  data: FormspreeSubmissionData
): Promise<FormspreeResponse> => {
  try {
    const formDataObj = new FormData()
    formDataObj.append('name', data.name)
    formDataObj.append('email', data.email)
    if (data.company) {
      formDataObj.append('company', data.company)
    }
    if (data.service) {
      formDataObj.append('service', data.service)
    }
    formDataObj.append('message', data.message)

    const response = await fetch(FORMSPREE_CONFIG.ENDPOINT, {
      method: 'POST',
      body: formDataObj,
      redirect: 'manual', // Prevent automatic redirect that causes CORS issues
    })

    // Formspree returns 200 OK even if it redirects
    // The redirect causes CORS issues in browser, but email is sent successfully
    if (response.ok || response.type === 'opaqueredirect') {
      return {
        ok: true,
        message: 'Formulario enviado exitosamente',
      }
    } else {
      return {
        ok: false,
        error: 'Error al enviar el formulario',
      }
    }
  } catch (error) {
    console.error('Formspree submission error:', error)
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Error desconocido',
    }
  }
}

/**
 * Get Formspree endpoint (useful for debugging)
 * @returns The Formspree endpoint URL
 */
export const getFormspreeEndpoint = (): string => {
  return FORMSPREE_CONFIG.ENDPOINT
}

/**
 * Get Formspree contact email
 * @returns The contact email address
 */
export const getFormspreeContactEmail = (): string => {
  return FORMSPREE_CONFIG.CONTACT_EMAIL
}
