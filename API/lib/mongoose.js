require('dotenv').config();
const mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient;

async function run() {
	const uri =
		'mongodb+srv://juwon:tremothegoat@cluster0.lary7db.mongodb.net/?retryWrites=true&w=majority';

	const client = new MongoClient(uri);

	await client.connect();

	const dbName = 'restaurants';
	const collectionName1 = 'store';
	const collectionName2 = 'menu';
	const collectionName3 = 'bq-results';

	const database = client.db(dbName);
	const collection = database.collection(collectionName1);
	const collection2 = database.collection(collectionName2);
	const collection3 = database.collection(collectionName3);

	await client.close();

	console.log('connected to mongodb');

	// Export an object containing both the run function and the collection2 variable
	return {
		run: run,
		collection: collection,
		collection2: collection2,
		collection3: collection3,
	};
}
run().catch(console.dir);
module.exports = { run };
