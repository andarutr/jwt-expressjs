const User = require('../models').User;
const Jwt = require('../helpers/jwt');
const bcrypt = require('../helpers/bcrypt');

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

	static login(req, res){
		const { email,password } = req.body;
		User.findOne({
			where:{
				email
			}
		})
		.then(user => {
			if(bcrypt.comparePassword(password, user.password)){
				let payload = {
					id: user.id,
					email: user.email
				}

				let token = Jwt.generateToken(payload, 'andaru');
				res.status(200).json({ id: user.id, email: user.email, token });
			}else{
				res.status(400).json({ err: 'invalid email/password' });
			}
		})
		.catch(err => {
			res.status(400).json({ err: 'Error' });
		});
	}
}

module.exports = UserController;