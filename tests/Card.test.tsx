import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Card from '@/components/Common/Card'

describe('Card Component', () => {
  it('renders with children', () => {
    render(
      <Card>
        <p>Card Content</p>
      </Card>
    )
    
    expect(screen.getByText('Card Content')).toBeInTheDocument()
  })

  it('applies base card styles', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    )
    
    const cardElement = screen.getByRole('region')
    expect(cardElement).toHaveClass('bg-white')
    expect(cardElement).toHaveClass('rounded-lg')
    expect(cardElement).toHaveClass('shadow-md')
  })

  it('accepts custom className', () => {
    render(
      <Card className="custom-card">
        <div>Content</div>
      </Card>
    )
    
    const cardElement = screen.getByRole('region')
    expect(cardElement).toHaveClass('custom-card')
  })

  it('renders multiple children correctly', () => {
    render(
      <Card>
        <h2>Title</h2>
        <p>Description</p>
        <button>Action</button>
      </Card>
    )
    
    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument()
  })

  it('applies default medium padding', () => {
    render(
      <Card>
        <span>Content</span>
      </Card>
    )
    
    const cardElement = screen.getByRole('region')
    expect(cardElement).toHaveClass('p-6')
  })

  it('applies custom shadow levels', () => {
    const { rerender } = render(
      <Card shadow="sm">
        <span>Small Shadow</span>
      </Card>
    )
    expect(screen.getByRole('region')).toHaveClass('shadow-sm')
    
    rerender(
      <Card shadow="lg">
        <span>Large Shadow</span>
      </Card>
    )
    expect(screen.getByRole('region')).toHaveClass('shadow-lg')
    
    rerender(
      <Card shadow="none">
        <span>No Shadow</span>
      </Card>
    )
    expect(screen.getByRole('region')).not.toHaveClass('shadow')
  })

  it('applies custom padding levels', () => {
    const { rerender } = render(
      <Card padding="sm">
        <span>Small Padding</span>
      </Card>
    )
    expect(screen.getByRole('region')).toHaveClass('p-4')
    
    rerender(
      <Card padding="lg">
        <span>Large Padding</span>
      </Card>
    )
    expect(screen.getByRole('region')).toHaveClass('p-8')
  })

  it('applies hover styles when enabled', () => {
    render(
      <Card hover>
        <span>Hoverable</span>
      </Card>
    )
    
    const cardElement = screen.getByRole('region')
    expect(cardElement).toHaveClass('hover:shadow-lg')
    expect(cardElement).toHaveClass('hover:-translate-y-1')
  })

  it('applies border when enabled', () => {
    render(
      <Card bordered>
        <span>Bordered</span>
      </Card>
    )
    
    const cardElement = screen.getByRole('region')
    expect(cardElement).toHaveClass('border')
    expect(cardElement).toHaveClass('border-slate-200')
  })
})

