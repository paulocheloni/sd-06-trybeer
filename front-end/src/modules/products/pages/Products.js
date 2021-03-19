import React, { useEffect, useState, useContext } from 'react';
import Buttons from '../components/Buttons';
import GlobalContext from '../../../context/Context';
import api from '../../../axios';
import PaperContainer from '../../../design-system/containers/PaperContainer';

function Products() {
  const [prod, setProd] = useState('');
  const [rendering, setRendering] = useState(false);
  const { cartItems } = useContext(GlobalContext);

  const totalPrice = cartItems.reduce((acc, curr) => {
    const result = (acc + curr.quantity * curr.price);
    return result;
  }, 0);

  useEffect(() => {
    api.get('/products').then((resp) => setProd(resp.data));
  }, []);

  useEffect(() => {
    if (Array.isArray(prod)) {
      setRendering(true);
    }
  }, [prod]);

  const renderProducts = () => {
    const eachProduct = (
      <div>
        { prod.map((p, index) => (
          <div key={ index }>
            <p data-testid={ `${index}-product-price` }>
              <strong>{`R$ ${p.price}`}</strong>
            </p>

            <img
              data-testid={ `${index}-product-img` }
              src={ p.url_image }
              width="100px"
              alt={ p.name }
            />

            <p data-testid={ `${index}-product-name` }>
              {p.name}
            </p>

            <Buttons
              index={ index }
              prod={ { price: p.price, img: p.url_image, name: p.name, id: p.id } }
            />
          </div>
        ))}

        <button data-testid="checkout-bottom-btn" type="button" name="shop">
          Ver carrinho
        </button>

        <p data-testid="checkout-bottom-btn-value">{totalPrice.toFixed(2)}</p>
      </div>
    );

    return eachProduct;
  };

  return (
    <PaperContainer>
      {rendering ? renderProducts() : <span>Waiting data</span>}
    </PaperContainer>
  );
}

export default Products;
