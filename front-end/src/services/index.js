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

const getItensStorage = () => {
  // https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
  const allowed = Object.keys({ ...localStorage }).filter((key) => key !== 'token' || key !== 'total');
  const items = Object.keys({ ...localStorage })
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = { ...localStorage }[key];
      return obj;
    }, {});
  return items;
};

const calculateTotal = (items) => {
  console.log(items)
  let total = 0.00
  const arrayPrices = Object.values(items);
  arrayPrices.forEach((obj) => {
    const parseObj = JSON.parse(obj)
    // console.log(parseObj)
    total += parseObj['total'] * parseFloat(parseObj['price'])
    // console.log('parse',parseFloat(parseObj['1']))
  })

  console.log(total.toFixed(2))

  localStorage.setItem('total', total)
  return total.toFixed(2)

  // const infoCartProducts = products.filter((obj) => allowed.includes(obj.name));
  // const arrayTotal = infoCartProducts
  //   .map((obj) => parseFloat(obj.price) * parseFloat(items[obj.name]));
  // const total = arrayTotal
  //   .reduce((accumulator, currentValue) => accumulator + currentValue)
  //   .toFixed(2).toString();
  // console.log(total, products);
  // return total;
};

const addProduct = ({ quantity, setQuantity, name, setTotal, products, price }) => {
  const total = quantity + 1;
  localStorage.setItem(`${name}`, JSON.stringify({total, price}));
  setQuantity(total);
  const items = getItensStorage();
  setTotal(calculateTotal(items));
};

const reduceProduct = ({ quantity, setQuantity, name, setTotal, products, price }) => {
  if (quantity > 0) {
    const total = quantity - 1;
    localStorage.setItem(`${name}`, JSON.stringify({total, price}));
    setQuantity(total);
    const items = getItensStorage();
    setTotal(calculateTotal(items));
  }
};

const tokenExists = (history) => {
  const token = localStorage.getItem('token');
  if (!token) {
    history.push('/login');
  }
};

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
  tokenExists,
  getItensStorage,
  calculateTotal,
};
