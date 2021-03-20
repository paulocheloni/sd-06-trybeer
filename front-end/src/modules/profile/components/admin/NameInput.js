import React from 'react';

function NameInput(inputValue) {
  return (
    <label htmlFor="email-ipt" className="flex flex-col space-y-2">
      <p>Nome*</p>
      <input
        id="email-ipt"
        data-testid="profile-name"
        name="name"
        type="text"
        value={ inputValue }
        className="border rounded-md p-2 bg-gray-300"
        disabled
        readOnly
      />
    </label>
  );
}

export default NameInput;
