import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AdminOrders from './pages/AdminOrders';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Provider from './Context/Provider'

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route exact path="/admin/orders" component={ AdminOrders } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/products" component={ Products } />
          <Route exact path="/orders" component={ Orders } />
          <Route exact path="/profile" component={ Profile } />
          <Redirect from="/" to="/login" />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
