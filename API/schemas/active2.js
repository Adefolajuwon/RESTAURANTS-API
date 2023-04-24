// const mongoose = require('mongoose');

// mongoose.connect(
// 	'mongodb+srv://juwon:tremothegoat@cluster0.lary7db.mongodb.net/?retryWrites=true&w=majority',
// 	{
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	}
// );

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
// 	// Connection successful, specify the database and collection
// 	const mySchema = new mongoose.Schema(
// 		{
// 			// specify your schema fields here
// 			store_id: String,
// 			dayOfWeek: Number,
// 			start_time_local: Date,
// 			end_time_local: Date,
// 		},
// 		{ collection: 'store' }
// 	);
// 	module.exports = mongoose.model('storeActive2', mySchema);
// });
