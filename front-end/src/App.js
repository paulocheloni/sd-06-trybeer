import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Products from './pages/Products';
import AdminOrders from './pages/AdminOrders';
import UserRegister from './pages/UserRegister';
import './App.css';

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/products" component={ Products } />
          <Route exact path="/admin/orders" component={ AdminOrders } />
          <Route exact path="/register" component={ UserRegister } />
        </Switch>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
