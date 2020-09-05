const db = require('../models');
const Material = db.materials;

// create and save new material
exports.create = (req, res, next) => {
	// validation;
	if (!req.body.description) {
		res.status(400).send({ message: 'Content cannnot be empty please!' });
	}
	if (!req.body.materialCode) {
		res.status(400).send({ message: 'Content cannnot be empty please!' });
	}
	if (!req.body.materialIndustry) {
		res.status(400).send({ message: 'Content cannnot be empty please!' });
	}
	if (!req.body.materialGroup) {
		res.status(400).send({ message: 'Content cannnot be empty please!' });
	}
	if (!req.body.unitMeasure) {
		res.status(400).send({ message: 'Content cannnot be empty please!' });
	}
	if (!req.body.matType) {
		res.status(400).send({ message: 'Content cannnot be empty please!' });
	}

	if (Material.find({ 'material-code': req.body.materialCode })) {
		res.status(400).send({
			message: 'the material code already exists, please update if required',
		});
	} else {
		const material = new Material({
			'material-code': req.body.materialCode,
			'material-industry': req.body.materialIndustry,
			'material-group': req.body.materialGroup,
			'unit-measure': req.body.unitMeasure,
			'old-material-number': req.body.oldMaterialNumber,
			'Mat-description': req.body.description,
			'Mat-description2': req.body.description2,
			'created-date': req.body.createdDate,
			'created-by': req.body.createdBy,
			'changed-date': req.body.changedDate,
			'changed-by': req.body.changedBy,
			'close-flag': req.body.closeFlag,
			'mat-type': req.body.matType,
			'updated-by': req.body.updatedBy,
		});
		if (req.file) {
			material['material-image'] = req.file.path;
		}

		//save in database
		material
			.save(material)
			.then((data) => res.send(data))
			.catch((err) => {
				res.status(500).send({
					message:
						err.message || 'some error occured while creating the material',
				});
			});
	}
};

//retrieve all materials from database, if description search box is filled in search by description
exports.findAll = (req, res) => {
	const description = req.query.description;

	const noRec = 100;
	var condition = description
		? { 'Mat-description': { $regex: new RegExp(description), $options: 'i' } }
		: {};

	Material.find(condition)
		.limit(noRec)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || 'Some error occurred while retrieving materials.',
			});
		});
};

exports.findbyGroup = (req, res) => {
	const matgroup = req.params.matgroup;
	console.log(req.params);

	const noRec = 100;

	Material.find({ 'material-group': matgroup })
		.limit(noRec)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || 'Some error occurred while retrieving materials.',
			});
		});
};

// retireve single material
exports.findOne = (req, res) => {
	const id = req.params.id;

	Material.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found Material with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving Material with id=' + id });
		});
};

// //update tutorial by id
exports.update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: 'Data to update can not be empty!',
		});
	}

	const id = req.params.id;
	const body = {
		'material-code': req.body['material-code'],
		'material-industry': req.body['material-industry'],
		'material-group': req.body['material-group'],
		'unit-measure': req.body['unit-measure'],
		'old-material-number': req.body['old-material-number'],
		'Mat-description': req.body['Mat-description'],
		'Mat-description2': req.body['Mat-description2'],
		// 'created-date': req.body['created-date'],
		// 'created-by': req.body['created-by'],
		// 'changed-date': req.body['changed-date'],
		// 'changed-by': req.body['changed-by'],
		'close-flag': req.body['close-flag'],
		'mat-type': req.body['mat-type'],
		'updated-by': req.body['updated-by'],
		'long-matdescription': req.body['long-matdescription'],
	};
	if (req.file) {
		body['material-image'] = req.file.path;
	}

	Material.findByIdAndUpdate(id, body, { useFindAndModify: false })

		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot update Material with id=${id}. Maybe material was not found!`,
				});
			} else {
				console.log(data);
				res.send('Material is updated succesfully');
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error updating Material with id=' + id,
			});
		});
};

//delete a tutorial by id
exports.delete = (req, res) => {
	const id = req.params.id;

	Material.findByIdAndRemove(id, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot delete Material with id=${id}. Maybe Material was not found!`,
				});
			} else {
				res.send({
					message: 'Material was deleted successfully!',
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete Material with id=' + id,
			});
		});
};
