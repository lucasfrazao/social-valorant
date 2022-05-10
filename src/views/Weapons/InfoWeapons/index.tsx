import { ReactNode } from 'react'

import { Container } from './styles'

interface InfoWeaponsProps {
  children?: ReactNode
}

function InfoWeapons({ children }: InfoWeaponsProps) {
  return (
    <Container>
      <h1>InfoWeapons</h1>
      {children}
    </Container>
  )
}

export default InfoWeapons
