import { ReactNode } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Container } from './styles'

interface LoaderProps {
  children?: ReactNode
}

function Loader({ children }: LoaderProps) {
  return (
    <Container>
      <CircularProgress />
    </Container>
  )
}

export default Loader
