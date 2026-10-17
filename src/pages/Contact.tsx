/**
 * Contact Page
 * Contact form and information
 */

import { useMemo } from 'react'
import PageLayout from '@/layouts/PageLayout'
import Section from '@/components/Common/Section'
import ContactHeader from '@/components/Contact/ContactHeader'
import ContactForm from '@/components/Forms/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'
import { getOrganizationSchema } from '@/utils/structuredData'

export default function Contact() {
  // Prepare structured data
  const structuredData = useMemo(() => {
    return getOrganizationSchema()
  }, [])

  return (
    <PageLayout
      title="Contact - EvoPeople OD Consulting"
      description="Contáctanos para discutir tus desafíos organizacionales. Consulta estratégica personalizada."
      ogTitle="Contacto - EvoPeople OD Consulting"
      ogDescription="Contáctanos para una consulta estratégica personalizada sobre desarrollo organizacional y transformación empresarial."
      ogUrl="https://evopeopleod.com/contact"
      canonical="https://evopeopleod.com/contact"
      keywords="contacto, consulta, asesoría, desarrollo organizacional"
      structuredData={structuredData}
    >
      <ContactHeader />

      {/* Contact Form and Info Section */}
      <Section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Envíanos un Mensaje</h2>
              <ContactForm />
            </div>

            <ContactInfo />
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}
