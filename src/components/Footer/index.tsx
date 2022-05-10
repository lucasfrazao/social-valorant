import { ReactNode } from 'react'
import { Container } from './styles'

import { FaHome, FaHeart, FaUserAlt } from 'react-icons/fa'

interface FooterProps {
  children?: ReactNode
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <Container>
      <FaHome />
      <FaHeart />
      <FaUserAlt />
    </Container>
  )
}

export default Footer
