import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login, Register,
<<<<<<< HEAD
  Products, ClientProfile, AdminProfile, Orders, OrdersAdm } from './pages';
=======
  Products, ClientProfile, Checkout, Orders, OrderDetails } from './pages';
>>>>>>> d3f27784aa1cf0f3d27866eb1f6973296450afc5

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/products" component={ Products } />
      <Route path="/orders" component={ Orders } />
      <Route path="/admin/orders" component={ OrdersAdm } />
      <Route path="/profile" component={ ClientProfile } />
<<<<<<< HEAD
      <Route path="/admin/profile" component={ AdminProfile } />
=======
      <Route path="/checkout" component={ Checkout } />
      <Route path="/orders/:id" component={ OrderDetails } />
      <Route path="/orders" component={ Orders } />
>>>>>>> d3f27784aa1cf0f3d27866eb1f6973296450afc5
    </Switch>
  );
}

export default App;
