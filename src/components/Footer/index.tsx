import { ReactNode } from 'react'
import { Container } from './styles'

import { FaHome, FaNewspaper, FaHeart, FaUserAlt } from 'react-icons/fa'
import { Link } from '@material-ui/core'

import SimpleBackdrop from '../SimpleBackdrop'
interface FooterProps {
  children?: ReactNode
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <Container>
      <Link href="/login">
        <FaHome />
      </Link>
      <SimpleBackdrop>
        <FaNewspaper />
      </SimpleBackdrop>
      <FaHeart />
      <FaUserAlt />
    </Container>
  )
}

export default Footer
