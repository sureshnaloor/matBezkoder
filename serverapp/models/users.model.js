module.exports = (mongoose) => {
	const Users = mongoose.model(
		'users',
		mongoose.Schema(
			{
				name: { type: String, required: true, unique: true },
				email: { type: String, required: true, unique: true },
				password: { type: String, required: true },
			},
			{ timestamps: true }
		),
		'users'
	);
	return Users;
};
