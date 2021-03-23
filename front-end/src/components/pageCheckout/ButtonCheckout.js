import React, { useContext, useState } from 'react';
import CheckoutContext from '../../context/CheckoutContext';

function ButtonCheckout() {
  const { able, history } = useContext(CheckoutContext);
  const [message, setMessage] = useState(false);

  const handleClick = () => {
    const timeout = 2000;
    setTimeout(() => history.push('/products'), timeout);
    setMessage(true);
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
