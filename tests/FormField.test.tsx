import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormField from '@/components/Forms/FormField'

describe('FormField Component', () => {
  it('renders input field with label', () => {
    render(
      <FormField
        id="test-input"
        label="Test Input"
        type="text"
        onChange={() => {}}
      />
    )
    
    expect(screen.getByText('Test Input')).toBeInTheDocument()
  })

  it('handles text input change', async () => {
    const handleChange = vi.fn()
    render(
      <FormField
        id="test-input"
        label="Test"
        type="text"
        onChange={handleChange}
      />
    )
    
    const input = screen.getByLabelText(/test/i) as HTMLInputElement
    await userEvent.type(input, 'hello')
    
    expect(handleChange).toHaveBeenCalled()
    expect(input.value).toBe('hello')
  })

  it('renders textarea for textarea type', () => {
    render(
      <FormField
        id="test-textarea"
        label="Message"
        type="textarea"
        onChange={() => {}}
      />
    )
    
    const textarea = screen.getByLabelText(/message/i)
    expect(textarea).toBeInstanceOf(HTMLTextAreaElement)
  })

  it('renders select for select type with options', () => {
    const options = [
      { value: 'opt1', label: 'Option 1' },
      { value: 'opt2', label: 'Option 2' },
    ]
    
    render(
      <FormField
        id="test-select"
        label="Choose"
        type="select"
        options={options}
        onChange={() => {}}
      />
    )
    
    const select = screen.getByLabelText(/choose/i)
    expect(select).toBeInstanceOf(HTMLSelectElement)
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('displays error message when provided', () => {
    render(
      <FormField
        id="test-error"
        label="Test"
        type="text"
        onChange={() => {}}
        error="This field is required"
      />
    )
    
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('displays helper text when provided', () => {
    render(
      <FormField
        id="test-helper"
        label="Test"
        type="text"
        onChange={() => {}}
        helperText="Enter your full name"
      />
    )
    
    expect(screen.getByText('Enter your full name')).toBeInTheDocument()
  })

  it('sets required attribute when required is true', () => {
    render(
      <FormField
        id="test-required"
        label="Required Field"
        type="text"
        onChange={() => {}}
        required={true}
      />
    )
    
    // The label includes a required asterisk, so we need to find by regex
    const label = screen.getByText(/required field/i)
    expect(label).toBeInTheDocument()
    
    const input = screen.getByLabelText(/required field/i) as HTMLInputElement
    expect(input).toHaveAttribute('required')
  })

  it('sets placeholder text', () => {
    render(
      <FormField
        id="test-placeholder"
        label="Test"
        type="email"
        placeholder="Enter email"
        onChange={() => {}}
      />
    )
    
    const input = screen.getByPlaceholderText('Enter email')
    expect(input).toBeInTheDocument()
  })

  it('accepts value prop and displays it', () => {
    render(
      <FormField
        id="test-value"
        label="Test"
        type="text"
        value="initial value"
        onChange={() => {}}
      />
    )
    
    const input = screen.getByDisplayValue('initial value')
    expect(input).toBeInTheDocument()
  })

  it('applies custom className to form field wrapper', () => {
    render(
      <FormField
        id="test-class"
        label="Test"
        type="text"
        onChange={() => {}}
        className="custom-field"
      />
    )
    
    // The className is applied to the wrapper div, not the input
    const label = screen.getByText('Test')
    const wrapper = label.closest('.form-field')
    expect(wrapper).toHaveClass('custom-field')
  })
})
