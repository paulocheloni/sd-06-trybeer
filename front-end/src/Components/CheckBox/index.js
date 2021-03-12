import React from 'react';

import CompCheckBox from './styles';

const CheckBox = ({
  id,
  type,
  width,
  height,
  checked,
  onChange,
  dataTestid,
}) => (
  <CompCheckBox
    id={ id }
    checked={ checked }
    type={ type }
    width={ width }
    height={ height }
    onChange={ (e) => onChange(e) }
    data-testid={ dataTestid }
  />
);

export default CheckBox;
