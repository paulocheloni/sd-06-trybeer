import React, { useContext, useState, useMemo, useCallback } from 'react';
import { Redirect } from 'react-router-dom';

import AppContext from '../context/app.context';
import { Topbar, CartButton, TextInput } from '../components';
import { handleProductQuantity } from '../utils';

import '../styles/Products.css';

export default function Checkout() {
  const {
    tokenContext: { token },
    cartContext: { cart, setCart } } = useContext(AppContext);
  const [address, setAddress] = useState({ street: '', number: undefined });
  const [success, setSuccess] = useState(false);

  const cartTotal = useMemo(() => Object.keys(cart).reduce(
    (sum, curr) => (
      sum + (cart[curr].price * cart[curr].quantity)
    ), 0,
  ).toFixed(2).replace('.', ','), [cart]);

  const removeItem = useCallback((id) => {
    const newCart = handleProductQuantity({
      action: 'del',
      id,
      cart });
    setCart(newCart);
  }, [cart, setCart]);

  const updateAddress = (target) => {
    if (target.name === 'house-number') {
      return setAddress({ ...address, number: target.value });
    }
    setAddress({ ...address, [target.name]: target.value });
  };

  const checkout = () => setSuccess(true);

  const disabled = useMemo(() => {
    if (address.street.length === 0
      || !address.number
      || Object.keys(cart) < 1) return true;
    return false;
  }, [address, cart]);

  if (!token) return <Redirect to="/login" />;

  return (
    <section>
      <Topbar title="Finalizar Pedido" />
      { (success) ? <section>Compra realizada com sucesso!</section> : null }
      <section className="checkout-container">
        { (Object.keys(cart) < 1)
          ? <h3>Não há produtos no carrinho.</h3>
          : (
            <table>
              <tbody>
                { Object.keys(cart).map((id, index) => (
                  <tr className="product-row" key={ `${id}-{index}` }>
                    <td data-testid={ `${index}-product-qtd-input` }>
                      { cart[id].quantity }
                    </td>
                    <td data-testid={ `${index}-product-name` }>
                      { cart[id].name }
                    </td>
                    <td>
                      <span data-testid={ `${index}-product-total-value` }>
                        { `R$ ${(cart[id].price * cart[id].quantity)
                          .toFixed(2).replace('.', ',')}` }
                      </span>
                    </td>
                    <td>
                      <span data-testid={ `${index}-product-unit-price` }>
                        { `(R$ ${cart[id].price.replace('.', ',')} un)` }
                      </span>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={ () => removeItem(id) }
                        data-testid={ `${index}-removal-button` }
                        className="alert"
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                )) }
              </tbody>
            </table>
          ) }

        <section data-testid="order-total-value">
          { `Total: R$ ${cartTotal.replace('.', ',')}` }
        </section>
        <form>
          <fieldset>
            <legend>Endereço de entrega</legend>
            <TextInput
              name="street"
              testId="checkout"
              value={ address.street }
              callback={ updateAddress }
            />
            <TextInput
              name="house-number"
              testId="checkout"
              value={ address.number }
              callback={ updateAddress }
            />
          </fieldset>
        </form>
      </section>
      <CartButton
        cart={ cart }
        id="checkout"
        disabled={ disabled }
        callback={ checkout }
      />
    </section>
  );
}
