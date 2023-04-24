async function getStoreController() {
	try {
		const id = req.params.store_id;
		const store = await getStore(id);
		return store;
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: error.message });
	}
}
