import React from 'react';

import './App.css';
import CartContextProvider from './context/CartContext';

import ProductsContextProvider from './context/ProductsContext';
import Routes from './routes';

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
