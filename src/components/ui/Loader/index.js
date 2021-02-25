import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
`

const Style = styled.div`
  width: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Ball = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #00f1ca;

  &:nth-child(1) {
    animation: bouncing 0.4s alternate infinite cubic-bezier(0.6, 0.05, 0.15, 0.95);
  }
  &:nth-child(2) {
    animation: bouncing 0.4s 0.1s alternate infinite cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;
  }
  &:nth-child(3) {
    animation: bouncing 0.4s 0.2s alternate infinite cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;
  }

  @keyframes bouncing {
    0% {
      transform: translate3d(0, 5px, 0) scale(1.2, 0.85);
    }
    100% {
      transform: translate3d(0, -10px, 0) scale(0.9, 1.1);
    }
  }
`

const Loader = props => {
  return (
    <Container inline={props.inline}>
      <Style>
        <Ball />
        <Ball />
        <Ball />
      </Style>
    </Container>
  )
}

export default Loader;