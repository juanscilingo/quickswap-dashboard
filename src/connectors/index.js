import { InjectedConnector } from "@web3-react/injected-connector";
import { ChainId } from "../constants";

export const injected = new InjectedConnector({
  supportedChainIds: [ChainId.MATIC]
})