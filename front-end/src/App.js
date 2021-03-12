import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/login" component={ Login } />
      <Route path="/register" />
      <Route path="/profile" />
      <Route path="/products" />
    </Switch>
  );
}

export default App;
