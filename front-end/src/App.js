import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginProvider from '../src/context/LoginProvider.js';
import Login from './pages/Login.js'
import './App.css';

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={ Login } />
        </Switch>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
