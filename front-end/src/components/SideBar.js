import React from 'react';
import Button from './Button';
import { useHistory } from 'react-router-dom';

function SideBar () {
  const history = useHistory();

  return (
    <div>
      <Button
        title='Produtos'
        dataTestid="side-menu-item-products"
        handleClick={() => history.push('/products')}
        btnDisable={ false }
      />
      <Button
        title='Meus Pedidos'
        dataTestid="side-menu-item-my-orders"
        handleClick={() => history.push('/orders')}
        btnDisable={ false }
      />
      <Button
        title='Meu Perfil'
        dataTestid="side-menu-item-my-profile"
        handleClick={() => history.push('/profile')}
        btnDisable={ false }
      />
      <Button
        title='Sair'
        dataTestid="side-menu-item-logout"
        handleClick={() => history.push('/login')}
        btnDisable={ false }
      />
    </div>   
  );
}

export default SideBar;
