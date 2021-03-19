import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import history from './Services/History';

import './Styles/Animation.css';

const RoutesAnimation = () => (
  <Router history={ history }>
    <App />
  </Router>
);

export default RoutesAnimation;
