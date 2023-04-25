// const run = require('./lib/mongoose');
// // const index = require('./index');
// const http = require('http');
// const app = require('./index');
// const PORT = process.env.PORT || 8080;
// const server = http.createServer(app);

// (async function () {
// 	server.listen(PORT, () => {
// 		console.log(`Server started on PORT ${PORT}...`);
// 	});
// 	await run();
// })();
const http = require('http');
const app = require('./index');
const { MongoClient } = require('mongodb');

const PORT = process.env.PORT || 8080;
const MONGODB_URI =
	'mongodb+srv://juwon:tremothegoat@cluster0.lary7db.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'restaurants';
const COLLECTION_NAME = 'menu';
const COLLECTION_NAME2 = 'store';
const COLLECTION_NAME3 = 'bq-results';
const { run } = require('./lib/mongoose');
async function startServer() {
	// Connect to MongoDB
	const client = new MongoClient(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	await client.connect();
	const database = client.db(DB_NAME);
	const collection = database.collection(COLLECTION_NAME);
	const collection2 = database.collection(COLLECTION_NAME2);
	const collection3 = database.collection(COLLECTION_NAME3);

	// Set up HTTP server
	const server = http.createServer(app);
	// await run(); // Connect to MongoDB client
	// server.listen(PORT, () => {
	// 	console.log(`Server started on PORT ${PORT}...`);
	// });
	(async function () {
		server.listen(PORT, () => {
			console.log(`Server started on PORT ${PORT}...`);
		});
		await run(); // Connect to MongoDB client
	})();
}

startServer().catch(console.error);
