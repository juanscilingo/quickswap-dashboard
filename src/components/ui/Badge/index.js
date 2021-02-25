import styled, { css } from "styled-components";

const large = css`
  padding: 6px;
  font-size: 16px;
`

const dot = css`
  display: inline-block;
  height: 8px;
  width: 8px;
  background-color: ${props => props.color};
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
	transform: scale(1);
  box-shadow: 0 1px 2px ${props => props.color};
  animation: ${props => props.pulsate ? 'pulsate 2s infinite' : 'none'};

  @keyframes pulsate {
    0% {
      transform: scale(0.9);
      box-shadow: 0 0 0 0 ${props => props.color}aa;
    }
    50% {
      transform: scale(1);
      box-shadow: 0 0 0 3px ${props => props.color}00;
    }
    100% {
      transform: scale(0.9);
      box-shadow: 0 0 0 0 ${props => props.color}00;
    }
  }
`

const Style = styled.div`
  display: inline-block;
  background: ${props => props.color ? props.color : `var(--blue)`};
  font-size: 14px;
  padding: 5px;
  border-radius: 4px;
  color: white;

  ${props => props.large && large}
  ${props => props.dot && dot}
`

const Badge = props => {
  return (
    <Style {...props}>
      {props.children}
    </Style>
  )
}

export default Badge;