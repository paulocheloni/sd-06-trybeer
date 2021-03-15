const BAD_REQUEST = 400;

function validatePassword(req, res, next) {
  const { password } = req.body;
  const isPasswordValid = password && password.length > 5;
  if (!password || !isPasswordValid) {
    return res.status(BAD_REQUEST).json({ message: 'Invalid entried.' });
  }
  next();
}

function validateEmail(req, res, next) {
  const { email } = req.body;
  const isEmailValid = /[A-Za-z0-9]+@[A-Za-z]+[A-z]*(\.\w{2,3})+/.test(email);
  if (!email || !isEmailValid) {
    return res.status(BAD_REQUEST).json({ message: 'Invalid entried.' });
  }
  next();
}

module.exports = {
  validatePassword,
  validateEmail,
};
