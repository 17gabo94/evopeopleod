import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '@/components/Common/Button'

describe('Button Component', () => {
  it('renders button with children text', () => {
    render(<Button onClick={() => {}}>Click Me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    
    const button = screen.getByRole('button', { name: /click/i })
    await userEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('renders with primary variant by default', () => {
    render(<Button onClick={() => {}}>Click</Button>)
    const button = screen.getByRole('button', { name: /click/i })
    
    expect(button).toHaveClass('bg-emerald-600')
  })

  it('renders with secondary variant', () => {
    render(<Button onClick={() => {}} variant="secondary">Click</Button>)
    const button = screen.getByRole('button', { name: /click/i })
    
    expect(button).toHaveClass('bg-slate-600')
  })

  it('renders with tertiary variant', () => {
    render(<Button onClick={() => {}} variant="tertiary">Click</Button>)
    const button = screen.getByRole('button', { name: /click/i })
    
    expect(button).toHaveClass('text-emerald-600')
  })

  it('renders with outline variant', () => {
    render(<Button onClick={() => {}} variant="outline">Click</Button>)
    const button = screen.getByRole('button', { name: /click/i })
    
    expect(button).toHaveClass('border-2')
    expect(button).toHaveClass('border-emerald-600')
  })

  it('is disabled when disabled prop is true', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick} disabled={true}>Click</Button>)
    
    const button = screen.getByRole('button', { name: /click/i })
    await userEvent.click(button)
    
    expect(button).toBeDisabled()
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('accepts custom className', () => {
    render(
      <Button 
        onClick={() => {}} 
        className="custom-class" 
      >
        Click
      </Button>
    )
    const button = screen.getByRole('button', { name: /click/i })
    
    expect(button).toHaveClass('custom-class')
  })

  it('has proper accessibility attributes', () => {
    render(<Button onClick={() => {}}>Submit</Button>)
    const button = screen.getByRole('button', { name: /submit/i })
    
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
  })

  it('renders different sizes', () => {
    const { rerender } = render(<Button onClick={() => {}} size="sm">Small</Button>)
    expect(screen.getByRole('button', { name: /small/i })).toHaveClass('text-sm')
    
    rerender(<Button onClick={() => {}} size="md">Medium</Button>)
    expect(screen.getByRole('button', { name: /medium/i })).toHaveClass('text-base')
    
    rerender(<Button onClick={() => {}} size="lg">Large</Button>)
    expect(screen.getByRole('button', { name: /large/i })).toHaveClass('text-lg')
  })

  it('shows loading state with spinner', () => {
    render(<Button onClick={() => {}} isLoading={true}>Loading</Button>)
    const button = screen.getByRole('button', { name: /loading/i })
    
    expect(button).toBeDisabled()
    // Check for spinner SVG
    const svg = button.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})

