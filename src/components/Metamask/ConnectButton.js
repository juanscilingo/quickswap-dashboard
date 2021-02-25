import { useWeb3React } from "@web3-react/core";
import Badge from "components/ui/Badge";
import Button from "components/ui/Button";
import { injected } from 'connectors';
import { ChainId } from "../../constants";

const ConnectButton = props => {
  const web3React = useWeb3React();

  if (!(window.web3 || window.ethereum)) return <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank" rel="noopener noreferrer"><Button>Install Metamask</Button></a>
  else if (web3React.chainId !== ChainId.MATIC) return <Badge color="var(--red)" large>Unsupported Network</Badge>
  else if (!web3React.active) return <Button onClick={() => web3React.activate(injected, console.error)}>Connect</Button>
  else return <Button onClick={web3React.deactivate}>Disconnect</Button>
}

export default ConnectButton;