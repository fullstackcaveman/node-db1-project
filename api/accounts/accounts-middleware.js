const Account = require('./accounts-model');

const checkAccountPayload = (req, res, next) => {
	const { name, budget } = req.body;
	if (name && budget) {
		next();
	} else {
		res.status(400).json({ message: 'Name and budget required' });
	}
};

const checkAccountNameUnique = (req, res, next) => {
	// DO YOUR MAGIC
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
