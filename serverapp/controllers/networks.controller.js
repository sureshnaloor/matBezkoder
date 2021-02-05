const db = require('../models');
const Networks = db.networks;

// retireve single material
exports.findOne = (req, res) => {
	const id = req.params.id;

	Networks.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found network with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving network with id=' + id });
		});
};