import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 18.75rem;
  }

  h1 {
    color: #fffbf5;
    margin-top: 2rem;
  }

  p {
    color: #fffbf5;
  }

  button {
    width: 9.25rem;
    height: 2.75rem;
    margin-top: 2rem;
    background-color: #ff4655 !important;
    color: white;
  }

  button:hover {
    background-color: #bd3944 !important;
  }
`
