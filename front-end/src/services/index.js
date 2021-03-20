import { login, register, updateName } from '../api';

const verifyEmailAndPassword = (email, password, setActiveBtn) => {
  const isEmailValid = email.match(/\S+@\S+\.\S+/);
  const isPasswordValid = password.match(/^[0-9a-zA-Z]{6,50}$/);

  if (isEmailValid && isPasswordValid) {
    setActiveBtn(true);
  } else setActiveBtn(false);
};

const handleSubmit = (history, user) => {
  login(user)
    .then(async (response) => {
      const isAdmin = response.data.role === 'administrator';
      localStorage.setItem('token', response.data.token);

      if (isAdmin) await history.push('admin/orders');
      else await history.push('/products');
    });
};

const verifyRegister = (user, setActiveBtn) => {
  const isEmailValid = user.email.match(/\S+@\S+\.\S+/);
  const isPasswordValid = user.password.match(/^[0-9a-zA-Z]{6,50}$/);
  const isNameValid = user.name.match(/^[a-zA-Z ]{12,50}$/);

  if (isEmailValid && isPasswordValid && isNameValid) {
    setActiveBtn(true);
  } else setActiveBtn(false);
};

const handleSubmitRegister = (user, checked, setUser, history) => {
  if (checked) {
    setUser({ ...user, role: 'administrator' });
    register({ ...user, role: 'administrator' })
      .then((result) => {
        if (result) history.push('admin/orders');
      });
  } else {
    setUser({ ...user, role: 'client' });
    register({ ...user, role: 'client' })
      .then((result) => {
        if (result) history.push('products');
      });
  }
};

const handleCheckbox = (checked, setChecked, setUser, user) => {
  if (checked) {
    setUser({ ...user, role: 'client' });
  } else setUser({ ...user, role: 'administrator' });
  setChecked(!checked);
};

const redirectMenuBar = (history, payloadUrl) => {
  history.push(payloadUrl);
};

const handleUpdate = (name, setShowMessage) => {
  const userFromStorage = JSON.parse(localStorage.getItem('user'));
  const { id } = userFromStorage;

  updateName(name, id, setShowMessage)
    .then(setShowMessage(true));
};
<<<<<<< HEAD
/// ///////////////
=======
//////////////////
>>>>>>> b5dc60dffa28154ca2901897bd3f8c70744a8638
const addProduct = (quantity, setQuantity, name) => {
  const total = quantity + 1;
  localStorage.setItem(`${name}`, total);
  setQuantity(total);
<<<<<<< HEAD
};

const reduceProduct = (quantity, setQuantity, name) => {
  if (quantity > 0) {
=======
}

const reduceProduct = (quantity, setQuantity, name) => {
  if(quantity > 0) {
>>>>>>> b5dc60dffa28154ca2901897bd3f8c70744a8638
    const total = quantity - 1;
    localStorage.setItem(`${name}`, total);
    setQuantity(total);
  }
<<<<<<< HEAD
};
/// /////////////////////
const tokenExists = (history) => {
  const token = localStorage.getItem('token');
  if (!token) {
    history.push('/login');
  }
};
=======
}
////////////////////////
const tokenExists = (history) => {
  const token = localStorage.getItem('token')
  if(!token) {
    history.push('/login');
  }
}
>>>>>>> b5dc60dffa28154ca2901897bd3f8c70744a8638

export {
  verifyEmailAndPassword,
  handleSubmit,
  verifyRegister,
  handleCheckbox,
  handleSubmitRegister,
  redirectMenuBar,
  handleUpdate,
  addProduct,
  reduceProduct,
<<<<<<< HEAD
  tokenExists,
=======
  tokenExists
>>>>>>> b5dc60dffa28154ca2901897bd3f8c70744a8638
};
