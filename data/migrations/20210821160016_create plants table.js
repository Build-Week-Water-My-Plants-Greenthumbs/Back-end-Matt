exports.up = function(knex) {
    return knex.schema
        .createTable('plants', tbl => {
            tbl.increments('plantId')
            tbl.string('name', 128).notNullable().unique().index()
            tbl.string('species', 256).notNullable()
            tbl.string('nickname', 256).notNullable()
            tbl.string('frequency', 256).notNullable()
            tbl.string('image', 256)
            tbl.string('light', 128)
            tbl.timestamp('lastWatered').defaultTo(knex.fn.now())
            tbl.string('description', 2048)
        })
}

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('plants')
}