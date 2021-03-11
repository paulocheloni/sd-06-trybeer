import React from 'react';

function Login() {
  return (
    <main>
      <forms>
        <label htmlFor="email" className="email-label">
          email
          <input 
          type="email"
           name="email" data-testid="email-input" className="email-input"/>
        </label>
        <label htmlFor="password" className="password">password</label>
          <input type="password" name="password" data-testid="password-input" className="password-input"/>
      </forms>
    </main>
  )
}

export default Login
