import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import formatter from "utils/formatter";
import ERC20_ABI from 'utils/constants/abis/erc20.json';
import Highlight from "components/ui/Highlight";

const POLLING_INTERVAL = 1000 * 20;

const Balance = props => {
  const { library, account } = useWeb3React();
  const [balance, setBalance] = useState();

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = new ethers.Contract(props.token.address, ERC20_ABI, library);
      const balance = await contract.balanceOf(account);

      setBalance(BigNumber(balance._hex).times(Math.pow(10, -1 * props.token.decimals)).toNumber())
    }

    fetchBalance();
    const interval = setInterval(fetchBalance, POLLING_INTERVAL)

    return () => {
      clearInterval(interval);
    }
  }, [props.token, library, account])

  if (!balance)
    return null;
  
  return <Highlight label={`${props.token.symbol} balance`} value={`${formatter.symbol(balance, props.token.symbol)} (${formatter.usd(balance * props.price)})`} />;
}

export default Balance;