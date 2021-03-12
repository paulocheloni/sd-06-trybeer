const checkEmail = (req, res, next) => {
  const { email } = req.body;
  const check = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{3,8})?$/.test(email);
  console.log(check);
};

module.exports = {
  checkEmail,
};