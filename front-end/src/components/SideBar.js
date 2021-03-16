import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';

function SideBar() {
  const history = useHistory();

  const handleClickSair = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <div className="side-menu-container">
      <Button
        title="Produtos"
        dataTestid="side-menu-item-products"
        handleClick={ () => history.push('/products') }
        btnDisable={ false }
      />
      <Button
        title="Meus Pedidos"
        dataTestid="side-menu-item-my-orders"
        handleClick={ () => history.push('/orders') }
        btnDisable={ false }
      />
      <Button
        title="Meu Perfil"
        dataTestid="side-menu-item-my-profile"
        handleClick={ () => history.push('/profile') }
        btnDisable={ false }
      />
      <Button
        title="Sair"
        dataTestid="side-menu-item-logout"
        handleClick={ handleClickSair }
        btnDisable={ false }
      />
    </div>
  );
}

export default SideBar;
