import React from 'react';

function Home({ history }) {
  return (
    <div>
      <button
        type="button"
        data-testid="no-account-btn"
        onClick={ () => history.push('/registernew') }
      >
        Registrar
      </button>
    </div>
  );
}

export default Home;
