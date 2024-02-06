const jwt = require('jsonwebtoken');
const secret = 'private';

const generateToken = (payload) => {
	return jwt.sign(payload, secret);
}


module.exports = { generateToken };