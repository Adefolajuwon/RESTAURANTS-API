const { getStatus, getStoreById } = require('../models/getActive');
const { getStorebyIdtimezone } = require('../models/timeZone');
const { getStorebyIdbusinesshour } = require('../models/businessHour');
const Redis = require('redis');
const { promisify } = require('util');

const redisClient = Redis.createClient();
const DEFAULT_EXPIRATION = 3600;

async function getStatusController(req, res) {
	try {
		redisClient.get('storeData', async (error, storeData) => {
			if (error) console.log(error);
			if (storeData != null) {
				return res.json(storeData);
			} else {
				const findOneQuery = { status: 'active' };
				const store = await getStatus(findOneQuery);

				if (store === null) {
					res.status(404).json({ error: 'store not found' });
				} else {
					res.status(200).json({ status: store });
				}

				console.log(store);
				redisClient.setEx('storeData', DEFAULT_EXPIRATION, store);
			}
		});
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: error.message });
	}
}
async function get_report(req, res) {
	try {
		const findOneQuery = { store_id: '5955337179846162432' };
		const store = await getStoreById(findOneQuery);
		if (!store) {
			res.status(404).json({ error: 'store 1 not found' });
			return; // Returnn early to prevent further execution.
		}

		const store2 = await getStorebyIdtimezone(findOneQuery);
		if (!store2) {
			res.status(500).json({ error: 'store 2 not found' });
			return; // Return early to prevent further execution
		}
		const store3 = await getStorebyIdbusinesshour(findOneQuery);
		if (!store) {
			res.status(404).json({ error: 'store 3 not found' });
			return; // Returnn early to prevent further execution
		}

		if (findOneQuery) {
			const output = {
				status: store.status,
				timezone: store2.timezone_str,
				day: store3.day,
				start: store3.start_time_local,
				end: store3.end_time_local,
			};
			res.status(200).json(output); // Send the output as JSON response
			console.log(output); // Log the output
		} else {
			res.status(401).json({ error: 'store not found' }); // Send the output as JSON response
		}
	} catch (error) {
		console.log(error);
		res.status(404).json({ error });
	}
}

module.exports = {
	getStatusController,
	get_report,
	getStatusController,
};
