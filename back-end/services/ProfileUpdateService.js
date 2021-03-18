const jwt = require('jsonwebtoken');

const { updateProfile } = require('../models/ProfileModel');

const { OK } = require('../utils/allStatusCode');

const ProfileUpdateService = async (req, res) => {
  // const { id } = req.params;
  const { name } = req.body;
  const { authorization: token } = req.headers;
  // console.log(id, name);

  const obj = jwt.decode(token);
  // console.log('id', id)

  await updateProfile(obj.id, name);
  // const [[updatedProfile]] = await profileById(id);
  // return res.status(OK).json(updatedProfile);
  return res.status(OK).end();
};

module.exports = ProfileUpdateService;