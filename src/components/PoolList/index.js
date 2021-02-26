import coingecko from "api/coingecko";
import Balance from "components/Balance";
import Pool from "components/Pool";
import Loader from "components/ui/Loader";
import { Token } from "utils/constants";
import { STAKING_INFO_ACTIVE } from "utils/constants/staking-info";
import { useEffect, useState } from "react";
import styled from "styled-components";
import formatter from "utils/formatter";
import Highlight from "components/ui/Highlight";

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
      {Object.values(Token).map(token => <Balance token={token} price={token.symbol === 'QUICK' && quickPrice} />)}
      <List>
        {STAKING_INFO_ACTIVE.map(stakingInfo => <Pool key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} quickPrice={quickPrice} />)}
      </List>
    </div>
  )
}

export default PoolList;