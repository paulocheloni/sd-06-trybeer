import React from 'react';
// import { useHistory } from 'react-router-dom';
import TopMenu from '../components/TopMenu';

export default function Products() {
  // const history = useHistory();
  return (
    <div>
      {/* <button
        data-testid="side-menu-item-my-profile"
        type="button"
        onClick={ () => history.push('/profile') }
      >
        Meu Perfil
      </button> */}
      <TopMenu pageTitle="TryBeer" />
    </div>
  );
}
