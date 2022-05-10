import { ReactNode } from 'react'
import DetailsCard from '../../../components/DetailsCard'
import InfoCard from '../../../components/InfoCard'
import PageDefault from '../../../components/PageDefault'

import { Container } from './styles'

interface InfoAgentProps {
  children?: ReactNode
}

function InfoAgent({ children }: InfoAgentProps) {
  return (
    <PageDefault>
      <Container>
        <DetailsCard
          displayName="Neon"
          imageAgent="https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/bustportrait.png"
          role="Duelist"
          displayIcon="https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png"
          description="Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard then strikes them down quicker than lightning."
        />
        <InfoCard />
      </Container>
    </PageDefault>
  )
}

export default InfoAgent
