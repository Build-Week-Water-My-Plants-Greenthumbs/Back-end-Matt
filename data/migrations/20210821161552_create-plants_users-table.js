exports.up = function(knex) {
    return knex.schema.createTable('plants_users', pu => {
        pu.increments()
        pu.integer('userId')
            .unsigned()
            .references('users.userId')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        pu.integer('plantId')
            .unsigned()
            .references('plants.plantId')
            .onUpdate('CASCADE')
    });
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('plants_users')
};