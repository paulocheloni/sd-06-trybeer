import React from 'react';
import { useHistory } from 'react-router-dom';

const clientOptions = [
  {
    name: 'Produtos',
    redirect: '/products'
  },
  {
    name: 'Meus Pedidos',
    redirect: '/orders'
  },
  {
    name: 'Perfil',
    redirect: '/profile'
  },
  {
    name: 'Sair',
    redirect: '/login'
  }
];

const adminOptions = [
  {
    name: 'Pedidos',
    redirect: '/admin/orders'
  },
  {
    name: 'Perfil',
    redirect: '/admin/profile'
  },
  {
    name: 'Sair',
    redirect: '/login'
  }
]

export default function Sidebar({ user }) {
  const history = useHistory();
  const options = user === 'client' ? [...clientOptions] : [...adminOptions]
  return (
    <aside>
      <ul>
        {options.map((option) => (
          <li key={option.name}>
            <button type="button" onClick={ () => history.push(`${ option.redirect }`)}>
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
