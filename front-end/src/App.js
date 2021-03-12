import React from 'react';
import { Route, Switch } from 'react-router-dom';
// const { Header, Login, Signup, SideBar, CostumerProfile, CostumerProducts } = component;
import { Header, Login, Signup, SideBar, CostumerProfile, CostumerProducts } from './components';

// import Header from './components/HeaderComponent';
// import Login from './components/LoginComponent';
// import SideBar from './components/SideBarComponent';
// import Signup from './components/SignupComponent';
// import CostumerProfile from './components/CostumerProfileComponent';
// import CostumerProducts from './components/CostumerProductsComponent';

function App() {
  return (
    <div className="App">
      <h1>Que Grupão, hein bicho!</h1>
      <Switch>
        <Route path="/"><Header text='ola'/></Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Signup } />
        <Route path="/profile" component={ CostumerProfile } />
        <Route path="/products" component={ CostumerProducts } />
      </Switch>
    </div>
  );
};

export default App;
