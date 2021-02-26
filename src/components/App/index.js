import { useWeb3React } from '@web3-react/core';
import PoolList from 'components/PoolList';
import Navbar from 'components/ui/Navbar';
import { injected } from 'connectors';
import { ChainId } from '../../utils/constants';
import { useEffect } from 'react';
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
  const { active, activate, chainId } = useWeb3React();

  useEffect(() => {
    if (window.web3 || window.ethereum)
      activate(injected, console.error);
  }, [activate]);

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