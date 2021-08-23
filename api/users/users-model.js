const db = require('../../data/dbConfig')

function findBy(filter) {
    return db('users as u')
        .select('u.userId', 'u.username', 'u.password', 'u.phone')
        .where(filter)
}

async function add(user) {
    const [newUserId] = await db('users').insert(user, ['username', 'password', 'phone']);
    console.log('newUserId: ', newUserId);
    return await findById(parseInt(newUserId))
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