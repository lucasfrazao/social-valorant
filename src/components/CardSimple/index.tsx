import { Link } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import { PaperMui, CardMui } from './styles'

interface CardSimpleProps {
  displayName?: string
  splash?: string
}

function CardSimple({ displayName, splash }: CardSimpleProps) {
  // const handleClick = () => {
  //   window.location.href = 'https://www.riotgames.com/en'
  // }

  return (
    <PaperMui splash={splash}>
      <CardMui>
        <p>{displayName}</p>
      </CardMui>
    </PaperMui>
  )
}

export default CardSimple
