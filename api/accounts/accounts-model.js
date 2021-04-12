const db = require('../../data/db-config');

const getAll = () => {
	return db('accounts');
};

const getById = (id) => {
	return db('accounts').where('id', id).first();
};

const create = async (accounts) => {
	const trimmedName = accounts.name.trim();
	const budget = accounts.budget;
	const [id] = await db('accounts').insert({
		name: trimmedName,
		budget: budget,
	});
	return getById(id);
};

const updateById = async (id, { name, budget }) => {
	await db('accounts').where({ id }).update({ name, budget });
	return getById(id);
};

const deleteById = async (id) => {
	const deletedAccount = await getById(id);
	await db('accounts').where({ id }).delete();
	return deletedAccount;
};

module.exports = {
	getAll,
	getById,
	create,
	updateById,
	deleteById,
};
