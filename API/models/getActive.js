const storeActive = require('../schemas/active');

async function getStatus(storeId) {
	try {
		let response = await storeActive.find(storeId).limit(20);

		if (response === null) {
			console.log('store not found');
			return null;
		} else {
			return response;
		}
	} catch (error) {
		console.log(error);
		throw error;
	}
}
async function getStoreById(findOneQuery) {
	try {
		let response = await storeActive.findOne(findOneQuery);
		if (!response) {
			console.log('store not found');
		} else {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports = { getStatus, getStoreById };
