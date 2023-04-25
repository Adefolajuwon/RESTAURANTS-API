const https = require('https');
const app = require('./index');

const { startMongoose } = require('./lib/mongoose');

const PORT = process.env.PORT || 8000;
const server = https.createServer(app);

(async function () {
	server.listen(PORT, () => {
		console.log(`Server started on PORT ${PORT}....`);
	});
	await startMongoose();
})();
