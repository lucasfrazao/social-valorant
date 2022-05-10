import { ReactNode, useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import CardSimple from '../../components/CardSimple'
import PageDefault from '../../components/PageDefault'

import { Container } from './styles'
import api from '../../services/api'

interface WeaponsInfoProps {
  children?: ReactNode
}

function WeaponsInfo({ children }: WeaponsInfoProps) {
  const [data, setData] = useState([])

  useEffect(() => {
    const dataMaps = async () => {
      await api
        .get('/weapons')
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
        <Typography variant="h1">Weapons</Typography>
        {data.map((item: any) => (
          <CardSimple
            key={item.uuid}
            displayName={item.displayName}
            backgroundType="outlined"
            background={item.displayIcon}
          />
        ))}
      </Container>
    </PageDefault>
  )
}

export default WeaponsInfo
