import styled, { css } from "styled-components";

const block = css`
  width: 100%;
`

const small = css`
  padding: 3px 6px;
  font-size: 12px;
`

const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  color: white;
  background: var(--blue);
  cursor: pointer;
  outline: none;
  user-select: none;

  :hover {
    background: var(--dark-blue);
  }

  ${props => props.block && block};
  ${props => props.small && small};
`

const Button = props => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

export default Button;