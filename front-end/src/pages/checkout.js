import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../components/menuNavBar';
import { loadState, saveState } from '../services/localStorage';
import CheckoutButtonRemove from '../components/CheckOutButtonRemove';
import context from '../Context/ContextAPI';
import sumTotal from '../resources/sumTotal';
import api from '../services/api';

function Checkout() {
  const {
    cart,
    setCart,
    numberHouse,
    setNumberHouse,
    street,
    setStreet,
    price,
  } = useContext(context);
  const [hidden, setHidden] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [emailState, setEmailState] = useState('');
  const history = useHistory();

  const allValues = cart.map((elem) => parseFloat(elem.totalPrice));
  const totalSum = sumTotal(allValues).toFixed(2);

  const magicNumber = {
    doisMIl: 2000,
  };

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    if (logon.role === 'administrator') return history.push('/admin/orders');
  }, [history]);

  useEffect(() => {
    if (!loadState('user')) return history.push('/login');
    const { email } = loadState('user');
    setEmailState(email);

    const storageCart = loadState(`${email}`);
    if (storageCart) return setCart(storageCart);
    return saveState(`${email}`, []);
  }, [history, setCart]);

  // const validateCheckout = () => (
  //   (street.length > 0 && numberHouse.length > 0)
  //     ? setDisabled(false) : setDisabled(true)
  // );

  const validateCheckout = useCallback(() =>
    (street.length > 0 && numberHouse.length > 0)
      ? setDisabled(false) : setDisabled(true)
  );

  useEffect(() => {
    validateCheckout();
  }, [street, numberHouse, validateCheckout]);

  const finishSale = () => {
    const dataSale = {
      emailState,
      price,
      street,
      numberHouse,
      saleStatus: 'Pendente',
      cart };
    api.createSale(dataSale)
      .then(() => {
        setHidden(false);
        saveState(emailState, []);
        setTimeout(() => {
          history.push('/products');
        }, magicNumber.doisMIl);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavBar content="Finalizar Pedido" />
      <h1>Checkout</h1>
      {(cart.length > 0)
        ? cart.map(
          (product, index) => (
            <div key={ index }>
              <h3 data-testid="0-product-qtd-input">
                {product.quantity}
              </h3>
              <h3 data-testid="0-product-name">
                {product.name}
              </h3>
              <h4 data-testid="0-product-total-value">
                {`R$ ${product.totalPrice.replace('.', ',')}`}
              </h4>
              <h4 data-testid="0-product-unit-price">
                {`(R$ ${product.price.replace('.', ',')} un)`}
              </h4>
              <CheckoutButtonRemove productId={ product.id } productIndex={ index } />
            </div>),
        )
        : 'Não há produtos no carrinho'}
      <h1>Endereco</h1>
      <label htmlFor="endereco" data-testid="checkout-street-input">
        Rua
        <input
          id="endereco"
          type="text"
          placeholder="digite sua Rua"
          onChange={ (e) => setStreet(e.target.value) }
        />
      </label>
      <label htmlFor="numeroCasa" data-testid="checkout-house-number-input">
        Número da casa:
        <input
          id="numeroCasa"
          type="text"
          placeholder="digite o numero da casa"
          onChange={ (e) => setNumberHouse(e.target.value) }
        />
      </label>
      <h1 data-testid="order-total-value">
        TOTAL R$
        {' '}
        {totalSum.replace('.', ',')}
      </h1>
      <button
        type="button"
        disabled={ disabled }
        data-testid="checkout-finish-btn"
        onClick={ finishSale }
      >
        Finalizar Pedido
      </button>
      <p hidden={ hidden }>Compra realizada com sucesso!</p>
    </div>
  );
}

export default Checkout;
