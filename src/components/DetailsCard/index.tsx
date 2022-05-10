import Typography from '@material-ui/core/Typography'
import { ReactNode } from 'react'

import { Container } from './styles'

interface DetailsCardProps {
  children?: ReactNode
  imageAgent?: string
  displayName?: string
  description?: string
  displayIcon?: string
  role?: string
}

function DetailsCard({
  children,
  imageAgent,
  displayName,
  description,
  displayIcon,
  role
}: DetailsCardProps) {
  return (
    <Container>
      <Typography variant="h2">{displayName}</Typography>

      <div className="main-container">
        <img src={imageAgent} alt="" />
        <div className="container-info">
          <div className="info-role">
            <h4>role</h4>
            <div className="type-role">
              <p>{role}</p>
              <img src={displayIcon} alt="" />
            </div>
          </div>

          <div className="info-bio">
            <h4>biography</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DetailsCard
