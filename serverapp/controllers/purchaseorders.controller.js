const db = require('../models');
const Purchaseorders = db.purchaseorders;

// retireve single material
exports.findOne = (req, res) => {
	const id = req.params.id;

	Purchaseorders.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found purchaseorder with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving purchase order with id=' + id });
		});
};