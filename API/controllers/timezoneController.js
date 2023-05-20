const { getStorebyIdtimezone } = require('../models/timeZone');
async function getStoreByIdtimezoneController(req, res) {
	try {
		const findOneQuery = { store_id: '5415949628544298000' };
		//const id = req.body.idii;
		const store = await getStorebyIdtimezone(findOneQuery);
		if (!store) {
			res.status(404).json({ error: 'store not found' });
		} else {
			res.status(200).json({ status: store });
		}

		// console.log(store);
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: error.message });
	}
}
module.exports = {
	getStoreByIdtimezoneController,
};
