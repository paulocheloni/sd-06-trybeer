import React, { useEffect, useState } from 'react';
import Buttons from '../components/Buttons';
import api from '../../../axios';
import PaperContainer from '../../../design-system/containers/PaperContainer';

const Products = () => {
  const [prod, setProd] = useState('');
  const [rendering, setRendering] = useState(false);

  useEffect(() => {
    api.get('/products').then((resp) => setProd(resp.data));
  }, []);

  useEffect(() => {
    if (Array.isArray(prod)) {
      setRendering(true);
    }
  }, [prod]);

  function getProducts() {
    return prod.map((product, index) => (
      <div key={ index }>
        <p><strong>{`R$ ${product.price}`}</strong></p>
        <img src={ product.url_image } width="100px" alt={ product.name } />
        <p>{product.name}</p>
        <Buttons />
      </div>
    ));
  }

  return (
    <PaperContainer>
      {rendering ? getProducts() : <span>Waiting data</span>}
    </PaperContainer>
  );
};

export default Products;
