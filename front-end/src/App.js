import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact component={ Login } />
    </Switch>
  );
}

export default App;
