async function getStoreController() {
	try {
		const id = req.params.store_id;
		const response = await getStore(id);
		return response;
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: error.message });
	}
}
