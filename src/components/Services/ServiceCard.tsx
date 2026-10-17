/**
 * Service Card Component
 * Reusable card for displaying a single service
 */

import { useNavigate } from 'react-router-dom'
import Card from '@/components/Common/Card'
import Button from '@/components/Common/Button'
import { Service } from '@/utils/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const navigate = useNavigate()

  return (
    <Card className="p-6 bg-white hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg mb-3">
          <span className="text-emerald-600 text-lg">→</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
        {service.title}
      </h3>
      <p className="text-slate-600 text-sm mb-4 flex-1">
        {service.shortDescription}
      </p>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {service.keywords.slice(0, 2).map((keyword) => (
            <span
              key={keyword}
              className="inline-block px-2 py-1 bg-emerald-50 text-emerald-600 text-xs rounded font-semibold"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <Button
        onClick={() => navigate(`/services/${service.id}`)}
        variant="secondary"
        size="sm"
        className="w-full"
      >
        Conocer más
      </Button>
    </Card>
  )
}
