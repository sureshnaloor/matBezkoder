const db = require('../models');
const MaterialGroup = db.materialGroups;
//retrieve all materials from database, if description search box is filled in search by description
exports.findAll = (req, res) => {
	const matgroupSecDescription = req.query.matgroupSecDescription;
	const noRec = 1000;
	var condition = matgroupSecDescription
		? {
				'matgroup-secondary-desc': {
					$regex: new RegExp(matgroupSecDescription),
					$options: 'i',
				},
		  }
		: {};

	MaterialGroup.find(condition)
		.limit(noRec)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					'Some error occurred while retrieving material groups.',
			});
		});
};

// retireve single material
exports.findOne = (req, res) => {
	const id = req.params.id;

	MaterialGroup.findById(id)
		.then((data) => {
			if (!data)
				res
					.status(404)
					.send({ message: 'Not found Material Group with id ' + id });
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
		'material-group': req.body.materialGroup,
		'matgroup-primary-desc': req.body.matgroupPrimaryDesc,
		'matgroup-secondary-desc': req.body.matgroupSecondaryDesc,
		'updated-date': req.body.updatedDate,
		'updated-by': req.body.updatedBy,
	};

	MaterialGroup.findByIdAndUpdate(id, body, { useFindAndModify: false })

		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot update Material Group with id=${id}. Maybe material Group was not found!`,
				});
			} else res.send('Material Group is updated succesfully');
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error updating Material Group with id=' + id,
			});
		});
};

//delete a tutorial by id
exports.delete = (req, res) => {
	const id = req.params.id;

	MaterialGroup.findByIdAndRemove(id, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot delete Material Group with id=${id}. Maybe Material Group was not found!`,
				});
			} else {
				res.send({
					message: 'Material Group was deleted successfully!',
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Could not delete Material Group with id=' + id,
			});
		});
};
