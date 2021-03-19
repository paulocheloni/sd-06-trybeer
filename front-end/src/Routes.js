import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Products from './modules/products/pages/Products';
import Profile from './modules/profile/pages/Profile';
import Orders from './modules/orders/pages/Orders';
import Login from './modules/login/pages/Login';
import Register from './modules/register/pages/Register';
import BodyContainer from './design-system/containers/BodyContainer';
import GlobalContext from './context/Context';

const Routes = () => {
  const { token } = useContext(GlobalContext);

  const storage = JSON.parse(localStorage.getItem('user'));
  const role = storage ? storage.role : 'client';
  const tokenFromStorage = storage ? storage.token : false;
  const existToken = storage ? tokenFromStorage : token;
  let baseRoute = role === 'client' ? '/products' : '/admin/orders';
  baseRoute = existToken ? baseRoute : '/login';

  return (
    <Switch>
      <Route path={ ['/login', '/register'] }>
        { existToken && <Redirect to="/" /> }
        <BodyContainer>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
        </BodyContainer>
      </Route>
      <Route path={ ['/profile', '/admin/orders', '/products'] }>
        { !existToken && <Redirect to="/" /> }
        <div>
          Nav VEM AQUI
        </div>
        <BodyContainer>
          <Route path="/profile" component={ Profile } />
          <Route path="/products" component={ Products } />
          <Route exact path="/admin/orders" component={ Orders } />
        </BodyContainer>
      </Route>
      <Route exact path="/">
        <Redirect to={ baseRoute } />
      </Route>
    </Switch>
  );
};

export default Routes;
