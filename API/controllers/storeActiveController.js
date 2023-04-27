const getStatus = require('../models/getStore');
async function getStatusController(req, res) {
	try {
		const findOneQuery = { timestamp_utc: '2023-01-24 09:08:18.436854 UTC' };
		//let id = ''
		const store = await getStatus(findOneQuery);

		if (store === null) {
			res.status(404).json({ error: 'store not found' });
		} else {
			return store;
		}
		console.log(store);
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: error.message });
	}
}

module.exports = {
	getStatusController,
};
