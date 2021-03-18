const userService = require('../services/UsersService');
const createToken = require('../auth/createToken');

const registerAndLog = async (email) => {
  const [userTotal] = await userService.findByEmail(email);
  const { password, ...userWithoutPassword } = userTotal;
    const token = createToken(userWithoutPassword);
    return ({
      name: userWithoutPassword.name,
      email: userWithoutPassword.email,
      role: userWithoutPassword.role,
      token,
    });
};

module.exports = registerAndLog;