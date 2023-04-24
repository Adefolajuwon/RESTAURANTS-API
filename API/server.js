const { run } = require('./lib/mongoose');
// const index = require('./index');
const http = require('http');
const app = require('./index');
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

(async function () {
	server.listen(PORT, () => {
		console.log(`Server started on PORT ${PORT}...`);
	});
	await run();
})();
