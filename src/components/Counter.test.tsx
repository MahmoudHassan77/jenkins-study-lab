import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter Component', () => {
  it('renders counter with initial value of 0', () => {
    render(<Counter />)
    
    const countValue = screen.getByTestId('count-value')
    expect(countValue).toHaveTextContent('0')
  })

  it('increments count when increment button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const incrementBtn = screen.getByTestId('increment-btn')
    await user.click(incrementBtn)
    
    const countValue = screen.getByTestId('count-value')
    expect(countValue).toHaveTextContent('1')
  })

  it('decrements count when decrement button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const incrementBtn = screen.getByTestId('increment-btn')
    const decrementBtn = screen.getByTestId('decrement-btn')
    
    await user.click(incrementBtn)
    await user.click(incrementBtn)
    await user.click(decrementBtn)
    
    const countValue = screen.getByTestId('count-value')
    expect(countValue).toHaveTextContent('1')
  })

  it('resets count to 0 when reset button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const incrementBtn = screen.getByTestId('increment-btn')
    const resetBtn = screen.getByTestId('reset-btn')
    
    await user.click(incrementBtn)
    await user.click(incrementBtn)
    await user.click(incrementBtn)
    
    let countValue = screen.getByTestId('count-value')
    expect(countValue).toHaveTextContent('3')
    
    await user.click(resetBtn)
    
    countValue = screen.getByTestId('count-value')
    expect(countValue).toHaveTextContent('0')
  })

  it('increments multiple times', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const incrementBtn = screen.getByTestId('increment-btn')
    
    for (let i = 1; i <= 5; i++) {
      await user.click(incrementBtn)
      const countValue = screen.getByTestId('count-value')
      expect(countValue).toHaveTextContent(i.toString())
    }
  })

  it('handles negative counts', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    const decrementBtn = screen.getByTestId('decrement-btn')
    
    await user.click(decrementBtn)
    await user.click(decrementBtn)
    
    const countValue = screen.getByTestId('count-value')
    expect(countValue).toHaveTextContent('-2')
  })

  it('renders all buttons', () => {
    render(<Counter />)
    
    expect(screen.getByTestId('increment-btn')).toBeInTheDocument()
    expect(screen.getByTestId('decrement-btn')).toBeInTheDocument()
    expect(screen.getByTestId('reset-btn')).toBeInTheDocument()
  })
})
