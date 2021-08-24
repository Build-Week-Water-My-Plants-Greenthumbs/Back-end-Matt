const db = require('../../data/dbConfig')

function findBy(filter) {
    return db('users as u')
        .select('u.userId', 'u.username', 'u.password', 'u.phone')
        .where(filter)
}

async function add(user) {
    const [id] = await db('users').insert(user, 'userId');
    return db('users').where('userId', id).first();
}

function findById(id) {
    return db('users')
        .select('userId', 'username', 'password', 'phone')
        .where('userId', id)
        .first()
}

module.exports = {
    findBy,
    add,
    findById
}