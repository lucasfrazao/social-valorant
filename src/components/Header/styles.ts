import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  height: 3.4rem;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.75rem 0.9rem 1.75rem;
  background: black;

  button {
    background-color: transparent;
  }

  svg {
    fill: #fffbf5;
  }

  svg:hover {
    fill: #fd4556;
  }
`
