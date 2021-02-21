const express = require('express');

const router = express.Router();

const projects = require('../controllers/projects.controller');

router.get('/test', async (req, res) => {
	try {
		res.json({ message: 'inside PROJECTS route API' });
	} catch (err) {
		console.log(err);
	}
});

// Retrieve all projects
router.get('/', projects.findAll);

router.get('/:id', projects.findOne);

module.exports = router;
