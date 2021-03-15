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

module.exports = {
  validateUser,
};
