import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/login" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
