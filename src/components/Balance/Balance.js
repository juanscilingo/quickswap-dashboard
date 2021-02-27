import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import formatter from "utils/formatter";
import ERC20_ABI from 'utils/constants/abis/erc20.json';
import Highlight from "components/ui/Highlight/Highlight";
import useUserContext from "hooks/useUserContext";
import errorHandler from "utils/errorHandler";

const POLLING_INTERVAL = 1000 * 20;

const Balance = props => {
  const { library } = useWeb3React();
  const { user } = useUserContext();
  const [balance, setBalance] = useState();

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (!user.account)
          return;

        const contract = new ethers.Contract(props.token.address, ERC20_ABI, library);
        const balance = await contract.balanceOf(user.account);

        setBalance(BigNumber(balance._hex).times(Math.pow(10, -1 * props.token.decimals)).toNumber())
      } catch (err) {
        errorHandler(err)
      }
    }
  
    fetchBalance();
    const interval = setInterval(fetchBalance, POLLING_INTERVAL)

    return () => {
      clearInterval(interval);
    }
  }, [props.token, library, user.account])

  if (!balance)
    return null;
  
  return <Highlight label={`${props.token.symbol} balance`} value={`${formatter.symbol(balance, props.token.symbol)} (${formatter.usd(balance * props.price)})`} />;
}

export default Balance;