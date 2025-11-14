import React from 'react'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <h1 data-testid="header-title">{title}</h1>
    </header>
  )
}

export default Header
