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
        <Button bgColor="black" testId="side-menu-item-products">
          Produtos
        </Button>
      </Link>
      <Link to="/orders">
        <Button bgColor="black" testId="side-menu-item-my-orders">
          Meus pedidos
        </Button>
      </Link>
      <Link to="/profile">
        <Button bgColor="black" testId="side-menu-item-my-profile">
          Meu Perfil
        </Button>
      </Link>
      <div className="bottom-12">
        <Button
          onClick={ () => onClick() }
          bgColor="bg-white"
          testId="side-menu-item-logout"
        >
          Sair
        </Button>
      </div>
    </div>
  );
}
export default SideBarMenu;
