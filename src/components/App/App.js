import { useWeb3React } from '@web3-react/core';
import PoolList from 'components/PoolList/PoolList';
import Navbar from 'components/ui/Navbar/Navbar';
import { ChainId } from '../../utils/constants/constants';
import styled from 'styled-components';

const Style = styled.div`

`

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-top: var(--navbar-height);
  padding: 25px 15px;
`

const App = () => {
  const { active, chainId } = useWeb3React();

  return (
    <Style>
      <Navbar />
      <Content>
        {active && chainId === ChainId.MATIC && <PoolList />}
      </Content>
    </Style>
  );
}

export default App;