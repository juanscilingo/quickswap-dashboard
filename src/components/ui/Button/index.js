import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  color: white;
  background: var(--blue);
  cursor: pointer;
  outline: none;

  :hover {
    background: var(--dark-blue);
  }
`

const Button = props => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}

export default Button;