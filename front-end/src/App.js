import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// Provider
import Provider from '../src/Context/Provider';

// Pages
import { Login, Register, Admin, Cliente  } from './pages';

// CSS
import './App.css';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route  exact path="/login" component={Login} />
          <Route exact path="/register" component={Register}/>
          <Route exact path="/admin/orders" component={Admin}/>
          <Route exact path="/products" component={Cliente}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
