import React, { useState } from 'react'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="counter" data-testid="counter">
      <h2>Counter: <span data-testid="count-value">{count}</span></h2>
      <button onClick={increment} data-testid="increment-btn">
        Increment
      </button>
      <button onClick={decrement} data-testid="decrement-btn">
        Decrement
      </button>
      <button onClick={reset} data-testid="reset-btn">
        Reset
      </button>
    </div>
  )
}

export default Counter
