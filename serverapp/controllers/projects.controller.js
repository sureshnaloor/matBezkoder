const db = require('../models');
const Project = db.projects;

//retrieve all PROJECTS from database, if project-name  search box is filled in search by description
exports.findAll = (req, res) => {
	const projectName = req.query.projectName;
	const projectIncharge = req.query.projectIncharge;

	const noRec = 100;

	var condition = projectIncharge
		? {
				'project-incharge': {
					$regex: new RegExp(projectIncharge),
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
