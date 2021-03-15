import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './modules/login/pages/Login';
import Register from './modules/login/pages/Register';
import Products from './modules/products/pages/Products';
import BodyContainer from './design-system/containers/BodyContainer';

const PublicRoutes = () => (
  <BodyContainer>
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/products" component={ Products } />
    </Switch>
  </BodyContainer>
);

export default PublicRoutes;
