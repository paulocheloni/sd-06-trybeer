import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import * as S from './style';

const MenuAdmin = () => {
  const history = useHistory();

  const handleRoute = (path) => {
    history.push(path);
  };
  return (
    <S.Container>
      <S.WrapperButtons>
        <S.Title data-testid="top-title">TryBeer</S.Title>
        <Button
          dataTestId="side-menu-item-orders"
          onClick={ () => handleRoute('/admin/orders') }
        >
          Pedidos

        </Button>
        <Button
          dataTestId="side-menu-item-profile"
          onClick={ () => handleRoute('/admin/profile') }
        >
          Perfil

        </Button>
      </S.WrapperButtons>
      <Button
        dataTestId="side-menu-item-logout"
        onClick={ () => handleRoute('/') }
      >
        Sair

      </Button>
    </S.Container>
  );
};

export default MenuAdmin;
