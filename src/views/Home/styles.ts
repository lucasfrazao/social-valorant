import styled from 'styled-components'
import backgroundImage from '../../assets/img/background_home.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: auto;
  height: 100vh;
  padding-left: 1.75rem;
  padding-top: 1.75rem;
  padding-right: 1.75rem;

  background-image: url(${backgroundImage});
  background-size: contain;

  img {
    width: 100vw;
    height: auto;
    padding: 1.75rem;
  }

  p {
    /* text-align: center; */
    font-family: 'Poppins';
    font-size: 2rem;
    line-height: 3.4rem;

    margin-top: 3.125rem;
    color: white;
  }
`

export const Button = styled.button`
  margin-top: 2.12rem;
  width: 90vw;
  height: 3.38rem;

  text-transform: uppercase;
  letter-spacing: 0.05rem;
  border-radius: 0.188rem;
  background-color: #000000;
  color: #f5f4ed;

  cursor: pointer;

  :hover {
    border: none;
    background-color: #242424;
    transition: 0.2s;
  }
`
