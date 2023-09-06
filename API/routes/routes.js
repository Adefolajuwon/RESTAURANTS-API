const { Router } = require('express');
const express = require('express');
const {
	createReport,
	reportOutput,
} = require('../controllers/report.controller');
const { getStatusController } = require('../controllers/storeActiveController');
const router = express.Router();

router.post('/trigger_report', createReport);
router.get('/test', getStatusController);
router.get('/get_report/:id', reportOutput);
// router.get('/get_report', async (req, res) => {
// 	const reportId = req.query.report_id;
// 	// If the report generation is complete, return the CSV file
// 	// If the report generation is not complete, return "Running" as the output.
// });

module.exports = router;
