import React from 'react';

import './App.css';

import ProductsContextProvider from './context/ProductsContext';
import Routes from './routes';

function App() {
  return (
    <ProductsContextProvider>
      <Routes />
    </ProductsContextProvider>
  );
}

export default App;
