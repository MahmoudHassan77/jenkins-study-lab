import React from 'react'

interface ButtonProps {
  onClick: () => void
  label: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-testid="custom-button"
      className="custom-button"
    >
      {label}
    </button>
  )
}

export default Button
