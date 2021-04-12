const express = require('express');

const server = express();

server.use(express.json());

const AccountRouter = require('./accounts/accounts-router');

server.use('/api/accounts', AccountRouter);

server.get('/', (_req, res) => {
	res.json('API running...');
});

module.exports = server;
