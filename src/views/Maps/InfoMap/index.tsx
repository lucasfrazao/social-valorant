import { ReactNode } from 'react'

import { Container } from './styles'

interface InfoMapProps {
  children?: ReactNode
}

function InfoMap({ children }: InfoMapProps) {
  return (
    <Container>
      <h1>InfoMap</h1>
      {children}
    </Container>
  )
}

export default InfoMap
