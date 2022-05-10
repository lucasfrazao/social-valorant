import { ReactNode } from 'react'
import { Container } from './styles'
import { Link } from '@material-ui/core'

import { FaHome, FaNewspaper, FaHeart, FaUserAlt } from 'react-icons/fa'

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

      <Link href="/page-not-found">
        <FaHeart />
      </Link>

      <Link href="/page-not-found">
        <FaUserAlt />
      </Link>
    </Container>
  )
}

export default Footer
