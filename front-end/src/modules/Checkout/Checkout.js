import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../axios/api';
import ContextBeer from '../../context/ContextBeer';
import TopBar from '../../design-components/TopBar';
import ProductsList from './components/ProductsList';
import LabeledInput from '../../design-components/LabeledInput';
import Button from '../../design-components/Button';

function Checkout() {
  const {
    sale,
    setSale,
  } = useContext(ContextBeer);

  const history = useHistory();

  const { products, total } = sale;

  const successTimer = 2300;

  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [buttonDisable, setButtonDisable] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (sale.products.length === 0
      || deliveryAddress === ''
      || deliveryNumber === '') setButtonDisable(true);
    else setButtonDisable(false);
  }, [sale, deliveryAddress, deliveryNumber]);

  const handleSubmit = () => {
    const bodyObj = {
      products: products
        .map((product) => ({ id: product.id, quantity: product.quantity })),
      total: parseFloat(total),
      deliveryAddress,
      deliveryNumber,
    };

    console.log('in handle submit: ', bodyObj);

    api
      .post('/sales', bodyObj)
      .then(() => setSale({
        products: [],
        total: '0.00',
      }))
      .then(() => setTimeout(() => setSuccess(true), successTimer))
      .then(() => history.push('/products'))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <TopBar title="Finalizar Pedido" />
      <div className="flex flex-col mt-12 mx-auto space-y-12 max-w-6xl items-center">
        <ProductsList sale={ sale } />
        <div className="w-full space-y-12">
          <LabeledInput
            value={ deliveryAddress }
            type="text"
            onChange={ setDeliveryAddress }
            label="Rua"
            testId="checkout-street-input"
          />
          <LabeledInput
            value={ deliveryNumber }
            type="text"
            onChange={ setDeliveryNumber }
            label="Número da casa"
            testId="checkout-house-number-input"
          />
        </div>
        <div
          className={ `absolute inset-auto flex items-center justify-center w-64 h-32
          text-xl font-bold bg-green-300 text-green-600 rounded-lg
          ${success ? '' : 'hidden'}` }
        >
          Compra realizada com sucesso!
        </div>
        <Button
          isDisabled={ buttonDisable }
          bgColor="green-600"
          onClick={ () => handleSubmit() }
          testId="checkout-finish-btn"
        >
          Finalizar Pedido
        </Button>
      </div>
    </div>
  );
}

export default Checkout;
