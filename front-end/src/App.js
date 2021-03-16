import React from 'react';

import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Login,
  // Register,
  Products,
  AdminOrdersDetail,
  AdminProfile,
  AdminOrders,
  Checkout,
  OrderDetails,
  ClientProfile,
  ClientOrders,
} from './pages';

import Register from './pages/Register/Register';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" component={ Login } /> */}
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/profile" component={ ClientProfile } />
        <Route path="/products" component={ Products } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/orders/:numero-do-pedido" component={ OrderDetails } />
        <Route path="/orders" component={ ClientOrders } />
        <Route exact path="/admin/profile" component={ AdminProfile } />
        <Route exact path="/admin/orders/:id" component={ AdminOrdersDetail } />
        <Route exact path="/admin/orders" component={ AdminOrders } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
