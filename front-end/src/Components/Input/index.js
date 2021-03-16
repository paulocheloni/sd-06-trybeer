import React from 'react';
import PropTypes from 'prop-types';

import CompInput from './styles';

const Input = ({
  readOnly,
  onChange,
  dataTestid,
  label,
  id,
  value,
  themeStorage,
}) => (
  <CompInput htmlFor={ id } themeStorage={ themeStorage }>
    {label}
    <input
      id={ id }
      value={ value }
      data-testid={ dataTestid }
      onChange={ (e) => onChange(e) }
      readOnly={ readOnly }
    />
  </CompInput>
);

Input.defaultProps = {
  readOnly: false,
  themeStorage: '',
  value: undefined,
  onChange: () => {},
};

Input.propTypes = {
  onChange: PropTypes.func,
  dataTestid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  themeStorage: PropTypes.string,
};

export default Input;
