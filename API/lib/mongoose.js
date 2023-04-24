// require('dotenv').config();
// const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');

// mongoose.connection.once('open', () => {
// 	console.log('Mongoose connection started....');
// });

// mongoose.connection.on('error', (e) => {
// 	console.log('Mongoose connection failed......' + e);
// });
// async function startMongoose() {
// 	await mongoose.connect(
// 		'mongodb+srv://juwon:tremothegoat@Cluster0.mongodb.net/restaurants?retryWrites=true&w=majority'
// 	);
// }
// Connection URL for cluster 1
// const url1 =
// 	'mongodb+srv://juwon:tremothegoat@menu.mongodb.net/restaurants?retryWrites=true&w=majority';
// const url3 =
// 	'mongodb+srv://juwon:tremothegoat@store.mongodb.net/restaurants?retryWrites=true&w=majority';
// // Connection URL for cluster 2
// const url2 =
// 	'mongodb+srv://juwon:tremothegoat@bq-results.mongodb.net/restaurants?retryWrites=true&w=majority';

// // MongoClient options
// const options = {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// };

// // Create a MongoClient instance for cluster 1
// const client1 = new MongoClient(url1, options);

// // Create a MongoClient instance for cluster 2
// const client2 = new MongoClient(url2, options);
// const client3 = new MongoClient(url3, options);

// // Connect to both clusters
// async function startMongoose() {
// 	await Promise.all([client1.connect(), client2.connect(), client3.connect()]);

// 	console.log('Connected to both clusters');
// }

// module.exports = { startMongoose, mongoose };
const { MongoClient } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
	'mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority';

const client = new MongoClient(uri);

async function startMongoose() {
	try {
		await client.connect();

		const database = client.db('restaurants');
		const movies = database.collection('store');

		// Query for a movie that has the title 'Back to the Future'
		// const query = { title: 'Back to the Future' };
		// const movie = await movies.findOne(query);

		// console.log(movie);
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
module.exports = { startMongoose };
