const urlLogin = 'http://localhost:3001/login';

const login = async ({ email, password }) => {
// function login({ email, password }) {
  await fetch(urlLogin, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email, password,
    }),
  });
};

export default login;
