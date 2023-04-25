require('dotenv').config();
const mongoose = require('mongoose');

// async function startMongoose() {
// 	await mongoose.connect('');
// }
// module.exports = { startMongoose, mongoose };

const { MongoClient, ServerApiVersion } = require('mongodb');

async function run() {
	// TODO:
	// Replace the placeholder connection string below with your
	// Altas cluster specifics. Be sure it includes
	// a valid username and password! Note that in a production environment,
	const uri =
		'mongodb+srv://juwon:tremothegoat@cluster0.lary7db.mongodb.net/?retryWrites=true&w=majority';

	// The MongoClient is the object that references the connection to our
	// datastore (Atlas, for example)
	const client = new MongoClient(uri);

	// The connect() method does not attempt a connection; instead it instructs
	// the driver to connect using the settings provided when a connection
	// is required.
	await client.connect();

	// Provide the name of the database and collection you want to use.
	// If the database and/or collection do not exist, the driver and Atlas
	// will create them automatically when you first write data.
	const dbName = 'restaurants';
	const collectionName1 = 'store';
	const collectionName2 = 'menu';
	const collectionName3 = 'bq-results';

	// Create references to the database and collection in order to run
	// operations on them.
	const database = client.db(dbName);
	const collection = database.collection(collectionName1);
	const collection2 = database.collection(collectionName2);
	const collection3 = database.collection(collectionName3);

	await client.close();
	console.log('connected to mongodb ');
}
run().catch(console.dir);

module.exports = { run, collection2, collection3 };
