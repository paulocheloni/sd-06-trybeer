const fetchLogin = async (email, password) => {
  const response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json());

  if (response.message) {
    return false;
  } else {
    return response;
  }
};

  module.exports = {
    fetchLogin,
  }
