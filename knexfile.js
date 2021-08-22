// Update with your config settings.

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/dev.db3'
        },
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: 'data/seeds'
        },
        useNullAsDefault: true
    },

    testing: {
        client: 'sqlite3',
        connection: {
            filename: './data/dev.db3'
        },
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: 'data/seeds'
        },
        useNullAsDefault: true
    },

    production: {
        client: "pg",
        connection: {
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false },
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./data/migrations",
        },
        seeds: {
            directory: "./data/seeds",
        },
        useNullAsDefault: true
    },

}