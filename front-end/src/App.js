import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProfileClient from './pages/ProfileClient';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/"><Login /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exact path="/products"><Products /></Route>
        <Route exact path="/profile"><ProfileClient /></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
