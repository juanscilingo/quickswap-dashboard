import coingecko from "api/coingecko";
import Pool from "components/Pool";
import Label from "components/ui/Label";
import Value from "components/ui/Value";
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

const ListItem = styled.div`
  width: calc((100% / 3) - 20px);
  margin-bottom: 30px;
`

const Price = styled.div`
  display: inline-block;
  background: var(--midnight);
  padding: 15px;
  border-radius: var(--border-radius);
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
        <Label>Quick Price </Label>
        <Value>{formatter.usd(quickPrice)}</Value>
      </Price>
      <List>
        {STAKING_INFO_ACTIVE.map(stakingInfo => (
          <ListItem key={stakingInfo.stakingRewardAddress}>
            <Pool stakingInfo={stakingInfo} quickPrice={quickPrice} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default PoolList;