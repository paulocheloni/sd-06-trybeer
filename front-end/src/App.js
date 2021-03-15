import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginProvider from './context/LoginProvider';
import Login from './pages/Login';
import Products from './pages/Products';
import AdminOrders from './pages/AdminOrders';
import UserRegister from './pages/UserRegister';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import './App.css';

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/products" component={ Products } />
          <Route exact path="/admin/orders" component={ AdminOrders } />
          <Route exact path="/register" component={ UserRegister } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/orders" component={ Orders } />
        </Switch>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
