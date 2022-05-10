import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import PageDefault from '../../components/PageDefault'
import { Container } from './styles'
import CardSimple from '../../components/CardSimple'

import api from '../../services/api'
import { Link } from '@material-ui/core'

const GameInfo: React.FC = () => {
  useEffect(() => {
    api
      .get(
        'https://valorant-api.com/v1/agents/dade69b4-4f5a-8528-247b-219e5a1facd6'
      )
      .then(resp => {
        console.log('dados ', resp)
      })
  })

  return (
    <PageDefault>
      <Container>
        <div className="container-maps">
          <Typography variant="h1">Maps</Typography>
          <Link href="/maps">
            <CardSimple
              displayName="See more"
              splash="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png"
            />
          </Link>
        </div>

        <div className="container-agents">
          <Typography variant="h1">Agents</Typography>
          <Link href="#">
            <CardSimple displayName="Learn more" />
          </Link>
        </div>

        <div className="container-weapons">
          <Typography variant="h1">Weapons</Typography>
          <Link href="#">
            <CardSimple displayName="Learn more" />
          </Link>
        </div>
      </Container>
    </PageDefault>
  )
}

export default GameInfo
