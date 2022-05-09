import styled from 'styled-components'

interface ButtonProps {
  variant?: 'text' | 'outlined' | 'contained' | undefined
  icon?: boolean
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-family: 'Poppins';
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  border-radius: 0.188rem;

  cursor: pointer;

  padding: ${props => (props.icon ? '15px 15px' : '15px 55px')};

  border: ${props =>
    (props.variant === 'text' && 'none') ||
    (props.variant === 'outlined' && '1px solid #FD4556') ||
    (props.variant === 'contained' && '#FD4556')};

  background-color: ${props =>
    (props.variant === 'text' && 'transparent') ||
    (props.variant === 'outlined' && 'transparent') ||
    (props.variant === 'contained' && '#FD4556') ||
    (props.icon && 'transparent')};

  color: ${props =>
    (props.variant === 'text' && '#FD4556') ||
    (props.variant === 'outlined' && '#000000') ||
    (props.variant === 'contained' && '#000000')};

  :hover {
    transition: 0.2s;

    background-color: ${props =>
      (props.variant === 'text' && '#FFFBF5') ||
      (props.variant === 'outlined' && '#FFFBF5') ||
      (props.variant === 'contained' && '#BD3944')};
  }
`
