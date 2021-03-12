const { RegisterService } = require('../service');

const registerClient = async (req, res) => {
  const { name, email, password, role } = req.body;
  
  const user = await RegisterService.registerClient(name, email, password, role);

  res.status(201).json({ user });
}

module.exports = {
  registerClient,
}