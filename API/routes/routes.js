const { Router } = require('express');
const express = require('express');
const {
	getStoreByIdtimezoneController,
} = require('../controllers/timezoneController');
const {
	getStoreByIdController,
	getSchema,
} = require('../controllers/storeActiveController');

const router = express.Router();
// router.get('/test', getStoreByIdController);
router.get('/timezone', getStoreByIdtimezoneController);
// async function finalinfo(req, res) {
// 	try {
// 		const storeResult = await getStoreByIdController(req, res);
// 		const timezoneResult = await getStoreByIdtimezoneController(req, res);
// 		const output = {
// 			store: storeResult,
// 			timezone: timezoneResult,
// 		};
// 		return output;
// 	} catch (error) {
// 		console.log(error);

// 		res.status(401).json({ error: error.message });
// 	}
// }

router.get('/trigger_report', async (req, res) => {
	// Query the database to fetch the necessary data
	// Generate the report using the logic specified in the problem statement
	// Return a unique report ID to the client
});
router.get('/get_report', async (req, res) => {
	const reportId = req.query.report_id;
	// Check the status of the report generation based on the report ID
	// If the report generation is complete, return the CSV file
	// If the report generation is not complete, return "Running" as the output.
});

router.get('/test', getSchema);
// router.get('/test', getmStatusContbroller);

module.exports = router;
