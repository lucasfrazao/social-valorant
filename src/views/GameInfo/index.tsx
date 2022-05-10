import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import PageDefault from '../../components/PageDefault'
import { Container } from './styles'
import CardSimple from '../../components/CardSimple'

import { Link } from '@material-ui/core'

const GameInfo: React.FC = () => {
  return (
    <PageDefault>
      <Container>
        <div className="container-maps">
          <Typography variant="h1">Maps</Typography>
          <Link href="/maps">
            <CardSimple
              backgroundType="filled"
              background="https://pbs.twimg.com/media/FCEIx7fXEAceScS.jpg:large"
              displayName="See more"
            />
          </Link>
        </div>

        <div className="container-agents">
          <Typography variant="h1">Agents</Typography>
          <Link href="/agents">
            <CardSimple
              backgroundType="filled"
              background="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5e6602e06035963b/623e1103d0a6e54cb5f13425/Val_Banner_State-of-the-Agents_1920x1080.jpg"
              displayName="See more"
            />
          </Link>
        </div>

        <div className="container-weapons">
          <Typography variant="h1">Weapons</Typography>
          <Link href="/weapons">
            <CardSimple
              backgroundType="filled"
              background="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt853e0eb619ddd610/5fd2c3aa7c43e43bf4196c27/Wallpaper_Schematic_Weapons.jpg"
              displayName="See more"
            />
          </Link>
        </div>
      </Container>
    </PageDefault>
  )
}

export default GameInfo
