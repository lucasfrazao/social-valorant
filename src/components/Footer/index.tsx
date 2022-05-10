import { ReactNode } from 'react'
import { Container } from './styles'

import { FaHome, FaHeart, FaUserAlt } from 'react-icons/fa'
import { Link } from '@material-ui/core'

interface FooterProps {
  children?: ReactNode
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <Container>
      <Link href="/general">
        <FaHome />
      </Link>
      <FaHeart />
      <FaUserAlt />
    </Container>
  )
}

export default Footer
