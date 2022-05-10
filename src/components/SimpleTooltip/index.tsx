import { ReactNode, useState } from 'react'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { Container } from './styles'

interface SimpleTooltipProps {
  children?: ReactNode
}

function SimpleTooltip({ children }: SimpleTooltipProps) {
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }
  return (
    <Container>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <Tooltip
            PopperProps={{
              disablePortal: true
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Developing"
          >
            <Button onClick={handleTooltipOpen}>{children}</Button>
          </Tooltip>
        </div>
      </ClickAwayListener>
    </Container>
  )
}

export default SimpleTooltip
