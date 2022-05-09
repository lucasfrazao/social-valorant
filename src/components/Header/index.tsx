import React, { ReactNode } from 'react'
import { Container } from './styles'
import { FaArrowLeft, FaBell } from 'react-icons/fa'
import Button from '../Button'

interface HeaderProps {
  children?: ReactNode
}

const Header: React.FC = ({ children }: HeaderProps) => {
  const handleClick = () => {
    window.history.go(-1)
  }

  return (
    <Container>
      <button onClick={handleClick}>
        <FaArrowLeft />
      </button>
      <FaBell />
    </Container>
  )
}

export default Header
