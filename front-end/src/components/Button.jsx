import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, onClick, children }) {
  return (
    <button
      type="button"
      className={ className }
      onClick={ onClick }
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
