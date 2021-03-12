import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    </Provider>
  );
}

export default App;
