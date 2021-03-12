const { RegisterService } = require('../service');

const registerClient = async (req, res) => {
  const { name, email, password, role } = req.body;
  
  await RegisterService.registerClient(name, email, password, role);

  res.status(201).json('deu certo');
};

module.exports = {
  registerClient,
};