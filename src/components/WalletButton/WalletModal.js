import Modal from "components/ui/Modal/Modal";
import styled from "styled-components";
import MetamaskButton from "./Buttons/MetamaskButton";
import CustomAddressButton from './Buttons/CustomAddressButton';

const Options = styled.div`

`

const Option = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0px;
  }
`

const WalletModal = props => {
  return (
    <Modal
      title="Select your wallet"
      {...props}
    >
      <Options>
        <Option>
          <MetamaskButton close={props.onClose} />
        </Option>
        <Option>
          <CustomAddressButton close={props.onClose} />
        </Option>
      </Options>
    </Modal>
  )
}

export default WalletModal;