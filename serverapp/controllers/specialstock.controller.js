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

exports.findEach = (req,res) => {
	Specialstock.find({ "stock-val": { $gt: 1 } }).sort({ "stock-val": -1 }).exec()
	.then(spstk => res.json(spstk))
	.catch(err => res.status(404).json(err));
}