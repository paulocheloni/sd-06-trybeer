import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './Style/GlobalStyle';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/profile" component={ Profile } />
      </Switch>
    </Provider>
  );
}

export default App;
