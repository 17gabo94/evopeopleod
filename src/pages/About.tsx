/**
 * About Page
 * Company vision, approach, founder bio, and engagement model
 */

import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import PageLayout from '@/layouts/PageLayout'
import PhilosophySection from '@/components/About/PhilosophySection'
import ApproachSection from '@/components/About/ApproachSection'
import FounderBio from '@/components/About/FounderBio'
import EngagementModelSection from '@/components/About/EngagementModelSection'
import Button from '@/components/Common/Button'
import Section from '@/components/Common/Section'
import { getOrganizationSchema } from '@/utils/structuredData'

export default function About() {
  const navigate = useNavigate()

  // Prepare structured data
  const structuredData = useMemo(() => {
    return getOrganizationSchema()
  }, [])

  return (
    <PageLayout
      title="About - EvoPeople OD Consulting"
      description="Conoce nuestra visión estratégica y enfoque de transformación organizacional. Acompañamiento consultivo de alto impacto."
      ogTitle="Nuestra Visión - EvoPeople OD Consulting"
      ogDescription="Descubre nuestro enfoque único en desarrollo organizacional y transformación empresarial con más de 15 años de expertise."
      ogUrl="https://evopeopleod.com/about"
      canonical="https://evopeopleod.com/about"
      keywords="nuestra visión, enfoque, transformación, desarrollo organizacional, Cristina Segura"
      structuredData={structuredData}
    >
      <PhilosophySection />
      <ApproachSection />
      <FounderBio />
      <EngagementModelSection />

      {/* Final CTA */}
      <Section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu transformación?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Contáctanos para una consulta estratégica personalizada.
          </p>
          <Button
            onClick={() => navigate('/contact')}
            variant="outline"
            size="lg"
            className="bg-white border-white text-emerald-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600"
          >
            Contáctanos Ahora
          </Button>
        </div>
      </Section>
    </PageLayout>
  )
}
