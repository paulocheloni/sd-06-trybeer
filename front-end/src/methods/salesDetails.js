const baseURL = 'http://localhost:3001';

const getToken = () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  if (token !== null) {
    return token;
  }
};

const salesDetails = async (SPInfo) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    authorization: token,
  };

  const postMethod = {
    method: 'POST',
    headers,
    body: JSON.stringify({
      sale: SPInfo,
    }),
  };

  const apiRequest = await fetch(`${baseURL}/orders`, postMethod);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export default salesDetails;
