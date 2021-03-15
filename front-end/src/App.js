import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login, Register } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/admin/profile" component={ Register } />
    </Switch>
  );
}

export default App;
