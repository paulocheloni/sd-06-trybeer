import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ShowCart() {
  const [total, setTotal] = useState(0);
  const [activeBtn, setActiveBtn] = useState(false);
<<<<<<< HEAD

  return (
    <div>
      <Link to="/orders/:id">
        <button
          disabled={ activeBtn }
          data-testid="checkout-bottom-btn-value"
          type="button"
        >
          Ver carrinho R$
          {total}
        </button>
=======
  
  return (
    <div>
      <Link to='/orders/:id'>
        <button
          disabled={activeBtn}
          data-testid="checkout-bottom-btn-value"
          type="button"
        >Ver carrinho R$ {total}</button>
>>>>>>> b5dc60dffa28154ca2901897bd3f8c70744a8638
      </Link>
    </div>
  );
}

export default ShowCart;
