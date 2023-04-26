const mongoose = require('mongoose');
const storeActiveSchema = new mongoose.Schema({
	store_id: String,
	status: String,
	timestamp_utc: Date,
});
module.exports = mongoose.model('storeActive', storeActiveSchema);
