const express = require('express');
const router = express.Router();
const materialGroups = require('../controllers/materialGroup.controller');

router.get('/test', async (_, res) => {
	try {
		res.json({ message: 'inside material Groups route API' });
	} catch (err) {
		console.log(err);
	}
});

// Retrieve all Material groups
router.get('/', materialGroups.findAll);

// Create a new material-group
// router.post('/', materialGroups.create);

// Retrieve a single Material-group with id, update and delete.
router
	.get('/:id', materialGroups.findOne)
	.put('/:id', materialGroups.update)
	.delete('/:id', materialGroups.delete);
module.exports = router;
