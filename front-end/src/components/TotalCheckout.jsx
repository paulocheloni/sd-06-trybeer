import React, { useEffect } from 'react';


function TotalCheckout(props) {
  const { total } = props;
  return (
    <div>
      <p data-testid="order-total-value">Total: R$ { total.replace('.', ',') }</p>
    </div>
  );
}

export default TotalCheckout;
