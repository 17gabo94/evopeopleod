/**
 * Engagement Model Section Component
 * About page - 4-step process
 */

import Card from '@/components/Common/Card'
import Section from '@/components/Common/Section'
import { getCopy } from '@/utils/content'

export default function EngagementModelSection() {
  const steps = [
    {
      number: '1',
      title: getCopy('about', 'processStep1'),
      description: getCopy('about', 'processStep1Description'),
    },
    {
      number: '2',
      title: getCopy('about', 'processStep2'),
      description: getCopy('about', 'processStep2Description'),
    },
    {
      number: '3',
      title: getCopy('about', 'processStep3'),
      description: getCopy('about', 'processStep3Description'),
    },
    {
      number: '4',
      title: getCopy('about', 'processStep4'),
      description: getCopy('about', 'processStep4Description'),
    },
  ]

  return (
    <Section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          Nuestro Proceso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full text-lg font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
