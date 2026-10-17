import PageLayout from '@/layouts/PageLayout'
import Section from '@/components/Common/Section'
import Button from '@/components/Common/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <PageLayout
      title="404 - Página no encontrada"
      description="La página que buscas no existe. Vuelve a la página de inicio."
      robots="noindex, follow"
      canonical="https://evopeopleod.com/404"
    >
      <Section className="py-32">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
          <p className="text-2xl text-slate-600 mb-4">Página no encontrada</p>
          <p className="text-lg text-slate-500 mb-8">
            La página que buscas no existe o ha sido movida.
          </p>
          <Button
            onClick={() => navigate('/')}
            variant="primary"
            size="lg"
          >
            Volver al inicio
          </Button>
        </div>
      </Section>
    </PageLayout>
  )
}
