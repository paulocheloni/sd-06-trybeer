const baseURL = 'http://localhost:3001';

const getToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user !== null) {
    return user.token;
  }
};

getToken();

const validateHeaders = new Headers({
  Authorization: `Bearer${getToken()}`,
  'Content-Type': 'application/json',
});

const checkoutPost = async (orderData) => {
  console.log(orderData);
  const postMethod = {
    method: 'POST',
    headers: validateHeaders,
    body: JSON.stringify({
      order: orderData,
    }),
  };

  const apiRequest = await fetch(`${baseURL}/orders`, postMethod);
  const apiResponse = await apiRequest.json();
  return apiResponse;
};

export default checkoutPost;
