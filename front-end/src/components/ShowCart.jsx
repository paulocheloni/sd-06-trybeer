import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getProducts } from '../api/index';
// import { getItensStorage, calculateTotal } from '../services/index';

export default function ShowCart(props) {
  const { total } = props;
  // const [products, setProducts] = useState(false);

  // useEffect(() => {
  //   getProducts(setProducts);
  // }, []);

  return (
    <div>
      <Link to="/orders/:id">
        <button
          data-testid="checkout-bottom-btn-value"
          type="button"
        >
          Ver carrinho R$
          { total }
        </button>
      </Link>
    </div>
  );
}

ShowCart.propTypes = {
  total: PropTypes.number.isRequired,
};

// export default ShowCart;
