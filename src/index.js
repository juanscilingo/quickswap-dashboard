import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { GlobalStyle } from 'theme';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from 'utils/getLibrary';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);