const router = require('express').Router();
const Accounts = require('./accounts-model');
const {
	checkAccountId,
	checkAccountPayload,
	checkAccountNameUnique,
} = require('./accounts-middleware');

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

router.post('/', checkAccountPayload, async (req, res, next) => {
	try {
		const newAccount = await Accounts.create(req.body);
		res.status(201).json(newAccount);
	} catch (err) {
		next(err);
	}
});

router.put(
	'/:id',
	checkAccountPayload,
	checkAccountId,
	async (req, res, next) => {
		try {
			const updatedAccount = await Accounts.updateById(req.params.id, req.body);
			res.json(updatedAccount);
		} catch (err) {
			next(err);
		}
	}
);

router.delete('/:id', checkAccountId, async (req, res, next) => {
	try {
		const deletedAccount = await Accounts.deleteById(req.params.id);
		res.json(deletedAccount);
	} catch (err) {
		next(err);
	}
});

router.use((err, req, res, next) => {
	res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = router;
