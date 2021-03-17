import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { loadStorage, saveStorage } from '../service/localStorage';

const seila = (element) => {
  const productQuantity = loadStorage('productQuantity', []);
  const objQuantity = productQuantity
    .find((objStoraged) => objStoraged.id === element.id);
  if (objQuantity) return objQuantity.qnt;
  return 0;
};

function ProductsCard({ element, index }) {
  const [qnt, setQnt] = useState(seila(element));

  useEffect(() => {
    const des = loadStorage('productQuantity', [])
      .filter((objStoraged) => objStoraged.id !== element.id);
    saveStorage('productQuantity', [...des, { id: element.id, qnt }]);
  }, [qnt]);

  const { name, url_image, price } = element;

  const clickPlus = () => {
    setQnt(qnt + 1);
  };

  const clickMinus = () => {
    if (qnt > 0) {
      setQnt(qnt - 1);
    }
  };

  return (
    <>
     {/* <img src={ url_image }
      alt="fotoProduto"
      data-testid={ `${index}-product-img` } /> */}
      <p data-testid={ `${index}-product-name` }>{ name }</p>
      <p>{ price }</p>
      <button
        type="button"
        data-testid={ `${index}-product-plus` }
        onClick={ clickPlus }
      >
        +
      </button>
      <p data-testid={ `${index}-product-qtd` }>{ qnt }</p>
      <button
        type="button"
        data-testid={ `${index}-product-minus` }
        onClick={ clickMinus }
      >
        -
      </button>
    </>
  );
}

ProductsCard.propTypes = {
  element: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProductsCard;
