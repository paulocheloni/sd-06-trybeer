import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router';
import MenuTop from '../components/MenuTop';
import api from '../services/api';

export default function Checkout() {
  const [productIsInCart, setProductIsInCart] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [succesMessage, setSuccesMessage] = useState(false);
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');

  const products = JSON.parse(localStorage.getItem('productsCart'));

  const history = useHistory();

  useEffect(() => {
    if(products && products.length === 0) setProductIsInCart(true);
    if(products && products.reduce(sumOfCart, 0) === 0 || rua.length === 0 || numero.length === 0) setButtonDisabled(true)
    else setButtonDisabled(false);
  }, [products, rua, numero]);

  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return <Redirect to="login" />;

  const changeRua = (e) => {
    const { value } = e.target;
    setRua(value);
  }

  const changeNumero = (e) => {
    const { value } = e.target;
    setNumero(value);
  }

  const sumOfCart = (sum, product) => {
    return sum + product.qty * product.price;
  };

  function removeProduct(product) {
    const newProducts = products.filter((item) => item.id !== product.id);
    localStorage.setItem('productsCart', JSON.stringify(newProducts));
    document.location.reload();
  };

  const finalizar = async () => {
    setSuccesMessage(true);
    localStorage.setItem('productsCart', JSON.stringify([]));
    const total = products.reduce(sumOfCart, 0);
    setTimeout(() => history.push('/products'), 2500);
    const now = new Date();
    const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const saleId = await api.fetchAddSale(user.id, total, rua, numero, date, 'Pendente');
  }

  return (
    <div>
      <MenuTop title="Finalizar Pedido" />
      <h2>Produtos</h2>
      {products.map((item, index) => (
        <div key={item.id}>
          <span data-testid={`${index}-product-qtd-input`}>{item.qty}</span>
          <span data-testid={`${index}-product-name`}>{item.name}</span>
          <span
            data-testid={`${index}-product-total-value`}
          >
            {(item.qty * item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          <span data-testid={`${index}-product-unit-price`}>
            ({Number(item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} un)
          </span>
          <span data-testid={`${index}-removal-button`}>
            <button type="button" onClick={() => removeProduct(item)}>X</button>
          </span>
        </div>
      ))}
      { productIsInCart && <p>Não há produtos no carrinho</p> }
      <p data-testid="order-total-value">
        {products.reduce(sumOfCart, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </p>
      <h3>Endereço</h3>
      <label htmlFor="rua">
        Rua:
        <input type="text" id="rua" data-testid="checkout-street-input" onChange={(e) => changeRua(e)} />
      </label>
      <label htmlFor="casa">
        Número da casa:
        <input type="text" id="casa" data-testid="checkout-house-number-input" onChange={(e) => changeNumero(e)} />
      </label>
      <button data-testid="checkout-finish-btn" type="text" disabled={buttonDisabled} onClick={finalizar}>Finalizar Pedido</button>
      {succesMessage && <p>Compra realizada com sucesso!</p>}
    </div>
  );
}
