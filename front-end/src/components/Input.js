import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledLabel } from './styled-components';

const Input = ({ type, id, name, label, onChange }) => (

  <StyledLabel>
    { label }
    <StyledInput
      label={ label }
      type={ type }
      data-testid={ id }
      name={ name }
      onChange={ onChange }
    />
  </StyledLabel>

);

const { string, func } = PropTypes;

Input.propTypes = {
  type: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  onChange: func.isRequired,
};

export default Input;
