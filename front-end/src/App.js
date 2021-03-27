import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AdminOrders from './pages/AdminOrders';
import AdminProfile from './pages/AdminProfile';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Register from './pages/Register';
import history from './utilities/History';
import Provider from './context/Provider';
import ErroPage from './pages/ErroPage';

// import {
//   Login, Register, Profile, Products, Orders, AdminOrders, Home, Checkout, AdminProfile,
// } from './pages';

function App() {
  return (
    <div className="App" history={ history }>
      <Provider>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/orders" component={ AdminOrders } />
          <Route exact path="/products" component={ Products } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/admin/profile" component={ AdminProfile } />
          <Route exact path="/admin/orders" component={ AdminOrders } />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
