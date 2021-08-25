const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const authRouter = require('./auth/auth-router')
const plantsRouter = require('./plants/plants-router')
const usersRouter = require('./users/users-router')

const dbEnv = process.env.NODE_ENV

const server = express()

server.use(cors())
server.use(helmet())
server.use(morgan('combined'))
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/plants', plantsRouter)
server.use('/api/users', usersRouter)

server.use((err, req, res, next) => { // eslint-disable-line

    if (dbEnv === "production") {
        res.status(err.status || 500).json({
            message: err.message
        })
    } else {
        res.status(err.status || 500).json({
            message: err.message,
            stack: err.stack,
            err
        });
    };
})
module.exports = server