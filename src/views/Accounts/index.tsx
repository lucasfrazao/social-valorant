import React from 'react'
import PageDefault from '../../components/PageDefault'
import { Container } from './styles'

const Accounts: React.FC = () => {
  return (
    <PageDefault>
      <Container>
        <h2>Maps</h2>
        <h2>Agents</h2>
        <h2>Weapons</h2>
      </Container>
    </PageDefault>
  )
}

export default Accounts
