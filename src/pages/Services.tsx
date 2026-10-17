/**
 * Services Index Page
 * Displays all 6 services in a responsive grid
 */

import { useMemo } from 'react'
import PageLayout from '@/layouts/PageLayout'
import Section from '@/components/Common/Section'
import ServiceCard from '@/components/Services/ServiceCard'
import { getServices } from '@/utils/content'
import { getOrganizationSchema } from '@/utils/structuredData'

export default function Services() {
  const services = getServices()

  // Prepare structured data
  const structuredData = useMemo(() => {
    return getOrganizationSchema()
  }, [])

  return (
    <PageLayout
      title="Services - EvoPeople OD Consulting"
      description="Descubre nuestros 6 servicios especializados en desarrollo organizacional, liderazgo y gestión de talento."
      ogTitle="Nuestros Servicios - EvoPeople OD Consulting"
      ogDescription="6 servicios especializados en Desarrollo Organizacional, Liderazgo, Gestión de Talento y Transformación Empresarial."
      ogUrl="https://evopeopleod.com/services"
      canonical="https://evopeopleod.com/services"
      keywords="servicios, desarrollo organizacional, liderazgo, gestión talento, transformación"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <Section className="py-12 bg-gradient-to-r from-slate-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg text-emerald-200">
            6 servicios especializados en Desarrollo Organizacional, Liderazgo y Gestión de Talento
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}
