import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import {
  Container,
  Content,
  Input,
  Label,
  Button,
} from '../styles/styles';

export default function Checkout() {
  const productsInStorage = JSON.parse(localStorage.products);
  const filteredItens = productsInStorage.filter((product) => product.quantity > 0);

  const totalPrice = JSON.parse(localStorage.totalPrice);

  return (
    <section>
      <Header />
      <Navbar />
      <Container>
        <Content>
          {
            filteredItens.map((product, index) => (
              <ul key={ index }>
                <li>
                  <h4
                    data-testid={ `${index}-product-name` }
                  >
                    { product.name }
                  </h4>
                  <p
                    data-testid={ `${index}-product-qtd-input` }
                  >
                    { product.quantity }
                  </p>
                  <p
                    data-testid={ `${index}-product-unit-price` }
                  >
                    { `(R$ ${product.price.replace('.', ',')} un)` }
                  </p>
                  <p
                    data-testid={ `${index}-product-total-value` }
                  >
                    { `${(product.price * product.quantity)
                      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
                  </p>
                  <button
                    type="button"
                    data-testid={ `${index}-removal-button` }
                  >
                    X
                  </button>
                </li>
              </ul>
            ))
          }
          <h3
            data-testid="order-total-value"
          >
            {/* { `R$ ${(totalPrice).toFixed(2)}` } */}
            { `${totalPrice
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}` }
          </h3>
          <form>
            <Label> Rua </Label>
            <Input data-testid="checkout-street-input" />
            <Label> Número da casa </Label>
            <Input data-testid="checkout-house-number-input" />
            <Button
              data-testid="checkout-finish-btn"
            >
              Finalizar Pedido
            </Button>
          </form>
        </Content>
      </Container>
    </section>
  );
}
