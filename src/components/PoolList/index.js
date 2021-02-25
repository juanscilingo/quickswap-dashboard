import coingecko from "api/coingecko";
import Balance from "components/Balance";
import Pool from "components/Pool";
import Label from "components/ui/Label";
import Loader from "components/ui/Loader";
import Value from "components/ui/Value";
import { Token } from "../../constants";
import { STAKING_INFO_ACTIVE } from "constants/staking-info";
import { useEffect, useState } from "react";
import styled from "styled-components";
import formatter from "utils/formatter";

const POLLING_INTERVAL = 1000 * 20;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Price = styled.div`
  display: inline-block;
  background: var(--midnight);
  padding: 15px;
  border-radius: var(--border-radius);
  margin-bottom: 30px;
  margin-right: 15px;
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
      <Price>
        <Label>QUICK Price </Label>
        <Value>
          {quickPrice ? (
            formatter.usd(quickPrice)
          ) : (
            <Loader />
          )}
        </Value>
      </Price>
      <Price>
        <Label>QUICK Balance</Label>
        <Value>
          <Balance token={Token.QUICK} price={quickPrice} />
        </Value>
      </Price>
      <List>
        {STAKING_INFO_ACTIVE.map(stakingInfo => <Pool key={stakingInfo.stakingRewardAddress} stakingInfo={stakingInfo} quickPrice={quickPrice} />)}
      </List>
    </div>
  )
}

export default PoolList;