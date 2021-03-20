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
      idUser: 3,
      quantity: 11,
      name: 'vinho',
      totalValue: 55.00,
      value: 5,
    },
    {
      idUser: 3,
      quantity: 11,
      name: 'cachaça',
      totalValue: 55.00,
      value: 5,
    },
    {
      idUser: 3,
      quantity: 1,
      name: 'Heineken',
      totalValue: 4.99,
      value: 4.99,
    },
    {
      idUser: 3,
      quantity: 1,
      name: 'Heineken',
      totalValue: 4.99,
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
    const valueTotal = () => {
      const reducer = (acc, curr) => acc + curr;
      const noValue = '0,00';
      if (products.length > 0) {
        const totalValue = products.map((item) => item.totalValue).reduce(reducer);
        setSumTotal(totalValue.toFixed(2));
        return totalValue;
      }
      setSumTotal(noValue);
      return noValue;
    };
    valueTotal();
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
