const db = require('../models');
const Materialdocuments = db.materialdocuments;

// retireve single material
exports.findOne = (req, res) => {
	const id = req.params.id;

	Materialdocuments.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found material docs with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving material docs with id=' + id });
		});
};