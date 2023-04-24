const storeActiveSchema = require('../schemas/active');
async function getStoreController(storeId) {
	try {
		let response = storeActiveSchema.findOne(storeId);

		if (!response) {
			console.log('user not found');
		}
		return response;
	} catch (error) {}
}
