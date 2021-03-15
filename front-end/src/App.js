import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyle from './Style/GlobalStyle';
import Login from './Pages/Login';
import Menu from './Components/Menu';
import Register from './Pages/Register';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <Menu />
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    </Provider>
  );
}

export default App;
