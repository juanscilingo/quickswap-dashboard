import WalletButton from "components/WalletButton/WalletButton"
import useUserContext from "hooks/useUserContext"
import styled from "styled-components"
import formatter from "utils/formatter"
import Badge from "../Badge/Badge"

const Style = styled.div`
  position: fixed;
  top: 0;
  height: var(--navbar-height);
  background: var(--midnight);
  width: 100%;
  box-shadow: var(--box-shadow);
  z-index: 1;
`

const Content = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: 25px 15px;
`

const Logo = styled.div`
  margin-right: auto;
  font-size: 18px;
`

const Item = styled.div`
  margin-left: 20px;
`

const Navbar = () => {
  const { user } = useUserContext();

  return (
    <Style>
      <Content>
        <Logo>QUICKSWAP</Logo>
        {user.account && (
          <Item>
            <Badge>{formatter.trimmedAddress(user.account)}</Badge>
          </Item>
        )}
        <Item>
          <WalletButton />
        </Item>
      </Content>
    </Style>
  )
}

export default Navbar;