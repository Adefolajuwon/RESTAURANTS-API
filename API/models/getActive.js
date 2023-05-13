const storeActive = require('../schemas/active');
const run = require('../lib/mongoose');

async function getStatus(storeId) {
	try {
		let response = await storeActive.findOne(storeId);

		if (response === null) {
			console.log('store not found');
		} else {
			return response;
		}
	} catch (error) {
		console.log(error);
	}
}
// async function getStoreById(store_id) {
// 	try {
// 		let response = await storeActive.findOne(store_id);
// 		if (!response) {
// 			console.log('store not found');
// 		} else {
// 			return response;
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
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
