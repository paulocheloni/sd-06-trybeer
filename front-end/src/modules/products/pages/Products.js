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
      <div className="grid md:grid-cols-4 gap-8 align-baseline">
        { prod.map((p, index) => (
          <div
            key={ index }
            className="border rounded-md border-primary p-2 flex flex-col items-center"
          >
            <div className="w-50 h-50 border-gray-200 border p-2">
              <img
                data-testid={ `${index}-product-img` }
                src={ p.url_image }
                className="round-md object-contain
                  w-80 h-80 md:w-48 md:h-48 md:object-scale-down"
                alt={ p.name }
              />
            </div>
            <div className="flex flex-col">
              <p data-testid={ `${index}-product-price` }>
                <strong>{`R$ ${p.price}`}</strong>
              </p>
              <p data-testid={ `${index}-product-name` }>
                {p.name}
              </p>
              <Buttons
                index={ index }
                prod={ { price: p.price, img: p.url_image, name: p.name, id: p.id } }
              />
            </div>
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
