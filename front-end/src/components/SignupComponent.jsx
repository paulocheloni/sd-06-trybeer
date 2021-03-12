import React from 'react';

function Signup() {
  return(
    <>
      <forms >
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            name="name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
        />
        </label>
        <button id="sign-up" type="button">CADASTRAR</button>
      </forms>
    </>
  )
};

export default Signup;