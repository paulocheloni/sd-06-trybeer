import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, onChange, name, value }) => (
  <div>
    <p>{ name }</p>
    <input
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
};

Input.defaultProps = {
  type: 'email',
  onChange: ({ target }) => console.log(target.value),
  name: 'E-mail',
  value: '',
};

export default Input;
