/**
 * Approach Section Component
 * About page - value proposition and approach
 */

import Card from '@/components/Common/Card'
import Section from '@/components/Common/Section'
import { getCopy } from '@/utils/content'

export default function ApproachSection() {
  const headline = getCopy('about', 'valuePropositionHeadline')
  const body = getCopy('about', 'valuePropositionBody')
  const conclusion = getCopy('about', 'valuePropositionConclusion')
  const differentiators = JSON.parse(getCopy('about', 'differentiators') || '[]') as string[] || [
    'Más de 15 años de experiencia en Recursos Humanos y Desarrollo Organizacional',
    'Visión estratégica alineada a resultados de negocio',
    'Soluciones personalizadas y sostenibles',
    'Enfoque consultivo y ejecutivo',
    'Acompañamiento cercano de alto impacto',
  ]

  return (
    <Section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">{headline}</h2>
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-12">
          <p>{body}</p>
          <p className="text-emerald-600 font-semibold">{conclusion}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((diff, index) => (
            <Card key={index} className="p-6 bg-white">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-600 text-white text-sm font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">{diff}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
