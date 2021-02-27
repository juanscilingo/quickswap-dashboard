import { useWeb3React } from "@web3-react/core";
import Button from "components/ui/Button/Button";
import useUserContext from "hooks/useUserContext";
import { useState } from "react";
import WalletModal from "./WalletModal";

const WalletButton = props => {
  const web3React = useWeb3React();
  const { setUser } = useUserContext();
  const [open, setOpen] = useState(false);

  const disconnect = () => {
    setUser(prevState => ({ ...prevState, account: null, provider: null }))
    web3React.deactivate();
  }

  return (
    <>
      {web3React.active ? (
        <Button onClick={disconnect}>Disconnect</Button>
      ) : (
        <Button onClick={() => setOpen(true)}>Connect Wallet</Button>
      )}
      <WalletModal 
        open={open} 
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default WalletButton;