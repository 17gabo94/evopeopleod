/**
 * Contact Header Component
 * Contact page - header section
 */

import Section from '@/components/Common/Section'
import { getCopy } from '@/utils/content'

export default function ContactHeader() {
  const headline = getCopy('contact', 'headerHeadline')
  const subheading = getCopy('contact', 'headerSubheading')

  return (
    <Section className="py-12 bg-gradient-to-r from-slate-900 to-emerald-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{headline}</h1>
        <p className="text-lg text-emerald-200">{subheading}</p>
      </div>
    </Section>
  )
}
