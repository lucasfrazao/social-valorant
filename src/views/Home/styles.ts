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

      @keyframes fa-reg-dot-circle {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 0;
        }
      }
      .fa-reg-dot-circle {
        -webkit-animation: fa-reg-dot-circle 1s linear infinite;
        -moz-animation: fa-reg-dot-circle 1s linear infinite;
        -ms-animation: fa-reg-dot-circle 1s linear infinite;
        -o-animation: fa-reg-dot-circle 1s linear infinite;
        animation: fa-reg-dot-circle 1s linear infinite;
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
