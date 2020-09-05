const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
	origin: 'http://localhost:3001',
};

app.use(cors(corsOptions));

app.get('/', (_, res) => {
	res.json({
		message: 'in root of the app materialsBezkoder, you shouldnt be here!',
	});
});

const db = require('./serverapp/models');
db.mongoose
	.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log(`connected to database`))
	.catch((err) => {
		console.error(`cannot connect to database, ${err}`);
		process.exit(1);
	});

app.use('/api/materials', require('./serverapp/routes/materials.routes'));
app.use('/api/matgroups', require('./serverapp/routes/materialGroups.routes'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});
