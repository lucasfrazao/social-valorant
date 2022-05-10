import styled from 'styled-components'
import mapImage from '../../assets/img/icebox.jpg'
import Paper from '@material-ui/core/Paper'
import CardActions from '@material-ui/core/CardActions'

interface CardSimpleProps {
  splash?: string
}

export const PaperMui = styled(Paper)<CardSimpleProps>`
  width: 20rem;
  height: 11.5rem;
  display: flex;
  align-items: flex-end;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(253, 69, 86, 0) 64%
    ),
    url(${props => props.splash});
  background-size: cover;
  background-repeat: no-repeat;
`

export const CardMui = styled(CardActions)`
  p {
    padding: 0.5rem;
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    color: #fffbf5;
  }

  p:hover {
    color: #fd4556;
  }
`
