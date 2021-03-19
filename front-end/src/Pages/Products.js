import React, { useContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Context from '../Context/Context';
import MenuTop from '../components/MenuTop';
import ProductCard from '../components/ProductCard';
import sumTotal from '../services/TotalPrice';

export default function Products({ history }) {
  const { totalValue, isFetching, allProducts,
    getAllProducts, tokenInvalid, setTotalValue, totalSum } = useContext(Context);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    getAllProducts();
    if (tokenInvalid) {
      history.push('/');
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setTotalValue(totalSum());
    if (totalValue > 0) return setDisable(false);
    if (totalValue === 0) return setDisable(true);
    // eslint-disable-next-line
  }, [totalValue]);

  return (
    <div>
      <MenuTop title="TryBeer" />
      <div className="d-flex justify-content-sm-around flex-sm-wrap">
        {isFetching
          ? <h2>Loading</h2>
          : allProducts.map((product, index) => (
            <ProductCard
              indexId={ index }
              key={ index }
              price={ product.price }
              name={ product.name }
              img={ product.url_image }
              id={ product.id }
            />
          ))}
      </div>
      <div>
        <button
          onClick={ () => history.push('/checkout') }
          type="button"
          disabled={ disable }
          data-testid="checkout-bottom-btn"
        >
          <p data-testid="checkout-bottom-btn-value">
            {`Ver Carrinho R$ ${totalSum.toFixed(2).replace('.', ',')}`}
          </p>
        </button>
      </div>
    </div>
  );
}

Products.defaultProps = {
  history: '/products',
};

Products.propTypes = {
  history: propTypes.shape(),
};
