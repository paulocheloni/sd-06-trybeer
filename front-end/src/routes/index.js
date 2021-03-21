import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect } from 'react-router-dom';

  import Products from '../pages/Products';
  import Register from '../pages/Register';
  import Profile from '../pages/Profile';
import Login from '../pages/Login';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to="/login" />
      </Route>
      <Route path="/admin/orders" />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/products" component={ Products } />
      <Route path="/profile" component={ Profile } />
    </Switch>
  </Router>
);

export default Routes;
