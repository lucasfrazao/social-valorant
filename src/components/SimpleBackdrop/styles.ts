import styled from 'styled-components'

export const Container = styled.div`
  p {
    margin-bottom: 2rem;
  }

  .MuiCircularProgress-root {
    svg {
      width: 2.5rem;
      circle {
        stroke: #ff4655 !important;
      }
    }
  }

  .group-buttons {
    margin-top: 2rem;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
      width: 9.25rem;
      height: 2.75rem;
    }

    .accept-button {
      background-color: #191919 !important;
      color: white;
      transition: 0.2s;
    }

    .accept-button:hover {
      background-color: #000 !important;
    }

    .cancel-button {
      background-color: #ff4655 !important;
      color: white;
      transition: 0.2s;
    }

    .cancel-button:hover {
      background-color: #bd3944 !important;
    }
  }
`
