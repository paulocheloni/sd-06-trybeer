import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login, Register,
  Products, ClientProfile,
  AdminProfile, Orders, OrdersAdm, Checkout, OrderDetails } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/products" component={ Products } />
      <Route path="/orders" component={ Orders } />
      <Route path="/admin/orders" component={ OrdersAdm } />
      <Route path="/profile" component={ ClientProfile } />
      <Route path="/admin/profile" component={ AdminProfile } />
      <Route path="/checkout" component={ Checkout } />
      <Route path="/orders/:id" component={ OrderDetails } />
      <Route path="/orders" component={ Orders } />
    </Switch>
  );
}

export default App;
