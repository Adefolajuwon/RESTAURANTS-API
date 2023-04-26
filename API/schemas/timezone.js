const mongoose = require('mongoose');
const timezoneSchema = new mongoose.Schema({
	store_id: String,
	timezone_str: String,
	status: String,
});
module.exports = mongoose.model('timezone', timezoneSchema);
