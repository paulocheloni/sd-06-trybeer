import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import menuClosed from '../../images/menu.svg';
import menuOpened from '../../images/beer.svg';
import * as S from './style';

const Menu = () => {
  const history = useHistory();
  const [menuOn, setMenuOn] = useState(false);
  return (
    <S.Container>
      <S.Image
        src={ menuOn ? menuOpened : menuClosed }
        onClick={ () => setMenuOn(!menuOn) }
        data-testid="top-hamburguer"
      />
      <S.Title data-testid="top-title">TryBeer</S.Title>
      <S.Modal state={ menuOn } className={ menuOn ? 'side-menu-container' : '' }>
        <S.WrapperButtons>
          <Button
            dataTestId="side-menu-item-products"
            onClick={ () => history.push('/products') }
          >
            Produtos

          </Button>
          <Button
            dataTestId="side-menu-item-my-orders"
            onClick={ () => history.push('/orders') }
          >
            Meus pedidos

          </Button>
          <Button
            dataTestId="side-menu-item-my-profile"
            onClick={ () => history.push('/profile') }
          >
            Meu Perfil
          </Button>
        </S.WrapperButtons>
        <Button
          dataTestId="side-menu-item-logout"
          onClick={ () => history.push('/login') }
        >
          Sair

        </Button>
      </S.Modal>
    </S.Container>
  );
};

export default Menu;
