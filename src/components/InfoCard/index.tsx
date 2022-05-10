import { ReactNode } from 'react'
import Typography from '@material-ui/core/Typography'
import { Container } from './styles'

interface InfoCardProps {
  children?: ReactNode
}

function InfoCard({ children }: InfoCardProps) {
  return (
    <Container>
      <Typography variant="h2">Abilities</Typography>
      <div className="grid">
        <img
          src="https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ability2/displayicon.png"
          alt=""
        />
        <img
          src="https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ability1/displayicon.png"
          alt=""
        />
        <img
          src="https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/grenade/displayicon.png"
          alt=""
        />
        <img
          src="https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/abilities/ultimate/displayicon.png"
          alt=""
        />
      </div>
      <div className="info-abilities">
        <h4>Q - Skill</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          mollitia eveniet distinctio doloribus natus impedit unde, ab ullam,
          soluta id laborum libero architecto rem sed. Corporis possimus modi
          molestiae adipisci!
        </p>
      </div>
    </Container>
  )
}

export default InfoCard
