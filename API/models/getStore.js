const storeActiveSchema = require('../schemas/active');
async function getStore(storeId) {
	try {
		let response = storeActiveSchema.findOne(storeId);

		if (!response) {
			console.log('user not found');
		}
		return response;
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: error.message });
	}
}
module.exports = getStore;
