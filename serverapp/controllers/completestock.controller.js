const db = require('../models');
const Completestock = db.completestock;

// retrive list of all matcodes having value > 0.01 SR

exports.findAll = async (req, res) => {
	const page = parseInt(req.query.page);
	const limit = parseInt(req.query.limit);

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const results = {};

	if (startIndex > 0) {
		results.prev = {
			page: page - 1,
			limit: limit,
		};
	}

	if (
		endIndex <
		(await Completestock.find({ 'current-stkval': { $gt: 0.01 } })
			.countDocuments()
			.exec())
	) {
		results.next = {
			page: page + 1,
			limit: limit,
		};
	}

	const data = await Completestock.find({ 'current-stkval': { $gt: 0.01 } })
		.sort({ 'current-stkval': -1 })
		.limit(limit)
		.skip(startIndex)
		.exec();
	results.data = data;

	res.json(results);
};

// retireve single material
exports.findOne = (req, res) => {
	const id = req.params.id;

	Completestock.findById(id)
		.then((data) => {
			if (!data)
				res
					.status(404)
					.send({ message: 'Not found stock of material with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving stock of Material with id=' + id });
		});
};

exports.findByCode = (req, res) => {
	const matcode = req.params.code;

	Completestock.find({ 'material-code': matcode })
		.then((data) => {
			if (!data)
				res
					.status(404)
					.send({
						message: 'Not found stock of material with matcode ' + matcode,
					});
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({
					message: 'Error retrieving stock of Material with matcode=' + matcode,
				});
		});
};

exports.findTotalPlantwise = (req, res) => {
	Completestock.aggregate(
		[
			{
				$group: {
					_id: '$plant-code',
					plantTotal: {
						$sum: '$current-stkval',
					},
				},
			},
		],
		(err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			res.json(result);
		}
	);
};

exports.findTop20 = async (req, res) => {
	const limit = 20

	try {
		const data = await Completestock.find({ 'current-stkval': { $gt: 0.01 } })
		.sort({ 'current-stkval': -1 }).limit(limit).exec()
		res.status(200).json(data)
		
	} catch (error) {
		res.status(500).json({error:`error happened ${error}`})
		
	}
	
};

