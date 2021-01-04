module.exports = (mongoose) => {
	const Material = mongoose.model(
		'materials',
		mongoose.Schema(
			{
				'material-code': { type: String, required: true, unique: true },
				'material-industry': { type: String, required: true },
				'material-group': { type: String, required: true },
				'unit-measure': { type: String, required: true },
				'old-material-number': String,
				'Mat-description': { type: String, required: true },
				'Mat-description2': String,
				'long-matdescription': String,
				'created-date': Date,
				'created-by': String,
				'changed-date': Date,
				'changed-by': String,
				'close-flag': String,
				'mat-type': String,
				'updated-by': String,
				'material-image': String,
			},
			{ timestamps: true }
		),
		'materials'
	);
	return Material;
};
