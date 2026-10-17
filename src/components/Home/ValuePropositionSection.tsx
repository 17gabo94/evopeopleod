/**
 * Value Proposition Section Component
 * 3-column grid showing key value propositions
 */

import Card from '@/components/Common/Card'
import Section from '@/components/Common/Section'
import { getCopy } from '@/utils/content'

export default function ValuePropositionSection() {
  const value1Title = getCopy('homepage', 'value1Title')
  const value1Desc = getCopy('homepage', 'value1Description')
  const value2Title = getCopy('homepage', 'value2Title')
  const value2Desc = getCopy('homepage', 'value2Description')
  const value3Title = getCopy('homepage', 'value3Title')
  const value3Desc = getCopy('homepage', 'value3Description')

  const values = [
    { title: value1Title, description: value1Desc },
    { title: value2Title, description: value2Desc },
    { title: value3Title, description: value3Desc },
  ]

  return (
    <Section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                  <div className="text-emerald-600 text-xl font-bold">{index + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-base">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
