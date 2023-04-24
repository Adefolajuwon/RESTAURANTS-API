const mongoose = require('mongoose');
const storeActiveSchema = new mongoose.Schema({
	store_id: String,
	dayOfWeek: Number,
	start_time_local: Date,
	end_time_local: Date,
});
module.exports = mongoose.model('storeActive', storeActiveSchema);
