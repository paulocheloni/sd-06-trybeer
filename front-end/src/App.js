import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import AdminOrders from './pages/AdminOrders';
import UserRegister from './pages/UserRegister';
import AdminProfile from './pages/AdminProfile';
import ClientProfile from './pages/ClientProfile';
import Orders from './pages/Orders';
import './App.css';

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect from="/" to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/products" component={ Products } />
          <Route exact path="/admin/orders" component={ AdminOrders } />
          <Route exact path="/register" component={ UserRegister } />
          <Route exact path="/profile" component={ ClientProfile } />
          <Route exact path="/orders" component={ Orders } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/admin/profile" component={ AdminProfile } />
        </Switch>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
