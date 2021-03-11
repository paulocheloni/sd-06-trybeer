import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Login,
  Register,
  Profile,
  Products,
  Checkout,
  Orders,
} from '../pages';

function index() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/profile" component={ Profile } />
      <Route path="/products" component={ Products } />
      <Route path="/checkout" component={ Checkout } />
      <Route path="/orders" component={ Orders } />
    </Switch>
  );
}

export default index;
