module.exports = (mongoose) => {
	const MaterialGroup = mongoose.model(
		'matGrpList',
		mongoose.Schema(
			{
				'material-group': String,
				'matgroup-primary-desc': String,
				'matgroup-secondary-desc': String,
				'updated-date': Date,
				'updated-by': String,
			},
			{ timestamps: true }
		),
		'matGrpList'
	);
	return MaterialGroup;
};
