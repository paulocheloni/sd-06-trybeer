import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './styled-components';

const Link = ({ id, label, to, onClick }) => (
  <StyledLink
    data-testid={ id }
    label={ label }
    to={ to }
    onClick={ onClick }
  >
    { label }
  </StyledLink>
);

const { string, func } = PropTypes;

Link.propTypes = {
  id: string.isRequired,
  to: string.isRequired,
  onClick: func.isRequired,
  label: string.isRequired,
};

export default Link;
