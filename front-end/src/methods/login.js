const urlLogin = 'http://localhost:3001/login';

const login = async (user) => {
  await fetch(urlLogin, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
    }),
  });
};

export default login;
