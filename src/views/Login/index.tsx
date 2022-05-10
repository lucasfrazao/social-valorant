import React from 'react'
import { Link } from 'react-router-dom'
import { Container, MuiButton } from './styles'
import logo from '../../assets/img/valorant_logo.svg'

const Login: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo-login" />

      <p>Everything you need to know about Valorant is here</p>

      <Link to="/home" style={{ textDecoration: 'none' }}>
        <MuiButton variant="outlined" size="large">
          get started
        </MuiButton>
      </Link>
    </Container>
  )
}

export default Login
