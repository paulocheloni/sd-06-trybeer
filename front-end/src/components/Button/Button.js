import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders default button
 * @param {string} title Text inside button
 * @param {boolean} isDisabled Set button as enabled (true) or disabled (false)
 * @param {string} testId Data test id
 */
const Button = ({ title, isDisabled, testId, onClick, userRole }) => {
  return (
      <button type="button" disabled={isDisabled} data-testid={testId} onClick={() => onClick(userRole)}>
        {title}
      </button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  testId: PropTypes.string.isRequired
}

Button.defaultProps = {
  isDisabled: false,
  onClick: () => {},
  userRole: '',
}

export default Button