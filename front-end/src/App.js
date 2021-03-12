import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalProvider } from './Contexts/GlobalContext';

import theme from './Styles/Theme';

import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalProvider>
        <Switch>
          <Route exact path="/" />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/profile" />
          <Route path="/products" />
        </Switch>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
