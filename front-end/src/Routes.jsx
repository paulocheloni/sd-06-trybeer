import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import CustomerOrders from './pages/CustomerOrders';
import SaleDetails from './pages/SaleDetails';
import AdminProfile from './pages/AdminProfile';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/products" component={ Products } />
      <Route path="/register" component={ Register } />
      <Route path="/admin/orders" component={ Orders } />
      <Route path="/profile" component={ Profile } />
      <Route path="/checkout" component={ Checkout } />
      <Route exact path="/orders/:id" component={ SaleDetails } />
      <Route path="/admin/profile" component={ AdminProfile } />
      <Route path="/orders" component={ CustomerOrders } />
    </Switch>
  );
}