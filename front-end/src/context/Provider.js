import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './Context';

function Provider({ children }) {
  const [a, setA] = useState('');

  const contextValues = {
    a,
    setA,
  };

  return (
    <context.Provider value={ contextValues }>
      { children }
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
