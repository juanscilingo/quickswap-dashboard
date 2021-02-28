import { useWeb3React } from "@web3-react/core";
import Button from "components/ui/Button/Button";
import { CONNECTORS_KEYS, injected } from 'connectors/connectors';
import useUserContext from "hooks/useUserContext";
import { useEffect } from "react";
import errorHandler from "utils/errorHandler";

const MetamaskButton = props => {
  const web3React = useWeb3React();
  const { setUser } = useUserContext();

  const activate = async () => {
    await web3React.activate(injected, errorHandler);

    props.close();
  }

  useEffect(() => {
    if (web3React.connector === injected) {
      setUser(prevState => ({ ...prevState, account: web3React.account, connector: CONNECTORS_KEYS.injected }));
    }
  }, [web3React.active, web3React.connector, setUser, web3React.account])

  if (!(window.web3 || window.ethereum)) return <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank" rel="noopener noreferrer"><Button block>Install Metamask</Button></a>
  else return <Button block onClick={activate}>Metamask</Button>
}

export default MetamaskButton;