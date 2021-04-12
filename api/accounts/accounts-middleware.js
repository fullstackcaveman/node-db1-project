const Account = require('./accounts-model');
const db = require('../../data/db-config');

const checkAccountPayload = (req, res, next) => {
	const { name, budget } = req.body;
	if (name && budget) {
		next();
	} else {
		res.status(400).json({ message: 'name and budget are required' });
	}
};

const checkAccountNameUnique = (req, res, next) => {
	const { name } = req.body;

	const data = db('accounts').select('name').exists(name);

	if (data) {
		res.status(400).json({ message: 'that name is taken' });
	} else {
		next();
	}
};

const checkAccountId = async (req, res, next) => {
	try {
		const account = await Account.getById(req.params.id);
		if (account) {
			req.account = account;
			next();
		} else {
			res.status(404).json({ message: 'account not found' });
		}
	} catch (err) {
		next(err);
	}
};

module.exports = {
	checkAccountId,
	checkAccountPayload,
	checkAccountNameUnique,
};
