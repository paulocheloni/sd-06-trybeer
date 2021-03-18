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

const handleUpdate = (name) => {
  console.log(name);
  updateName(name);
};

const addProduct = (quantity, setQuantity, cerveja) => {
  const total = quantity + 1;
  localStorage.setItem(`${cerveja}`, total);
  setQuantity(total);
}

const reduceProduct = (quantity, setQuantity, cerveja) => {
  if(quantity > 0) {
    const total = quantity - 1;
    localStorage.setItem(`${cerveja}`, total);
    setQuantity(total);
  }
}

export {
  verifyEmailAndPassword,
  handleSubmit,
  verifyRegister,
  handleCheckbox,
  handleSubmitRegister,
  redirectMenuBar,
  handleUpdate,
  addProduct,
  reduceProduct
};
