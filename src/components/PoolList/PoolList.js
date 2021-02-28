import coingecko from "api/coingecko";
import Balance from "components/Balance/Balance";
import Pool from "components/Pool/Pool";
import Loader from "components/ui/Loader/Loader";
import { BALANCE_TOKENS } from "utils/constants/constants";
import { STAKING_INFO_ACTIVE } from "utils/constants/staking-info";
import { useEffect, useState } from "react";
import styled from "styled-components";
import formatter from "utils/formatter";
import Highlight from "components/ui/Highlight/Highlight";

const POLLING_INTERVAL = 1000 * 20;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const PoolList = props => {
  const [quickPrice, setQuickPrice] = useState();

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

  return (
    <div>
      <Highlight label="QUICK Price" value={quickPrice ? formatter.usd(quickPrice) : <Loader />} />
      {BALANCE_TOKENS.filter(t => !t.hideBalance).map(token => <Balance key={token.symbol} token={token} price={token.symbol === 'QUICK' && quickPrice} />)}
      <List>
        {STAKING_INFO_ACTIVE.map(stakingInfo => <Pool key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} quickPrice={quickPrice} />)}
      </List>
    </div>
  )
}

export default PoolList;