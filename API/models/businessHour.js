const StoreStatus = require('../schemas/business');
async function getStorebyIdbusinesshour(findOneQuery) {
	try {
		let response = await StoreStatus.findOne(findOneQuery);
		if (!response) {
			console.log('store not found');
		} else {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
}
module.exports = { getStorebyIdbusinesshour };
