import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../hooks/UseContext';
import parseCurrency from '../utils/parseCurrencyToBRL';

function CartButton() {
  const { totalPrice } = useContext(Context);
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    (Number(totalPrice) > 0) ? setIsDisabled(false) : setIsDisabled(true);
  }, [totalPrice])

  return (
    <button disabled={isDisabled} data-testid="checkout-bottom-btn" type="button" onClick={() => history.push('/checkout')}>
      { `Ver Carrinho    ` }
      <span data-testid="checkout-bottom-btn-value">{ parseCurrency(totalPrice) }</span>
    </button>
  )
}

export default CartButton;