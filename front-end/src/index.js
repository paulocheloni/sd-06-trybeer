import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Provider from './context/Provider';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
