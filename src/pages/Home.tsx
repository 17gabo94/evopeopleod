/**
 * Home Page
 * Main landing page with hero, value proposition, services overview, and credibility sections
 */

import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import PageLayout from '@/layouts/PageLayout'
import HeroSection from '@/components/Home/HeroSection'
import ValuePropositionSection from '@/components/Home/ValuePropositionSection'
import ServiceOverviewGrid from '@/components/Home/ServiceOverviewGrid'
import CredibilitySection from '@/components/Home/CredibilitySection'
import Button from '@/components/Common/Button'
import Section from '@/components/Common/Section'
import { getCopy } from '@/utils/content'
import { getOrganizationSchema } from '@/utils/structuredData'

export default function Home() {
  const navigate = useNavigate()
  const finalCTAHeadline = getCopy('homepage', 'finalCTAHeadline')
  const finalCTASubheading = getCopy('homepage', 'finalCTASubheading')
  const finalCTAButton = getCopy('homepage', 'finalCTAButton')

  // Prepare structured data
  const structuredData = useMemo(() => {
    return getOrganizationSchema()
  }, [])

  return (
    <PageLayout
      title="Inicio - EvoPeople OD Consulting"
      description="EvoPeople OD Consulting - Transformando talento, liderazgo y organizaciones. 15+ años de experiencia en desarrollo organizacional."
      ogTitle="EvoPeople OD Consulting - Transformación Organizacional"
      ogDescription="Expertos en desarrollo organizacional, estrategia de talento y transformación empresarial con más de 15 años de experiencia."
      ogUrl="https://evopeopleod.com/"
      canonical="https://evopeopleod.com/"
      keywords="desarrollo organizacional, estrategia talento, liderazgo, transformación empresarial, consulting"
      structuredData={structuredData}
    >
      <HeroSection />
      <ValuePropositionSection />
      <ServiceOverviewGrid />
      <CredibilitySection />

      {/* Final CTA Section */}
      <Section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {finalCTAHeadline}
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            {finalCTASubheading}
          </p>
          <Button
            onClick={() => navigate('/contact')}
            variant="primary"
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            {finalCTAButton}
          </Button>
        </div>
      </Section>
    </PageLayout>
  )
}
