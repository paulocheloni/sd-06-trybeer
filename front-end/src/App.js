import React from 'react';
import {
  Switch,
  Route,
  Router,
  Redirect,
} from 'react-router-dom';

import history from './utils/history';

import { NotFound, Login, Register, Profile, Products, Error } from './pages';

import './styles/App.css';

function App() {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/products" component={ Products } />
        <Route path="/profile" component={ Profile } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/error" component={ Error } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
