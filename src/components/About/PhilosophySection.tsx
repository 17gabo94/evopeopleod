/**
 * Philosophy Section Component
 * About page - vision and philosophy section
 */

import Section from '@/components/Common/Section'
import { getCopy, getServices } from '@/utils/content'

export default function PhilosophySection() {
  const headline = getCopy('about', 'philosophyHeadline')
  const intro = getCopy('about', 'philosophyIntro')
  const body = getCopy('about', 'philosophyBody')
  const conclusion = getCopy('about', 'philosophyConclusion')
  const services = getServices()

  return (
    <Section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">{headline}</h2>
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
          <p>{intro}</p>
          <p>{body}</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            {services.map((service) => (
              <li key={service.id} className="text-base">
                <span className="font-semibold text-slate-900">{service.title}</span>
              </li>
            ))}
          </ul>
          <p>{conclusion}</p>
        </div>
      </div>
    </Section>
  )
}
