import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70vh;

  .MuiCircularProgress-root {
    width: 4.5rem !important;
    height: 100% !important;
  }

  .MuiCircularProgress-svg {
    color: #ff4655;
    stroke-width: 4.6;
    width: 4.5rem !important;
  }
`
