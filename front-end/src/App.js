import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Products } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/products" component={ Products } />
    </Switch>
  );
}

export default App;
