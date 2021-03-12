import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, onChange, name, value, dataTestId }) => (
  <div>
    <p>{ name }</p>
    <input
      data-testid={ dataTestId }
      value={ value }
      onChange={ onChange }
      name={ name }
      type={ type }
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  dataTestId: PropTypes.string,
};

Input.defaultProps = {
  type: 'email',
  onChange: ({ target }) => console.log(target.value),
  name: 'Email',
  value: '',
  dataTestId: '',
};

export default Input;
