import { createPortal } from "react-dom";
import styled from "styled-components";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${props => props.zIndex ?? 10};
  background: rgba(0, 0, 0, 0.5);
  user-select: none;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: text;
`

const Card = styled.div`
  min-width: 300px;
`

const CardHeader = styled.div`
  background: var(--midnight-2);
  padding: 15px 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardBody = styled.div`
  background: var(--midnight);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 15px 20px;
`

const Title = styled.div`

`

const Close = styled.span`
  margin-left: 15px;
  cursor: pointer;
  user-select: none;
`

const modalRoot = document.getElementById('modal-root');

const Modal = props => {
  const { open } = props;

  const preventBubbling = e => {
    e.stopPropagation();
  }

  const close = e => {
    preventBubbling(e);
    props.onClose();
  }

  return createPortal(
    <Backdrop open={open} onClick={close} zIndex={props.zIndex}>
      <Container>
        <Card onClick={preventBubbling}>
          <CardHeader>
            <Title>{props.title}</Title>
            <Close onClick={props.onClose}>✖</Close>
          </CardHeader>
          <CardBody>
            {props.children}
          </CardBody>
        </Card>
      </Container>
    </Backdrop>,
    modalRoot
  )
}

export default Modal;