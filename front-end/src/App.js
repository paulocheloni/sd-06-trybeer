import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    </Provider>
  );
}

export default App;
