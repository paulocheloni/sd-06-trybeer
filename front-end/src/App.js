import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
