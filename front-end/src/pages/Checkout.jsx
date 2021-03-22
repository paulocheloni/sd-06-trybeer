import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CheckoutContext from '../context/CheckoutContext';
import ProductCard from '../components/pageCheckout/ProductCard';
import ButtonCheckout from '../components/pageCheckout/ButtonCheckout';
import FormCheckout from '../components/pageCheckout/FormCheckout';
import { checkoutUtils } from '../utils';

function Checkout() {
  const produtos = [
    {
      idProduct: 5,
      idUser: 1,
      quantity: 11,
      name: 'vinho',
      totalValue: 55.00,
      value: 5,
    },
    {
      idProduct: 4,
      idUser: 1,
      quantity: 11,
      name: 'vinho',
      totalValue: 55.00,
      value: 5,
    },
    {
      idProduct: 3,
      idUser: 1,
      quantity: 11,
      name: 'cachaça',
      totalValue: 55.00,
      value: 5,
    },
    {
      idProduct: 2,
      idUser: 1,
      quantity: 1,
      name: 'Heineken',
      totalValue: 5000,
      value: 4.99,
    },
    {
      idProduct: 1,
      idUser: 1,
      quantity: 1,
      name: 'Bavaria',
      totalValue: 1000,
      value: 4.99,
    },

  ];
  const [address, setEndereco] = useState({ rua: '', numero: '' });
  const [products, setProdutos] = useState(produtos);
  const [able, setAble] = useState(true);
  const [sumTotal, setSumTotal] = useState(0);
  const history = useHistory();

  const handleChange = ({ target }) => {
    setEndereco({ ...address, [target.name]: target.value });
  };

  useEffect(() => {
    checkoutUtils.valueTotal(products, setSumTotal);
  }, [products]);

  useEffect(() => {
    checkoutUtils.disable(setAble, products, address);
  }, [address, products]);

  return (
    <CheckoutContext.Provider
      value={ {
        handleChange,
        address,
        products,
        setProdutos,
        able,
        history,
        sumTotal,
      } }
    >
      <h1 data-testid="top-title">Finalizar Pedido</h1>
      <ProductCard />
      <FormCheckout />
      <ButtonCheckout />
    </CheckoutContext.Provider>
  );
}

export default Checkout;
