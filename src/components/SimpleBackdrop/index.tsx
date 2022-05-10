import { ReactNode, useEffect, useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from './styles'

const useStyles = makeStyles(theme => ({
  backdrop: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem',
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

interface SimpleBackdropProps {
  children?: ReactNode
}

function SimpleBackdrop({ children }: SimpleBackdropProps) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleRedirect = () => {
    setOpen(false)
    setTimeout(() => {
      window.open('https://playvalorant.com/en-us/news/')
    }, 2000)
  }

  return (
    <Container>
      <div onClick={handleToggle}>{children}</div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <p>
          You are being redirected, click cancel to continue on our page or
          accept if you agree.
        </p>
        <CircularProgress />
        <div className="group-buttons">
          <Button
            className="accept-button"
            variant="contained"
            onClick={handleRedirect}
          >
            Agree
          </Button>
          <Button
            className="cancel-button"
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </Backdrop>
    </Container>
  )
}

export default SimpleBackdrop
