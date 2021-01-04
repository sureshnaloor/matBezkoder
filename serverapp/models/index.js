const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// const mongoURL = `mongodb://localhost:27017/materials`;
const mongoURL = `mongodb+srv://suresh:ironhair@jal.gkacc.mongodb.net/jalsapdata?retryWrites=true&w=majority`

const db = {};
db.mongoose = mongoose;
db.url = mongoURL;

db.materials = require('./materials.model')(mongoose);
db.materialGroups = require('./materialGroups.model')(mongoose);

module.exports = db;
