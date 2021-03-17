import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from './Button';

function SideBarMenu() {
  const history = useHistory();
  const onClick = () => {
    localStorage.removeItem('user');
    history.push('/');
  };

  return (
    <div className="relative side-menu-container flex flex-col space-y-16 items-center">
      <Link to="/products">
        <Button bgColor="indigo-400" testId="side-menu-item-products">
          Produtos
        </Button>
      </Link>
      <Link to="/orders">
        <Button bgColor="indigo-400" testId="side-menu-item-my-orders">
          Meus pedidos
        </Button>
      </Link>
      <Link to="/profile">
        <Button bgColor="indigo-400" testId="side-menu-item-my-profile">
          Meu Perfil
        </Button>
      </Link>
      <div className="absolute bottom-12">
        <Button
          onClick={ () => onClick() }
          bgColor="indigo-400"
          testId="side-menu-item-logout"
        >
          Sair
        </Button>
      </div>
    </div>
  );
}
export default SideBarMenu;
