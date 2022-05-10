import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .welcome {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    h6 {
      width: 110%;
      color: #fffbf5;
    }

    .status-app {
      text-align: end;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      p {
        color: #fffbf5;
        opacity: 0.5;
      }

      svg {
        width: 1rem;
        fill: green;
      }
    }
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;

    font-family: 'Poppins';
    font-weight: 600;
    font-size: 2.5rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    color: #fffbf5;
  }
`
