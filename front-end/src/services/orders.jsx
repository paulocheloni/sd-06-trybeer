const url = 'http://localhost:3001/orders';
const contentType = { 'Content-Type': 'application/json' };

const createOrder = (email, totalPrice, street, checkoutProducts) => {
  return await fetch(`${url}`,
  {
    method: 'POST',
    headers: contentType,
    body: JSON.stringify({ email, totalPrice, street, checkoutProducts }),
  })
  .then((response) => response.json());
}

const getOrdersByUser = (email) => {
  const orders = fetch(`${url}/${email}`).then((response) => response.json());

  return orders;
}

module.exports = {
  createOrder,
  getOrdersByUser,
}
