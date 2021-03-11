import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Login, Signup, SideBar, CostumerProfile, CostumerProducts } from './components';

function App() {
  return (
    <div className="App">
      <h1>Que Grupão, hein bicho!</h1>
      <Switch>
        <Route path="/" component={ Header } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Signup } />
        <Route path="/profile" component={ CostumerProfile } />
        <Route path="/products" component={ CostumerProducts } />
      </Switch>
    </div>
  );
}

export default App;
