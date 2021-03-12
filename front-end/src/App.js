import React from 'react';

import { Login } from './pages';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Provider from '../src/Context/Provider';

import './App.css';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
