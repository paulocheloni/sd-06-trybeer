import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalProvider } from './Contexts/GlobalContext';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Products from './Pages/Products';
import Checkout from './Pages/Checkout';
import MyOrders from './Pages/OrderDetails';
import OrderDetails from './Pages/MyOrders';

import { useTheme } from './Hooks/theme';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={ theme }>
      <GlobalProvider>
        <Switch>
          <Route exact path="/" component={ () => <Redirect to="/login" /> } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/profile" component={ Profile } />
          <Route path="/products" component={ Products } />
          <Route path="/checkout" component={ Checkout } />
          <Route exact path="/orders" component={ OrderDetails } />
          <Route path="/orders/:id" component={ MyOrders } />
        </Switch>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
