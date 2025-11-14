import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import Card from './components/Card'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="app">
      <Header title="React App with Tests - Jenkins Demo" />
      
      <div className="container">
        <Card 
          title="Welcome to the App"
          description="This is a simple React application with comprehensive testing for Jenkins CI/CD demonstration"
        >
          <p>All components have tests written with Vitest and React Testing Library</p>
        </Card>

        <Card 
          title="Components Demo"
          description="Click the buttons below to see the components in action"
        >
          <div className="demo-section">
            <h3>Button Component Demo:</h3>
            <Button 
              onClick={handleButtonClick} 
              label={`Click Count: ${count}`}
            />
          </div>

          <div className="demo-section">
            <h3>Counter Component:</h3>
            <Counter />
          </div>
        </Card>

        <Card 
          title="Testing Info"
          description="Run tests with: npm test"
        >
          <p>✓ Header Component Tests</p>
          <p>✓ Button Component Tests</p>
          <p>✓ Card Component Tests</p>
          <p>✓ Counter Component Tests</p>
        </Card>
      </div>
    </div>
  )
}

export default App
