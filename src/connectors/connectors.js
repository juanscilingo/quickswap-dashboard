import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { ChainId } from "utils/constants/constants";
import env from '../env';

export const injected = new InjectedConnector({
  supportedChainIds: [ChainId.MATIC]
})

export const network = new NetworkConnector({
  urls: { [ChainId.MATIC]: env.REACT_APP_DEFAULT_RPC_URL },
  defaultChainId: ChainId.MATIC
})