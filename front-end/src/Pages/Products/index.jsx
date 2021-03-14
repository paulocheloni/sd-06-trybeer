import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { findAllProducts } from '../../Services/Apis';
import { GlobalContext } from '../../Contexts/GlobalContext';

import MenuTop from '../../Components/MenuTop';
import SideBar from '../../Components/SideBar';
import CardProducts from '../../Components/CardProducts';
import Button from '../../Components/Button';

import S from './styles';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const { stateSumPrice } = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    if (stateSumPrice !== 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [stateSumPrice]);

  useEffect(() => {
    findAllProducts()
      .then((res) => setProducts(res));
  }, []);

  return (
    <S.Container>
      <MenuTop />

      <SideBar />

      <section>
        {products && (
          products.map((product) => (
            <CardProducts
              key={ product.id }
              product={ product }
            />
          ))
        )}
      </section>

      <S.ContainerButton>
        <Button
          type="button"
          color="green"
          dataTestid=""
          fontSize="20px"
          width="91%"
          heigth="40px"
          botton="0"
          position="fixed"
          disabled={ isDisabled }
          onClick={ () => history.push('/checkout') }
          data-testid="checkout-bottom-btn"
        >
          Ver carrinho -
          {' '}
          <span data-testid="checkout-bottom-btn-value">
            {`R$ ${stateSumPrice.toFixed(2)}`}
          </span>
        </Button>
      </S.ContainerButton>
    </S.Container>
  );
};

export default Products;
