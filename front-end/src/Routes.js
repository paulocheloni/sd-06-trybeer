import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './modules/Login/Login';
import Register from './modules/Register/Register';
import Products from './modules/Products/Products';
import AdminOrders from './modules/Admin/Orders/AdminOrders';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/products" component={ Products } />
        <Route path="/admin/orders" component={ AdminOrders } />
        <Route path="/register" component={ Register } />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default Routes;
