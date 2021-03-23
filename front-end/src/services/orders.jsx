const url = 'http://localhost:3001/orders';
const contentType = { 'Content-Type': 'application/json' };

const createOrder = async (totalPrice, street, checkoutProducts) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { streetInput, houseNumberInput } = street;

  return await fetch(`${url}`,
  {
    method: 'POST',
    headers: {
      ...contentType,
      'Authorization': user.token,
    },
    body: { totalPrice, streetInput, houseNumberInput, checkoutProducts },
  })
  .then((response) => response.json());
}

const getOrdersByUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  return fetch(`${url}`,
    {
      method: 'GET',
      headers: { Authorization: user.token }
    }
  ).then((response) => response.json());
}

module.exports = {
  createOrder,
  getOrdersByUser,
}
