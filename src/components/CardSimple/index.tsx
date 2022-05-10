import { PaperMui, CardMui } from './styles'

interface CardSimpleProps {
  displayName?: string
  background?: string
  backgroundType?: 'filled' | 'outlined' | undefined
}

function CardSimple({
  displayName,
  background,
  backgroundType
}: CardSimpleProps) {
  return (
    <PaperMui background={background} backgroundType={backgroundType}>
      <CardMui>
        <p>{displayName}</p>
      </CardMui>
    </PaperMui>
  )
}

export default CardSimple
