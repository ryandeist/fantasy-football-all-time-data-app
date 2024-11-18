const bcrypt = require('bcrypt');

function encryptPassword(password) {
  return bcrypt.hashSync(password, parseInt(process.env.SALT_ROUNDS));
}

function comparePassword(password, hashPassword) {
  return bcrypt.compareSync(password, hashPassword);
}

module.exports = {
  encryptPassword,
  comparePassword,
};
