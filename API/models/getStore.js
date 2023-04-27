const storeActive = require('../schemas/active');
const run = require('../lib/mongoose');
// async function getStatus(storeId) {
// 	try {
// 		let response = storeActive.findOne(storeId);

// 		if (!response) {
// 			console.log('user not found');
// 		}
// 		return response;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
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

module.exports = getStatus;
