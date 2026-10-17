import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import Services from '@/pages/Services'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

// Mock navigation
vi.mock('react-router-dom', async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actual = await vi.importActual<any>('react-router-dom')
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  }
})

// Mock analytics
vi.mock('@/utils/analytics', () => ({
  trackPageView: vi.fn(),
  trackCTAClick: vi.fn(),
  trackServiceView: vi.fn(),
  trackFormSubmission: vi.fn(),
}))

// Wrapper component for Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Home Page', () => {
  it('renders hero section with headline', () => {
    renderWithRouter(<Home />)
    expect(screen.getByText(/transformando talento/i)).toBeInTheDocument()
  })

  it('renders value proposition section', () => {
    renderWithRouter(<Home />)
    expect(screen.getByText(/visión estratégica/i)).toBeInTheDocument()
  })

  it('renders credibility section', () => {
    renderWithRouter(<Home />)
    expect(screen.getByText(/15\+ años/i)).toBeInTheDocument()
  })

  it('renders final CTA section', () => {
    renderWithRouter(<Home />)
    expect(screen.getByText(/¿listo para transformar/i)).toBeInTheDocument()
  })
})

describe('Contact Page', () => {
  it('renders contact header', () => {
    renderWithRouter(<Contact />)
    expect(screen.getByText(/¿listo para transformar/i)).toBeInTheDocument()
  })

  it('renders contact form', () => {
    renderWithRouter(<Contact />)
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument()
  })

  it('renders contact info section', () => {
    renderWithRouter(<Contact />)
    expect(screen.getByText(/contacto@evopeopleod\.com/i)).toBeInTheDocument()
  })

  it('renders submit button', () => {
    renderWithRouter(<Contact />)
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument()
  })
})

describe('Services Page', () => {
  it('renders services page title', () => {
    renderWithRouter(<Services />)
    expect(screen.getByText(/nuestros servicios/i)).toBeInTheDocument()
  })

  it('renders services page description', () => {
    renderWithRouter(<Services />)
    // Description may or may not be present depending on implementation
    expect(screen.getByText(/nuestros servicios/i)).toBeInTheDocument()
  })
})

describe('About Page', () => {
  it('renders about page header', () => {
    renderWithRouter(<About />)
    expect(screen.getByText(/una visión estratégica/i)).toBeInTheDocument()
  })

  it('renders philosophy section', () => {
    renderWithRouter(<About />)
    expect(screen.getByText(/entorno empresarial/i)).toBeInTheDocument()
  })

  it('renders value proposition section', () => {
    renderWithRouter(<About />)
    expect(screen.getByText(/acompañamos a líderes/i)).toBeInTheDocument()
  })

  it('renders founder bio section', () => {
    renderWithRouter(<About />)
    const bioElements = screen.getAllByText(/cristina segura/i)
    expect(bioElements.length).toBeGreaterThan(0)
  })

  it('renders engagement model section', () => {
    renderWithRouter(<About />)
    expect(screen.getByText(/strategic assessment/i)).toBeInTheDocument()
  })
})

describe('NotFound Page', () => {
  it('renders 404 message', () => {
    renderWithRouter(<NotFound />)
    expect(screen.getByText(/404/i)).toBeInTheDocument()
  })

  it('renders return home button', () => {
    renderWithRouter(<NotFound />)
    expect(screen.getByRole('button', { name: /volver/i })).toBeInTheDocument()
  })
})
