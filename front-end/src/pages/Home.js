import React from 'react';
import PropTypes from 'prop-types';

function Home({ history }) {
  return (
    <div>
      <button
        type="button"
        data-testid="no-account-btn"
        onClick={ () => history.push('/register') }
      >
        Registrar
      </button>
    </div>
  );
}

Home.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Home;
