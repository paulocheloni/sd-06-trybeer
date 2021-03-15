import {validateUser} from './loginService.js';

export function validateNewUser(newUser, setNewUser, setEnableButton) {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const isSeller = document.getElementById('signup-seller').checked;
  const userNamePattern = /^[\sa-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]{12,}$/;
  const emailPattern = /\S+@\S+\.\S+/;
  const minPasswordLength = 6;

  if (
    userNamePattern.test(name) &&
    password.length >= minPasswordLength &&
    emailPattern.test(email)
  ) {
    console.log('Habilitou botão');
    setNewUser({
      ...newUser,
      name,
      password,
      email,
      role: isSeller ? 'administrador' : 'cliente',
    });

    return setEnableButton(false);
  }
  setEnableButton(true);
}

export async function checkUser(user) {
  console.log('Usuário para cadastrar:', user);
  console.log('Email do user pra cadastrar',user.email);
  const retrievedUser = await validateUser(user.email);
  console.log(retrievedUser);
  if (retrievedUser) {
    return retrievedUser;
  }
  return false;
}
