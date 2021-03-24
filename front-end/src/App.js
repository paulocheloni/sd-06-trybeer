import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Provider from './context/Provider';
import {
  Login,
  Signup,
  CostumerProfile,
  CostumerProducts,
  CostumerCheckout,
  CostumerOrders,
  CostumerOrdersDetails,
  AdminProfile,
  AdminOrders,
} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Switch>
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Signup } />
            <Route exact path="/profile" component={ CostumerProfile } />
            <Route exact path="/products" component={ CostumerProducts } />
            <Route exact path="/checkout" component={ CostumerCheckout } />
            <Route
              exact
              path="/orders"
              component={ CostumerOrders }
            />
            <Route
              exact
              path="/orders/:id"
              component={ CostumerOrdersDetails }
            />
            <Route exact path="/admin/profile" component={ AdminProfile } />
            <Route
              exact
              path="/admin/orders"
              component={ () => <p>oi</p> }
            />
            <Route
              exact
              path="/admin/orders/:id"
              component={ AdminOrders }
            />
            <Route exact path="/" component={ () => <Redirect to="/login" /> } />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
