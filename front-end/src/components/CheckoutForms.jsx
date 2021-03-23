import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../hooks/UseContext';
import {createOrder} from '../services/orders';

function CheckoutForms() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [street, setStreet] = useState({
    streetInput: '',
    houseNumberInput: '',
  });
  const { totalPrice, checkoutProducts } = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async () => {
    const visibleInterval = 2000;

    createOrder(totalPrice, street, checkoutProducts);

    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
      history.push('/products');
    }, visibleInterval);
  };

  useEffect(() => {
    if (Number(totalPrice) > 0
      && street.houseNumberInput !== ''
      && street.streetInput !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [street, totalPrice]);

  return (
    <div>
      <h1>Endereço</h1>
      <label htmlFor="streetInput">
        Rua:
        <input
          id="streetInput"
          type="text"
          data-testid="checkout-street-input"
          onChange={ ({ target }) => setStreet({ ...street, [target.id]: target.value }) }
        />
      </label>
      <label htmlFor="houseNumberInput">
        Número da casa:
        <input
          id="houseNumberInput"
          type="text"
          data-testid="checkout-house-number-input"
          onChange={ ({ target }) => setStreet({ ...street, [target.id]: target.value }) }
        />
      </label>
      <button
        type="submit"
        data-testid="checkout-finish-btn"
        onClick={ handleSubmit }
        disabled={ isDisabled }
      >
        {' '}
        Finalizar Pedido
      </button>
      <div hidden={ isVisible }>Compra realizada com sucesso!</div>
    </div>
  );
}

export default CheckoutForms;
