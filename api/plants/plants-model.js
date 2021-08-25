const db = require('../../data/dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update
}

function find() {
    return db('plants')
}

function findBy(filter) {
    return db('plants')
        .where(filter)
}

async function add(plant) {
    const [id] = await db('plants').insert(plant, 'plantId')
    return db('plants').where('plantId', id).first()
}

function findById(id) {
    return db('plants')
        .where('plants.plantId', id)
        .first()
}

async function remove(id) {
    const deleted = await findById(id)
    await db('plants').del().where('plants.plantId', id)
    return deleted
}

async function update(id, changes) {
    await db('plants').where('plantId', id).update(changes)
    return await findById(id)
}