import { ReactNode } from 'react'
import { Container } from './styles'

import { FaHome, FaHeart, FaUserAlt } from 'react-icons/fa'

interface NavbarProps {
  children?: ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <Container>
      <FaHome />
      <FaHeart />
      <FaUserAlt />
    </Container>
  )
}

export default Navbar
