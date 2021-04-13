const express = require('express');

const server = express();

server.use(express.json());

const accountsRouter = require('./accounts/accounts-router');

server.use('/api/accounts', accountsRouter);

server.get('/', (_req, res) => {
	res.json('API running...');
});

module.exports = server;
