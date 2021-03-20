import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ShowCart() {
  const [total, setTotal] = useState(0);
  const [activeBtn, setActiveBtn] = useState(false);

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
      </Link>
    </div>
  );
}

export default ShowCart;
