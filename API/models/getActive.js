const storeActive = require('../schemas/active');
// const run = require('../lib/mongoose');

// async function getStoreById(store_id) {
// 	try {
// 		let response = await storeActive.findOne(store_id);
// 		if (!response) {
// 			console.log('stor3ted ndot fssccoeund');
// 		} else {
// 			return response;
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
//cats
async function getStatus(storeId) {
	try {
		let response = await storeActive.findOne(storeId);

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
