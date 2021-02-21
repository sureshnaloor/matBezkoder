const db = require('../models');
const Project = db.projects;

//retrieve all PROJECTS from database, if project-name  search box is filled in search by description
exports.findAll = (req, res) => {
	const projectName = req.query.projectName;
	const projectWbs = req.query.projectWbs;

	const noRec = 100;
	
	// checks for either proj incharge name or project name entered as wildcard search string
	var condition = projectWbs
		? {
				'project-wbs': {
					$regex: new RegExp(projectWbs),
					$options: 'i',
				},
		  }
		: projectName
		? {
				'project-name': {
					$regex: new RegExp(projectName),
					$options: 'i',
				},
		  }
		: {};

	Project.find(condition)
		.limit(noRec)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || 'Some error occurred while retrieving projects.',
			});
		});
};

// retrieve a single project through its id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Project.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found project with id ' + id });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving project with id=' + id });
		});
};
