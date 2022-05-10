import { ReactNode, useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import CardSimple from '../../components/CardSimple'
import PageDefault from '../../components/PageDefault'

import { Container } from './styles'
import api from '../../services/api'

interface AgentsInfoProps {
  children?: ReactNode
}

function AgentsInfo({ children }: AgentsInfoProps) {
  const [data, setData] = useState([])

  useEffect(() => {
    const dataMaps = async () => {
      await api
        .get('/agents')
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
        <Typography variant="h1">Agents</Typography>
        {data.map((item: any) =>
          item.fullPortraitV2 ? (
            <CardSimple
              key={item.uuid}
              displayName={item.displayName}
              backgroundType="outlined"
              background={item.fullPortraitV2}
            />
          ) : null
        )}
      </Container>
    </PageDefault>
  )
}

export default AgentsInfo
