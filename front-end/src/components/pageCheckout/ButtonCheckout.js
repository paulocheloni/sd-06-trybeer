import React, { useContext, useState } from 'react';
import CheckoutContext from '../../context/CheckoutContext';
import { api } from '../../services';

function ButtonCheckout() {
  const { able, history, address, sumTotal, products } = useContext(CheckoutContext);
  const [message, setMessage] = useState(false);

  const generateData = () => {
    const data = new Date().toLocaleDateString('zh-Hans-CN');
    const dataFormart = data.replaceAll('/', '-');
    const hora = new Date().toLocaleTimeString();
    const dateTime = `${dataFormart} ${hora}`;
    return dateTime;
  };

  const params = {
    // userId - LocalStorage || State
    userId: 1,
    total: sumTotal,
    address: address.rua,
    adNumber: address.numero,
    date: generateData(),
    status: 'Pendente',
  };

  const handleClick = async () => {
    const timeout = 2000;
    setTimeout(() => history.push('/products'), timeout);
    setMessage(true);
    const result = await api.registerSales(params);
    console.log(result.response);

    if (result.response.id) {
      products.forEach((element) => {
        const objtProd = {
          idSale: result.response.id,
          idProduct: element.idProduct,
          quantity: element.quantity,
        };
        console.log(objtProd);

        api.regSalesProducts(objtProd);
      });
    }
  };

  return (
    <div>
      <button
        type="submit"
        data-testid="checkout-finish-btn"
        disabled={ able }
        onClick={ handleClick }
      >
        Finalizar Pedido
      </button>
      { message && <span>Compra realizada com sucesso!</span> }
    </div>
  );
}

export default ButtonCheckout;
