const storeActiveSchema = require('../schemas/active');
const run = require('../lib/mongoose');
async function getStatus(storeId) {
	try {
		let response = storeActiveSchema.findOne(storeId);

		if (!response) {
			console.log('user not found');
		}
		return response;
	} catch (error) {
		console.log(error);
	}
}
module.exports = getStatus;
