const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// const mongoURL = `mongodb://localhost:27017/materials`;
const mongoURL = `mongodb+srv://suresh:ironhair@jal.gkacc.mongodb.net/jalsapdata?retryWrites=true&w=majority`

const db = {};
db.mongoose = mongoose;
db.url = mongoURL;

db.materials = require('./materials.model')(mongoose);
db.materialGroups = require('./materialGroups.model')(mongoose);
db.projects = require('./projects.model')(mongoose);
db.purchaseorders = require('./purchaseOrders.model')(mongoose);
db.vendors = require('./vendors.model')(mongoose);
db.specialstock = require('./specialstock.model')(mongoose);
db.completestock = require('./completestock.model')(mongoose);
db.materialdocuments = require('./materialdocuments.model')(mongoose);
db.networks = require('./networks.model')(mongoose);

module.exports = db;
