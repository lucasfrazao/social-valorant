import styled from 'styled-components'

interface DetailsCardProps {
  imageAgent?: string
  displayName?: string
  description?: string
  displayIcon?: string
  role?: string
}

export const Container = styled.div<DetailsCardProps>`
  h2 {
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    color: #fffbf5;
  }

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

  .main-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;

    img {
      width: 11.875rem;
    }
  }

  .info-role {
    p {
      text-transform: uppercase;
    }
    img {
      width: 32px;
    }
  }

  .type-role {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 1rem;
      margin-left: 1rem;
      opacity: 0.7;
    }
  }

  .info-bio {
  }
`
