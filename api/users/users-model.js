const db = require('../../data/dbConfig')

async function findBy(filter) {
    return await db('users as u')
        .select('u.userId', 'u.username', 'u.password', 'u.phone')
        .where(filter);
}

async function add(user) {
    const [userId] = await db('users').insert(user);
    return await findById(userId);
}

async function findById(id) {
    return await db('users as u')
        .select('u.userId', 'u.username', 'u.password', 'u.phone')
        .where('u.userId', id)
        .first();
}

module.exports = {
    findBy,
    add,
    findById
}