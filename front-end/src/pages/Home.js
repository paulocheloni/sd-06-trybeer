import PropTypes from 'prop-types';
import React from 'react';

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
  history: PropTypes.objectOf(Object).isRequired,
};

export default Home;
