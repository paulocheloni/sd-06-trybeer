import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/"><Login /></Route>
        <Route exact path="/login"><Login /></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
