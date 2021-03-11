import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import model from './Components/Model';

function App() {
  return (
    <Switch>
      <Route path="/" component={ model } />
      <Route path="/login" />
      <Route path="/register"/>
      <Route path="/profile" />
      <Route path="/products" />
    </Switch>
  );
}

export default App;
