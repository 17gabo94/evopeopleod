/**
 * Founder Bio Section Component
 * About page - founder information
 */

import Card from '@/components/Common/Card'
import Section from '@/components/Common/Section'
import { getCopy } from '@/utils/content'

export default function FounderBio() {
  const name = getCopy('about', 'founderBioName')
  const title = getCopy('about', 'founderBioTitle')
  const experience = getCopy('about', 'founderBioExperience')
  const expertise = getCopy('about', 'founderBioExpertise')

  return (
    <Section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Nuestra Líder
        </h2>
        <Card className="p-8 bg-gradient-to-r from-emerald-50 to-slate-50">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center justify-center h-48 w-48 mx-auto bg-emerald-200 rounded-lg text-emerald-600">
                <div className="text-center">
                  <div className="text-4xl">👤</div>
                  <p className="text-sm mt-2 font-semibold">{name}</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
                <p className="text-emerald-600 font-semibold text-lg mt-1">{title}</p>
              </div>
              <div>
                <p className="text-slate-600">
                  <span className="font-semibold">Experiencia:</span> {experience}
                </p>
              </div>
              <div>
                <p className="text-slate-600">
                  <span className="font-semibold">Especialidades:</span> {expertise}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-300">
                <p className="text-slate-600 text-sm">
                  Con más de 15 años en Recursos Humanos y Desarrollo Organizacional,
                  Cristina ha acompañado a numerosas organizaciones en su transformación,
                  desarrollando líderes y construyendo culturas de alto desempeño.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
