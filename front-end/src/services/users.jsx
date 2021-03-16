const url = 'http://localhost:3001/users';

const validateUser = async (email, password) => {
  const validation = await fetch(`${url}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then((response) => response.json());

  return validation;
};

const registerUser = async (name, email, password, seller) => {
  const role = (seller === true) ? 'administrator' : 'client';

  const registeredUser = await fetch(`${url}/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, role }),
    })
    .then((response) => response.json());

  return registeredUser;
};

const updateUser = async (name, email) => {
  const update = await fetch(`${url}/profile`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

  return update;
};

module.exports = {
  validateUser,
  registerUser,
  updateUser,
};
