import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { localStorageCart } from '../services/ProductCardService';
import CheckoutItem from '../components/Checkout/CheckoutItem';
import Address from '../components/Checkout/Address';
import TrybeerContext from '../context/TrybeerContext';
import TopBar from '../components/TopBar';
import { checkoutOrder } from '../services/checkoutService';

function Checkout() {
  const loggedUser = JSON.parse(localStorage.getItem('user'));
  const {
    cart, setCart, totalCart, setTotalCart, address,
  } = useContext(TrybeerContext);
  const history = useHistory();

  const buttonDisable = address.rua.length && address.numero.length && totalCart > 0;
  const enable = buttonDisable || false;

  const sale = {
    userEmail: loggedUser.email,
    cart,
    totalPrice: totalCart.toFixed(2).replace('.', ','),
    status: 'pendente',
    ...address,
  };

  useEffect(() => {
    if (!loggedUser || !loggedUser.token) history.push('/login');
    if (localStorageCart) setCart(localStorageCart);
  }, []);

  useEffect(() => {
    let totalValue = 0;
    cart.forEach((cartItem) => {
      totalValue += parseFloat(cartItem.price) * Number(cartItem.quantity);
    });
    setTotalCart(totalValue);
  }, [cart]);

  return (
    <div>
      <TopBar />
      <h1 data-testid="top-title">Finalizar Pedido</h1>
      <div id="cart-checkout">
        {
          !cart.length
            ? <h2>Não há produtos no carrinho</h2>
            : (
              cart.map((cartItem, index) => (
                <CheckoutItem
                  key={ index }
                  index={ index }
                  name={ cartItem.name }
                  price={ cartItem.price }
                  quantity={ cartItem.quantity }
                />
              ))
            )
        }
        <span data-testid="order-total-value">
          {`Total: R$ ${totalCart.toFixed(2).replace('.', ',')}` }
        </span>
        <Address />
        <button
          type="button"
          disabled={ !enable }
          data-testid="checkout-finish-btn"
          onClick={ () => checkoutOrder(history, setCart, sale) }
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}

export default Checkout;
