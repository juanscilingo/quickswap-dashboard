import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { ethers, utils } from 'ethers';
import { STAKING_REWARDS_ABI } from "utils/constants/abis/staking-rewards";
import formatter from "utils/formatter";
import styled from "styled-components";
import Label from "components/ui/Label/Label";
import Value from "components/ui/Value/Value";
import Loader from "components/ui/Loader/Loader";
import Badge from "components/ui/Badge/Badge";
import useUserContext from "hooks/useUserContext";

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
        
      // const contract = new ethers.Contract('0xdC9232E2Df177d7a12FdFf6EcBAb114E2231198D', quickswapETHWBTCABI, library);
      const stake_contract = new ethers.Contract(props.stakingInfo.stakingRewardAddress, STAKING_REWARDS_ABI, library);
      // console.log('Contract', contract)
      // console.log(await contract.balanceOf(account))
      // console.log(utils.formatEther(await contract.totalSupply()))
      // console.log(await contract.token0())
      // console.log(await contract.token1())
      // console.log(stake_contract);
      // console.log(utils.formatEther(await stake_contract.balanceOf(account)));
      // console.log(utils.formatEther(await stake_contract.earned(account)));
      const [unclaimedRewards, rewardRate, totalSupply, balance] = await Promise.all([
        stake_contract.earned(user.account).then(utils.formatEther),
        stake_contract.rewardRate().then(utils.formatEther),
        stake_contract.totalSupply().then(utils.formatEther),
        stake_contract.balanceOf(user.account).then(utils.formatEther)
      ]);

      const supplyPercent = balance / totalSupply;
      const rewardRatePerDay = (rewardRate * 60 * 60 * 24) * supplyPercent;
      
      setStatus({ unclaimedRewards, rewardRatePerDay, supplyPercent, balance, loading: false, lastUpdated: new Date() });
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
        <Header>{props.stakingInfo.name || `${props.stakingInfo.tokens[0]} - ${props.stakingInfo.tokens[1]}`}</Header>
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
              <Value>{formatter.percentage(status.supplyPercent, { decimalPlaces: 2 })}</Value>
            </Item>
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