let bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
	return bcrypt.hashSync(password, salt);
}

const comparePassword = (inputPassword, dbPassword) => {
	return bcrypt.compareSync(inputPassword, dbPassword);
}

module.exports = { hashPassword, comparePassword };