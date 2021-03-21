import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Menu from '../../Components/Menu';
import * as S from './style';

const Checkout = () => {
  const history = useHistory();
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (!localStorage.token || localStorage.token === '') history.push('/');
    if (!localStorage.basketProducts) {
      localStorage.basketProducts = localStorage.products;
    }
    const products = JSON.parse(localStorage.basketProducts)
      .filter((element) => element.productQuantity > 0);
    setCartProducts(products);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (street.trim().length > 0 && number.trim().length > 0 && cartProducts.length > 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [street, number, cartProducts]);
  useEffect(() => {
    const totalPrices = cartProducts
      .reduce((acc, total) => acc + total.price * total.productQuantity, 0);
    setTotalPrice(totalPrices);
  }, [cartProducts]);
  const handleDelete = ({ target }) => {
    const items = cartProducts.filter((el) => el.id !== parseInt(target.id, 10));
    setCartProducts(items);
    localStorage.basketProducts = JSON.stringify(items);
  };
  const handleFinish = () => {
    const TWO_SECONDS = 2000;
    console.log('foi');
    setMessage('Compra realizada com sucesso!');
    setTimeout(() => history.push('/products'), TWO_SECONDS);
  };
  return (
    <S.Container>
      <Menu><p data-testid="top-title">Finalizar Pedido</p></Menu>
      <S.WrapperContent>
        <S.Products>
          { cartProducts.length <= 0
            ? <S.None>Não há produtos no carrinho</S.None>
            : cartProducts.map((product, index) => (
              <S.Product key={ index } data-testid={ `${index}-product-price` }>
                <p data-testid={ `${index}-product-qtd-input` }>
                  { product.productQuantity }
                </p>
                <p data-testid={ `${index}-product-name` }>{ product.name }</p>
                <span data-testid={ `${index}-product-total-value` }>
                  R$
                  {' '}
                  { (product.price * product.productQuantity)
                    .toFixed(2).replace(/\./g, ',') }
                </span>
                <span data-testid={ `${index}-product-unit-price` }>
                  (R$
                  {' '}
                  { product.price.replace(/\./g, ',') }
                  {' '}
                  un)
                </span>
                <Button
                  id={ product.id }
                  dataTestId={ `${index}-removal-button` }
                  onClick={ handleDelete }
                >
                  X
                </Button>
              </S.Product>
            ))}
          <p>
            Valor total:
            {' '}
            <span data-testid="order-total-value">
              R$
              {' '}
              { totalPrice.toFixed(2).replace(/\./g, ',') }
            </span>
          </p>
        </S.Products>

        <S.WrapperInputs>
          <Input
            dataTestId="checkout-street-input"
            name="Rua"
            type="text"
            onChange={ ({ target }) => setStreet(target.value) }
            value={ street }
          />
          <Input
            dataTestId="checkout-house-number-input"
            name="Número da casa"
            type="text"
            onChange={ ({ target }) => setNumber(target.value) }
            value={ number }
          />
          <Button
            dataTestId="checkout-finish-btn"
            onClick={ handleFinish }
            disabled={ !disabled }
          >
            Finaliza Pedido

          </Button>
          <p>{ message }</p>
        </S.WrapperInputs>
      </S.WrapperContent>
    </S.Container>
  );
};

export default Checkout;
