const getStore = require('../models/getStore');
async function getStoreController(req, res) {
	try {
		//const findOneQuery = { status: 'active' };

		const store = await getStore();
		if (!store) {
			res.status(404).json({ error: 'user not found' });
			return;
		}
		return store;
		console.log(store);
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: error.message });
	}
}
module.exports = getStoreController;
