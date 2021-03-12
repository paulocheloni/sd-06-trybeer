import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Login,
  Register,
  Profile,
  Products,
  Checkout,
  Orders,
  Admin,
  Home,
} from '../pages';

import UserRegister from '../base/UserRegister';

function index() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      {/* <Route path="/registernew" component={ UserRegister } /> */}
      <Route path="/profile" component={ Profile } />
      <Route path="/products" component={ Products } />
      <Route path="/checkout" component={ Checkout } />
      <Route path="/orders" component={ Orders } />
      <Route path="/admin" component={ Admin } />
      <Route path="/" component={ Home } />
    </Switch>
  );
}

export default index;
