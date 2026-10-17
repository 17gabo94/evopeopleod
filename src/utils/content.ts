/**
 * Content Management Utility
 */

import { Service } from './types'
import servicesData from '@/data/services.json'
import copyData from '@/data/copy.json'

// Service utilities
export const getServices = (): Service[] => {
  return servicesData as Service[]
}

export const getServiceById = (id: string): Service | undefined => {
  const services = getServices()
  return services.find(service => service.id === id)
}

export const getAllServices = (): Service[] => {
  return getServices()
}

export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) {
    return text
  }
  return text.substring(0, maxLength).trim() + '...'
}

// Copy/content utilities
export const getCopy = (section: keyof typeof copyData, key: string): string => {
  const sectionData = copyData[section] as Record<string, unknown>
  if (!sectionData) return ''
  const value = sectionData[key]
  return typeof value === 'string' ? value : ''
}

export const getAllCopy = (section: keyof typeof copyData): Record<string, unknown> => {
  return copyData[section] || {}
}

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(dateString).toLocaleDateString('es-MX', options)
}

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
