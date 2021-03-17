import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import isLogged from '../components/isLogged';

const currencyFormat = (num) => num
  .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

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
      if (ad !== []) {
        setCartTotal(ad.reduce((e, f) => +e + +f, 0));
      }
      setItems(ckItems);
      setReload(ckItems.length)
    }
  }, [reload]);
  
  const prodQty = (prod) => items.filter((e) => e.id === prod.id);

  const RenderCheckout = () => items.map((prod, id) => {
    const qtyLength = prodQty(prod).length;
    return (
      <section key={id}>
        <p data-testid={`${id}-product-qtd-input`}>{qtyLength}</p>
        <p data-testid={`${id}-product-name`}>{prod.name}</p>
        <p data-testid={`${id}-product-total-value`}>
          {currencyFormat(qtyLength * prod.price)}
        </p>
        <p data-testid={`${id}-product-unit-price`}>({currencyFormat(+prod.price)} un)</p>
        <button
          type="button"
          data-testid="0-removal-button"
          onClick={ () => {
            items.splice(items.indexOf(items.find((e) => e.id === prod.id)), 1);
            localStorage.setItem('items', JSON.stringify(items));
            setReload(reload - 1)
          }}
        >
          x
        </button>
      </section>
    )
  })
  if (isLogged()) return <Redirect to="/login" />;
  return (
    <>
      <h1 data-testid="top-title">finalizar pedido</h1>
      {reload === 0 ? <p>Não há produtos no carrinho</p> : RenderCheckout()}
      <h3 data-testid="order-total-value">{currencyFormat(cartTotal)}</h3>
      <label htmlFor="street">
        Rua
        <input 
          data-testid="checkout-street-input" 
          type="text" 
          name="street"
          onChange={({target}) => setStreet(target.value)}
        />
      </label>
      <label htmlFor="number">
        Número da casa
        <input 
          data-testid="checkout-house-number-input" 
          type="text" 
          name="number"
          onChange={({target}) => setNumber(target.value)}
        />
      </label>
      <button 
      type="button" 
      data-testid="checkout-finish-btn"
      disabled={reload === 0 || street.length === 0 || number.length === 0}
      onClick={() => {
        route.push('/products')
        localStorage.setItem('success', JSON.stringify(true));
      }}
      >
        Finalizar Pedido
      </button>
    </>
  )
};

export default Checkout;