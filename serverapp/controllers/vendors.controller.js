const db = require('../models');
const Vendors = db.vendors;

// retireve single material
exports.findOne = (req, res) => {
	const id = req.params.id;

	Vendors.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found vendor with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving vendor with id=' + id });
		});
};