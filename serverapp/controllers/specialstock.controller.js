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

exports.findTotalPlantwise =  (req, res) => {
    Specialstock.aggregate([{
        $group: {
            _id: "$plant-code",
            plantTotal: {
                $sum: "$stock-val"
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

exports.findByCode = (req, res) => {
	const matcode = req.params.code;

	Specialstock.find({'material-code': matcode})
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

exports.findByAccount = (req,res) => {	
	const noRec = 100;

	const wbs = req.query.wbs
	const salesdoc = req.query.salesdoc

	let condition = wbs ? { 'wbs-element': { $regex: new RegExp(wbs), $options: 'i' } }
	: salesdoc ? {'sales-document' : {$regex: new RegExp(salesdoc), $options: 'i'}} : [];

	Specialstock.find(condition)
		.limit(noRec)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || 'Some error occurred while retrieving data.',
			});
		});
}