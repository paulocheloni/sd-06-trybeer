import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import history from './Services/History';

import './Styles/Animation.css';

const App = () => (
  <Router history={ history }>
    <Routes />
  </Router>
);

export default App;
