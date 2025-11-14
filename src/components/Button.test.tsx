import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button Component', () => {
  it('renders button with label', () => {
    const mockClick = vi.fn()
    render(<Button onClick={mockClick} label="Click Me" />)
    
    const button = screen.getByTestId('custom-button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Click Me')
  })

  it('calls onClick handler when clicked', async () => {
    const mockClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={mockClick} label="Click" />)
    
    const button = screen.getByTestId('custom-button')
    await user.click(button)
    
    expect(mockClick).toHaveBeenCalledOnce()
  })

  it('can be disabled', () => {
    const mockClick = vi.fn()
    render(<Button onClick={mockClick} label="Disabled" disabled={true} />)
    
    const button = screen.getByTestId('custom-button')
    expect(button).toBeDisabled()
  })

  it('is not disabled by default', () => {
    const mockClick = vi.fn()
    render(<Button onClick={mockClick} label="Active" />)
    
    const button = screen.getByTestId('custom-button')
    expect(button).not.toBeDisabled()
  })

  it('does not call onClick when disabled', async () => {
    const mockClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={mockClick} label="Disabled" disabled={true} />)
    
    const button = screen.getByTestId('custom-button')
    await user.click(button)
    
    expect(mockClick).not.toHaveBeenCalled()
  })
})
