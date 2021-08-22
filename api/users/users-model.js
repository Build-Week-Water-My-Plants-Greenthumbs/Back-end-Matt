const db = require('../../data/dbConfig')

function findBy(filter) {
    return db('users as u')
        .select('u.userId', 'u.username', 'u.password', 'u.phone')
        .where(filter);
}

async function add(user) {
    const [userId] = await db('users').insert(user);
    return await findById(userId);
}

function findById(id) {
    return db('users as u')
        .select('u.userId', 'u.username', 'u.password', 'u.phone')
        .where('u.userId', id)
        .first();
}

module.exports = {
    findBy,
    add,
    findById
}