const timezone = require('../schemas/timezone');
async function getStorebyIdtimezone(findOneQuery) {
	try {
		let response = await timezone.findOne(findOneQuery);
		if (!response) {
			console.log('store not found');
		} else {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
}
module.exports = { getStorebyIdtimezone };
