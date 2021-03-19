import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { ThemeProvider } from 'styled-components';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Products from './Pages/Products';
import Checkout from './Pages/Checkout';
import MyOrders from './Pages/OrderDetails';
import OrderDetails from './Pages/MyOrders';
import AdminProfile from './Pages/AdminProfile';
import AdminOrders from './Pages/AdminOrders';

import { useTheme } from './Hooks/theme';

function App() {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={ location.key }
        classNames="transition"
        timeout={ 1000 }
      >
        <ThemeProvider theme={ theme }>
          <Switch location={ location }>
            <Route exact path="/" component={ () => <Redirect to="/login" /> } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route path="/profile" component={ Profile } />
            <Route path="/products" component={ Products } />
            <Route path="/checkout" component={ Checkout } />
            <Route exact path="/orders" component={ OrderDetails } />
            <Route path="/orders/:id" component={ MyOrders } />
            <Route path="/admin/profile" component={ AdminProfile } />
            <Route path="/admin/orders" component={ AdminOrders } />
          </Switch>
        </ThemeProvider>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
