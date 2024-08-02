const server = require('./app');

const port = process.env.PORT || 4040;
server.listen(port, () => {
	console.log(`Listening at http://localhost:${port}.`);
});
