const storeActiveSchema = require('../schemas/active');
const storeActiveSchema2 = require('../schemas/active2');
const mongoose = require('mongoose');
async function getStore(storeId) {
	try {
		let response = storeActiveSchema.findById(storeId);

		if (!response) {
			console.log('user not found');
		}
		return response;
	} catch (error) {
		console.log(error);
	}
}
module.exports = getStore;
