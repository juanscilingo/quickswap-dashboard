import { useWeb3React } from "@web3-react/core";
import Button from "components/ui/Button/Button";
import Input from "components/ui/Input/Input";
import Modal from "components/ui/Modal/Modal";
import { network } from 'connectors/connectors';
import useUserContext from "hooks/useUserContext";
import { useState } from "react";
import styled from "styled-components";
import errorHandler from "utils/errorHandler";

const LAST_ADDRESS_KEY = 'custom-address-last';

const AddressInput = styled(Input)`
  min-width: 330px;
`
const OkButton = styled(Button)`
  margin-left: auto;
  display: block;
`

const InputModal = props => {
  const lastAddress = window.localStorage.getItem(LAST_ADDRESS_KEY);
  const [text, setText] = useState(lastAddress ?? '');

  const onOk = () => {
    window.localStorage.setItem(LAST_ADDRESS_KEY, text);
    props.onOk(text);
    props.onClose();
  }

  return (
    <Modal
      title="Enter your address"
      zIndex={12}
      {...props}
    >
      <AddressInput value={text} onChange={e => setText(e.target.value)} block />
      <OkButton onClick={onOk}>Ok</OkButton>
    </Modal>
  )
}

const MetamaskButton = props => {
  const web3React = useWeb3React();
  const { setUser } = useUserContext();
  const [open, setOpen] = useState(false);

  const activate = async account => {
    await web3React.activate(network, errorHandler);
    setUser(prevState => ({ ...prevState, account, provider: 'network' }));
    props.close();
  }

  return (
    <>
      <Button block onClick={() => setOpen(true)}>Custom Address</Button>
      <InputModal 
        open={open}
        onClose={() => setOpen(false)}
        onOk={activate}
      />
    </>
  )
}

export default MetamaskButton;