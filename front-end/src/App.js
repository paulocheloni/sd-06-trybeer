import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './Styles/Theme';

import Login from './Pages/Login';
import { GlobalProvider } from './Contexts/GlobalContext';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalProvider>
        <Switch>
          <Route exact path="/" />
          <Route path="/login" component={ Login } />
          <Route path="/register" />
          <Route path="/profile" />
          <Route path="/products" />
        </Switch>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
