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

exports.findAll = (req,res) => {
	// todo - search through project name or wbs 
	const wbsNumber = req.query.wbsNumber;
	const wbsName = req.query.wbsName;

	const noRec = 100;
	
	// checks for either proj incharge name or project name entered as wildcard search string
	var condition = wbsName
		? {
				'project-name': {
					$regex: new RegExp(wbsName),
					$options: 'i',
				},
		  }
		: wbsNumber
		? {
				'project-wbs': {
					$regex: new RegExp(wbsNumber),
					$options: 'i',
				},
		  }
		: {};
	Networks.find(condition).limit(noRec).then(data => {
		if(!data) res.status(404).send({message: 'Not found networks'})
		else res.send(data)
	})
	.catch(err => {
		res.status(500).send({error:'error retrieving networks, check network connection'})
	})
}