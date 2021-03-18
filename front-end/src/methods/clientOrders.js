const url = 'http://localhost:3001';
const { token } = JSON.parse(localStorage.getItem('user'));

const options = {
  method: 'GET',
  headers: {
    authorization: token,
  },
};

const clientOrders = {
  async getAll() {
    const response = await (await fetch(`${url}/orders`, options)).json();
    return response;
  },
};

export default clientOrders;
