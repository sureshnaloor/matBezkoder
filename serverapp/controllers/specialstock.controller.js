const db = require('../models');
const Specialstock = db.specialstock;

// retireve single material
exports.findOne = (req, res) => {
	const id = req.params.id;

	Specialstock.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found stock of material with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving stock of Material with id=' + id });
		});
};