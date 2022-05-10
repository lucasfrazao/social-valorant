import React, { ReactNode, useEffect, useState } from 'react'
import { Container } from './styles'
import { FaArrowLeft, FaBell } from 'react-icons/fa'
import { IconButton } from '@material-ui/core'
import SimpleTooltip from '../SimpleTooltip'
import { useLocation } from 'react-router-dom'

interface HeaderProps {
  children?: ReactNode
}

const Header: React.FC = ({ children }: HeaderProps) => {
  const [showIconBack, setShowIconBack] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const verifyPathname = () => {
      location.pathname !== '/home' && setShowIconBack(true)
    }
    verifyPathname()
  })

  return (
    <Container>
      {showIconBack ? (
        <IconButton href="javascript:history.back()">
          <FaArrowLeft />
        </IconButton>
      ) : (
        <div></div>
      )}

      <SimpleTooltip>
        <FaBell />
      </SimpleTooltip>
    </Container>
  )
}

export default Header
