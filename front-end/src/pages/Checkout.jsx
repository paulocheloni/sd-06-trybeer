import React from 'react';
import { Redirect } from 'react-router-dom';
import { CheckoutForms, CheckoutProducts } from '../components/index';
import TopBar from '../components/TopBar';

function Checkout() {
  const user = localStorage.getItem('user');

  return !user ? <Redirect to="/login" /> : (
    <div>
      <TopBar name="Finalizar Pedido" />
      <CheckoutProducts />
      <CheckoutForms />
    </div>
  );
}

export default Checkout;
