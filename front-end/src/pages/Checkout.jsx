import React, { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import ParseCurrency from '../utils/parseCurrencyToBRL';

function Checkout() {
  const [checkoutProducts, setCheckoutProducts] = useState([]);

  const purchase = () => {
    const products = JSON.parse(localStorage.getItem('productList'));
    
    return products.filter((product) => product.productQuantity > 0);
    ;
  };

  useEffect(() => {
    setCheckoutProducts(purchase());
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
            <span data-testid={`${index}-product-total-value`}>{` ${ParseCurrency(price)}`}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Checkout;
