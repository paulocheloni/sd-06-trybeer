import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NotFound, Login, Register } from './pages';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/">
        <h1>Trybeer!</h1>
      </Route>
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
