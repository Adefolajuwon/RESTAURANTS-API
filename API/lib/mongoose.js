require('dotenv').config();
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

mongoose.connection.once('open', () => {
	console.log('Mongoose connection started....');
});

mongoose.connection.on('error', (e) => {
	console.log('Mongoose connection failed......' + e);
});
async function startMongoose() {
	await mongoose.connect(
		'mongodb+srv://juwon:tremothegoat@cluster0.lary7db.mongodb.net/?retryWrites=true&w=majority'
	);
}
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

module.exports = { startMongoose, mongoose };
