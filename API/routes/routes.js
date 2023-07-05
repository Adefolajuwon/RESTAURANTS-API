const { Router } = require('express');
const express = require('express');
const {
	createReport,
	reportOutput,
} = require('../controllers/report.controller');

const router = express.Router();

router.post('/trigger_report', createReport);
router.get('/get_report', reportOutput);
// router.get('/get_report', async (req, res) => {
// 	const reportId = req.query.report_id;
// 	// Check the status of the report generation based on the report ID
// 	// If the report generation is complete, return the CSV file
// 	// If the report generation is not complete, return "Running" as the output.
// });

module.exports = router;
