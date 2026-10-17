/**
 * Service Overview Grid Component
 * Displays first 3 services on homepage
 */

import { useNavigate } from 'react-router-dom'
import Card from '@/components/Common/Card'
import Button from '@/components/Common/Button'
import Section from '@/components/Common/Section'
import { getServices } from '@/utils/content'

export default function ServiceOverviewGrid() {
  const navigate = useNavigate()
  const services = getServices().slice(0, 3)

  return (
    <Section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="p-6 bg-white hover:shadow-lg transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-4 flex-1">
                {service.shortDescription}
              </p>
              <Button
                onClick={() => navigate(`/services/${service.id}`)}
                variant="secondary"
                size="sm"
              >
                Conocer más
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
