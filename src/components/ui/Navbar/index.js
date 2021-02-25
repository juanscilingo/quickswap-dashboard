import formatter from "utils/formatter"
import Badge from "../Badge"

const { useWeb3React } = require("@web3-react/core")
const { default: ConnectButton } = require("components/Metamask/ConnectButton")
const { default: styled } = require("styled-components")

const Style = styled.div`
  position: fixed;
  top: 0;
  height: var(--navbar-height);
  background: var(--midnight);
  width: 100%;
  box-shadow: var(--box-shadow);
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
  const web3React = useWeb3React();

  return (
    <Style>
      <Content>
        <Logo>QUICKSWAP</Logo>
        {web3React.account && (
          <Item>
            <Badge>{formatter.trimmedAddress(web3React.account)}</Badge>
          </Item>
        )}
        <Item>
          <ConnectButton />
        </Item>
      </Content>
    </Style>
  )
}

export default Navbar;