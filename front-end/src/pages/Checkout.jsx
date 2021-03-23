import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import CheckoutContext from '../context/CheckoutContext';
import ProductCard from '../components/pageCheckout/ProductCard';
import ButtonCheckout from '../components/pageCheckout/ButtonCheckout';
import FormCheckout from '../components/pageCheckout/FormCheckout';
import { checkoutUtils } from '../utils';

function Checkout() {
  // const produtos = [
  //   {
  //     idProduct: 1,
  //     idUser: localStorage.user.id,
  //     quantity: 1,
  //     name: 'Bavaria',
  //     totalValue: 4.99,
  //     price: 4.99,
  //   },

  // ];
  const productsList = JSON.parse(localStorage.cart);
  const newlist = productsList.map((item) => {
    item.totalValue = (item.quantity * item.price);
    return item;
  });
  const [address, setEndereco] = useState({ rua: '', numero: '' });
  const [products, setProdutos] = useState(newlist);
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
      <div className="main-content">
        <h1 className="title" data-testid="top-title">Finalizar Pedido</h1>
        <div className="form-content">
          <ProductCard />
          <FormCheckout />
          <ButtonCheckout />
        </div>
      </div>
    </CheckoutContext.Provider>
  );
}

export default Checkout;
