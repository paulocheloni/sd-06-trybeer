import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const [title, setTitle] = useState('');
  const location = useLocation();

  const chooseTitle = () => {
    const { pathname } = location;

    switch (pathname) {
    case '/profile':
      setTitle('Meu perfil');
      break;
    case '/products':
      setTitle('TryBeer');
      break;
    default:
      setTitle('Erro');
      break;
    }
  };

  useEffect(() => {
    chooseTitle();
  });

  return (
    <div>
      <h1 data-testid="top-title">
        { title }
      </h1>
    </div>
  );
}

export default Header;
