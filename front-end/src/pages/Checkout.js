import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import { localStorageCart } from '../services/ProductCardService';
import CheckoutItem from '../components/Checkout/CheckoutItem';
import Address from '../components/Checkout/Address';
import TrybeerContext from '../context/TrybeerContext';
import TopBar from '../components/TopBar';

function Checkout() {
  const loggedUser = JSON.parse(localStorage.getItem('user'));
  const {
    cart, setCart, totalCart, setTotalCart, address,
  } = useContext(TrybeerContext);

  const enable = address.rua.length && address.numero.length && totalCart > 0 || false;

  useEffect(() => {
    if (localStorageCart) {
      setCart(localStorageCart);
    }
  }, []);

  useEffect(() => {
    let totalValue = 0;
    cart.forEach((cartItem) => {
      totalValue += parseFloat(cartItem.price) * Number(cartItem.quantity);
    });
    setTotalCart(totalValue);
  }, [cart]);

  return (
    loggedUser
      ? (
        <div>
          <TopBar />
          <h1 data-testid="top-title">Finalizar Pedido</h1>
          { cart.map((cartItem, index) => (
            <CheckoutItem
              key={ index }
              index={ index }
              name={ cartItem.name }
              price={ cartItem.price }
              quantity={ cartItem.quantity }
            />
          )) }
          <span data-testid="order-total-value" >
            {`Total: R$ ${totalCart.toFixed(2).replace('.', ',')}`}
          </span>
          <Address />
          <button
            disabled={ !enable }
            data-testid="checkout-finish-btn"
            onClick={ () => console.log('bla') }
          >
            Finalizar Pedido
          </button>
        </div>
      )
      : <Redirect to="/login" />
  );
}

export default Checkout;
