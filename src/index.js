import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App';
import { GlobalStyle } from 'theme/theme';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from 'utils/getLibrary';
import { UserContextProvider } from 'context/user';
import configureEvents from 'config/events';

configureEvents();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Web3ReactProvider getLibrary={getLibrary}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);