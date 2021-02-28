import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { ethers, utils } from 'ethers';
import { STAKING_REWARDS_ABI } from "utils/constants/abis/staking-rewards";
import QUICKSWAP_FACTORY_ABI from "utils/constants/abis/quickswap-factory";
import PAIR_ABI from 'utils/constants/abis/pair.json'
import formatter from "utils/formatter";
import styled from "styled-components";
import Label from "components/ui/Label/Label";
import Value from "components/ui/Value/Value";
import Loader from "components/ui/Loader/Loader";
import Badge from "components/ui/Badge/Badge";
import useUserContext from "hooks/useUserContext";
import { convertTokenDecimals } from "utils/number";
import { QUICKSWAP_FACTORY_ADDRESS } from "utils/constants/constants";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  background: var(--midnight);
  box-shadow: var(--box-shadow);
  position: relative;
  padding-bottom: 10px;
`

const Item = styled.div`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`

const Header = styled.div`
  height: 50px;
  background: var(--midnight-2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

const Content = styled.div`
  padding: 15px;
`

const LastUpdated = styled.div`
  font-size: 10px;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`

const ListItem = styled.div`
  width: calc((100% / 3) - 20px);
  margin-right: 20px;
  margin-bottom: 30px;
`

const LiveBadge = styled(Badge)`
  width: 6px;
  height: 6px;
  margin-right: 4px;
`

const POLLING_INTERVAL = 1000 * 20;

const Pool = props => {
  const { library } = useWeb3React();
  const { user } = useUserContext();
  const [status, setStatus] = useState({ loading: true });

  useEffect(() => {
    if (!user.account)
      return;

    const fetchPoolData = async () => {
      const stake_contract = new ethers.Contract(props.stakingInfo.stakingRewardAddress, STAKING_REWARDS_ABI, library);
      const factory_contract = new ethers.Contract(QUICKSWAP_FACTORY_ADDRESS, QUICKSWAP_FACTORY_ABI, library);

      let tokenReserves;
      let poolTotalSupply;
      const token1 = props.stakingInfo.tokens[0];
      const token2 = props.stakingInfo.tokens[1];
      let tokenA = token1;
      let tokenB = token2;

      if (!token1.equals(token2)) {
        tokenA = token1.sortsBefore(token2) ? token1 : token2;
        tokenB = token1.sortsBefore(token2) ? token2: token1;

        try {
          const pair_address = await factory_contract.getPair(tokenA.address, tokenB.address);
          const pair_contract = new ethers.Contract(pair_address, PAIR_ABI.abi, library);
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
        stake_contract.earned(user.account).then(utils.formatEther),
        stake_contract.rewardRate().then(utils.formatEther),
        stake_contract.totalSupply().then(utils.formatEther),
        stake_contract.balanceOf(user.account).then(utils.formatEther)
      ]);

      const stakeSupplyPercent = balance / stakeTotalSupply;
      const rewardRatePerDay = (rewardRate * 60 * 60 * 24) * stakeSupplyPercent;
      const poolSupplyPercent = balance / poolTotalSupply;

      setStatus({ 
        unclaimedRewards, 
        rewardRatePerDay, 
        stakeSupplyPercent,
        poolSupplyPercent,
        balance, 
        loading: false, 
        lastUpdated: new Date(),
        reserves: tokenReserves,
        tokens: [tokenA, tokenB]
      });
    }

    fetchPoolData();
    const interval = setInterval(fetchPoolData, POLLING_INTERVAL)

    return () => {
      clearInterval(interval);
    }
  }, [user.account, library, props.stakingInfo]);

  const isStaking = !!status?.balance && status.balance !== '0.0';

  if (!isStaking)
    return null;

  return (
    <ListItem>
      <Style>
        <Header>{`${props.stakingInfo.tokens[0].symbol} - ${props.stakingInfo.tokens[1].symbol}`}</Header>
        {status.loading ? (
          <Loader />
        ) : (
          <Content>
            <Item>
              <Label>Unclaimed Rewards</Label> 
              <Value>{formatter.symbol(status.unclaimedRewards, 'QUICK')} ({formatter.usd(status.unclaimedRewards * props.quickPrice)})</Value>
            </Item>
            <Item>
              <Label>Reward Rate</Label>
              <Value>{formatter.symbol(status.rewardRatePerDay, 'QUICK', { decimalPlaces: 4 })} / day ({formatter.usd(status.rewardRatePerDay * props.quickPrice)})</Value>
            </Item>
            <Item>
              <Label>Supply Percent</Label>
              <Value>{formatter.percentage(status.stakeSupplyPercent, { decimalPlaces: 2 })}</Value>
            </Item>
            {status.reserves && (
              <>
                <Item>
                  <Label>Your {status.tokens[0].symbol} Deposits</Label>
                  <Value>{formatter.symbol(status.reserves[0] * status.poolSupplyPercent, status.tokens[0].symbol, { decimalPlaces: 4 })}</Value>
                </Item>
                <Item>
                  <Label>Your {status.tokens[1].symbol} Deposits</Label>
                  <Value>{formatter.symbol(status.reserves[1] * status.poolSupplyPercent, status.tokens[1].symbol, { decimalPlaces: 4 })}</Value>
                </Item>
                <Item>
                  <Label>Pool {status.tokens[0].symbol} Deposits</Label>
                  <Value>{formatter.symbol(status.reserves[0], status.tokens[0].symbol, { decimalPlaces: 2 })}</Value>
                </Item>
                <Item>
                  <Label> Pool {status.tokens[1].symbol} Deposits</Label>
                  <Value>{formatter.symbol(status.reserves[1], status.tokens[1].symbol, { decimalPlaces: 2 })}</Value>
                </Item>
              </>
            )}
          </Content>
        )}
        {status.lastUpdated && (
          <LastUpdated>
            <LiveBadge dot color="var(--green)" pulsate /> Last Updated: {status.lastUpdated.toLocaleString()}
          </LastUpdated>
        )}
      </Style>
    </ListItem>
  )
}

export default Pool;