const db = require('../../data/dbConfig')

function findBy(filter) {
    return db('users')
        .select('userId', 'username', 'password', 'phone')
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

async function update(id, user) {
    await db('users').where('userId', id).update(user)
    return await findById(id)
}

module.exports = {
    findBy,
    add,
    findById,
    update
}