module.exports = (mongoose) => {
	const Project = mongoose.model(
		'projects',
		mongoose.Schema(
			{
				'project-wbs': { type: String, required: true, unique: true },
				'project-name': { type: String, required: true },
				'created-date': { type: Date },
				'changed-date': { type: String },
				'project-incharge': { type: String },
			},
			{ timestamps: true }
		),
		'projects'
	);
	return Project;
};
