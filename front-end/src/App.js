import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Products, ClientProfile, Checkout} from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/products" component={ Products } />
      <Route path="/admin/orders" component={ Register } />
      <Route path="/profile" component={ ClientProfile } />
      <Route path="/checkout" component={ Checkout } />
    </Switch>
  );
}

export default App;
