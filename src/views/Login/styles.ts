import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import backgroundImage from '../../assets/img/background_home.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  width: auto;
  height: 100vh;
  padding-left: 1.75rem;
  padding-top: 1.75rem;
  padding-right: 1.75rem;

  background-image: url(${backgroundImage});
  background-size: cover;

  img {
    width: 100vw;
    height: auto;
    padding: 1.75rem;
  }

  p {
    font-family: 'Poppins';
    font-size: 1.5rem;

    margin-top: 3.125rem;
    margin-bottom: 3.125rem;
    color: #fffbf5;
  }
`

export const MuiButton = styled(Button)`
  margin-top: 2.12rem;
  width: 90vw;
  height: 3.38rem;

  text-transform: uppercase;
  letter-spacing: 0.05rem;
  border-radius: 0.188rem;
  background-color: #ff4655 !important;
  color: #f5f4ed !important;

  cursor: pointer;
`
