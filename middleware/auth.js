const jwt = require('jsonwebtoken');

// authentication middleware

exports.requireLogin = (req, res, next) => {
	try {
		if (req.headers.authorization) {
			const token = req.headers.authorization.split(' ')[1];

			// verify token
			const decode = jwt.verify(token, 'exbeyondisawesome');

			// attach token to request
			req.user = decode; //decode will be the user._id
			next();
		} else {
			return res.status(400).json({ error: 'invalid token or unauthorized' });
		}
	} catch (error) {
		console.log(error);
	}
};
