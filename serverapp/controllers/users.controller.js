const db = require('../models');
const Users = db.users;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register user
exports.register = async (req, res) => {
	const { name, email, password } = req.body;
	try {
		let user = await Users.findOne({ email });
		if (user) {
			return res.status(400).json({ error: 'User already exists' });
		}
		const hashed_password = await bcrypt.hash(password, 10);

		user = new Users({ name, email, password: hashed_password });
		await user.save();
		return res.status(201).json({ message: 'User created successfully' });
	} catch (error) {
		console.log(error);
	}
};

//user login

exports.login = async (req, res) => {
	const { email, password } = req.body;
	try {
		// if email exists
		let user = await Users.findOne({ email });
		if (!user) {
			return res.status(400).json({ error: 'Invalid credentials' });
		}
		// if password doesnt match
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ error: 'invalid credentials' });
		}
		// if everything oK
		if (user._id ){
			const token = jwt.sign({ _id: user._id }, 'exbeyondisawesome', {
				expiresIn: '1hr',
			});
			console.log(token);
			return res.json({ token });
		}
		else{
			return 
		}
		
	} catch (error) {
		console.log(error);
	}
};

// protected route

exports.requireAuth = async (req, res) => {
	try {
		const user = await Users.findById(req.user._id).select('-password');
		return res.json(user);
	} catch (error) {
		console.log(error);
	}
};
