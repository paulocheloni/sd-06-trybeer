import React from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from './TrybeerContext';

const Provider = ({ children }) => {
  const context = {};

  return (
    <TrybeerContext.Provider value={ context }>
      {children}
    </TrybeerContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Provider;
