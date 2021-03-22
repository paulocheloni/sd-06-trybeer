import React, { useEffect } from 'react';


function TotalCheckout(props) {
  const { total } = props;
  return (
    <div>
      <p>Total: R$ { total.replace('.', ',') }</p>
    </div>
  );
}

export default TotalCheckout;
