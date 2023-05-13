const { getStatus, getStoreById } = require('../models/getActive');

async function getStatusController(req, res) {
	try {
		// timestamp_utc: '2023-01-24 09:08:18.436854 UTC'
		const findOneQuery = { status: 'active' };
		const store = await getStatus(findOneQuery);
		if (store === null) {
			res.status(404).json({ error: 'store not found' });
		} else {
			res.status(200).json({ status: store });
		}
		console.log(store);
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: error.message });
	}
}
async function getStoreByIdController(req, res) {
	try {
		//const findOneQuery = {};
		const id = req.body.id;
		const store = await getStoreById(id);
		if (store === null) {
			res.status(404).json({ error: 'store not found' });
		} else {
			res.status(200).json({ status: store });
		}
		console.log(store);
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: error.message });
	}
}
// async function getInfo() {}
5955337179846162000;
module.exports = {
	getStatusController,
	getStoreByIdController,
};
