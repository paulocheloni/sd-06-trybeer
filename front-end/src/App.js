import React from 'react';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom';
import { Header, Login, Signup, SideBar, CostumerProfile, CostumerProducts } from './components';
// import history from './service/history';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Signup } />
          <Route path="/profile" component={ CostumerProfile } />
          <Route path="/products" component={ CostumerProducts } />
          <Route path="/"><Header text='ola'/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
