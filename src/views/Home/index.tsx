import React from 'react'
import { Link } from 'react-router-dom'
import { Container, MuiButton } from './styles'
import logo from '../../assets/img/valorant_logo.svg'

const Home: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo-home" />

      <p>We let you play better</p>

      <Link to="/general" style={{ textDecoration: 'none' }}>
        <MuiButton variant="outlined" size="large">
          get started
        </MuiButton>
      </Link>
    </Container>
  )
}

export default Home
