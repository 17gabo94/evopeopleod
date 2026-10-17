/**
 * Credibility Section Component
 * Highlights founder experience and approach
 */

import Section from '@/components/Common/Section'
import { getCopy } from '@/utils/content'

export default function CredibilitySection() {
  const experience = getCopy('homepage', 'credibilityExperience')
  const approach = getCopy('homepage', 'credibilityApproach')

  return (
    <Section className="py-16 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Experiencia y Enfoque
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold text-emerald-600 mb-2">
                  {experience}
                </p>
                <p className="text-slate-600">
                  Combinamos expertise profunda en Recursos Humanos y Desarrollo
                  Organizacional con pensamiento estratégico.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-emerald-600 mb-2">
                  {approach}
                </p>
                <p className="text-slate-600">
                  Cada solución está diseñada específicamente para tus desafíos,
                  asegurando impacto medible y sostenible.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center space-y-4">
              <div>
                <p className="text-4xl font-bold text-emerald-600">15+</p>
                <p className="text-slate-600">Años de Experiencia</p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <p className="text-lg font-semibold text-slate-900">
                  Soluciones Personalizadas
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  Orientadas a resultados con acompañamiento de alto impacto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
