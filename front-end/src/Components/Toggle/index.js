import React from 'react';
import PropTypes from 'prop-types';

import { Container, ToggleLabel, ToggleSwitch } from './styles';

const Toggle = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => (
  <Container>
    <ToggleLabel>{labelLeft}</ToggleLabel>
    <ToggleSwitch
      checked={ checked }
      uncheckedIcon={ false }
      checkedIcon={ false }
      onChange={ onChange }
    />
    <ToggleLabel>{labelRight}</ToggleLabel>
  </Container>
);

export default Toggle;

Toggle.propTypes = {
  labelLeft: PropTypes.string.isRequired,
  labelRight: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
