import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Products, ClientProfile, AdminProfile, Orders } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/products" component={ Products } />
      <Route path="/orders" component={ Orders } />
      <Route path="/admin/orders" component={ Orders } />
      <Route path="/profile" component={ ClientProfile } />
      <Route path="/admin/profile" component={ AdminProfile } />
    </Switch>
  );
}

export default App;
