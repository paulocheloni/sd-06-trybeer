import React from 'react';

import MenuTop from '../../Components/MenuTop';
import SideBar from '../../Components/SideBar';
import Button from '../../Components/Button';

import S from './styles';

const Checkout = () => (
  <S.Container>
    <MenuTop />

    <SideBar />

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
        disabled
        onClick={ () => {} }
        data-testid="checkout-bottom-btn"
      >
        Finalizar Pedido
      </Button>
    </S.ContainerButton>
  </S.Container>
);

export default Checkout;
