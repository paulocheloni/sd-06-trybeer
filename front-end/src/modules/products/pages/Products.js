import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageMenu from '../../../design-system/page-menu/PageMenu';
import Buttons from '../components/Buttons';
import api from '../../../axios';
import PaperContainer from '../../../design-system/containers/PaperContainer';
import BodyContainer from '../../../design-system/containers/BodyContainer';

const Products = () => {
  const history = useHistory();
  const storage = JSON.parse(localStorage.getItem('user'));
  const existToken = storage ? storage.token : false;

  const timeout = 2000;

  setTimeout(() => {
    if (!existToken) history.push('/login');
  }, timeout);

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
    <BodyContainer>
      <PaperContainer>
        <PageMenu pageName="Pedidos" />
        {rendering ? getProducts() : <span>Waiting data</span>}
      </PaperContainer>
    </BodyContainer>
  );
};

export default Products;
