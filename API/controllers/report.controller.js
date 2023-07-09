const Report = require('../schemas/reportId');
const { getStatus, getStoreById } = require('../models/getActive');
const { getStorebyIdtimezone } = require('../models/timeZone');
const { getStorebyIdbusinesshour } = require('../models/businessHour');

function generateRandomString() {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for (let i = 0; i < 8; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}
async function createReport(req, res) {
	const reportId = generateRandomString();
	// console.log(reportId);
	try {
		// Assuming you have imported and properly initialized the `Report` object
		const result = await Report.create({ reportId });
		return res.status(200).json({ result });
	} catch (error) {
		res.json(error);
		console.log(error);
	}
}
async function reportOutput(req, res) {
	const reportId = req.params.id;
	const ID = await Report.findOne({ reportId });
	if (ID) {
		try {
			const findOneQuery = { store_id: '5955337179846162432' };
			const store = await getStoreById(findOneQuery);
			if (!store) {
				res.status(404).json({ error: 'store 1 not found' });
				return; // Return early to prevent further execution
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
	} else {
		res.status(404).json({ error: 'Id not found' });
	}
}
async function output(req, res) {}
module.exports = { createReport, reportOutput };
