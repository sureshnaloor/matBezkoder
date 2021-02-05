module.exports = (mongoose) => {
	const Network = mongoose.model(
		'projects',
		mongoose.Schema(
			{
				'project-wbs': { type: String, required: true, unique: true },
				'project-name': { type: String, required: true },
				'created-date': { type: Date },
				'changed-date': { type: String },
				'network': { type: String },
			},
			{ timestamps: true }
		),
		'networks'
	);
	return Network;
};
