const getStore = require('../models/getStore');
async function getStoreController(req, res) {
	try {
		const id = req.params.id;
		const store = await getStore(id);
		if (!id) {
			res.status(404).jspn({ error: 'user nt found' });
			return;
		}
		return store;
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: error.message });
	}
}
module.exports = getStoreController;
