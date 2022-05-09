import React, { ReactNode } from 'react'
import { Container } from './styles'

interface CardContentProps {
  children?: ReactNode
}

const CardContent: React.FC = ({ children }: CardContentProps) => {
  return (
    <Container>
      <p>Teste</p>
    </Container>
  )
}

export default CardContent
