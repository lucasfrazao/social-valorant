import { ReactNode, useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import CardSimple from '../../components/CardSimple'
import PageDefault from '../../components/PageDefault'

import { Container } from './styles'
import api from '../../services/api'

interface MapsInfoProps {
  children?: ReactNode
}

function MapsInfo({ children }: MapsInfoProps) {
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
        {data.map((item: any) => (
          <CardSimple displayName={item.displayName} splash={item.splash} />
        ))}
      </Container>
    </PageDefault>
  )
}

export default MapsInfo
