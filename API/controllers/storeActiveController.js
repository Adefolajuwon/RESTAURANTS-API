const { getStatus, getStoreById } = require('../models/getActive');
const { getStorebyIdtimezone } = require('../models/timeZone');

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
// async function getStoreByIdController(req, res) {
// 	try {
// 		const findOneQuery = { store_id: '5955337179846162432' };
// 		//const id = req.body.id;
// 		const store = await getStoreById(findOneQuery);
// 		if (!store) {
// 			res.status(404).json({ error: 'store 1 not found' });
// 		} else {
// 			res.status(200).json({ status: store });
// 		}
// 		const findOneQuery2 = { store_id: '5415949628544298000' };
// 		const store2 = await getStorebyIdtimezone(findOneQuery2);
// 		if (!store2) {
// 			res.status(404).json({ error: 'store 2 not found' });
// 		} else {
// 			res.status(200).json({ status: store });
// 		}

// 		const output = {
// 			Store1: store,
// 			Store2: store2,
// 		};
// 		return output;
// 		console.log(output);
// 		// if (store && store2 === null) {
// 		// 	res.status(404).json({ error: 'Both store not found })
// 		// 	}
// 	} catch (error) {
// 		console.log(error);
// 		res.status(401).json({ error: error.message });
// 	}
//}
async function getStoreByIdController(req, res) {
	try {
		const findOneQuery = { store_id: '5955337179846162432' };
		const store = await getStoreById(findOneQuery);
		if (!store) {
			res.status(404).json({ error: 'store 1 not found' });
			return; // Return early to prevent further execution
		}

		const findOneQuery2 = { store_id: '5415949628544298000' };
		const store2 = await getStorebyIdtimezone(findOneQuery2);
		if (!store2) {
			res.status(404).json({ error: 'store 2 not found' });
			return; // Return early to prevent further execution
		}

		const output = {
			Store1: store,
			Store2: store2,
		};
		res.status(200).json(output); // Send the output as JSON response
		console.log(output);
	} catch (error) {
		console.log(error);
		res.status(401).json({ error: error.message });
	}
}

// async function getInfo() {}
module.exports = {
	getStatusController,
	getStoreByIdController,
};
