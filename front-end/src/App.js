import React from 'react';
import { Route, Switch } from 'react-router-dom';
import history from './utilities/history';
import {
  Login, Register, Profile, Products, Orders,
} from './pages';

function App() {
  return (
    <div className="App" history={ history }>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/orders" component={ Orders } />
        <Route exact path="/products" component={ Products } />
      </Switch>
    </div>
  );
}

export default App;
