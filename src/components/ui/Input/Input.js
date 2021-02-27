import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  border-radius: 6px;
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  padding: 15px;
  color: white;
  margin-bottom: 10px;
`

const Input = props => {
  return <StyledInput {...props} />
}

export default Input;