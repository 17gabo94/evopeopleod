/**
 * Contact Info Component
 * Display contact details and social links
 */

import Card from '@/components/Common/Card'
import Section from '@/components/Common/Section'
import { getCopy } from '@/utils/content'

export default function ContactInfo() {
  const email = getCopy('contact', 'contactEmail')
  const location = getCopy('contact', 'contactLocation')
  const linkedInLabel = getCopy('contact', 'linkedInLabel')
  const founderName = getCopy('common', 'founder')

  return (
    <Section>
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-8">Información de Contacto</h3>

        <div className="space-y-6">
          <Card className="p-6 bg-slate-50">
            <div className="flex gap-4">
              <div className="text-2xl">✉️</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                <a
                  href={`mailto:${email}`}
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  {email}
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-slate-50">
            <div className="flex gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Ubicación</h4>
                <p className="text-slate-600">{location}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-slate-50">
            <div className="flex gap-4">
              <div className="text-2xl">💼</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">{linkedInLabel}</h4>
                <a
                  href="https://linkedin.com/in/cristina-segura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Conecta con {founderName} en LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Tiempo de respuesta:</span> Nos
            comprometemos a responder tus mensajes en 24-48 horas hábiles.
          </p>
        </div>
      </div>
    </Section>
  )
}
