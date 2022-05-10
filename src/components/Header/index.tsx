import React, { ReactNode } from 'react'
import { Container } from './styles'
import { FaArrowLeft, FaBell } from 'react-icons/fa'
import { IconButton } from '@material-ui/core'

interface HeaderProps {
  children?: ReactNode
}

const Header: React.FC = ({ children }: HeaderProps) => {
  return (
    <Container>
      <IconButton href="javascript:history.back()">
        <FaArrowLeft />
      </IconButton>
      <FaBell />
    </Container>
  )
}

export default Header
