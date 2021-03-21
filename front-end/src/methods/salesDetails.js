const baseURL = 'http://localhost:3001/orders';

const getToken = () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  if (token !== null) {
    return token;
  }
};

const salesDetails = async (id) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    authorization: token,
  };

  const getMethod = {
    method: 'GET',
    headers,

  };

  const apiRequest = await fetch(`${baseURL}/${id}`, getMethod);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export default salesDetails;
