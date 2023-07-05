const Report = require('../schemas/reportId');
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
		return res.status(200).json({ reportId });
	} catch (error) {
		res.json(error);
		console.log(error);
	}
}

module.exports = { createReport };
