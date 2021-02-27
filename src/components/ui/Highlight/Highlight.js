import styled from "styled-components";
import Label from "../Label/Label";
import Value from "../Value/Value";

const Style = styled.div`
  display: inline-block;
  background: var(--midnight);
  padding: 15px;
  border-radius: var(--border-radius);
  margin-bottom: 30px;
  margin-right: 15px;
`

const Highlight = props => {
  return (
    <Style> 
      <Label>{props.label}</Label>
      <Value>{props.value}</Value>
    </Style>
  )
}

export default Highlight;