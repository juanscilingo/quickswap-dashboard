import { useWeb3React } from "@web3-react/core";
import Button from "components/ui/Button/Button";
import Input from "components/ui/Input/Input";
import Modal from "components/ui/Modal/Modal";
import { network } from 'connectors/connectors';
import useUserContext from "hooks/useUserContext";
import { useState } from "react";
import errorHandler from "utils/errorHandler";

const InputModal = props => {
  const [text, setText] = useState('');

  const onOk = () => {
    props.onOk(text);
    props.onClose();
  }

  return (
    <Modal
      title="Enter your address"
      zIndex={12}
      {...props}
    >
      <Input value={text} onChange={e => setText(e.target.value)} block />
      <Button onClick={onOk}>Ok</Button>
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