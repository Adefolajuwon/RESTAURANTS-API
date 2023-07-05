const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
	report_id: String,
});
module.exports = mongoose.model('Report', reportSchema);
