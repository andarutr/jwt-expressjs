let { verifyToken } = require('../helpers/jwt');

const authentication = (req, res, next) => {
	try{
		let token = req.headers.token;
		let decoded = verifyToken(token);
		req.decoded = decoded;
		next();
	}catch(err){
		res.status(401).json({ err: 'You should login first!'});
	}
}

module.exports = { authentication };