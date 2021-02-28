import coingecko from "api/coingecko";
import Balance from "components/Balance/Balance";
import Pool from "components/Pool/Pool";
import Loader from "components/ui/Loader/Loader";
import { BALANCE_TOKENS, QUICK, QUICKSWAP_FACTORY_ADDRESS } from "utils/constants/constants";
import { STAKING_INFO_ACTIVE } from "utils/constants/staking-info";
import { useEffect, useState } from "react";
import styled from "styled-components";
import formatter from "utils/formatter";
import Highlight from "components/ui/Highlight/Highlight";
import useUserContext from "hooks/useUserContext";
import { useWeb3React } from "@web3-react/core";
import { ethers, utils } from "ethers";
import { STAKING_REWARDS_ABI } from "utils/constants/abis/staking-rewards";
import QUICKSWAP_FACTORY_ABI from "utils/constants/abis/quickswap-factory";
import PAIR_ABI from "utils/constants/abis/pair";
import { convertTokenDecimals } from "utils/number";

const POLLING_INTERVAL = 1000 * 20;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PoolList = props => {
  const [quickPrice, setQuickPrice] = useState();
  const [data, setData] = useState(null);
  const { library } = useWeb3React();
  const { user } = useUserContext();

  useEffect(() => {
    const fetchQuickPrice = async () => {
      const response = await coingecko.get_token_price('quick').then(d => d.quick.usd);
      setQuickPrice(response);
    }
    
    fetchQuickPrice();
    const interval = setInterval(fetchQuickPrice, POLLING_INTERVAL)

    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    if (!user.account)
      return;

    const fetchPoolData = async stakingInfo => {
      const stake_contract = new ethers.Contract(stakingInfo.stakingRewardAddress, STAKING_REWARDS_ABI, library);
      const factory_contract = new ethers.Contract(QUICKSWAP_FACTORY_ADDRESS, QUICKSWAP_FACTORY_ABI, library);

      let tokenReserves;
      let poolTotalSupply;
      const token1 = stakingInfo.tokens[0];
      const token2 = stakingInfo.tokens[1];
      let tokenA = token1;
      let tokenB = token2;

      if (!token1.equals(token2)) {
        tokenA = token1.sortsBefore(token2) ? token1 : token2;
        tokenB = token1.sortsBefore(token2) ? token2: token1;

        try {
          const pair_address = await factory_contract.getPair(tokenA.address, tokenB.address);
          const pair_contract = new ethers.Contract(pair_address, PAIR_ABI, library);
          const [poolReserves, poolSupply] = await Promise.all([
            pair_contract.getReserves(),
            pair_contract.totalSupply().then(utils.formatEther)
          ]);
          const reservesTokenA = convertTokenDecimals(poolReserves[0], tokenA);
          const reservesTokenB = convertTokenDecimals(poolReserves[1], tokenB);

          tokenReserves = [reservesTokenA, reservesTokenB];
          poolTotalSupply = poolSupply;
        } catch (err) {
          console.log(err)
        }
      }

      const [unclaimedRewards, rewardRate, stakeTotalSupply, balance] = await Promise.all([
        stake_contract.earned(user.account).then(v => convertTokenDecimals(v, QUICK)),
        stake_contract.rewardRate().then(utils.formatEther),
        stake_contract.totalSupply().then(utils.formatEther),
        stake_contract.balanceOf(user.account).then(convertTokenDecimals)
      ]);

      const stakeSupplyPercent = balance / stakeTotalSupply;
      const rewardRatePerDay = (rewardRate * 60 * 60 * 24) * stakeSupplyPercent;
      const poolSupplyPercent = balance / poolTotalSupply;

      return { 
        address: stakingInfo.stakingRewardAddress,
        unclaimedRewards, 
        rewardRatePerDay, 
        stakeSupplyPercent,
        poolSupplyPercent,
        balance, 
        loading: false, 
        lastUpdated: new Date(),
        reserves: tokenReserves,
        tokens: [tokenA, tokenB]
      };
    }

    const fetchPoolsData = async () => {
      const pools = await Promise.all(STAKING_INFO_ACTIVE.map(fetchPoolData));
      const highlights = {
        unclaimedRewards: pools.reduce((acc, pool) => acc + pool.unclaimedRewards, 0)
      }

      setData({ pools, highlights });
    }

    fetchPoolsData();
    const interval = setInterval(fetchPoolsData, POLLING_INTERVAL)

    return () => {
      clearInterval(interval);
    }
  }, [user.account, library]);

  if (!data)
    return <Loader />

  return (
    <div>
      <Highlight label="QUICK Price" value={quickPrice ? formatter.usd(quickPrice) : <Loader />} />
      <Highlight label="Unclaimed Rewards" value={`${formatter.symbol(data.highlights.unclaimedRewards, 'QUICK')} (${formatter.usd(data.highlights.unclaimedRewards * quickPrice)})`} />
      {BALANCE_TOKENS.filter(t => !t.hideBalance).map(token => <Balance key={token.symbol} token={token} price={token.symbol === 'QUICK' && quickPrice} />)}
      <List>
        {data.pools.map(pool => <Pool key={pool.address} pool={pool} quickPrice={quickPrice} />)}
      </List>
    </div>
  )
}

export default PoolList;