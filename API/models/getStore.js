const storeActiveSchema = require('../schemas/active');
const storeActiveSchema2 = require('../schemas/active2');
const run = require('../lib/mongoose');
async function getStore(storeId) {
	try {
		const collection2 = (await run).collection2;
		let response = collection2.findOne(storeId);

		if (!response) {
			console.log('user not found');
		}
		return response;
	} catch (error) {
		console.log(error);
	}
}
module.exports = getStore;
