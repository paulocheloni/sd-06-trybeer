import axios from 'axios';

export const loginUser = async (email, password) => {
  const user = await axios({
    method: 'POST',
    url: 'http://localhost:3001/login',
    data: {
      email,
      password,
    },
  }).then((res) => res.data.user)
    .catch((err) => {
      console.error(`ops! ocorreu um erro${err}`);
    });

  return user;
};

export const registerNewUser = async (name, email, password, role) => {
  const user = await axios({
    method: 'post',
    url: 'http://localhost:3001/register',
    data: {
      name,
      email,
      password,
      role,
    },
  }).then((res) => res.data.message)
    .catch((err) => err.response.data.message);

  return user;
};
