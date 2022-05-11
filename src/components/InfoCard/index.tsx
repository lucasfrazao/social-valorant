import { ReactNode } from 'react'
import { Container } from './styles'

interface InfoCardProps {
  children?: ReactNode
  displayIcon?: string
  displayName?: string
  description?: string
}

function InfoCard({
  children,
  displayIcon,
  displayName,
  description
}: InfoCardProps) {
  return (
    <Container>
      <div className="grid">
        <img src={displayIcon} alt="" />
      </div>
      <div className="info-abilities">
        <h4>Q - {displayName}</h4>
        <p>{description}</p>
      </div>
    </Container>
  )
}

export default InfoCard
