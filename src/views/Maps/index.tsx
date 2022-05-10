import { ReactNode, useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import SimpleCard from '../../components/SimpleCard'
import PageDefault from '../../components/PageDefault'

import { Container } from './styles'
import api from '../../services/api'

interface MapsProps {
  children?: ReactNode
}

function Maps({ children }: MapsProps) {
  const [data, setData] = useState([])

  useEffect(() => {
    const dataMaps = async () => {
      await api
        .get('/maps')
        .then(response => {
          console.log(response)
          setData(response.data.data)
        })
        .catch(error => {
          console.log('err', error.response)
        })
        .finally(() => {})
    }
    dataMaps()
  }, [])

  return (
    <PageDefault>
      <Container>
        <Typography variant="h1">Maps</Typography>
        {data?.map((item: any) => (
          <SimpleCard
            backgroundType="filled"
            displayName={item.displayName}
            background={item.splash}
          />
        ))}
      </Container>
    </PageDefault>
  )
}

export default Maps
