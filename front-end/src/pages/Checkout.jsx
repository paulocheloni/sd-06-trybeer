import React, { useEffect, useState, useContext } from 'react';
import TopBar from '../components/TopBar';
import { useHistory } from 'react-router-dom';
import ParseCurrency from '../utils/parseCurrencyToBRL';

function Checkout() {
  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const totalPrice = JSON.parse(localStorage.getItem('total'));
  const history = useHistory();

  const purchase = () => {
    const products = JSON.parse(localStorage.getItem('productList'));
    
    return products.filter((product) => product.productQuantity > 0);
    ;
  };

  useEffect(() => {
    setCheckoutProducts(purchase());
  }, []);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) history.push('/login');

  }, []);


  return !checkoutProducts ? <h1>Loading...</h1> : (
    <div>
      <TopBar name="Finalizar Pedido" />
      <h1>Produtos</h1>
      <ul>
        {checkoutProducts.map(({ productQuantity, price, name }, index) => (
          <li key={index}>
            <span data-testid={`${index}-product-qtd-input`}>{productQuantity}</span>
            <span data-testid={`${index}-product-name`}>{` - ${name}`}</span>
            <span data-testid={`${index}-product-total-value`}>{` R$ ${((price * productQuantity).toFixed(2))}`}</span>
            <span data-testid={`${index}-product-unit-price`}>{` ${ParseCurrency(price)}`}</span>
            <button type="button" data-testid={`${index}removal-button`}> X </button>
          </li>
        ))}
      </ul>
      <h1 data-testid="order-total-value" >{`Total: ${ParseCurrency(totalPrice)} ` }</h1>

      <h1>Endereço</h1>
      <label htmlFor="streetInput">
        Rua:
        <input
          id="streetInput"
          type="text"
          data-testid="checkout-street-input"
        />
      </label>
      <label htmlFor="houseNumberInput">
        Número da casa:
        <input
          id="houseNumberInput"
          type="text"
          data-testid="checkout-house-number-input"
        />
      </label>
      <button type="submit" data-testid="checkout-finish-btn"> Finalizar Pedido </button>
    </div>
  );
}

export default Checkout;
