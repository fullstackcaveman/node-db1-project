const router = require('express').Router();
const Accounts = require('./accounts-model');
const {
	checkAccountId,
	checkAccountPayload,
	checkAccountNameUnique,
} = require('./accounts-middleware.js');

router.get('/', async (req, res, next) => {
	try {
		const data = await Accounts.getAll();
		res.json(data);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', checkAccountId, (req, res, next) => {
	res.json(req.account);
});

router.post('/', (req, res, next) => {
	// DO YOUR MAGIC
});

router.put('/:id', (req, res, next) => {
	// DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
	// DO YOUR MAGIC
});

router.use((err, req, res, next) => {
	// eslint-disable-line
	// DO YOUR MAGIC
});

module.exports = router;
