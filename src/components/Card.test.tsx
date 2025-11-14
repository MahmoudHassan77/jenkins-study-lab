import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card Component', () => {
  it('renders card with title and description', () => {
    const title = 'Test Card'
    const description = 'This is a test card'
    
    render(<Card title={title} description={description} />)
    
    const cardTitle = screen.getByTestId('card-title')
    const cardDescription = screen.getByTestId('card-description')
    
    expect(cardTitle).toHaveTextContent(title)
    expect(cardDescription).toHaveTextContent(description)
  })

  it('renders card element', () => {
    render(<Card title="Card" description="Description" />)
    
    const card = screen.getByTestId('card')
    expect(card).toBeInTheDocument()
  })

  it('renders children when provided', () => {
    render(
      <Card title="Card" description="Desc">
        <p>Child content</p>
      </Card>
    )
    
    const childrenContainer = screen.getByTestId('card-children')
    expect(childrenContainer).toBeInTheDocument()
    expect(screen.getByText('Child content')).toBeInTheDocument()
  })

  it('does not render children container when no children provided', () => {
    render(<Card title="Card" description="Desc" />)
    
    const childrenContainer = screen.queryByTestId('card-children')
    expect(childrenContainer).not.toBeInTheDocument()
  })

  it('handles multiple children correctly', () => {
    render(
      <Card title="Card" description="Desc">
        <p>Child 1</p>
        <p>Child 2</p>
      </Card>
    )
    
    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()
  })
})
