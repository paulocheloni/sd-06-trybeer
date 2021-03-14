import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Login, Signup, CostumerProfile, CostumerProducts } from './pages';
import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Signup } />
            <Route path="/profile" component={ CostumerProfile } />
            <Route path="/products" component={ CostumerProducts } />
            <Route path="/" component={ Login } />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
