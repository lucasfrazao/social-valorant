import { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps {
  children?: ReactNode
  variant?: 'text' | 'outlined' | 'contained' | undefined
  icon?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  onClick,
  icon
}) => {
  return (
    <Container variant={variant} onClick={onClick} icon={icon}>
      {children}
    </Container>
  )
}

export default Button
