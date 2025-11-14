import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header Component', () => {
  it('renders header with correct title', () => {
    const testTitle = 'My Test App'
    render(<Header title={testTitle} />)
    
    const titleElement = screen.getByTestId('header-title')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveTextContent(testTitle)
  })

  it('renders header element', () => {
    render(<Header title="Test" />)
    
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()
  })

  it('displays title correctly', () => {
    const title = 'Jenkins Demo App'
    render(<Header title={title} />)
    
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
