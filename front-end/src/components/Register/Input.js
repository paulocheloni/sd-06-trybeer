import React from 'react';
import PropTypes from 'prop-types';

function Input({ title, id, type, callback }) {
  console.log(id, type, callback);
  return (
    <label htmlFor={ id }>
      { title }
      <input
        id={ id }
        type={ type }
        data-testid={ id }
        onChange={ callback }
      />
    </label>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Input;
