import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AdminOrders from './pages/AdminOrders';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin/orders" component={ AdminOrders } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/products" component={ Products } />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
