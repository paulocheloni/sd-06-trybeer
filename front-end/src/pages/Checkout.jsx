import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CheckoutContext from '../context/CheckoutContext';
import ProductCard from '../components/pageCheckout/ProductCard';
import ButtonCheckout from '../components/pageCheckout/ButtonCheckout';
import FormCheckout from '../components/pageCheckout/FormCheckout';

function Checkout() {
  const produtos = [
    {
      quantity: 11,
      name: 'cachaça',
      totalValue: 55.00,
      value: 5,
    },
    {
      quantity: 1,
      name: 'Heineken',
      totalValue: 4.99,
      value: 4.99,
    },
  ];
  const [endereco, setEndereco] = useState({ rua: '', numero: '' });
  const [products, setProdutos] = useState(produtos);
  const [able, setAble] = useState(true);
  const [value, setValue] = useState(false);

  const history = useHistory();

  const handleChange = ({ target }) => {
    setEndereco({ ...endereco, [target.name]: target.value });
  };

  const valorTotal = () => {
    const reducer = (acc, curr) => acc + curr;
    const noValue = '0,00';
    if (products.length > 0) {
      const totalValue = products.map((item) => item.totalValue).reduce(reducer);
      return totalValue;
    }
    setValue(true);
    return noValue;
  };
  useEffect(() => {
    const disable = () => {
      if (!value && endereco.rua !== '' && endereco.numero !== '') {
        setAble(false);
      } else {
        return setAble(true);
      }
    };
    disable();
  }, [value, endereco]);

  return (
    <CheckoutContext.Provider
      value={ {
        handleChange,
        endereco,
        products,
        setProdutos,
        valorTotal,
        able,
        history,
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
