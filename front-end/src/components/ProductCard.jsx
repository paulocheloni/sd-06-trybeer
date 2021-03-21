import React from 'react';

function ProductCard() {
/* - A quantidade do produto deverá conter a tag `data-testid="0-product-qtd"`

- O nome do produto deverá conter a tag `data-testid="0-product-name"`

- O valor total do produto deverá conter a tag `data-testid="0-product-total-value"` */
  return (
    <>
      <p data-testid={ `${productid}-product-qtd` }>
        {productqtd}
        {' '}
      </p>
      <p data-testid={ `${productid}-product-name` }>
        {productname}
        {' '}
      </p>
      <p data-testid={ `${productid}-product-total-value` }>
        {productqtd * productprice}
      </p>
    </>
  );
}

export default ProductCard;
