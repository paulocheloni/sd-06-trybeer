import React from 'react'

/**
 * Renders default input
 * @param {string} title 
 * @param {string} type
 * @param {string} testId 
 * @see www.gmail.com
 */
const Input = ({ title, type, testId, onChange, value, placeholder }) => {
  return (
      <label htmlFor=''>
        {title}
        <input type={type} data-testid={testId} onChange={(e) => onChange(title, e.target.value)} value={value} placeholder={placeholder} />
      </label>
  )
}

export default Input
