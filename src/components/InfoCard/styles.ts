import styled from 'styled-components'

interface InfoCardProps {
  displayIcon?: string
}

export const Container = styled.div<InfoCardProps>`
  margin-top: 2rem;

  p {
    font-family: 'Poppins';
    font-size: 2rem;
    font-weight: 500;
    color: #fffbf5;
    text-transform: uppercase;
  }

  .grid {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: center;
    align-items: center;

    img {
      border: 1px solid grey;
      border-radius: 0.188rem;
      padding: 5px;
      width: 4rem;

      cursor: pointer;
      transition: 0.2s;
    }

    img:hover {
      background-color: #ff4655;
      border: none;
    }
  }

  .info-abilities {
    h4 {
      font-family: 'Poppins';
      font-weight: 600;
      letter-spacing: 0.125rem;
      text-transform: uppercase;
      color: #ff4655;
    }

    p {
      font-family: 'Poppins';
      font-size: 0.7rem;
      color: #fffbf5;
    }
  }
`
