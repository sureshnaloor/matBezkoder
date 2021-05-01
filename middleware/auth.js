const jwt = require('jsonwebtoken');

// authentication middleware

exports.requireLogin = (req, res, next) => {	
		if (req.headers.authorization) {
			try {
				const token = req.headers.authorization.split(' ')[1];

			// verify token
			const decode = token ? jwt.verify(token, 'exbeyondisawesome'): null

			// attach token to request
			req.user = decode; //decode will be the user._id
			next();
		} 				
			 catch (error) {
				next()
			}
			
	} else {
		console.log('no authorisation header');
	}
};
