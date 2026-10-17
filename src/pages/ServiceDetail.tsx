/**
 * Service Detail Page
 * Individual service detail with full description and breadcrumb
 */

import { useParams, useNavigate } from 'react-router-dom'
import { useMemo, useEffect } from 'react'
import PageLayout from '@/layouts/PageLayout'
import Section from '@/components/Common/Section'
import Button from '@/components/Common/Button'
import Breadcrumb from '@/components/Common/Breadcrumb'
import { getServiceById } from '@/utils/content'
import { getServiceSchema } from '@/utils/structuredData'
import { trackServiceView, trackCTAClick } from '@/utils/analytics'

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const service = id ? getServiceById(id) : undefined

  // Prepare structured data for service
  const structuredData = useMemo(() => {
    if (!service) return undefined
    return getServiceSchema(service, `/services/${service.id}`)
  }, [service])

  // Track service view
  useEffect(() => {
    if (service) {
      trackServiceView(service.id, service.title)
    }
  }, [service])

  if (!service) {
    return (
      <PageLayout
        title="Servicio No Encontrado - EvoPeople OD Consulting"
        description="Servicio no encontrado"
      >
        <Section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Servicio no encontrado
            </h1>
            <p className="text-slate-600 mb-8">
              El servicio que buscas no existe o ha sido removido.
            </p>
            <Button
              onClick={() => navigate('/services')}
              variant="primary"
            >
              Ver todos los servicios
            </Button>
          </div>
        </Section>
      </PageLayout>
    )
  }

  return (
    <PageLayout
      title={`${service.title} - EvoPeople OD Consulting`}
      description={service.shortDescription}
      ogTitle={`${service.title} - EvoPeople OD Consulting`}
      ogDescription={service.shortDescription}
      ogUrl={`https://evopeopleod.com/services/${service.id}`}
      canonical={`https://evopeopleod.com/services/${service.id}`}
      keywords={service.keywords.join(', ')}
      structuredData={structuredData}
    >
      {/* Breadcrumb */}
      <Section className="py-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Servicios', href: '/services' },
              { label: service.title, href: `/services/${service.id}` },
            ]}
          />
        </div>
      </Section>

      {/* Hero with Service Title */}
      <Section className="py-12 bg-gradient-to-r from-slate-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg text-emerald-200">{service.shortDescription}</p>
        </div>
      </Section>

      {/* Service Details */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-slate max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Descripción</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Modelo de Acompañamiento
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.engagementModel}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Áreas de Enfoque
                </h3>
                <ul className="space-y-3">
                  {service.focusAreas.map((area) => (
                    <li key={area} className="flex gap-3">
                      <span className="text-emerald-600 font-bold text-lg">✓</span>
                      <span className="text-slate-600">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Palabras Clave
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-full font-semibold text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            ¿Interesado en este servicio?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Contáctanos para discutir cómo podemos ayudarte a transformar tu
            organización.
          </p>
          <Button
            onClick={() => {
              trackCTAClick('Contactar', 'service_detail_cta', `/contact`)
              navigate('/contact')
            }}
            variant="outline"
            size="lg"
            className="bg-white border-white text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600"
          >
            Contactar
          </Button>
        </div>
      </Section>

      {/* Back to Services */}
      <Section className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Button
            onClick={() => navigate('/services')}
            variant="primary"
          >
            Ver todos los servicios
          </Button>
        </div>
      </Section>
    </PageLayout>
  )
}
