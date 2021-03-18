import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Buttons from '../components/Buttons';
import GlobalContext from '../../../context/Context';
import api from '../../../axios';
import PaperContainer from '../../../design-system/containers/PaperContainer';


const Products = () => {
  const storage = JSON.parse(localStorage.getItem('user'));
  const existToken = storage ? storage.token : false;
  const [prod, setProd] = useState('');
  const [newProd, setNewProd] = useState();
  const [rendering, setRendering] = useState(false);
  const { totalPrice, setTotalPrice } = useContext(GlobalContext)
  useEffect(() => {
    api.get('/products').then((resp) => setProd(resp.data));
  }, []);

  const createArray = () => {
    const newArrayProd = [...prod];
    setNewProd(newArrayProd);
  }

  useEffect(() => {
    if (Array.isArray(prod)) {
      setRendering(true);
      createArray();
    }
  }, [prod]);

  useEffect(() => {
    console.log('newprod',newProd)
  }, [newProd])

  function getProducts() {
    return (
      <>
        { prod.map((product, index) => (
          <div key={ index }>
            <p data-testid={`${ index }-product-price`}><strong>{`R$ ${product.price}`}</strong></p>
            <img data-testid={`${ index }-product-img`}src={ product.url_image } width="100px" alt={ product.name } />
            <p data-testid={`${ index }-product-name`}>{product.name}</p>
            <Buttons
              index={ index }
              prod={ { price: product.price, img: product.url_image, name: product.name } }
              allProd={prod}
            />
          </div>
        ))}
        <button data-testid="checkout-bottom-btn" type="button" name="shop">Ver carrinho</button>
        <p data-testid="checkout-bottom-btn-value">{totalPrice}</p>
      </>
    )
  }

  return (
    <PaperContainer>
      { !existToken && <Redirect to="/login" /> }
      {rendering ? getProducts() : <span>Waiting data</span>}
    </PaperContainer>
  );
};

export default Products;
