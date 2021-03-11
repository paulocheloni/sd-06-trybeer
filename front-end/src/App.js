import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </Provider>
  );
}

export default App;
