import axios from 'axios';

export const loginUser = async (email, password) => {
  const user = await axios({
    method: 'post',
    url: 'http://localhost:3000/login',
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

export const registerUser = async (name, email, password, role) => {
  const user = await axios({
    method: 'post',
    url: 'http://localhost:3000/register',
    data: {
      name,
      email,
      password,
      role,
    },
  }).then((res) => res.data.user)
    .catch((err) => {
      console.error(`ops! ocorreu um erro${err}`);
    });

  return user;
};
