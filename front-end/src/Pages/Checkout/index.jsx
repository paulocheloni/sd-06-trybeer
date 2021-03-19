import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ShoppingCart from '../../Components/ShoppingCart';
import Menu from '../../Components/Menu';

const Cart = () => {
  const [loged, setLoged] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.products.getItem('token'));
    if (!token) setLoged(true);
  }, []);
  if (loged) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <Menu><p data-testid="top-title">Meus Pedidos</p></Menu>
      <ShoppingCart />
    </>
  );
};

export default Cart;
