import { ReactNode } from 'react'
import PageDefault from '../../components/PageDefault'
import { Container } from './styles'
import Button from '@material-ui/core/Button'
import Loader from '../../components/Loader'

interface PageNotFoundProps {
  children?: ReactNode
}

function PageNotFound({ children }: PageNotFoundProps) {
  const handleClick = () => {
    return window.history.go(-1)
  }

  return (
    <PageDefault>
      <Container>
        <img
          src="https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportraitv2.png"
          alt="image-neon"
        />
        <h1>Work in progress</h1>
        <p>
          The page you're looking for is currently under development and will be
          available soon
        </p>

        <Button variant="contained" onClick={handleClick}>
          Back
        </Button>
      </Container>
    </PageDefault>
  )
}

export default PageNotFound
