const urlLogin = 'http://localhost:3001/admin/orders';

const updateStatus = async (id) => {
  const postMethod = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: id,
    }),
  };

  const apiRequest = await fetch(urlLogin, postMethod);
  const apiResponse = await apiRequest.json();
  console.log(apiResponse);
  // localStorage.setItem('user', JSON.stringify(apiResponse));
  return apiResponse;
};

export default updateStatus;
