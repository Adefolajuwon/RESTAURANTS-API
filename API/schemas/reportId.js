const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
	reportId: String,
});
module.exports = mongoose.model('Report', reportSchema);
