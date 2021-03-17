import React, { useContext } from 'react';

import MenuTop from '../../Components/MenuTop';
import SideBar from '../../Components/SideBar';
import Button from '../../Components/Button';

import S from './styles';
import Input from '../../Components/Input';

import { GlobalContext } from '../../Contexts/GlobalContext';

// const renderCheckoutProducts = () => {
  
// }

const Checkout = () => {
  const theme = JSON.parse(localStorage.getItem('@trybeer:theme'));

  const { cartList, setCartList } = useContext(GlobalContext);

  console.log(cartList, 'veio o cartList');

  return(
    <S.Container>
    <MenuTop />

    <SideBar />
    <S.ContainerProducts>
      <h1>Produtos</h1>
      <span data-testid="order-total-value">
        Total:
      </span>
    </S.ContainerProducts>
    <S.ContainerAddress>
      <h1>Endereço</h1>
      <Input
        label="Rua"
        dataTestid="checkout-street-input"
        id="Rua"
        themeStorage={ theme && theme.title }
        // icon={ BiUser }
      />
      <Input
        label="Número da casa"
        dataTestid="checkout-house-number-input"
        id="Número da casa"
        themeStorage={ theme && theme.title }
        // icon={ BiUser }
      />
    </S.ContainerAddress>
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
  )
};

export default Checkout;
