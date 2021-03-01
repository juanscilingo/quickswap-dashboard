import formatter from "utils/formatter";
import styled from "styled-components";
import Label from "components/ui/Label/Label";
import Value from "components/ui/Value/Value";
import Badge from "components/ui/Badge/Badge";

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

  @media(max-width: 1200px) {
    width: calc((100% / 2) - 20px);
  }
  @media(max-width: 800px) {
    width: 100%;
    margin-right: 0px;
  }
`

const LiveBadge = styled(Badge)`
  width: 6px;
  height: 6px;
  margin-right: 4px;
`

const Pool = props => {
  const { pool } = props;
  const isStaking = !!pool?.balance && pool.balance !== '0.0';

  if (!isStaking)
    return null;

  return (
    <ListItem>
      <Style>
        <Header>{`${pool.tokens[0].symbol} - ${pool.tokens[1].symbol}`}</Header>
        <Content>
          <Item>
            <Label>Unclaimed Rewards</Label> 
            <Value>{formatter.symbol(pool.unclaimedRewards, 'QUICK')} ({formatter.usd(pool.unclaimedRewards * props.quickPrice)})</Value>
          </Item>
          <Item>
            <Label>Reward Rate</Label>
            <Value>{formatter.symbol(pool.rewardRatePerDay, 'QUICK', { decimalPlaces: 4 })} / day ({formatter.usd(pool.rewardRatePerDay * props.quickPrice)})</Value>
          </Item>
          <Item>
            <Label>Supply Percent</Label>
            <Value>{formatter.percentage(pool.stakeSupplyPercent, { decimalPlaces: 2 })}</Value>
          </Item>
          {pool.reserves && (
            <>
              <Item>
                <Label>Your {pool.tokens[0].symbol} Deposits</Label>
                <Value>{formatter.symbol(pool.reserves[0] * pool.poolSupplyPercent, pool.tokens[0].symbol, { decimalPlaces: 4 })}</Value>
              </Item>
              <Item>
                <Label>Your {pool.tokens[1].symbol} Deposits</Label>
                <Value>{formatter.symbol(pool.reserves[1] * pool.poolSupplyPercent, pool.tokens[1].symbol, { decimalPlaces: 4 })}</Value>
              </Item>
              <Item>
                <Label>Pool {pool.tokens[0].symbol} Deposits</Label>
                <Value>{formatter.symbol(pool.reserves[0], pool.tokens[0].symbol, { decimalPlaces: 2 })}</Value>
              </Item>
              <Item>
                <Label> Pool {pool.tokens[1].symbol} Deposits</Label>
                <Value>{formatter.symbol(pool.reserves[1], pool.tokens[1].symbol, { decimalPlaces: 2 })}</Value>
              </Item>
            </>
          )}
        </Content>
        {pool.lastUpdated && (
          <LastUpdated>
            <LiveBadge dot color="var(--green)" pulsate /> Last Updated: {pool.lastUpdated.toLocaleString()}
          </LastUpdated>
        )}
      </Style>
    </ListItem>
  )
}

export default Pool;