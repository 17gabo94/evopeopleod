/**
 * Hero Section Component
 * Main banner with headline, subheading, and CTA button
 */

import { useNavigate } from 'react-router-dom'
import Button from '@/components/Common/Button'
import Section from '@/components/Common/Section'
import { getCopy } from '@/utils/content'

export default function HeroSection() {
  const navigate = useNavigate()
  const copy = getCopy('homepage', 'heroHeadline')
  const subheading = getCopy('homepage', 'heroSubheading')
  const intro = getCopy('homepage', 'heroIntro')
  const ctaButton = getCopy('homepage', 'heroCTA')

  return (
    <Section className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {copy}
        </h1>
        <p className="text-lg md:text-xl text-emerald-300 mb-6 font-semibold">
          {subheading}
        </p>
        <p className="text-base md:text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
          {intro}
        </p>
        <Button
          onClick={() => navigate('/services')}
          variant="primary"
          size="lg"
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          {ctaButton}
        </Button>
      </div>
    </Section>
  )
}
