import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import isLogged from '../components/isLogged';
import RenderCheckout from '../components/RenderCheckout';
import currencyFormat from '../utils/currencyFormat';
import checkoutPost from '../methods/checkout';
import salesDetails from '../methods/salesDetails';
import salesProductsInfo from '../utils/salesProductsInfo';

function Checkout() {
  const [items, setItems] = useState([]);
  const [reload, setReload] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');

  const route = useHistory();

  useEffect(() => {
    const ckItems = JSON.parse(localStorage.getItem('items'));
    if (ckItems) {
      const ad = ckItems.map((a) => a.price);
      setCartTotal(ad.reduce((e, f) => +e + +f, 0));
      setItems(ckItems);
      setReload(ckItems.length);
    }
  }, [reload]);

  if (isLogged()) return <Redirect to="/login" />;
  return (
    <>
      <h1 data-testid="top-title">finalizar pedido</h1>
      {reload === 0
        ? <p>Não há produtos no carrinho</p>
        : RenderCheckout(items, reload, setReload)}
      <h3 data-testid="order-total-value">{currencyFormat(cartTotal)}</h3>
      <label htmlFor="street">
        Rua
        <input
          data-testid="checkout-street-input"
          type="text"
          name="street"
          onChange={ ({ target }) => setStreet(target.value) }
        />
      </label>
      <label htmlFor="number">
        Número da casa
        <input
          data-testid="checkout-house-number-input"
          type="text"
          name="number"
          onChange={ ({ target }) => setNumber(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="checkout-finish-btn"
        disabled={ reload === 0 || street.length === 0 || number.length === 0 }
        onClick={ () => {
          route.push('/products');
          localStorage.setItem('success', JSON.stringify(true));
          checkoutPost({
            price: cartTotal,
            address: street,
            number,
            status: 'Pendente',
          });
          const SPInfo = salesProductsInfo(items.map((item) => item.id));
          salesDetails(SPInfo);
        } }
      >
        Finalizar Pedido
      </button>
    </>
  );
}

export default Checkout;
