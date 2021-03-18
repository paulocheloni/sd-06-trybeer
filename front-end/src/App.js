import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalProvider } from './Contexts/GlobalContext';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Products from './Pages/Products';
import Checkout from './Pages/Checkout';
import MyOrder from './Pages/MyOrder';
import OrderDetails from './Pages/OrderDetails';

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
          <Route path="/orders" component={ MyOrder } />
          <Route path="/orders/:numero-do-pedido" component={ OrderDetails } />
        </Switch>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
