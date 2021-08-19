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
        }
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
        }
    },

    production: {
        client: "pg",
        connection: {
            database: process.env.DATABASE_URL,
            // ssl: { rejectUnauthorized: false }
        },
        migrations: {
            directory: "./data/migrations"
        },
        seeds: {
            directory: "./data/seeds"
        },
        useNullAsDefault: true,
        debug: true
    }

};