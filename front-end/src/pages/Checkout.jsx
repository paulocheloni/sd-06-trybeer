import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import TopBar from '../components/TopBar';
import ParseCurrency from '../utils/parseCurrencyToBRL';

function Checkout() {
  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [street, setStreet] = useState({
    streetInput: '',
    houseNumberInput: '',
  });
  const totalPrice = JSON.parse(localStorage.getItem('total'));
  const history = useHistory();
  const user = localStorage.getItem('user');

  const purchase = () => {
    const products = JSON.parse(localStorage.getItem('productList'));

    return products.filter((product) => product.productQuantity > 0);
  };

  const deleteProduct = (name, productQuantity, price) => {
    const productDelete = checkoutProducts.filter((product) => {
      if (product.name === name) {
        return false;
      }
      return true;
    });
    setCheckoutProducts(productDelete);
    const totalValueProduct = (totalPrice - (productQuantity * price)).toFixed(2);
    localStorage.setItem('total', JSON.stringify(totalValueProduct));

    localStorage.setItem('productList', JSON.stringify(productDelete));
  };

  const handleSubmit = async () => {
    const visibleInterval = 2000;
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
      history.push('/products');
    }, visibleInterval);
  };

  useEffect(() => {
    setCheckoutProducts(purchase());
  }, []);

  // useEffect(() => {

  // }, [street])

  if (!user) return <Redirect to="/login" />;

  return !checkoutProducts ? <h1>Loading...</h1> : (
    <div>
      <TopBar name="Finalizar Pedido" />
      <h1>Produtos</h1>
      <ul>
        {(checkoutProducts.length > 0)
          ? checkoutProducts.map(({ productQuantity, price, name }, index) => (
            <li key={ index }>
              <span
                data-testid={ `${index}-product-qtd-input` }
              >
                {productQuantity}
              </span>
              <span
                data-testid={ `${index}-product-name` }
              >
                {` - ${name}`}
              </span>
              <span
                data-testid={ `${index}-product-total-value` }
              >
                {`  ${ParseCurrency((price * productQuantity).toFixed(2))}`}
              </span>
              <span
                data-testid={ `${index}-product-unit-price` }
              >
                {`(${ParseCurrency(price)} un)`}
              </span>
              <button
                type="button"
                data-testid={ `${index}-removal-button` }
                onClick={ () => deleteProduct(name, productQuantity, price) }
              >
                {' '}
                X
              </button>
            </li>
          ))
          : <spam> Não há produtos no carrinho </spam>}
      </ul>
      <h1 data-testid="order-total-value">{`Total: ${ParseCurrency(totalPrice)} ` }</h1>

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
      >
        {' '}
        Finalizar Pedido
      </button>
      <div hidden={ isVisible }>Compra realizada com sucesso!</div>
    </div>
  );
}

export default Checkout;
