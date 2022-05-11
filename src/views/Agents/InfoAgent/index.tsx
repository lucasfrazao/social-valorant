import { ReactNode, Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import DetailsCard from '../../../components/DetailsCard'
import InfoCard from '../../../components/InfoCard'
import PageDefault from '../../../components/PageDefault'
import api from '../../../services/api'

import { Container } from './styles'
import Loader from '../../../components/Loader'

interface InfoAgentProps {
  children?: ReactNode
}

function InfoAgent({ children }: InfoAgentProps) {
  const { uuid } = useParams()

  const [loading, setLoading] = useState(true)

  const [data, setData] = useState({
    displayName: '',
    description: '',
    fullPortraitV2: ''
  })
  const [dataRole, setDataRole] = useState({ displayName: '', displayIcon: '' })
  const [dataAbilities, setDataAbilities] = useState([])

  useEffect(() => {
    const dataAgents = () => {
      api
        .get(`/agents/${uuid}`)
        .then(response => {
          setData(response.data.data)
          setDataRole(response.data.data.role)
          setDataAbilities(response.data.data.abilities)
        })
        .catch(error => {
          console.log('err', error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
    dataAgents()
  }, [])

  return (
    <PageDefault>
      <Container id={uuid}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="container-info-agent">
              <Typography variant="h2">{data.displayName}</Typography>
              <DetailsCard
                imageAgent={data.fullPortraitV2}
                role={dataRole.displayName}
                displayIcon={dataRole.displayIcon}
                description={data.description}
              />
            </div>

            <div className="container-abilities">
              <Typography variant="h2">Abilities</Typography>
              {dataAbilities?.map((item: any) => (
                <InfoCard
                  displayIcon={item.displayIcon}
                  displayName={item.displayName}
                  description={item.description}
                />
              ))}
            </div>
          </>
        )}
      </Container>
    </PageDefault>
  )
}

export default InfoAgent
