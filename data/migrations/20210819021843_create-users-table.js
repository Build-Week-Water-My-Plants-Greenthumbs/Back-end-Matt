exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments('userId')
        users.string('username', 255).notNullable().unique()
        users.string('password', 255).notNullable()
        users.string('phone', 64).unique()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
}