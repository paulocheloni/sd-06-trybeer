import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './modules/login/pages/Login';
import Register from './modules/register/pages/Register';
import Products from './modules/products/pages/Products';
import Orders from './modules/orders/pages/Orders';
import BodyContainer from './design-system/containers/BodyContainer';

const PublicRoutes = () => (
  <BodyContainer>
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/admin/orders" component={ Orders } />
      <Redirect path="/" to="/login" />
    </Switch>
  </BodyContainer>
);
export default PublicRoutes;
