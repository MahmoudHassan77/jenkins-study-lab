import React from 'react'

interface CardProps {
  title: string
  description: string
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="card" data-testid="card">
      <h2 data-testid="card-title">{title}</h2>
      <p data-testid="card-description">{description}</p>
      {children && <div data-testid="card-children">{children}</div>}
    </div>
  )
}

export default Card
