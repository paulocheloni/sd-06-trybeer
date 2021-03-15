import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
// import { Login } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route path="/checkout" component={ Checkout } />
      <Route path="/orders" component={ Orders } />
      <Route path="/" component={ Login } />
      <Route path="/admin/orders" component={ AdminOrders } />
    </Switch>
  );
}

export default App;
