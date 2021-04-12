import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ProductsContext from '../context/ProductsContext';
import { registerOrder } from '../api/axiosApi';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import { useHistory } from 'react-router';

import {
  Container,
} from '../styles/styles';

import {
  Button,
  Input,
  Label,
} from '../components';
import {
  Table,
  ButtonExclude,
  Message,
  SpanTotalPrice,
} from '../components/styled-components';

export default function Checkout() {
  const history = useHistory();
  const {
    products,
    setProducts,
    totalPrice,
    setTotalPrice,
  } = useContext(ProductsContext);
  const [cartList, setCartList] = useState([]);
  const [address, setAddress] = useState(
    {
      street: '',
      number: '',
    },
  );
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const localStorageProfile = JSON.parse(localStorage.getItem('user'));
    if (localStorageProfile === null) {
      history.push('./login');
    }
  }, [history]);

  let cartValue = 0;
  const totalPriceLocalStorage = localStorage.totalPrice;
  if (totalPriceLocalStorage) {
    cartValue = JSON.parse(totalPriceLocalStorage);
  }

  useEffect(() => {
    function setInitialState() {
      const productsInStorage = JSON.parse(localStorage.products);
      setProducts(productsInStorage);
      const productSelected = productsInStorage.filter((el) => el.quantity > 0);
      setCartList(productSelected);
    }

    const productsLocalStorage = localStorage.products;
    if (productsLocalStorage) {
      setInitialState();
    }
  }, [setProducts]);

  function excludeItemAndUpdateValue(product) {
    const itemPrice = product.price * product.quantity;
    const newPrice = cartValue - itemPrice;
    localStorage.setItem('totalPrice', newPrice.toFixed(2));
    setTotalPrice(newPrice);
    product.quantity = 0;
    const cartListInState = [...cartList];
    const newCartList = cartListInState.filter((el) => el.quantity > 0);
    const allProducts = [...products];
    localStorage.setItem('products', JSON.stringify(allProducts));
    setCartList(newCartList);
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setAddress({ ...address, [name]: value });
  }

  const { street, number } = address;
  const activeButton = street.length > 0 && number.length > 0 && cartList.length;

  const getDate = new Date();
  const year = getDate.getFullYear();
  const month = getDate.getMonth() + 1;
  const day = getDate.getDate();
  const hour = getDate.getHours();
  const minutes = getDate.getMinutes();
  const seconds = getDate.getSeconds();
  const date = (`${year}-${month}-${day} ${hour}:${minutes}:${seconds}`);

  function clear() {
    localStorage.setItem('products', []);
    localStorage.setItem('cartList', []);
  }

  async function handleCallApi() {
    const userStorage = JSON.parse(localStorage.user);
    const TIMEOUT = 3000;
    const { id } = userStorage;
    const value = totalPrice.toFixed(2);
    const userID = JSON.stringify(id);
    await registerOrder({ value, date, userID, street, number });
    setSuccess(true);

    setTimeout(() => {
      history.push('/products');
      clear();
    }, TIMEOUT);
  }
  return (
    <section>
      <Header />
      <Navbar />
      <Container>
        <Table>
          <tr>
            <th>Quantidade</th>
            <th>Produto</th>
            <th>Valor</th>
            <th>Valor unitário</th>
            <th>Excluir Item</th>
          </tr>
          <tbody>
            {
              cartList.length ? cartList
                .map((product, index) => (
                  <tr key={ index }>
                    <td
                      data-testid={ `${index}-product-qtd-input` }
                    >
                      { product.quantity }
                    </td>
                    <td
                      data-testid={ `${index}-product-name` }
                    >
                      { product.name }
                    </td>
                    <td
                      data-testid={ `${index}-product-total-value` }
                    >
                      { `${(product.price * product.quantity)
                        .toLocaleString(
                          'pt-br', { style: 'currency', currency: 'BRL' },
                        )}`}
                    </td>
                    <td
                      data-testid={ `${index}-product-unit-price` }
                    >
                      { `(R$ ${product.price.replace('.', ',')} un)` }
                    </td>

                    <td>
                      <ButtonExclude
                        type="button"
                        data-testid={ `${index}-removal-button` }
                        onClick={ () => excludeItemAndUpdateValue(product) }
                      >
                        X
                      </ButtonExclude>

                    </td>
                  </tr>
                )) : <Message> Não há produtos no carrinho  </Message>
            }
          </tbody>
        </Table>
        <SpanTotalPrice
          data-testid="order-total-value"
        >
          <span>Valor Total:</span>
          { `${cartValue
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}` }
        </SpanTotalPrice>
        <div>
          <Label text="Rua" />
          <Input
            type="text"
            name="street"
            id="checkout-street-input"
            onChange={ handleChange }
          />
          <Label text="Número da casa" />
          <Input
            type="text"
            name="number"
            id="checkout-house-number-input"
            onChange={ handleChange }
          />
          <Button
            type="button"
            disabled={ !activeButton }
            id="checkout-finish-btn"
            label="Finalizar Pedido"
            onClick={ () => handleCallApi() }
          />
          {
            success && <span>Compra realizada com sucesso!</span>
          }
        </div>

      </Container>
    </section>
  );
}
