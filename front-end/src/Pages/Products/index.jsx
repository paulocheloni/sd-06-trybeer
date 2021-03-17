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

  const { stateSumPrice, stateSideBar } = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    if (stateSumPrice !== 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [stateSumPrice]);

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem('user'));

    if (!userToken) history.push('/login');

    findAllProducts()
      .then((res) => setProducts(res));
  }, [history]);

  return (
    <S.Container>
      {console.log(products)}
      <MenuTop />

      <SideBar />

      <S.ContainerCards stateSideBar={ stateSideBar }>
        {products && (
          products.map((product) => (
            <CardProducts
              key={ product.id }
              product={ product }
            />
          ))
        )}
      </S.ContainerCards>

      <S.ContainerButton>
        <Button
          type="button"
          color="green"
          fontSize="20px"
          width="91%"
          heigth="40px"
          botton="0"
          position="fixed"
          disabled={ isDisabled }
          onClick={ () => history.push('/checkout') }
          dataTestid="checkout-bottom-btn"
        >
          Ver Carrinho -
          {' '}
          <span data-testid="checkout-bottom-btn-value">
            {localStorage.getItem('total') !== null
              ? `R$ ${(Number(localStorage.getItem('total'))
                .toFixed(2)).replace('.', ',')}`
              : `R$ ${(stateSumPrice.toFixed(2)).replace('.', ',')}`}
          </span>
        </Button>
      </S.ContainerButton>
    </S.Container>
  );
};

export default Products;
