const User = require('../models').User;

class UserController{
	static create(req, res){
		const { email, password } = req.body;
		User.create({
			email,
			password
		})
		.then(user => {
			res.status(201).json({ user });
		})
		.catch(err =>{
			res.status(400).json({ err });
		});
	}
}

module.exports = UserController;