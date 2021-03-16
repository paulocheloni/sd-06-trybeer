import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Products, Orders, Profile, Admin } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/" component={ Login } />
      <Route exact path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/orders" component={ Orders } />
      <Route path="/products" component={ Products } />
      <Route path="/profile" component={ Profile } />
      <Route path="/admin/orders" component={ Admin } />
    </Switch>
  );
}

export default App;
