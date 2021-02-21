const { completestock } = require('../models');
const db = require('../models');
const Completestock = db.completestock;

// retrive list of all matcodes having value > 1 SR

exports.findEach = (req,res) => {
	completestock.find({ "current-stkval": { $gt: 1 } }).sort({ "current-stkval": -1 }).exec()
	.then(allstk => res.json(allstk))
	.catch(err => res.status(404).json(err));
}


// retireve single material
exports.findOne = (req, res) => {
	const id = req.params.id;

	Completestock.findById(id)
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

exports.findByCode = (req, res) => {
	const matcode = req.params.code;

	Completestock.find({'material-code': matcode})
		.then((data) => {
			if (!data)
				res.status(404).send({ message: 'Not found stock of material with matcode ' + matcode });
			else res.send(data);
		})
		.catch((err) => {
			res
				.status(500)
				.send({ message: 'Error retrieving stock of Material with matcode=' + matcode});
		});
};

exports.findTotalPlantwise =  (req, res) => {
    completestock.aggregate([{
        $group: {
            _id: "$plant-code",
            plantTotal: {
                $sum: "$current-stkval"
            }
        }
    }], (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        res.json(result)
    })
}