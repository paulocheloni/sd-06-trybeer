import React, { useContext, useEffect, useState } from 'react';
import TopMenu from '../components/TopMenu';
import productsContext from '../context/productsContext';
import './pagesCSS/Checkout.css';

export default function Products() {
  const { cartProducts, setCartProducts } = useContext(productsContext);
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  // const [totalValue, setTotalValue] = useState('');

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem('cartProducts'));
    if (!cartLS) return;
    setCartProducts(cartLS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // aqui é uma validação tem que mandar la pra pasta validations?
  // const isAnyOrder = () => {
  //   console.log('totalValue length', totalValue.length);
  //   const isTotalValueFilled = street.length > 0;
  //   console.log('totalValue filled', isTotalValueFilled);
  //   return isTotalValueFilled;
  // };

  const streetValidation = () => {
    // console.log('street length', street.length);
    const isStreetFilled = street.length > 0;
    // console.log('filled', isStreetFilled);
    return isStreetFilled;
  };

  const houseNumberValidation = () => {
    // console.log('house', houseNumber.length);
    const ishouseNumberFilled = houseNumber.length > 0;
    // console.log('house filled', ishouseNumberFilled);
    return ishouseNumberFilled;
  };

  const handleTotalPrice = () => {
    let totalPrice = '0,00';
    if (cartProducts.length) {
      totalPrice = cartProducts
        .reduce((accumulator, current) => accumulator + current.subTotal, 0);
      return (totalPrice.toFixed(2)).replace('.', ',');
    }
    return totalPrice;
  };

  const removeProductFromCart = (event) => {
    const productId = event.target.id;

    cartProducts.splice(productId, 1);
    const newCartProduct = cartProducts;
    localStorage.setItem('cartProducts', JSON.stringify(newCartProduct));
    window.location.reload();
  };

  return (
    <div>
      <TopMenu data-testid="top-title" pageTitle="Finalizar Pedido" />
      <div className="cart-products-container">
        { !cartProducts.length
          ? <h1>Não há produtos no carrinho</h1>
          : cartProducts.length && cartProducts.map((product, index) => (
            <div
              className="cart-products"
              key={ product.id }
            >
              <p data-testid={ `${index}-product-qtd-input` }>
                { product.quantityItem }
              </p>
              <h5 data-testid={ `${index}-product-name` }>
                { product.name }
              </h5>
              <span
                data-testid={ `${index}-product-total-value` }
              >
                { `R$ ${String((product.subTotal).toFixed(2)).replace('.', ',')}` }
              </span>
              <span data-testid={ `${index}-product-unit-price` }>
                { `(R$ ${(product.price).replace('.', ',')} un)` }
              </span>
              <button
                data-testid={ `${index}-removal-button` }
                type="submit"
                onClick={ (event) => removeProductFromCart(event) }
                id={ index }
              >
                X
              </button>
            </div>
          )) }
      </div>
      <div>
        <span
          data-testid="order-total-value"
        >
          { `R$ ${handleTotalPrice()}` }
        </span>
      </div>
      <div>
        <h5>Endereço</h5>
        <fieldset>
          <label htmlFor="street-input">
            Rua:
            <input
              id="street-input"
              data-testid="checkout-street-input"
              type="text"
              value={ street }
              onChange={ (e) => setStreet(e.target.value) }
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="house-number-input">
            Número da casa:
            <input
              id="house-number-input"
              data-testid="checkout-house-number-input"
              type="text"
              value={ houseNumber }
              onChange={ (e) => setHouseNumber(e.target.value) }
            />
          </label>
        </fieldset>
      </div>
      <button
        data-testid="checkout-finish-btn"
        type="button"
        disabled={ (!streetValidation() || !houseNumberValidation()) }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
