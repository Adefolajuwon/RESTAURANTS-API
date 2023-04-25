const { storeActiveSchema } = require('../schemas/active');
const run = require('../lib/mongoose');
const timezone = require('../schemas/timezone');
const storeHoursSchema = require('../schemas/ business_hours');
async function getStore(storeId) {
	try {
		let response = storeActiveSchema.findOne(storeId);

		if (!response) {
			console.log('user not found');
		}
		return response;
	} catch (error) {
		console.log(error);
	}
}
async function getActive(storeId) {
	try {
		let response = timezoneSchema.findOne(storeId);

		if (!response) {
			console.log('user not found');
		}
		return response;
	} catch (error) {
		console.log(error);
	}
}
async function getHours(storeId) {
	try {
		let response = storeHoursSchema.findOne(storeId);
		if (!response) {
			console.log('user not found');
		}
		return response;
	} catch (error) {
		console.log(error);
	}
}
module.exports = { getStore, getActive, getHours };
