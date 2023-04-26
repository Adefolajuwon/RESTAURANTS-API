const mongoose = require('mongoose');
const storeHoursSchema = new mongoose.Schema({
	store_id: String,
	day: Number,
	start_time_local: Date,
	end_time_local: Date,
});

module.exports = mongoose.model('StoreStatus', storeHoursSchema);
