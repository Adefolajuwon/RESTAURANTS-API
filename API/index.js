const express = require('express');
const app = express();
const routes = require('./routes/routes');
// const routes = require('./routes/routes.js');
// app.use(express.json());
// app.use((req, res, next) => {
// 	console.log(req.body); // log the request body
// 	next();
// });
// ffffffffffffffffffffffoo
// gggg
// sd??/?
// cat
// rat
app.use('/api', routes);

module.exports = app;
