import styled, { css } from "styled-components";

const large = css`
  padding: 6px;
  font-size: 16px;
`

const Style = styled.div`
  display: inline-block;
  background: ${props => props.color ? props.color : `var(--blue)`};
  font-size: 14px;
  padding: 5px;
  border-radius: 4px;
  color: white;

  ${props => props.large && large}
`

const Badge = props => {
  return (
    <Style {...props}>
      {props.children}
    </Style>
  )
}

export default Badge;