import { useWeb3React } from '@web3-react/core';
import PoolList from 'components/PoolList/PoolList';
import Navbar from 'components/ui/Navbar/Navbar';
import { ChainId } from '../../utils/constants/constants';
import styled from 'styled-components';
import { useEffect } from 'react';
import useUserContext from 'hooks/useUserContext';
import { CONNECTORS } from 'connectors/connectors';
import errorHandler from 'utils/errorHandler';

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
  const { user } = useUserContext();

  useEffect(() => {
    if (user && user.connector && user.account && !active) {
      const connector = CONNECTORS[user.connector];
      activate(connector, errorHandler);
    }
  }, [active, activate, user])

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